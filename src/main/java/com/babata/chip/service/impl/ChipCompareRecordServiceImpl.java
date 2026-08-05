package com.babata.chip.service.impl;

import com.babata.chip.repository.ChipCompareRecordRepository;
import com.babata.chip.repository.entity.ChipCompareRecordDO;
import com.babata.chip.service.ChipCompareRecordService;
import jakarta.annotation.Resource;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class ChipCompareRecordServiceImpl implements ChipCompareRecordService {

    @Resource
    private ChipCompareRecordRepository chipCompareRecordRepository;

    @Async
    public void addRecord(Integer userId, String firstChipPartNumber, String secondChipPartNumber, String fileList, byte status,
                          String prompt, String apiSupplier, String model, Integer inputTokens, Integer outputTokens, Integer cost, Integer duration, String result) {
        ChipCompareRecordDO recordDO = new ChipCompareRecordDO();
        recordDO.setUserId(userId);
        recordDO.setFirstChipPartNumber(firstChipPartNumber);
        recordDO.setSecondChipPartNumber(secondChipPartNumber);
        recordDO.setFileList(fileList);
        recordDO.setStatus(status);
        recordDO.setPrompt(prompt);
        recordDO.setApiSupplier(apiSupplier);
        recordDO.setModel(model);
        recordDO.setInputTokens(inputTokens);
        recordDO.setOutputTokens(outputTokens);
        recordDO.setCost(cost);
        recordDO.setDuration(duration);
        recordDO.setResult(result);
        recordDO.setCreateTime(new Date());
        recordDO.setModifyTime(new Date());
        chipCompareRecordRepository.addRecord(recordDO);
    }

    @Override
    public long getValidRecordCountByUserId(Integer userId) {
        return chipCompareRecordRepository.getValidRecordCountByUserId(userId);
    }

    @Override
    public List<ChipCompareRecordDO> getRecentRecordsByPartNumber(String partNumber, int limit) {
        return chipCompareRecordRepository.getRecentRecordsByPartNumber(partNumber, limit);
    }

}
