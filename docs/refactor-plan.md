# AI-P2P 重构方案：Workflow-first 架构（Agent 仅用于开放对话层）

> 目标：支持**单个 pin2pin 分析**、**基于历史的多 pin2pin 对比**、**历史对比记录可调用**、**基于历史的对比库沉淀**。
>
> 设计原则（Claude 软件设计原则）：**用最简单的可行方案；确定性逻辑不进 LLM；Agent 按需启用而非默认。**

---

## 1. 现状诊断（AS-IS）

| 维度 | 现状 | 问题 |
|------|------|------|
| LLM 集成 | `ChipAnalyzeService` 内硬编码 3 个供应商，直接 `HttpClient` 调 `/chat/completions` | 密钥硬编码；无供应商抽象；无受控调用 |
| 分析流程 | 上传 PDF → 全文抽取 → **一次性把 5 万字符塞进 prompt** → 一次生成 Markdown | 上下文全量堆砌；结果是非结构化免费 Markdown |
| 数据模型 | `chip_compare_record` 只有 first/second 字段 + `result` MEDIUMTEXT | **只能两两对比**；结果无法检索/复用 |
| 历史记录 | 有 list/detail 接口，前端表格展示 + 下载 | 只读展示，**不能被调用/复用**进新分析 |
| 对比库 | `pin2pin` 静态表 | 没有从历史分析**自动沉淀**的知识库 |
| 会话 | `session`/`message` 只存聊天 | 不存结构化分析过程，无法追溯 |

**核心矛盾**：产品要"工程决策辅助"（结构化、可复用、可验证），现有实现是"一次性文本生成"。

---

## 2. 第一性原理：这个任务需要 Agent 吗？

### 2.1 判断框架（Anthropic: Building Effective Agents）

| 问题 | 含义 |
|------|------|
| ① 执行路径可预先枚举？ | 可枚举 → **Workflow**；不可 → **Agent** |
| ② 决策可由确定性规则完成？ | 能 → 代码；不能 → 受控 LLM 单步 |
| ③ 需要多轮自主探索/反馈？ | 不需要 → 单轮流程；需要 → Agent |

### 2.2 逐场景检验

| 场景 | ①可枚举 | ②可确定 | ③需多轮 | 需要 Agent |
|------|:---:|:---:|:---:|:---:|
| 单个 pin2pin 对比 | ✅ | ✅ | ❌ | **否** |
| 多个 pin2pin 对比 | ✅ | ✅(检索可确定) | ❌ | **否** |
| 调用历史记录 | ✅ | ✅ | ❌ | **否** |
| datasheet 结构化抽取 | ✅ | ⚠️(规则+受控单步) | ❌ | **否** |
| 报告叙述生成 | ✅ | ⚠️(LLM 单轮) | ❌ | **否** |
| **开放式对话/多轮迭代** | ❌ | ❌ | ✅ | **是（唯一）** |

### 2.3 结论

**芯片 pin2pin 对比是确定性决策流程，不是开放性探索任务。** 核心分析不需要 Agent：
- 引脚/参数/封装对比是**查表和数值逻辑** → 纯代码（ComparisonEngine）
- datasheet 抽取、叙述生成是**受控单步 LLM** → structured output / function calling
- 多对比、历史调用是**固定流程** → Workflow 编排

**唯一需要 Agent 自主性的地方**：用户以开放自然语言对话的方式提出需求、并进行多轮迭代时，编排层需要理解意图并动态调度。即便如此，这也是**可配置的模式开关**，不是默认架构。

> 强行 Agent 化的代价：慢、贵（token 不可预测）、不可测（决策路径无法穷举）、计费不可控 —— 对计费型 SaaS 是明显的负优化。

---

## 3. 目标架构（Workflow-first）

```
┌──────────────────────────────────────────────────────────────────┐
│  Frontend                                                         │
│  对比工作台：源芯片 → 候选推荐 → 确认 → 流式执行 → 结构化报告      │
│  对话页：自然语言"调用之前的对比记录" / 开放式提问                 │
└───────────────┬──────────────────────────────────────────────────┘
                │ SSE 事件流 (step/result/chunk/complete/error)
┌───────────────▼──────────────────────────────────────────────────┐
│  编排层 (Workflow Orchestrator)                                   │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │ L2 意图路由（仅开放对话启用，可降级为固定表单）             │  │
│  │   解析意图 → 映射到确定性流程                               │  │
│  │   可选 Agent 模式：多轮自主迭代时启用                       │  │
│  ├────────────────────────────────────────────────────────────┤  │
│  │ Workflow: SingleCompareFlow / MultiCompareFlow /            │  │
│  │           RecallFlow / IngestFlow   （代码定义步骤，无自主） │  │
│  └────────────────────────────────────────────────────────────┘  │
└───────────────┬──────────────────────────────────────────────────┘
                │ 领域服务调用（Java 或 TS 均可）
┌───────────────▼──────────────────────────────────────────────────┐
│  领域层                                                          │
│  L0 ComparisonEngine（确定性规则，纯代码，可单测）               │
│     - 引脚映射匹配   - 电气参数风险判定   - 封装/电压兼容        │
│  L1 受控 LLM 步骤（structured output，单轮，无自主循环）        │
│     - datasheet → chip_spec JSON（规则 + LLM 规范化）           │
│     - 报告叙述生成（schema → Markdown/PDF/Excel 渲染）          │
│  HistoryLibraryService（对比库：写入/精确检索/语义检索）         │
└───────────────┬──────────────────────────────────────────────────┘
                │
┌───────────────▼──────────────────────────────────────────────────┐
│  平台层 (Spring Boot 保留)                                       │
│  Auth / 计费 / 上传 / 权限 / 管理后台 / 会话持久化               │
└───────────────┬──────────────────────────────────────────────────┘
                │
┌───────────────▼──────────────────────────────────────────────────┐
│  数据层: MySQL (chip/datasheet/comparison/comparison_library/...) │
│          + 可选向量索引（历史片段语义检索）                        │
└──────────────────────────────────────────────────────────────────┘
```

**架构决策说明**：
- **执行引擎（L0）与 LLM 分离**：所有可确定性判断的逻辑 100% 进代码。LLM 只做它必须做的两件事：非结构化→结构化抽取、自然语言叙述。
- **Workflow 显式定义**：每个流程是一段可测试的步骤编排（状态机），步骤包含 `(domainOp, llmStep?, onFail)`，不依赖 LLM 自主决策。
- **Agent 模式按需启用**：仅开放对话入口启用轻量意图路由；真正的多轮自主迭代作为配置开关，默认关。
- 实现可全部留在 Spring Boot（`anthropic-java` 受控调用 + Java 编排），**不必引入 Node/Agent SDK 运行时** —— 这是"最简单可行方案"。

---

## 4. 核心领域模型

```
datasheet(id, chip_id, file_path, parse_status[PENDING/PARSED/FAILED],
          extracted_spec_json MEDIUMTEXT, raw_text_ref, uploader_id)

chip_spec（并入 chip.parameter 或独立表）
  chip_id, manufacturer, part_number, package, pin_count,
  pin_map_json[{pin_no, name, function}],
  electrical_params_json[{param, min, typ, max, unit, condition}],
  func_blocks_json[], applications_json[], tags[]

comparison(id, user_id, session_id, mode[SINGLE/MULTI], source_chip_id, source_part_number,
           status[PROPOSED/RUNNING/SUCCESS/FAILED], verdict, risk_level,
           result_json MEDIUMTEXT, tokens_input, tokens_output, cost, duration)

comparison_candidate(comparison_id, candidate_chip_id, part_number, supplier,
                     verdict[SAFE/RISK/INCOMPATIBLE], risk_level, param_delta_json, summary)

comparison_library(id, pair_key("A→B"), source_part, candidate_part,
                   verdict, risk_level, summary, params_compared_json, tags,
                   source_comparison_id, confidence, usage_count)
  -- 每次成功对比自动沉淀；dedup by pair_key

session / message（扩展）：message.data 承载结构化分析事件，支持追溯
```

---

## 5. 能力模块设计（替代"工具集"）

每个模块 = 确定性操作或受控 LLM 步骤，**由 Workflow 编排，不自主调度**：

| 模块 | 类型 | 输入 → 输出 |
|------|------|-------------|
| `specExtractor` | L1 受控 | datasheet(文件) → `chip_spec` JSON（规则模板 + LLM 规范化 + 置信度） |
| `specResolver` | L0 | part_number / chip_id → 结构化 spec（库内优先，缺则提示上传） |
| `comparisonEngine.comparePair` | L0 | spec A + spec B → `PairComparisonResult`（引脚重叠/参数差异/风险/verdict，纯代码） |
| `candidateFinder` | L0 | 源芯片 → 候选（静态 pin2pin 表 + 历史库精确/语义检索，带依据来源） |
| `multiCompareOrchestrator` | Workflow | 源 + 候选集 → N 个 comparePair（并行）→ `MultiComparisonResult` |
| `historyRecorder` | L0 | ComparisonResult → 写 comparison/comparison_candidate + 沉淀 library |
| `historyRecall` | L0 | part_number/自然语言 → 历史片段（精确 + 语义混合，带源引用） |
| `reportRenderer` | L0+L1 | ComparisonResult JSON → Markdown / PDF / Excel（叙述段由 LLM 单轮生成，表格由代码渲染） |
| `intentRouter` | L2 可选 | 自然语言 → {flow, params}（仅对话入口；表单入口跳过） |

**深模块原则**：`comparisonEngine` 封装所有确定性判定规则（引脚映射、参数风险分级、电压/封装兼容），接口窄、内部深，可单测、可穷举。

---

## 6. 上下文工程（受控 LLM 步骤的输入设计）

1. **抽取步骤**（specExtractor）：输入=datasheet 文本分块 + 抽取 schema；输出=`chip_spec` JSON + 置信度。**不进对话上下文**，一次调用，结果持久化。
2. **叙述步骤**（reportRenderer）：输入=`ComparisonResult` JSON（确定性结论）+ 报告模板；输出=叙述段。**LLM 只写文字，不写数据**。
3. **意图路由**（intentRouter，仅对话）：输入=用户消息 + 可用流程清单；输出=`{flow, params}` JSON。
4. 全程使用 **structured output / function calling 单轮约束**，无多轮自主循环。

---

## 7. 历史对比库（记忆系统）

**写入（historyRecorder，确定性）**：每次成功对比 →
1. 存 `comparison` + `comparison_candidate`（结构化）；
2. 提取事实片段写 `comparison_library`（pair 结论、参数差异、风险点、标签），`pair_key` 去重；
3. 片段进向量索引（语义检索），pair_key 进精确索引。

**读取（historyRecall，确定性）**：
- 精确：part_number 精确/模糊 → "这颗芯片以前对比过哪些？结论？"
- 语义：自然语言（"和它差不多的运放"）→ 向量检索 → 片段 + 源 comparison ID
- 对话调用：用户在对话中问"上次 XX 和 YY 对比的结论" → RecallFlow 读取并组织回答

**冷启动**：静态 `pin2pin` 表 + 种子数据；旧 `chip_compare_record` 批量迁移（LLM 二次抽取为结构化，标低置信度）。

---

## 8. 流式事件协议（SSE）

| 事件 | 含义 | 前端表现 |
|------|------|----------|
| `flow.start` | 流程开始（含流程名） | 显示流程进度 |
| `step.start/result` | 每个确定性步骤开始/完成 | 步骤状态点亮（如"解析规格书→检索候选→对比中"） |
| `llm.start/result` | 受控 LLM 步骤开始/完成 | 提示"AI 正在抽取/撰写" |
| `report.chunk` | 报告片段 | 报告区实时渲染 |
| `complete` / `error` | 结束 / 失败 | 最终态 |

Workflow 层把步骤事件推给前端；任务 ID 支持中断/重连。计费按每个 LLM 步骤的 token 汇总。

---

## 9. 分阶段实施计划

| 阶段 | 周期 | 内容 | 验收标准 |
|------|------|------|----------|
| **P0 平台基建** | ~1 周 | LLM 供应商抽象（配置驱动，密钥外置）；SSE 事件协议；Workflow 编排骨架（状态机）；dev 环境 | 一条流程能跑通并回流事件 |
| **P1 单 pin2pin** | ~2 周 | `datasheet` 结构化解析（规则模板 + LLM 规范化）；`specResolver`/`comparisonEngine.comparePair`；`reportRenderer`；替换现有 analyze | 上传 2 份 datasheet → 结构化报告，前端可渲染 |
| **P2 历史对比库** | ~2 周 | `comparison`/`comparison_candidate`/`comparison_library` 表与仓储；`historyRecorder`/`historyRecall`；精确检索 + 向量索引；聊天页"调用历史" | 新对比自动入库；聊天可调出历史结论 |
| **P3 多 pin2pin** | ~2 周 | `candidateFinder`（静态表+历史库）；`multiCompareOrchestrator` 并行；候选确认 HITL；多对比计费（N 次原子成本） | 1 源芯片 → 推荐候选 → 确认 → 并行对比 → 综合报告 |
| **P4 收尾迁移** | ~1 周 | 旧记录迁移；导出增强（PDF/Excel）；限额/权限回归；意图路由（对话入口，可选 Agent 模式开关） | 旧记录可检索入库；全流程回归 |

**总计约 8 周**。P1 与 P2 的建模部分可并行。

---

## 10. 风险与对策

| 风险 | 对策 |
|------|------|
| PDF 结构化抽取质量是最大瓶颈 | 规则抽取（表格/引脚）+ LLM 规范化两步；spec 版本化；置信度字段，低置信度提示确认 |
| 历史库冷启动空 | 静态 pin2pin 表 + 种子数据；旧记录迁移标低置信度；无历史时明确提示"仅按 datasheet 分析" |
| 多对比成本 | HITL 确认候选；按 LLM 步骤计费（确定性步骤 0 成本）；非管理员沿用现有 500 次/30s 限流 |
| 模型不守输出 schema | structured output + 校验重试；失败降级为纯规则结果并标记 |
| 现有系统不能停 | 新旧并行：Workflow 链路 feature flag 路由；旧 `chip_compare_record` 只读兼容 |

---

## 附：与现有代码的对应改造点

| 现有 | 改造为 |
|------|--------|
| `ChipAnalyzeService`（硬编码供应商 + 流式） | `LlmProvider` 抽象 + Workflow 编排器 + SSE 事件转发 |
| `ChipAnalyzeRequest` | 拆为 `SingleCompareRequest` / `MultiCompareRequest` |
| `chip_compare_record` | 迁移/扩为 `comparison` + `comparison_candidate` + `comparison_library` |
| `ChipRestController` | 新增 `/api/flow/compare/start`（SSE）、`/api/flow/compare/abort`、`/api/library/recall` |
| `chip_compare_user.js` | 重写为 Workflow 可视化（步骤状态 + 结构化报告渲染） |
| `pin2pin` 表 | 保留，作为 `candidateFinder` 的静态来源 |
| `session`/`message` | message.data 承载结构化分析事件；支持流程追溯 |
