package com.babata.chip.service;

import com.babata.chip.common.enums.BalanceChangeTypeEnum;
import com.babata.chip.repository.BalanceChangeLogRepository;
import com.babata.chip.repository.UserBalanceRepository;
import com.babata.chip.repository.entity.BalanceChangeLogDO;
import com.babata.chip.repository.entity.UserBalanceDO;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.Date;

@Service
@Slf4j
public class UserBalanceService {

    @Resource
    private UserBalanceRepository userBalanceRepository;

    @Resource
    private BalanceChangeLogRepository balanceChangeLogRepository;

    @Transactional(rollbackFor = Exception.class)
    public void rechargeBalance(Integer userId, BigDecimal amount, String orderId) {
        UserBalanceDO balance = this.getUserBalance(userId);

        // 记录变动前余额
        BigDecimal beforeBalance = balance.getTotalBalance();

        // 更新余额
        BigDecimal afterBalance = BigDecimal.valueOf(balance.getTotalBalance().longValue() + amount.longValue());
        balance.setTotalBalance(afterBalance);
        balance.setModifyTime(new Date());
        userBalanceRepository.save(balance);

        // 记录充值流水
        BalanceChangeLogDO log = new BalanceChangeLogDO();
        log.setUserId(userId);
        log.setChangeNum(amount);
        log.setType(BalanceChangeTypeEnum.RECHARGE.getCode());
        log.setOrderId(orderId);
        log.setRemark("支付宝充值");
        log.setBeforeBalance(beforeBalance);
        log.setAfterBalance(afterBalance);
        log.setCreateTime(new Date());
        balanceChangeLogRepository.save(log);
    }

    @Transactional(rollbackFor = Exception.class)
    public boolean consumeBalance(Integer userId, String orderId, BigDecimal amount) {
        // 使用原子扣减
        int updated = userBalanceRepository.consumeBalance(userId, amount);

        if (updated > 0) {
            // 查询更新后的余额
            UserBalanceDO balance = userBalanceRepository.findByUserId(userId);
            BigDecimal totalBalance = balance.getTotalBalance();

            // 记录消费流水
            BalanceChangeLogDO log = new BalanceChangeLogDO();
            log.setUserId(userId);
            log.setChangeNum(BigDecimal.valueOf(-amount.longValue()));
            log.setType(BalanceChangeTypeEnum.CONSUME.getCode());
            log.setOrderId(orderId);
            log.setRemark("芯片对比调用扣减");
            BigDecimal beforeBalance = totalBalance.add(amount);
            log.setBeforeBalance(beforeBalance); // 扣减前的余额
            log.setAfterBalance(totalBalance);
            log.setCreateTime(new Date());
            balanceChangeLogRepository.save(log);
            return true;
        }
        return false; // 余额不足或更新失败
    }

    public UserBalanceDO getUserBalance(Integer userId) {
        UserBalanceDO balance = userBalanceRepository.findByUserId(userId);
        if (balance == null) {
            // 初始化用户余额
            balance = new UserBalanceDO();
            balance.setUserId(userId);
            balance.setTotalBalance(BigDecimal.valueOf(0.0));
            balance.setTotalCnt(0);
            balance.setChargeType((byte) 0);
            balance.setVersion(0);
            balance.setCreateTime(new Date());
            balance.setModifyTime(new Date());
            userBalanceRepository.save(balance);
        }
        return balance;
    }
}
