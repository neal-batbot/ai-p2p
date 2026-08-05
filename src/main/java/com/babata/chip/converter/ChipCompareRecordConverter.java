package com.babata.chip.converter;

import com.babata.chip.common.dto.ChipCompareRecordDTO;
import com.babata.chip.repository.entity.ChipCompareRecordDO;
import com.babata.chip.util.DateUtil;
import org.apache.commons.collections.CollectionUtils;
import org.springframework.beans.BeanUtils;

import java.util.ArrayList;
import java.util.List;

public class ChipCompareRecordConverter {
    public static List<ChipCompareRecordDTO> convert2DTO(List<ChipCompareRecordDO> recordDOS) {
        if (CollectionUtils.isEmpty(recordDOS)) {
            return new ArrayList<>();
        }
        List<ChipCompareRecordDTO> res = new ArrayList<>();
        for (ChipCompareRecordDO recordDO : recordDOS) {
            ChipCompareRecordDTO dto = new ChipCompareRecordDTO();
            BeanUtils.copyProperties(recordDO, dto);
            dto.setCreateTime(DateUtil.getDateString(recordDO.getCreateTime()));
            dto.setModifyTime(DateUtil.getDateString(recordDO.getModifyTime()));
            res.add(dto);
        }
        return res;
    }
}
