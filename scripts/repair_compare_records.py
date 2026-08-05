#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AI-P2P 历史对比记录数据修复脚本

修复内容：
1. id 25-30：result 是原始 SSE 流 → 解析提取干净 Markdown；回填 first/second_chip_part_number
2. id 1-2 ：历史遗留 status=1（当时 1=成功）→ 修正为 0 (VALID)
3. id 3-24：火山引擎欠费失败的垃圾记录 → 删除

用法：
    python3 scripts/repair_compare_records.py          # 预览（dry-run，只输出不修改）
    python3 scripts/repair_compare_records.py --apply  # 真正执行修改
"""
import json
import re
import sys
import os

try:
    import pymysql
except ImportError:
    print("缺少 pymysql，安装：pip install pymysql")
    sys.exit(1)

DB = dict(
    host=os.environ.get("DB_HOST", "localhost"),
    port=int(os.environ.get("DB_PORT", "3306")),
    user=os.environ.get("DB_USERNAME", "root"),
    password=os.environ.get("DB_PASSWORD") or os.environ.get("MYSQL_PWD", ""),
    database=os.environ.get("DB_NAME", "chip"),
    charset="utf8mb4",
)


def parse_sse_result(raw: str) -> str:
    """从 SSE 流（可能含字面 \\n 转义）中提取拼接的 content 文本。"""
    if raw.startswith("{"):
        # 非流式 API 完整 JSON 响应 → 提取 choices[0].message.content
        try:
            obj = json.loads(raw)
            return obj["choices"][0]["message"].get("content") or ""
        except Exception:
            return ""
    if not raw.startswith("data:"):
        return raw  # 已是干净 Markdown，原样返回
    # 字面转义 \\n\\n / \\n 转成真实换行，再按行解析
    text = raw.replace("\\\\n\\\\n", "\n").replace("\\\\n", "\n")
    parts = []
    for line in text.split("\n"):
        line = line.strip()
        if line.startswith("data:"):
            try:
                obj = json.loads(line[5:].strip())
                delta = obj.get("choices", [{}])[0].get("delta", {})
                c = delta.get("content") or ""
                if c:
                    parts.append(c)
            except Exception:
                continue
    return "".join(parts)


def extract_part_numbers(file_list: str):
    """从 file_list 字符串（如 ["NXP-TJA1044.pdf", "TI-TCAN1044-Q1.pdf"]）提取型号列表。"""
    if not file_list:
        return []
    names = re.findall(r'"([^"]+\.pdf)"|\[?([\w.\-]+\.pdf)', file_list)
    flat = []
    for a, b in names:
        n = a or b
        if n:
            flat.append(n)
    parts = []
    for name in flat:
        base = name.rsplit(".", 1)[0] if name.lower().endswith(".pdf") else name
        # 去掉常见前缀修饰，保留型号主体
        base = base.replace("datasheet", "").replace("Version", "").strip()
        if base:
            parts.append(base)
    return parts


def main():
    apply = "--apply" in sys.argv
    mode = "APPLY" if apply else "DRY-RUN"
    print(f"== 模式: {mode} ==")

    conn = pymysql.connect(**DB)
    cur = conn.cursor(pymysql.cursors.DictCursor)

    # 1) 非干净格式记录修复（SSE 流 / 完整 API JSON）
    cur.execute(
        "SELECT id, result, file_list FROM chip_compare_record "
        "WHERE status = 0 AND (result LIKE 'data:%' OR result LIKE '{%')"
    )
    sse_rows = cur.fetchall()
    print(f"\n[1] 待修复的 SSE 流记录: {len(sse_rows)} 条")
    for row in sse_rows:
        rid = row["id"]
        clean = parse_sse_result(row["result"] or "")
        parts = extract_part_numbers(row["file_list"] or "")
        first = parts[0] if parts else None
        second = parts[1] if len(parts) > 1 else None
        print(f"    id={rid}: 提取 {len(clean)} 字符, 型号={parts}")
        if apply and clean:
            cur.execute(
                "UPDATE chip_compare_record SET result=%s, first_chip_part_number=%s, "
                "second_chip_part_number=%s WHERE id=%s",
                (clean, first, second, rid),
            )

    # 2) 历史 status=1 → 0
    cur.execute("SELECT id FROM chip_compare_record WHERE status = 1")
    legacy_rows = cur.fetchall()
    print(f"\n[2] 历史遗留 status=1 记录: {len(legacy_rows)} 条 (修正为 0/VALID)")
    if apply:
        for row in legacy_rows:
            cur.execute(
                "UPDATE chip_compare_record SET status=0 WHERE id=%s", (row["id"],)
            )

    # 3) 删除欠费失败记录（status=-1）
    cur.execute("SELECT id FROM chip_compare_record WHERE status = -1")
    fail_rows = cur.fetchall()
    print(f"\n[3] 欠费失败垃圾记录: {len(fail_rows)} 条 (删除)")
    if apply:
        for row in fail_rows:
            cur.execute("DELETE FROM chip_compare_record WHERE id=%s", (row["id"],))

    if apply:
        conn.commit()
        print("\n✅ 已执行并提交")
    else:
        print("\n(dry-run) 未做任何修改，加 --apply 执行")

    # 汇总
    cur.execute("SELECT status, COUNT(*) c FROM chip_compare_record GROUP BY status")
    print("\n== 修复后记录分布 ==")
    for r in cur.fetchall():
        print(f"    status={r['status']}: {r['c']} 条")
    cur.close()
    conn.close()


if __name__ == "__main__":
    main()
