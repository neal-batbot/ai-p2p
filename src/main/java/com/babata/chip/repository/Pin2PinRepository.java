package com.babata.chip.repository;

import com.babata.chip.repository.entity.Pin2PinDO;
import com.babata.chip.repository.entity.Pin2PinDOExample;
import com.babata.chip.repository.mapper.Pin2PinMapper;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class Pin2PinRepository {
    @Resource
    private Pin2PinMapper pin2PinMapper;

    public List<Pin2PinDO> getPin2PinChipsByPartNumber(String partNumber) {
        Pin2PinDOExample example = new Pin2PinDOExample();
        example.createCriteria().andPartNumberEqualTo(partNumber);
        example.setOrderByClause("id desc");
        return pin2PinMapper.selectByExample(example);
    }

}
