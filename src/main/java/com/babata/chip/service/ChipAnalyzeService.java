package com.babata.chip.service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.babata.chip.common.UserCache;
import com.babata.chip.common.UserContext;
import com.babata.chip.common.enums.ChipCompareStatusEnum;
import com.babata.chip.common.enums.StatusEnum;
import com.babata.chip.common.request.ChipAnalyzeRequest;
import com.babata.chip.common.response.LlmStreamResponse;
import com.babata.chip.common.response.deepseek.Choice;
import com.babata.chip.common.response.deepseek.DeepSeekResponse;
import com.babata.chip.common.result.ChipPdfResult;
import com.babata.chip.repository.MessageRepository;
import com.babata.chip.repository.SessionRepository;
import com.babata.chip.repository.entity.ChipCompareRecordDO;
import com.babata.chip.util.PDFProcessor;
import jakarta.annotation.Resource;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;

@Service
public class ChipAnalyzeService {
    private static final Logger logger = LoggerFactory.getLogger(ChipAnalyzeService.class);

    @Resource
    private PDFProcessor pdfProcessor;

    @Resource
    private SessionRepository sessionRepository;

    @Resource
    private MessageRepository messageRepository;

    @Resource
    private ChipCompareRecordService chipCompareRecordService;

    @Resource
    private ChipLibraryService chipLibraryService;

    // LLM 供应商配置（application.yml 中的 llm 段，支持环境变量覆盖）
    @Value("${llm.default-model:deepseek-v4-flash}")
    private String defaultModel;

    @Value("${llm.deepseek.api-url:https://api.deepseek.com/v1/chat/completions}")
    private String deepSeekApiUrl;

    @Value("${llm.deepseek.api-key:}")
    private String deepSeekApiKey;

    @Value("${llm.deepseek.model:deepseek-v4-flash}")
    private String deepSeekModel;

    @Value("${llm.deepseek.reasoning-effort:none}")
    private String deepSeekReasoningEffort;

    @Value("${llm.volc.api-url:https://ark.cn-beijing.volces.com/api/v3/chat/completions}")
    private String volcApiUrl;

    @Value("${llm.volc.api-key:}")
    private String volcApiKey;

    @Value("${llm.volc.model:deepseek-v3-2-251201}")
    private String volcModel;

    @Value("${llm.gpt.api-url:https://api.942ai.com/v1/chat/completions}")
    private String gptApiUrl;

    @Value("${llm.gpt.api-key:}")
    private String gptApiKey;

    @Value("${llm.gpt.model:gpt-4o}")
    private String gptModel;

    public static final String DEFAULT_SYSTEM_PROMPT = "你是专业芯片选型与 Pin2Pin 替代分析工程师。结论必须以输入 datasheet 为证据；资料未给出的参数必须明确标为“未找到/待确认”，不得臆造。";

    /**
     * ADC 的 Pin2Pin 兼容性不止是封装、引脚和静态电气参数。该规则仅在输入资料识别为 ADC / 数据转换器时
     * 注入 system message，强制模型核验采样—转换—读出整条时序链。
     * 依据见 docs/research/adc-timing-comparison.md（ADI 官方技术文章与应用笔记）。
     */
    private static final String ANALOG_CATEGORY_SYSTEM_PROMPT = """

            # 模拟芯片类别专项兼容性（强制执行）
            本次资料识别到以下器件类别：%s。
            除通用封装、引脚和电气参数外，必须为每个识别类别分别输出“{类别}专项兼容性核验”小节和表格：
            | 核验项 | 芯片A | 芯片B | 兼容性/差异 | 对原理图/PCB/固件/系统的影响与验证动作 |
            所有项目以 datasheet 原文为准。资料未提供时写“待核对 datasheet”，不得凭产品类别或常识推测；任一硬性配置、时序、稳定性或保护行为不一致时，不得给出“完全 Pin2Pin”结论。

            类别核验项：
            - 运算放大器/仪表放大器/电流检测放大器：电源与输入共模范围、输出摆幅及负载、闭环增益稳定性、GBW/压摆率、失调/漂移/噪声/偏置电流、CMRR/PSRR、容性负载/相位裕度、使能和启动行为。
            - 比较器：输入共模与阈值范围、传播延迟（测试 overdrive 条件必须一致）、迟滞、输出级（推挽/开漏）及上拉、电源/逻辑电平、锁存/使能、上电默认态。
            - DAC：分辨率与架构、参考电压/输出范围、单调性与 INL/DNL、建立时间/毛刺、输出驱动与负载、SPI/I2C/并口协议及时序、上电/复位默认码和 LDAC/同步更新行为。
            - LDO：VIN/VOUT/最大负载、dropout 的测试电流、输出电容容量/ESR/稳定性、静态电流、纹波抑制、噪声、使能/软启动/启动时间、保护与放电行为。
            - DC/DC：拓扑与调节方式、VIN/VOUT/持续及峰值电流、开关频率及同步/扩频、外部电感/补偿/反馈网络、软启动/PG、限流/短路/过温保护、开关节点布局和 EMI 风险。
            - 电压基准：串联/并联拓扑、输出值/初始精度/温漂、噪声、负载或偏置电流范围、压差/工作电压、输出电容稳定性、启动时间和长期漂移。
            - 模拟开关/多路复用器：开关拓扑与默认态、模拟信号范围相对电源轨、Ron/Ron flatness、漏电、寄生电容/带宽、断开/接通时间、break-before-make、逻辑阈值和电荷注入。
            - 工业接口收发器（CAN/RS-485/LIN/RS-232 等）：协议与速率、总线共模/故障电压、供电和逻辑 I/O 电平、收发传播延迟、使能/待机/静默/唤醒默认态、终端/失效保护、ESD/浪涌及引脚定义。
            - 数字隔离器/隔离放大器：隔离等级与认证、工作/浪涌耐压、CMTI、通道方向/默认输出、数据率、传播延迟和通道间 skew、供电域及启动行为。
            - 栅极驱动器：高低边/隔离拓扑、驱动电压与 source/sink 电流、UVLO 阈值、传播延迟/匹配与死区、bootstrap/电荷泵要求、DESAT/Miller clamp/故障输出、关断默认态与保护时序。
            """;

    private static final String ADC_TIMING_SYSTEM_PROMPT = """

            # ADC / 数据转换器专项：时序与配置兼容性（强制执行）
            本次资料包含 ADC 或数据转换器。不能因封装、引脚、分辨率或采样率相同就判定可直接替代；必须将下列采样—转换—读出链作为 Pin2Pin 硬性核验维度。

            1. 采样触发：CONVST/SOC/CS 等触发信号的引脚功能、有效极性、触发边沿、最小脉宽、建立/保持时间。
            2. 模拟采集：acquisition time、输入建立时间、输入类型（单端/差分/伪差分）、允许源阻抗及前端驱动/RC 滤波是否能在采集窗口内稳定。
            3. 转换与就绪：conversion time、最小转换周期、BUSY/EOC/DRDY 的时序、有效极性和下一次转换条件。
            4. 延迟与同步：aperture delay/jitter（适用时）、conversion latency / pipeline delay；Delta-Sigma 还要比较数字滤波 group delay、输出数据率和同步/滤波配置；多通道还要比较同时采样还是复用采样、通道间同步关系。
            5. 数字读出：SPI 的 CS/SCLK/SDO 时序、CPOL/CPHA、最大 SCLK、帧宽/数据位序、读数窗口和串接模式；若为并口/LVDS/JESD，则比较数据时钟、lane、帧/多帧同步及 FPGA 配置要求。
            6. 启动与配置：上电、复位、校准、寄存器配置生效、唤醒到首个有效数据的时间要求。

            输出规则：
            - 优先引用 datasheet 中 Timing Characteristics、Conversion Timing、Serial/Digital Interface Timing、时序图的具体数值与页码/章节；找不到时明确写“资料未找到，待核对”，绝不推测。
            - 必须输出“ADC 时序与接口兼容性”表，至少包含：核验项、芯片A、芯片B、兼容性/差异、对 MCU/FPGA/前端的影响与验证动作。
            - 任一触发、转换完成、延迟、数据帧或接口时序不一致时，不得结论为“完全 Pin2Pin”；应判为“需固件/FPGA/外围验证”或“不可直接替代”，并说明风险。
            """;
    public static final Float DEFAULT_TEMPERATURE = 0.3f;
    public static final Integer DEFAULT_MAX_TOKENS = 16384;
    public static final Integer DEFAULT_QUICK_MAX_TOKENS = 3072;
    private static final int STREAM_CHUNK_SIZE = 256;
    private static final int MAX_CONTINUATION_ROUNDS = 2;

    private static final String HISTORY_CONTEXT_TEMPLATE = """
            \n\n# 📚 历史分析参考（来自历史对比记录库）\n\n以下是对应芯片的历史分析摘要，请参考它们保持结论一致性：\n\n%s""";

    /**
     * 根据芯片型号检索历史对比记录，构建历史参考上下文。
     */
    private String buildHistoryContext(List<String> chipPartNumberList) {
        if (CollectionUtils.isEmpty(chipPartNumberList)) {
            return "";
        }
        StringBuilder sb = new StringBuilder();
        Set<Integer> seen = new HashSet<>();
        for (String pn : chipPartNumberList) {
            if (StringUtils.isBlank(pn)) {
                continue;
            }
            List<ChipCompareRecordDO> recs = chipCompareRecordService.getRecentRecordsByPartNumber(pn, 3);
            for (ChipCompareRecordDO r : recs) {
                if (!seen.add(r.getId())) {
                    continue;
                }
                String result = r.getResult() != null ? r.getResult() : "";
                String summary = result.length() > 400 ? result.substring(0, 400) : result;
                sb.append("- [记录#").append(r.getId()).append("] ")
                        .append(r.getFirstChipPartNumber()).append(" ↔ ").append(r.getSecondChipPartNumber())
                        .append(" (").append(r.getModel()).append("): ").append(summary).append("\n");
            }
        }
        return sb.toString();
    }

    /**
     * 在 user prompt 尾部追加历史参考上下文（无历史时原样返回）。
     */
    private String appendHistoryContext(String userPrompt, List<String> chipPartNumberList) {
        String history = buildHistoryContext(chipPartNumberList);
        if (history.isEmpty()) {
            return userPrompt;
        }
        return userPrompt + String.format(HISTORY_CONTEXT_TEMPLATE, history);
    }

    public void analyzeWithStream(SseEmitter emitter, ChipAnalyzeRequest chipAnalyzeRequest, UserContext userContext) throws IOException, InterruptedException {
        Integer userId = userContext.getUserid();
        fillDefaultParams(chipAnalyzeRequest);
        sendProgress(emitter, 15, "正在解析 PDF 文本与表格");

        // 解析pdf
        long t1 = System.currentTimeMillis();
        StringBuilder totalResult = new StringBuilder();
        List<String> chipPartNumberList = new ArrayList<>();
        List<String> fileList = new ArrayList<>();
        List<ChipPdfResult> pdfResultList = new ArrayList<>();
        try {
            chipPartNumberList = chipAnalyzeRequest.getChipPartNumberList();
            fileList = chipAnalyzeRequest.getFileList();
            pdfResultList = pdfProcessor.processMultiplePdfs(fileList, chipPartNumberList);

        } catch (Exception e) {
            logger.error("analyzeWithStream, process pdf error", e);
            long t2 = System.currentTimeMillis();
            chipCompareRecordService.addRecord(userId, chipPartNumberList.get(0), chipPartNumberList.get(1), fileList.toString(), ChipCompareStatusEnum.PDF_PROCESS_ERROR.getCode(), "", "",
                    chipAnalyzeRequest.getModelName(), 0, 0, 0, Math.toIntExact(t2 - t1), totalResult.toString());
            // sse异常结束
            LlmStreamResponse streamResponse = new LlmStreamResponse("error", e.getMessage());
            String j = JSON.toJSONString(streamResponse);
            emitter.send(j);
            emitter.complete();
            return;
        }

        long t2 = System.currentTimeMillis();
        sendProgress(emitter, 40, "正在提取芯片型号与关键参数");

        // 芯片库沉淀：把本次分析的芯片录入 chip 表
        try {
            chipLibraryService.recordChips(pdfResultList);
        } catch (Exception e) {
            logger.error("record chips to library error", e);
        }

        // 创建session
        Long sessionId = sessionRepository.createSession(Long.valueOf(userId), "pin2pin compare analyze: " + fileList, UUID.randomUUID().toString());
        String userPrompt = buildUserPrompt(pdfResultList, chipAnalyzeRequest.getUserPrompt(), chipAnalyzeRequest.getMode());
        userPrompt = appendHistoryContext(userPrompt, chipPartNumberList);
        messageRepository.addMessage(sessionId, Long.valueOf(userId), "user", userPrompt, chipAnalyzeRequest.getModelName(), StatusEnum.VALID.getCode());

        // 构建http-body
        JSONObject requestBody = buildRequestBody(chipAnalyzeRequest, pdfResultList, userPrompt);
        sendProgress(emitter, 60, "正在调用模型进行 Pin2Pin 对比分析");

        String apiUrl = deepSeekApiUrl, apiKey = deepSeekApiKey;
        String actualModel = deepSeekModel;
        if (Objects.equals(chipAnalyzeRequest.getModelName(), gptModel)) {
            apiUrl = gptApiUrl;
            apiKey = gptApiKey;
            actualModel = gptModel;
        }
        // 请求体中的 model 使用解析后的真实模型名（旧别名自动映射到官方可用模型）
        chipAnalyzeRequest.setModelName(actualModel);

        logger.info("analyzeWithStream, llm apiUrl:{}, request body: {}", apiUrl, JSON.toJSONString(requestBody));

        // Keep LLM read time separate from browser SSE forwarding time for performance diagnosis.
        HttpResponse<InputStream> response = null;
        StringBuilder buffer = new StringBuilder();
        long llmRequestStartedAt = System.currentTimeMillis();
        long firstTokenAt = 0L;
        long sseForwardingMs = 0L;
        int forwardedChunks = 0;

        try {
            HttpClient client = HttpClient.newHttpClient();
            JSONObject currentBody = requestBody;
            String finishReason = null;
            int continuationRounds = 0;
            boolean truncated = true;
            while (truncated && continuationRounds <= MAX_CONTINUATION_ROUNDS) {
                HttpRequest request = HttpRequest.newBuilder()
                        .uri(URI.create(apiUrl))
                        .header("Authorization", "Bearer " + apiKey)
                        .header("Content-Type", "application/json")
                        .POST(HttpRequest.BodyPublishers.ofString(currentBody.toJSONString()))
                        .timeout(Duration.ofSeconds(180))
                        .build();

                // 请求LLM-API
                response = client.send(request, HttpResponse.BodyHandlers.ofInputStream());
                long firstByteAt = System.currentTimeMillis();
                if (continuationRounds == 0) {
                    logger.info("[ANALYSIS_TIMING] llm headers received in {} ms, status={}",
                            firstByteAt - llmRequestStartedAt, response.statusCode());
                }

                // 处理响应流
                finishReason = null;
                try (BufferedReader reader = new BufferedReader(new InputStreamReader(response.body()))) {
                    String line;
                    while ((line = reader.readLine()) != null) {
                        if (line.isEmpty()) {
                            continue;
                        }
                        if (line.startsWith("data:")) {
                            line = line.substring(5).trim();
                        }
                        if (line.equals("[DONE]")) {
                            break;
                        }
                        // 解析
                        DeepSeekResponse resp = JSON.parseObject(line, DeepSeekResponse.class);
                        if (!CollectionUtils.isEmpty(resp.getChoices()) && resp.getChoices().get(0).getDelta() != null) {
                            Choice choice = resp.getChoices().get(0);
                            // 通过 SseEmitter 将 content 数据发送到前端
                            String content = choice.getDelta().getContent();
                            if (!StringUtils.isEmpty(content)) {
                                if (firstTokenAt == 0L) {
                                    firstTokenAt = System.currentTimeMillis();
                                    logger.info("[ANALYSIS_TIMING] first token received in {} ms", firstTokenAt - llmRequestStartedAt);
                                }
                                totalResult.append(content);
                                buffer.append(content);
                                if (buffer.length() >= STREAM_CHUNK_SIZE) {
                                    long sendStartedAt = System.currentTimeMillis();
                                    emitter.send(JSON.toJSONString(new LlmStreamResponse("message", buffer.toString())));
                                    sseForwardingMs += System.currentTimeMillis() - sendStartedAt;
                                    forwardedChunks++;
                                    buffer.setLength(0);
                                }
                            }
                            if (!StringUtils.isEmpty(choice.getFinishReason())) {
                                finishReason = choice.getFinishReason();
                            }
                        }
                    }
                }
                if (!buffer.isEmpty()) {
                    long sendStartedAt = System.currentTimeMillis();
                    emitter.send(JSON.toJSONString(new LlmStreamResponse("message", buffer.toString())));
                    sseForwardingMs += System.currentTimeMillis() - sendStartedAt;
                    forwardedChunks++;
                    buffer.setLength(0);
                }
                truncated = "length".equals(finishReason);
                logger.info("[ANALYSIS_TIMING] llm round {} finished; finishReason={}; cumulativeChars={}",
                        continuationRounds, finishReason == null ? "stop" : finishReason, totalResult.length());
                if (truncated && continuationRounds < MAX_CONTINUATION_ROUNDS) {
                    currentBody = buildContinuationBody(actualModel, totalResult.toString());
                    sendProgress(emitter, 70, "报告较长，正在自动续写剩余内容");
                }
                continuationRounds++;
            }
            logger.info("[ANALYSIS_TIMING] llm stream complete in {} ms; firstToken={} ms; forwardedChunks={}; sseForwarding={} ms; outputChars={}",
                    System.currentTimeMillis() - llmRequestStartedAt,
                    firstTokenAt == 0L ? -1 : firstTokenAt - llmRequestStartedAt,
                    forwardedChunks, sseForwardingMs, totalResult.length());
        } catch (Exception e) {
            logger.error("DeepSeek stream response error", e);
            long t3 = System.currentTimeMillis();
            chipCompareRecordService.addRecord(userId, chipPartNumberList.get(0), chipPartNumberList.get(1), fileList.toString(), ChipCompareStatusEnum.FAILED.getCode(), userPrompt, "",
                    chipAnalyzeRequest.getModelName(), 0, 0, 0, Math.toIntExact(t3 - t2), totalResult.toString());
            // sse异常结束
            LlmStreamResponse streamResponse = new LlmStreamResponse("error", e.getMessage());
            String j = JSON.toJSONString(streamResponse);
            emitter.send(j);
            emitter.complete();
            return;
        }
        long t3 = System.currentTimeMillis();
        sendProgress(emitter, 90, "正在保存分析报告与芯片库记录");
        logger.info("analyze finished, took: {} ms", (t3 - t2));
        // 记录芯片对比日志
        chipCompareRecordService.addRecord(userId, chipPartNumberList.get(0), chipPartNumberList.get(1), fileList.toString(), ChipCompareStatusEnum.SUCCESS.getCode(), userPrompt, "",
                chipAnalyzeRequest.getModelName(), 0, 0, 0, Math.toIntExact(t3 - t2), totalResult.toString());
        // 记录会话
        messageRepository.addMessage(sessionId, Long.valueOf(userId), "assistant", totalResult.toString(), chipAnalyzeRequest.getModelName(), StatusEnum.VALID.getCode());
        sendProgress(emitter, 100, "分析完成");
        emitter.complete();
    }

    private void sendProgress(SseEmitter emitter, int progress, String message) throws IOException {
        LlmStreamResponse response = new LlmStreamResponse("progress", message);
        response.setProgress(progress);
        emitter.send(JSON.toJSONString(response));
    }

    /**
     * Builds a follow-up streaming request when the previous round was truncated by max_tokens.
     * Only the tail of the already generated report is sent as context to avoid re-billing the whole prompt.
     */
    private JSONObject buildContinuationBody(String model, String partialReport) {
        JSONObject body = new JSONObject();
        body.put("model", model);
        body.put("temperature", DEFAULT_TEMPERATURE);
        body.put("max_tokens", DEFAULT_MAX_TOKENS);
        body.put("stream", true);
        if (Objects.equals(model, deepSeekModel) && StringUtils.isNotBlank(deepSeekReasoningEffort)) {
            body.put("reasoning_effort", deepSeekReasoningEffort);
        }

        JSONArray messages = new JSONArray();
        JSONObject systemMsg = new JSONObject();
        systemMsg.put("role", "system");
        systemMsg.put("content", "你是专业芯片选型分析工程师。请严格从上次中断的位置继续输出，不要重复已输出的内容。");
        messages.add(systemMsg);

        JSONObject assistantMsg = new JSONObject();
        assistantMsg.put("role", "assistant");
        String tail = partialReport.length() > 4000
                ? partialReport.substring(partialReport.length() - 4000)
                : partialReport;
        assistantMsg.put("content", tail);
        messages.add(assistantMsg);

        JSONObject userMsg = new JSONObject();
        userMsg.put("role", "user");
        userMsg.put("content", "上面是已生成报告的尾部。请直接从断点继续输出，接着补全剩余表格和章节，不要重复。");
        messages.add(userMsg);

        body.put("messages", messages);
        return body;
    }

    // 非流式
    public String analyze(ChipAnalyzeRequest chipAnalyzeRequest) throws IOException, InterruptedException {
        long t1 = System.currentTimeMillis();
        Integer userId = UserCache.getUserContext().getUserid();
        fillDefaultParams(chipAnalyzeRequest);
        List<String> fileList = chipAnalyzeRequest.getFileList();
        List<String> chipPartNumberList = chipAnalyzeRequest.getChipPartNumberList();

        List<ChipPdfResult> results = pdfProcessor.processMultiplePdfs(fileList, chipPartNumberList);
        long t2 = System.currentTimeMillis();

        // 芯片库沉淀：把本次分析的芯片录入 chip 表
        try {
            chipLibraryService.recordChips(results);
        } catch (Exception e) {
            logger.error("record chips to library error", e);
        }

        // 创建session
        Long sessionId = sessionRepository.createSession(Long.valueOf(userId), "pin2pin compare analyze" + fileList, UUID.randomUUID().toString());
        String userPrompt = buildUserPrompt(results, chipAnalyzeRequest.getUserPrompt(), chipAnalyzeRequest.getMode());
        userPrompt = appendHistoryContext(userPrompt, chipPartNumberList);
        messageRepository.addMessage(sessionId, Long.valueOf(userId), "user", userPrompt, chipAnalyzeRequest.getModelName(), StatusEnum.VALID.getCode());

        // 构建请求
        JSONObject requestBody = buildRequestBody(chipAnalyzeRequest, results, userPrompt);
        logger.info("analyze request body: {}", JSON.toJSONString(requestBody));

        // 默认模型
        String apiUrl = deepSeekApiUrl, apiKey = deepSeekApiKey;
        if (Objects.equals(chipAnalyzeRequest.getModelName(), gptModel)) {
            apiUrl = gptApiUrl;
            apiKey = gptApiKey;
            chipAnalyzeRequest.setModelName(gptModel);
        } else {
            chipAnalyzeRequest.setModelName(deepSeekModel);
        }

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(apiUrl))
                .header("Content-Type", "application/json")
                .header("Authorization", "Bearer " + apiKey)
                .POST(HttpRequest.BodyPublishers.ofString(requestBody.toJSONString()))
                .timeout(Duration.ofSeconds(180))
                .build();

        HttpClient client = HttpClient.newHttpClient();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        long t3 = System.currentTimeMillis();

        if (response.statusCode() == HttpStatus.OK.value()) {
            JSONObject responseJson = JSON.parseObject(response.body());
            String content = responseJson.getJSONArray("choices")
                    .getJSONObject(0)
                    .getJSONObject("message")
                    .getString("content");
            if (content == null) {
                content = "";
            }
            // 记录日志（存干净的报告内容，而非原始 API 响应）
            chipCompareRecordService.addRecord(userId, chipPartNumberList.get(0), chipPartNumberList.get(1), fileList.toString(), StatusEnum.VALID.getCode(), userPrompt, "",
                    chipAnalyzeRequest.getModelName(), 0, 0, 0, Math.toIntExact(t3 - t2), content);
            // 记录会话
            messageRepository.addMessage(sessionId, Long.valueOf(userId), "assistant", content, chipAnalyzeRequest.getModelName(), StatusEnum.VALID.getCode());

            return content;
        }
        chipCompareRecordService.addRecord(userId, chipPartNumberList.get(0), chipPartNumberList.get(1), fileList.toString(), StatusEnum.INVALID.getCode(), userPrompt, "",
                chipAnalyzeRequest.getModelName(), 0, 0, 0, Math.toIntExact(t3 - t2), response.body());
        return "Error: API request failed with code " + response.statusCode();
    }

    private void fillDefaultParams(ChipAnalyzeRequest chipAnalyzeRequest) {
        if (StringUtils.isEmpty(chipAnalyzeRequest.getSystemPrompt())) {
            chipAnalyzeRequest.setSystemPrompt(DEFAULT_SYSTEM_PROMPT);
        }
        if (chipAnalyzeRequest.getModelName() == null) {
            chipAnalyzeRequest.setModelName(defaultModel);
        }
        if (chipAnalyzeRequest.getTemperature() == null) {
            chipAnalyzeRequest.setTemperature(DEFAULT_TEMPERATURE);
        }
        if (chipAnalyzeRequest.getMaxTokens() == null) {
            if (isQuickMode(chipAnalyzeRequest.getMode())) {
                chipAnalyzeRequest.setMaxTokens(DEFAULT_QUICK_MAX_TOKENS);
            } else {
                chipAnalyzeRequest.setMaxTokens(DEFAULT_MAX_TOKENS);
            }
        }
        if (chipAnalyzeRequest.isStream() == null) {
            chipAnalyzeRequest.setStream(true);
        }
    }

    private boolean isQuickMode(String mode) {
        return "quick".equalsIgnoreCase(mode);
    }

    private JSONObject buildRequestBody(ChipAnalyzeRequest chipAnalyzeRequest, List<ChipPdfResult> chipPdfResultList, String userPrompt) {
        //  构建参数
        JSONObject requestBody = new JSONObject();
        requestBody.put("model", chipAnalyzeRequest.getModelName());
        requestBody.put("temperature", chipAnalyzeRequest.getTemperature());
        requestBody.put("max_tokens", chipAnalyzeRequest.getMaxTokens());
        requestBody.put("stream", chipAnalyzeRequest.isStream());
        // Flash is used for interactive analysis. Disable hidden chain-of-thought so the report streams immediately.
        if (Objects.equals(chipAnalyzeRequest.getModelName(), deepSeekModel)
                && StringUtils.isNotBlank(deepSeekReasoningEffort)) {
            requestBody.put("reasoning_effort", deepSeekReasoningEffort);
        }

        JSONArray messages = new JSONArray();
        JSONObject systemMsg = new JSONObject();
        systemMsg.put("role", "system");
        systemMsg.put("content", buildSystemPrompt(chipAnalyzeRequest.getSystemPrompt(), chipPdfResultList));
        messages.add(systemMsg);

        JSONObject userMsg = new JSONObject();
        userMsg.put("role", "user");
        userMsg.put("content", userPrompt);
        messages.add(userMsg);

        requestBody.put("messages", messages);
        return requestBody;
    }

    private String buildSystemPrompt(String requestedSystemPrompt, List<ChipPdfResult> chipDataList) {
        String basePrompt = StringUtils.defaultIfBlank(requestedSystemPrompt, DEFAULT_SYSTEM_PROMPT);
        List<String> categories = detectAnalogChipCategories(chipDataList);
        if (categories.isEmpty()) {
            return basePrompt;
        }
        String prompt = basePrompt + String.format(ANALOG_CATEGORY_SYSTEM_PROMPT, String.join("、", categories));
        return categories.contains("ADC/数据转换器") ? prompt + ADC_TIMING_SYSTEM_PROMPT : prompt;
    }

    private boolean isAdcOrDataConverter(List<ChipPdfResult> chipDataList) {
        return detectAnalogChipCategories(chipDataList).contains("ADC/数据转换器");
    }

    /**
     * 从型号和 datasheet 文本识别分析模板。采用可多选的关键词而非单一分类：例如“隔离 CAN 收发器”
     * 应同时获得接口和隔离两类核验规则。关键词仅用于决定检查清单，绝不能替代 datasheet 证据。
     */
    private List<String> detectAnalogChipCategories(List<ChipPdfResult> chipDataList) {
        if (CollectionUtils.isEmpty(chipDataList)) {
            return List.of();
        }
        StringBuilder source = new StringBuilder();
        for (ChipPdfResult chipData : chipDataList) {
            source.append(' ').append(StringUtils.defaultString(chipData.getChipModel()))
                    .append(' ').append(StringUtils.defaultString(chipData.getTextContent()));
        }
        String text = source.toString().toLowerCase();
        Set<String> categories = new LinkedHashSet<>();
        addCategoryIfMatched(categories, text, "ADC/数据转换器", "analog-to-digital", "a/d converter", " adc", "模数转换", "模數轉換", "数据转换器", "數據轉換器");
        addCategoryIfMatched(categories, text, "DAC", "digital-to-analog", "d/a converter", " dac", "数模转换", "數模轉換");
        addCategoryIfMatched(categories, text, "运算/仪表/电流检测放大器", "operational amplifier", " op amp", "instrumentation amplifier", "current-sense amplifier", "current sense amplifier", "运算放大器", "仪表放大器", "電流檢測放大器", "电流检测放大器");
        addCategoryIfMatched(categories, text, "比较器", " comparator", "voltage comparator", "比较器", "比較器");
        addCategoryIfMatched(categories, text, "LDO", "low-dropout regulator", "low dropout regulator", " ldo", "线性稳压器", "線性穩壓器");
        addCategoryIfMatched(categories, text, "DC/DC", "switching regulator", "buck converter", "boost converter", "dc/dc", " dc-dc", "降压转换器", "升压转换器", "開關穩壓器");
        addCategoryIfMatched(categories, text, "电压基准", "voltage reference", "shunt reference", "series reference", "电压基准", "電壓基準");
        addCategoryIfMatched(categories, text, "模拟开关/多路复用器", "analog switch", "multiplexer", " mux", "模拟开关", "模擬開關", "多路复用", "多路複用");
        addCategoryIfMatched(categories, text, "工业接口收发器", "can transceiver", "rs-485", "rs485", "lin transceiver", "rs-232", "rs232", "收发器", "收發器");
        addCategoryIfMatched(categories, text, "数字隔离器/隔离放大器", "digital isolator", "isolated amplifier", "isolation amplifier", "isolated can", "isolated rs", "数字隔离", "數字隔離", "隔离放大器", "隔離放大器");
        addCategoryIfMatched(categories, text, "栅极驱动器", "gate driver", "gate-driver", "栅极驱动", "柵極驅動");
        return new ArrayList<>(categories);
    }

    private void addCategoryIfMatched(Set<String> categories, String text, String category, String... markers) {
        for (String marker : markers) {
            if (text.contains(marker)) {
                categories.add(category);
                return;
            }
        }
    }

    private String buildUserPrompt(List<ChipPdfResult> chipDataList, String userPrompt, String mode) {
        String userPromptTemplate = isQuickMode(mode) ? QUICK_USER_PROMPT_TEMPLATE : DEFAULT_USER_PROMPT_TEMPLATE;
        if (!StringUtils.isBlank(userPrompt)) {
            userPromptTemplate = userPrompt;
        }

        StringBuilder chipContent = new StringBuilder();
        int index = 1;
        for (ChipPdfResult chipData : chipDataList) {
            String chipModel = chipData.getChipModel() != null ? chipData.getChipModel() : "芯片" + index;
            String textContent = chipData.getTextContent() != null ? chipData.getTextContent() : "无内容";

            chipContent.append("芯片").append(index).append("：").append(chipModel).append("\n");
            chipContent.append("====原文内容====\n");
            if (textContent.length() > 50000) {
                chipContent.append(textContent, 0, 50000).append("...");
            } else {
                chipContent.append(textContent);
            }
            chipContent.append("\n\n");
        }
        String prompt = String.format(userPromptTemplate, chipContent);
        List<String> categories = detectAnalogChipCategories(chipDataList);
        if (!categories.isEmpty()) {
            prompt += String.format("""

                    # 模拟芯片专项报告交付验收（不可省略）
                    本次识别类别：%s。
                    对每个识别类别，必须输出“{类别}专项兼容性核验”小节及下列表格：
                    | 核验项 | 芯片A | 芯片B | 兼容性/差异 | 对原理图/PCB/固件/系统的影响与验证动作 |
                    只列该类别真正影响替代的关键项目；原文未给出时填写“待核对 datasheet”，不可省略、不可编造。硬性配置、时序、稳定性、保护行为或接口模式有差异时，均不得给出“完全 Pin2Pin”结论。
                    """, String.join("、", categories));
        }
        if (categories.contains("ADC/数据转换器")) {
            prompt += """

                    # ADC 报告交付验收（不可省略）
                    报告中必须出现标题“ADC 时序与接口兼容性”（快速模式可使用同名精简小节），并输出表格：
                    | 核验项 | 芯片A | 芯片B | 兼容性/差异 | 对 MCU/FPGA/前端的影响与验证动作 |
                    表格至少覆盖采样触发、采集/建立时间、转换完成（BUSY/EOC/DRDY）、转换/数字滤波延迟、数字接口读出、启动/配置时序。
                    若原文没有某项，填写“待核对 datasheet”，不可省略、不可编造；任何关键时序或接口差异均不得给出“完全 Pin2Pin”结论。
                    """;
        }
        return prompt;
    }

    public static final String QUICK_USER_PROMPT_TEMPLATE = """
            你是专业芯片选型分析工程师。请对以下芯片数据表做快速 Pin2Pin 替代结论分析。

            以下是芯片的文本内容：

            %s

            # 输出要求（精简，不要展开长报告）：
            1. 每个芯片一句话定位（厂商、用途）
            2. 封装与引脚是否 Pin2Pin 兼容（结论 + 例外引脚）
            3. 关键电气参数差异表（最多 6 行）
            4. 若资料为 ADC / 数据转换器：增加“时序与接口”小表，至少核验采样触发、转换完成/BUSY/DRDY、转换/数字滤波延迟、SPI/数字接口模式；资料未给出时写“待核对”，不可臆造
            5. 是否存在不可替代风险（风险项 + 影响 + 缓解）
            6. 最终替代建议（哪个方向可直接替代、哪个需评估）
            只输出这 6 部分，使用 Markdown 标题与表格，控制在 800 字以内。
            """;

    public static final String DEFAULT_USER_PROMPT_TEMPLATE = """
            你是一个专业芯片选型分析工程师，负责批量撰写高质量、格式统一的芯片 Pin2Pin 替代分析报告。

            # 📎 输入信息：
            你收到若干芯片的 datasheet 解析结果，包括型号、品牌、电气参数、功能描述、引脚定义和应用场景。

            以下是芯片的文本内容：

            %s

            # 🎯 分析目标：
            请针对这些芯片，进行结构化的 Pin2Pin 对比分析，最终输出为 Markdown 格式的技术报告，包括以下 7 大章节：

            ## 1. 产品定义和目标应用对比

            简要介绍每个芯片解决的问题、产品定位、目标应用领域。强调各芯片的共性与差异。

            ## 2. 封装与引脚布局对比（Pin-to-Pin表格）

            输出完整的引脚对照表，并说明是否可以物理 Pin2Pin 替代，是否需要修改 PCB，是否有功能不匹配的引脚。

            ## 3. 电气特性全面对比

            用表格列出关键电气参数（如输入电压、输出电流、Vos、PSRR、CMRR、带宽等），并逐项说明：
            - 哪个芯片性能最优 ✅
            - 哪个芯片存在短板 ⚠️
            - 是否可替代？是否存在风险？

            ## 4. ADC 时序与接口兼容性（仅当资料为 ADC / 数据转换器时必须输出）

            若输入资料为 ADC / 数据转换器，必须单独输出时序核验表，至少包含：
            - 采样触发（CONVST/SOC/CS）的极性、边沿、最小脉宽及建立/保持时间
            - acquisition time / 输入建立时间、输入类型、前端驱动与 RC 滤波的建立风险
            - conversion time、最小转换周期、BUSY/EOC/DRDY 时序和下一次转换条件
            - aperture delay/jitter（适用时）、conversion latency / pipeline delay；Delta-Sigma 的数字滤波延迟、输出数据率和同步配置；多通道的同时/复用采样关系
            - SPI（CS/SCLK/SDO、CPOL/CPHA、最大 SCLK、帧宽/位序/读出窗口）或 LVDS/JESD/并口的数据与同步要求
            - 上电、复位、校准、寄存器配置和首个有效数据的等待要求

            每一项应写出数据、兼容性及对 MCU/FPGA/前端的影响。资料未提供时明确写“待核对 datasheet”，不得推测。任一项不一致时，不得判定为完全 Pin2Pin。

            ## 5. 功能模块特性对比

            说明这些芯片的内部功能模块（如零漂移、双参考输入、抗PWM设计等）是否一致，以及它们在抗干扰、温漂、稳定性方面的差异。

            ## 6. 典型应用适配性分析（按场景分类）

            请列出三种应用场景：
            - 每种场景下推荐哪款芯片？
            - 替代建议是什么？用表格列出说明。

            ## 7. Pin2Pin替代可行性总结与风险分析

            总结这些芯片之间互相替代的可行性，列出：
            - 哪些方向可以完全替代 ✅
            - 哪些方向存在参数风险 ⚠️
            - 哪些方向存在封装、电压不兼容等问题 ❌
            - 总结表格 + 替代建议

            # ⚠️ 输出格式：

            - 采用 Markdown 结构
            - 使用清晰的标题（# / ## / ###）
            - 所有对比表格使用三列以上格式
            - 不要遗漏任何芯片的结论
            - 输出必须结构清晰、逻辑严谨、数据支撑、工程落地可用
            # 要求
            - 只输出Pin2Pin 替代分析报告
            要求
            不要出现：好的，作为一名专业芯片选型分析工程师，我将根据您提供的两份芯片Datasheet，为您撰写一份结构化的Pin2Pin替代分析报告。""";
}
