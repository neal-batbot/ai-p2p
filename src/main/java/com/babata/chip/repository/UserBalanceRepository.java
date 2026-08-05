package com.babata.chip.repository;

import com.babata.chip.repository.entity.UserBalanceDO;
import com.babata.chip.repository.entity.UserBalanceDOExample;
import com.babata.chip.repository.mapper.UserBalanceMapper;
import jakarta.annotation.Resource;
import org.apache.commons.collections.CollectionUtils;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public class UserBalanceRepository {

    @Resource
    private UserBalanceMapper userBalanceMapper;

    public int save(UserBalanceDO userBalanceDO) {
        return userBalanceMapper.insert(userBalanceDO);
    }

    public UserBalanceDO findByUserId(Integer userId) {
        if (userId == null) {
            return null;
        }
        UserBalanceDOExample example = new UserBalanceDOExample();
        example.createCriteria().andUserIdEqualTo(userId);
        List<UserBalanceDO> res = userBalanceMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(res)) {
            return null;
        }
        return res.get(0);
    }

    public int consumeBalance(Integer userId, BigDecimal amount) {
        return userBalanceMapper.deductBalance(userId, amount);
        /*
            @Update("UPDATE user_balance " +
            "SET total_balance = total_balance - #{amount}, " +
            "    version = version + 1, " +
            "    modify_time = NOW() " +
            "WHERE user_id = #{userId} " +
            "  AND total_balance >= #{amount} " +
            "  AND charge_type = 0")
            int deductBalance(@Param("userId") Integer userId, @Param("amount") BigDecimal amount);
         */
    }
}
