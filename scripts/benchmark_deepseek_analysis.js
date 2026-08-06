#!/usr/bin/env node
/*
 * Direct DeepSeek analysis benchmark.
 *
 * Usage:
 *   DEEPSEEK_API_KEY=... node scripts/benchmark_deepseek_analysis.js files/pdf/ADI-AD7606.pdf files/pdf/Legendsemi-LHA6958D_Datasheet_CN_Rev.E.pdf
 *
 * The script isolates PDF extraction plus OpenAI-compatible streaming latency:
 * - PDF parse time
 * - API response-header time
 * - first reasoning token time
 * - first final content token time
 * - total stream time and output sizes
 */

const { createRequire } = require('module');
const { readFileSync } = require('fs');
const { join } = require('path');
const pdfInspectorRequire = createRequire(join(__dirname, 'pdf-inspector', 'package.json'));
const { processPdf } = pdfInspectorRequire('@firecrawl/pdf-inspector');

const apiKey = process.env.DEEPSEEK_API_KEY;
const model = process.env.DEEPSEEK_MODEL || 'deepseek-v4-flash';
const apiUrl = process.env.DEEPSEEK_API_URL || 'https://api.deepseek.com/v1/chat/completions';
const pdfPaths = process.argv.slice(2);

if (!apiKey) {
  console.error('DEEPSEEK_API_KEY is required.');
  process.exit(1);
}
if (pdfPaths.length < 2) {
  console.error('Provide 2 to 5 PDF paths.');
  process.exit(1);
}
if (pdfPaths.length > 5) {
  console.error('At most 5 PDF paths are supported.');
  process.exit(1);
}

function nowMs() {
  return Number(process.hrtime.bigint() / 1000000n);
}

function baseName(path) {
  return path.split('/').pop().replace(/\.pdf$/i, '');
}

function buildPrompt(documents) {
  const content = documents.map((document, index) => {
    // This reproduces the application payload limit exactly.
    const markdown = document.markdown.slice(0, 50000);
    return `芯片${index + 1}：${document.name}\n====原文内容====\n${markdown}`;
  }).join('\n\n');

  return `你是专业芯片选型分析工程师。请对以下芯片数据表进行 Pin2Pin 替代分析，输出简洁但完整的 Markdown 报告，包含：封装与引脚兼容性、电气参数差异、关键风险和最终替代建议。\n\n${content}`;
}

async function readSse(response, startedAt) {
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let remainder = '';
  let firstReasoningMs = null;
  let firstContentMs = null;
  let reasoningChars = 0;
  let contentChars = 0;
  let chunks = 0;

  function consume(line) {
    const value = line.startsWith('data:') ? line.slice(5).trim() : line.trim();
    if (!value || value === '[DONE]') return;
    let event;
    try {
      event = JSON.parse(value);
    } catch {
      return;
    }
    const delta = event.choices?.[0]?.delta || {};
    const elapsed = nowMs() - startedAt;
    if (delta.reasoning_content) {
      if (firstReasoningMs === null) firstReasoningMs = elapsed;
      reasoningChars += delta.reasoning_content.length;
    }
    if (delta.content) {
      if (firstContentMs === null) firstContentMs = elapsed;
      contentChars += delta.content.length;
    }
    chunks += 1;
  }

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    remainder += decoder.decode(value, { stream: true });
    const lines = remainder.split('\n');
    remainder = lines.pop();
    lines.forEach(consume);
  }
  if (remainder.trim()) consume(remainder);

  return {
    totalMs: nowMs() - startedAt,
    firstReasoningMs,
    firstContentMs,
    reasoningChars,
    contentChars,
    chunks
  };
}

async function benchmark(label, prompt, reasoningEffort) {
  const body = {
    model,
    stream: true,
    temperature: 0.3,
    max_tokens: 8192,
    messages: [
      { role: 'system', content: 'You are an expert chip analysis engineer.' },
      { role: 'user', content: prompt }
    ]
  };
  if (reasoningEffort !== undefined) body.reasoning_effort = reasoningEffort;

  const startedAt = nowMs();
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  const headersMs = nowMs() - startedAt;
  if (!response.ok) throw new Error(`${label}: HTTP ${response.status}: ${await response.text()}`);
  const metrics = await readSse(response, startedAt);
  return { label, headersMs, ...metrics };
}

(async () => {
  const documents = [];
  const parseStartedAt = nowMs();
  for (const pdfPath of pdfPaths) {
    const startedAt = nowMs();
    const result = processPdf(readFileSync(pdfPath));
    documents.push({ name: baseName(pdfPath), markdown: result.markdown || '' });
    console.log(`PDF ${baseName(pdfPath)}: ${nowMs() - startedAt} ms, ${(result.markdown || '').length} chars`);
  }
  const prompt = buildPrompt(documents);
  console.log(`PDF parse total: ${nowMs() - parseStartedAt} ms`);
  console.log(`Prompt chars: ${prompt.length}`);

  const results = [];
  results.push(await benchmark('fast-mode (reasoning_effort=none)', prompt, 'none'));
  if (process.env.BENCHMARK_REASONING === 'true') {
    results.push(await benchmark('reasoning-mode (provider default)', prompt, undefined));
  }

  console.log('\nResults:');
  for (const result of results) {
    console.log(JSON.stringify(result));
  }
})().catch(error => {
  console.error(error.stack || error.message);
  process.exit(1);
});
