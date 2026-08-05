package com.babata.chip.repository;

import com.babata.chip.repository.entity.ChipDO;
import com.babata.chip.repository.entity.ChipDOExample;
import com.babata.chip.repository.mapper.ChipMapper;

import jakarta.annotation.Resource;
import org.apache.commons.collections.CollectionUtils;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public class ChipRepository {

    @Resource
    private ChipMapper chipMapper;

    public List<ChipDO> getChipsByPartNumber(String partNumber) {
        ChipDOExample example = new ChipDOExample();
        example.createCriteria().andPartNumberLike("%" + partNumber + "%");
        example.setOrderByClause("id desc");
        return chipMapper.selectByExample(example);
    }

    public List<ChipDO> getChipsByPartNumberFuzzy(String partNumber) {
        ChipDOExample example = new ChipDOExample();
        example.createCriteria().andPartNumberLike("%" + partNumber + "%");
        example.setOrderByClause("id desc");
        return chipMapper.selectByExample(example);
    }

    public ChipDO getChipById(Long id) {
        ChipDOExample example = new ChipDOExample();
        example.createCriteria().andIdEqualTo(id);
        List<ChipDO> chips = chipMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(chips)) {
            return null;
        }
        return chips.get(0);
    }

    /**
     * 按型号精确匹配（大小写不敏感），用于芯片库去重。
     */
    public ChipDO getChipByPartNumberExact(String partNumber) {
        if (partNumber == null || partNumber.trim().isEmpty()) {
            return null;
        }
        ChipDOExample example = new ChipDOExample();
        example.createCriteria().andPartNumberEqualTo(partNumber.trim());
        List<ChipDO> chips = chipMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(chips)) {
            return null;
        }
        return chips.get(0);
    }

    public void addChip(ChipDO chipDO) {
        chipMapper.insert(chipDO);
    }
}
