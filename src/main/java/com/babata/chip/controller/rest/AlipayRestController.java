package com.babata.chip.controller.rest;

import com.babata.chip.common.UserCache;
import com.babata.chip.common.UserContext;
import com.babata.chip.common.response.BaseResponse;
import com.babata.chip.repository.entity.UserBalanceDO;
import com.babata.chip.service.PaymentService;
import com.babata.chip.service.UserBalanceService;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

import static com.babata.chip.util.ResponseUtil.buildErrorResponse;
import static com.babata.chip.util.ResponseUtil.buildSuccessResponse;

@RestController
@Slf4j
public class AlipayRestController {
    @Resource
    private PaymentService paymentService;

    @Resource
    private UserBalanceService userBalanceService;

    @PostMapping("/api/payment/alipay/create")
    public BaseResponse createPayment(@RequestParam(value = "amount", required = true) BigDecimal amount) {
        try {
            UserContext uc = UserCache.getUserContext();
            Integer userId = uc.getUserid();
            log.info("createPayment userId:{}, amount:{}", userId, amount);

            if (amount == null || amount.compareTo(BigDecimal.ZERO) < 0) {
                return buildErrorResponse("金额不能为空或小于0");
            }

            String paymentForm = paymentService.createChipComparePayment(userId, amount);
            return buildSuccessResponse(paymentForm);
        } catch (Exception e) {
            log.error("createPayment error", e);
            return buildErrorResponse("create payment failed" + e.getMessage());
        }
    }

    @PostMapping("/api/payment/alipay/notify")
    public String alipayNotify(HttpServletRequest request) {
        // 将请求参数转换为Map
        Map<String, String> params = convertRequestParams(request);
        log.info("alipayNotify params : {}", params);

        try {
            boolean success = paymentService.handleAlipayNotify(params);
            return success ? "success" : "failure";
        } catch (Exception e) {
            log.error("alipayNotify handle error", e);
            return "failure";
        }
    }

    @GetMapping("/api/payment/alipay/balance")
    public BaseResponse getBalance() {
        UserContext uc = UserCache.getUserContext();
        Integer userId = uc.getUserid();
        UserBalanceDO balance = userBalanceService.getUserBalance(userId);
        return buildSuccessResponse(balance);
    }

    private Map<String, String> convertRequestParams(HttpServletRequest request) {
        Map<String, String> params = new HashMap<>();
        Map<String, String[]> requestParams = request.getParameterMap();

        for (String name : requestParams.keySet()) {
            String[] values = requestParams.get(name);
            String valueStr = "";
            for (int i = 0; i < values.length; i++) {
                valueStr = (i == values.length - 1) ? valueStr + values[i]
                        : valueStr + values[i] + ",";
            }
            params.put(name, valueStr);
        }
        return params;
    }

}
