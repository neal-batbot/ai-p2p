package com.babata.chip.repository;

import com.babata.chip.common.enums.StatusEnum;
import com.babata.chip.repository.entity.ChipCompareRecordDO;
import com.babata.chip.repository.entity.ChipCompareRecordDOExample;
import com.babata.chip.repository.mapper.ChipCompareRecordMapper;
import jakarta.annotation.Resource;
import org.apache.commons.collections.CollectionUtils;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ChipCompareRecordRepository {
    @Resource
    private ChipCompareRecordMapper chipCompareRecordMapper;

    public void addRecord(ChipCompareRecordDO recordDO) {
        chipCompareRecordMapper.insert(recordDO);
    }

    public List<ChipCompareRecordDO> getRecords(Integer userId) {
        if (userId == null) {
            return new ArrayList<>();
        }
        ChipCompareRecordDOExample example = new ChipCompareRecordDOExample();
        example.createCriteria().andUserIdEqualTo(userId);
        example.setOrderByClause("id desc");
        List<ChipCompareRecordDO> res = chipCompareRecordMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(res)) {
            return new ArrayList<>();
        }
        return res;
    }

    public ChipCompareRecordDO getRecordById(Integer recordId) {
        if (recordId == null) {
            return null;
        }
        ChipCompareRecordDOExample example = new ChipCompareRecordDOExample();
        example.createCriteria().andIdEqualTo(recordId);
        List<ChipCompareRecordDO> res = chipCompareRecordMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(res)) {
            return null;
        }
        return res.get(0);
    }

    public long getValidRecordCountByUserId(Integer userId) {
        ChipCompareRecordDOExample example = new ChipCompareRecordDOExample();
        example.createCriteria()
                .andUserIdEqualTo(userId)
                .andStatusEqualTo(StatusEnum.VALID.getCode());
        return chipCompareRecordMapper.countByExample(example);
    }

    public ChipCompareRecordDO getLastRecordByUserId(Integer userId) {
        ChipCompareRecordDOExample example = new ChipCompareRecordDOExample();
        example.createCriteria()
                .andUserIdEqualTo(userId);
        example.setOrderByClause("id desc");
        List<ChipCompareRecordDO> res = chipCompareRecordMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(res)) {
            return null;
        }
        return res.get(0);
    }

    /**
     * 按芯片型号检索历史对比记录（first 或 second 型号模糊匹配），用于新分析时引用历史结论。
     */
    public List<ChipCompareRecordDO> getRecentRecordsByPartNumber(String partNumber, int limit) {
        if (partNumber == null || partNumber.trim().isEmpty()) {
            return new ArrayList<>();
        }
        ChipCompareRecordDOExample example = new ChipCompareRecordDOExample();
        String like = "%" + partNumber.trim() + "%";
        example.createCriteria()
                .andStatusEqualTo(StatusEnum.VALID.getCode())
                .andFirstChipPartNumberLike(like);
        example.or()
                .andStatusEqualTo(StatusEnum.VALID.getCode())
                .andSecondChipPartNumberLike(like);
        example.setOrderByClause("id desc");
        List<ChipCompareRecordDO> res = chipCompareRecordMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(res)) {
            return new ArrayList<>();
        }
        if (res.size() > limit) {
            return res.subList(0, limit);
        }
        return res;
    }
}
