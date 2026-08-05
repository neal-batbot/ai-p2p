package com.babata.chip.repository;

import com.babata.chip.repository.entity.BalanceChangeLogDO;
import com.babata.chip.repository.mapper.BalanceChangeLogMapper;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Repository;

@Repository
public class BalanceChangeLogRepository {

    @Resource
    private BalanceChangeLogMapper balanceChangeLogMapper;

    public int save(BalanceChangeLogDO balanceChangeLogDO) {
        return balanceChangeLogMapper.insert(balanceChangeLogDO);
    }

}
