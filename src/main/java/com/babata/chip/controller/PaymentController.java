package com.babata.chip.controller;

import com.babata.chip.common.UserCache;
import com.babata.chip.common.UserContext;
import com.babata.chip.repository.PaymentOrderRepository;
import com.babata.chip.repository.entity.PaymentOrderDO;
import com.babata.chip.repository.entity.UserBalanceDO;
import com.babata.chip.service.UserBalanceService;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
public class PaymentController {
    @Resource
    private PaymentOrderRepository paymentOrderRepository;

    @Resource
    private UserBalanceService userBalanceService;

    @RequestMapping("/payment")
    public String payment(Model model) {
        UserContext uc = UserCache.getUserContext();
        Integer userId = uc.getUserid();
        model.addAttribute("username", uc.getUsername());

        UserBalanceDO userBalanceDO = userBalanceService.getUserBalance(userId);
        List<PaymentOrderDO> orders = paymentOrderRepository.findByUserId(uc.getUserid());
        model.addAttribute("orders", orders);
        model.addAttribute("totalBalance", userBalanceDO.getTotalBalance());
        return "payment";
    }
}
