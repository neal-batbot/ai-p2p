package com.babata.chip.repository;

import com.babata.chip.repository.entity.PaymentOrderDO;
import com.babata.chip.repository.entity.PaymentOrderDOExample;
import com.babata.chip.repository.mapper.PaymentOrderMapper;
import jakarta.annotation.Resource;
import org.apache.commons.collections.CollectionUtils;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class PaymentOrderRepository {

    @Resource
    PaymentOrderMapper paymentOrderMapper;

    public int save(PaymentOrderDO paymentOrderDO) {
        return paymentOrderMapper.insert(paymentOrderDO);
    }

    public void update(PaymentOrderDO paymentOrderDO) {
        paymentOrderMapper.updateByPrimaryKeySelective(paymentOrderDO);
    }

    public PaymentOrderDO findById(Integer id) {
        PaymentOrderDOExample example = new PaymentOrderDOExample();
        example.createCriteria().andIdEqualTo(id);
        List<PaymentOrderDO> res = paymentOrderMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(res)) {
            return null;
        }
        return res.get(0);
    }

    public PaymentOrderDO findByOrderId(String orderId) {
        PaymentOrderDOExample example = new PaymentOrderDOExample();
        example.createCriteria().andOrderIdEqualTo(orderId);
        List<PaymentOrderDO> res = paymentOrderMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(res)) {
            return null;
        }
        return res.get(0);
    }

    public List<PaymentOrderDO> findByUserId(Integer userId) {
        PaymentOrderDOExample example = new PaymentOrderDOExample();
        example.createCriteria().andUserIdEqualTo(userId);
        example.setOrderByClause("id desc");
        List<PaymentOrderDO> res = paymentOrderMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(res)) {
            return new ArrayList<>();
        }
        return res;
    }

}
