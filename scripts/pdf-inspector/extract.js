#!/usr/bin/env node
/**
 * pdf-inspector CLI：极速 PDF 解析（表格/标题/格式保留），输出 Markdown JSON。
 * 用法: node extract.js <pdf绝对路径>
 * 输出: {"ok":true,"markdown":"...","pdfType":"text_based"}
 */
const { processPdf } = require('@firecrawl/pdf-inspector');
const { readFileSync } = require('fs');

const pdfPath = process.argv[2];
if (!pdfPath) {
  process.stdout.write(JSON.stringify({ ok: false, error: 'usage: node extract.js <pdf-path>' }));
  process.exit(1);
}

try {
  const pdf = readFileSync(pdfPath);
  const r = processPdf(pdf);
  process.stdout.write(JSON.stringify({ ok: true, markdown: r.markdown || '', pdfType: r.pdfType }));
} catch (e) {
  process.stdout.write(JSON.stringify({ ok: false, error: (e && e.message) || String(e) }));
  process.exit(1);
}
