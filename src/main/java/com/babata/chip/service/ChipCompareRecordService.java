package com.babata.chip.service;

import com.babata.chip.repository.entity.ChipCompareRecordDO;

import java.util.List;

public interface ChipCompareRecordService {
    void addRecord(Integer userId, String firstChipPartNumber, String secondChipPartNumber, String fileList, byte status, String prompt, String apiSupplier, String model,
                   Integer inputTokens, Integer outputTokens, Integer cost, Integer duration, String result);

    long getValidRecordCountByUserId(Integer userId);

    /**
     * 按芯片型号检索历史对比记录（匹配 first 或 second 型号），用于新分析时引用历史结论。
     */
    List<ChipCompareRecordDO> getRecentRecordsByPartNumber(String partNumber, int limit);
}
