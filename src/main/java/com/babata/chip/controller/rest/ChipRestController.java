package com.babata.chip.controller.rest;

import com.alibaba.fastjson.JSON;
import com.babata.chip.common.UserCache;
import com.babata.chip.common.UserContext;
import com.babata.chip.common.dto.ChipCompareRecordDTO;
import com.babata.chip.common.dto.ChipDetailDTO;
import com.babata.chip.common.dto.ChipSearchDTO;
import com.babata.chip.common.enums.AuthorityEnum;
import com.babata.chip.common.enums.StatusEnum;
import com.babata.chip.common.request.ChipAnalyzeRequest;
import com.babata.chip.common.response.BaseResponse;
import com.babata.chip.common.response.LlmStreamResponse;
import com.babata.chip.converter.ChipCompareRecordConverter;
import com.babata.chip.repository.*;
import com.babata.chip.repository.entity.ChipCompareRecordDO;
import com.babata.chip.repository.entity.ChipDO;
import com.babata.chip.repository.entity.Pin2PinDO;
import com.babata.chip.service.ChipAnalyzeService;
import com.babata.chip.service.ChipCompareRecordService;
import com.babata.chip.util.DateUtil;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.UUID;
import java.util.concurrent.CompletableFuture;

import static com.babata.chip.util.ResponseUtil.buildErrorResponse;
import static com.babata.chip.util.ResponseUtil.buildSuccessResponse;

@RestController
public class ChipRestController {
    private static final Logger log = LoggerFactory.getLogger(ChipRestController.class);
    @Resource
    private ChipRepository chipRepository;

    @Resource
    private Pin2PinRepository pin2PinRepository;

    @Resource
    SessionRepository sessionRepository;

    @Resource
    MessageRepository messageRepository;

    @Resource
    private ChipAnalyzeService chipAnalyzeService;

    @Resource
    private ChipCompareRecordRepository chipCompareRecordRepository;

    @Resource
    private ChipCompareRecordService chipCompareRecordService;


    @GetMapping("/api/chip/search")
    public BaseResponse searchChip(@RequestParam("keyword") String keyword) {
        if (keyword == null || keyword.isEmpty()) {
            return buildSuccessResponse();
        }
        List<ChipDO> chipDOList = chipRepository.getChipsByPartNumber(keyword);
        ChipSearchDTO dto = new ChipSearchDTO();
        dto.setChips(chipDOList);
        return buildSuccessResponse(dto);
    }

    @GetMapping("/api/chip/search/fuzzy")
    public BaseResponse searchChipFuzzy(@RequestParam("keyword") String keyword) {
        if (keyword == null || keyword.isEmpty()) {
            return buildSuccessResponse();
        }
        List<ChipDO> chipDOList = chipRepository.getChipsByPartNumberFuzzy(keyword);
        ChipSearchDTO dto = new ChipSearchDTO();
        dto.setChips(chipDOList);
        return buildSuccessResponse(dto);
    }

    @GetMapping("/api/chip/detail")
    public BaseResponse chipDetail(@RequestParam("id") Long id) {
        if (id == null || id <= 0) {
            return buildSuccessResponse();
        }
        ChipDO chipDO = chipRepository.getChipById(id);
        List<Pin2PinDO> pin2PinDOS = pin2PinRepository.getPin2PinChipsByPartNumber(chipDO.getPartNumber());
        ChipDetailDTO dto = new ChipDetailDTO();
        dto.setChip(chipDO);
        dto.setPin2pins(pin2PinDOS);
        return buildSuccessResponse(dto);
    }

    // user
    @PostMapping("/api/chip/analyze")
    public BaseResponse analyze(@RequestBody ChipAnalyzeRequest request) throws IOException, InterruptedException {
        if (CollectionUtils.isEmpty(request.getFileList())) {
            return buildErrorResponse("fileList is empty");
        }
        String result = chipAnalyzeService.analyze(request);
        return buildSuccessResponse(result);
    }

    // admin
    @PostMapping("/api/chip/analyze/stream")
    public SseEmitter analyzeChip(@RequestBody ChipAnalyzeRequest request, HttpServletRequest httpServletRequest) throws IOException {
        UserContext uc = UserCache.getUserContext();
        log.info("ChipRestController.analyzeChip, request: {}, username:{}", request, uc.getUsername());
        SseEmitter emitter = new SseEmitter(180_000L);
        // 参数校验
        if (CollectionUtils.isEmpty(request.getFileList()) || request.getFileList().size() < 2) {
            LlmStreamResponse r = new LlmStreamResponse("error", "fileList is empty or not enough!");
            emitter.send(JSON.toJSONString(r));
            return emitter;
        }
        // 非管理员限制频率、次数
        if (uc.getAuthority() != AuthorityEnum.SUPER.getCode()) {
            ChipCompareRecordDO latestRecord = chipCompareRecordRepository.getLastRecordByUserId(uc.getUserid());
            if (latestRecord != null) {
                Date lastDate = latestRecord.getModifyTime();
                long duration = DateUtil.getDateDiffSecs(lastDate, new Date());
                if (duration < 30) {
                    LlmStreamResponse r = new LlmStreamResponse("error", "request too fast! please try again later!");
                    emitter.send(JSON.toJSONString(r));
                }
            }
            long cnt = chipCompareRecordService.getValidRecordCountByUserId(uc.getUserid());
            if (cnt >= 500) {
                LlmStreamResponse r = new LlmStreamResponse("error", "request reach max limit!");
                emitter.send(JSON.toJSONString(r));
                return emitter;
            }
        }

        // 异步处理芯片对比任务
        CompletableFuture.runAsync(() -> {
            try {
                // 模拟分析过程
                chipAnalyzeService.analyzeWithStream(emitter, request, uc);
                // 发送完成事件
                emitter.send(SseEmitter.event()
                        .name("analysis-complete")
                        .data("✅ 分析完成"));
                emitter.complete();
            } catch (Exception e) {
                emitter.completeWithError(e);
            }
        });
        return emitter;
    }

    @GetMapping("/api/chip/compare/records")
    public BaseResponse getChipCompareRecord() {
        Integer userId = UserCache.getUserContext().getUserid();
        List<ChipCompareRecordDO> res = chipCompareRecordRepository.getRecords(userId);
        List<ChipCompareRecordDTO> recordDTOS = ChipCompareRecordConverter.convert2DTO(res);
        return buildSuccessResponse(recordDTOS);
    }

    @GetMapping("/api/chip/compare/result")
    public ResponseEntity<byte[]> getMarkdownResult(@RequestParam("id") Integer id, @RequestParam("type") String type) {
        try {
            // 1. 从数据库读取 Markdown 文本内容
            Integer userId = UserCache.getUserContext().getUserid();
            ChipCompareRecordDO recordDO = chipCompareRecordRepository.getRecordById(id);
            if (recordDO == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
            if (!Objects.equals(recordDO.getUserId(), userId)) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }
            if (!Objects.equals(recordDO.getStatus(),StatusEnum.VALID.getCode())) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
            String markdownContent = recordDO.getResult();
            markdownContent = markdownContent.replaceAll("```markdown\\s*([\\s\\S]*?)\\s*```", "$1").trim();

            // 2. 将 Markdown 内容转换为字节数组
            byte[] fileBytes = markdownContent.getBytes(StandardCharsets.UTF_8);

            // 3. 构建 HTTP 响应
            String filename = "chip_compare" + id + ".md";
            if (type == null || StringUtils.equals(type, "md")) {
                filename = recordDO.getFirstChipPartNumber() + "_" + recordDO.getSecondChipPartNumber() + ".md";
            } else if (StringUtils.equals(type, "txt")) {
                filename = recordDO.getFirstChipPartNumber() + "_" + recordDO.getSecondChipPartNumber() + ".txt";
            }

            HttpHeaders headers = new HttpHeaders();
            headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + filename);
            headers.add(HttpHeaders.CONTENT_TYPE, "text/markdown; charset=UTF-8");

            // 返回文件字节流
            return new ResponseEntity<>(fileBytes, headers, HttpStatus.OK);
        } catch (Exception e) {
            log.error("downloadMarkdownFile error: ", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/api/ai/session")
    public BaseResponse createSession(@RequestParam("sessionTitle") String sessionTitle) {
        Integer userId = UserCache.getUserContext().getUserid();
        if (StringUtils.isBlank(sessionTitle)) {
            sessionTitle = "新会话";
        }
        Long sessionId = sessionRepository.createSession(Long.valueOf(userId), sessionTitle, UUID.randomUUID().toString());
        return buildSuccessResponse(sessionId);
    }
}
