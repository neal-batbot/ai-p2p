package com.babata.chip.service;

import com.alibaba.fastjson.JSONObject;
import com.alipay.api.AlipayClient;
import com.alipay.api.DefaultAlipayClient;
import com.alipay.api.internal.util.AlipaySignature;
import com.alipay.api.request.AlipayTradePagePayRequest;
import com.alipay.api.response.AlipayTradePagePayResponse;
import com.babata.chip.common.enums.OrderStatusEnum;
import com.babata.chip.repository.PaymentOrderRepository;
import com.babata.chip.repository.entity.PaymentOrderDO;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Date;
import java.util.Map;
import java.util.Objects;
import java.util.UUID;

@Service
@Slf4j
public class PaymentService {
    @Value("${alipay.app-id}")
    private String appId;
    @Value("${alipay.private-key}")
    private String privateKey;
    @Value("${alipay.public-key}")
    private String alipayPublicKey;
    @Value("${alipay.gateway-url}")
    private String gatewayUrl;
    @Value("${alipay.gateway-dev-url}")
    private String gatewayDevUrl;
    @Value("${alipay.notify-url}")
    private String notifyUrl;
    @Value("${alipay.return-url}")
    private String returnUrl;
    @Value("${alipay.charset}")
    private String alipayCharset;
    @Value("${alipay.sign-type}")
    private String alipaySignType;
    @Value("${alipay.format}")
    private String alipayFormat;

    @Resource
    private PaymentOrderRepository paymentOrderRepository;

    @Resource
    private UserBalanceService balanceService;


    public String createChipComparePayment(Integer userId, BigDecimal amount) throws Exception {
        // 1. 创建并初始化AlipayClient
        AlipayClient alipayClient = new DefaultAlipayClient(gatewayUrl, appId, privateKey, alipayFormat, alipayCharset,
                alipayPublicKey, alipaySignType);

        // 2. 创建页面支付请求对象
        AlipayTradePagePayRequest request = new AlipayTradePagePayRequest();
        request.setReturnUrl(returnUrl);
        request.setNotifyUrl(notifyUrl); // 重点：设置异步回调地址

        // 3. 构造业务参数
        String outTradeNo = "CHIP_COMPARE_RECHARGE_" + System.currentTimeMillis() + "_" + UUID.randomUUID().toString().substring(0, 8);
        JSONObject bizContent = new JSONObject();
        bizContent.put("out_trade_no", outTradeNo);
        bizContent.put("total_amount", amount.setScale(2, RoundingMode.HALF_UP).toString());
        bizContent.put("subject", "芯片对比充值");
        bizContent.put("product_code", "FAST_INSTANT_TRADE_PAY"); // 电脑网站固定值
        // 可选参数：timeout_express（订单超时时间）

        request.setBizContent(bizContent.toString());

        // 4. 调用SDK，获取支付页面的表单HTML
        AlipayTradePagePayResponse response = alipayClient.pageExecute(request);
        if (response.isSuccess()) {
            log.info("支付宝下单成功, body:{}", response.getBody());
            return response.getBody(); // 此HTML可直接返回给前端渲染
        } else {
            log.error("支付宝下单失败, code={}, msg={}, subMsg={}", response.getCode(), response.getMsg(), response.getSubMsg());
            throw new Exception("支付请求创建失败");
        }
    }

    @Transactional(rollbackFor = Exception.class)
    public boolean handleAlipayNotify(Map<String, String> params) {
        try {
            // 1. 验签
            boolean signVerified = AlipaySignature.rsaCheckV1(params, alipayPublicKey, alipayCharset, alipaySignType);
            if (!signVerified) {
                log.error("handleAlipayNotify 支付宝回调验签失败 params={}", params);
                return false;
            }

            // 2. 获取通知参数
            String tradeStatus = params.get("trade_status");
            String orderId = params.get("out_trade_no");
            String alipayTradeNo = params.get("trade_no");
            BigDecimal totalAmount = new BigDecimal(params.get("total_amount"));

            // 3. 查询订单
            PaymentOrderDO order = paymentOrderRepository.findByOrderId(orderId);
            if (order == null) {
                log.error("handleAlipayNotify 本地订单不存在: {}", orderId);
                return false;
            }

            // 4. 防止重复处理（幂等性）
            if (Objects.equals(OrderStatusEnum.SUCCESS.getCode(), order.getStatus())) {
                log.info("handleAlipayNotify 订单已处理过: {}", orderId);
                return true;
            }

            // 5. 处理交易成功
            if ("TRADE_SUCCESS".equals(tradeStatus) || "TRADE_FINISHED".equals(tradeStatus)) {
                // 验证金额
                if (order.getAmount().compareTo(totalAmount) != 0) {
                    log.error("handleAlipayNotify 金额不一致，本地订单金额:{}，通知金额:{}", order.getAmount(), totalAmount);
                    return false;
                }

                // 更新订单信息
                order.setStatus(OrderStatusEnum.SUCCESS.getCode());
                order.setAlipayTradeNo(alipayTradeNo);
                order.setNotifyTime(new Date());
                order.setModifyTime(new Date());
                paymentOrderRepository.save(order);

                // 增加用户余额
                balanceService.rechargeBalance(order.getUserId(), order.getAmount(), order.getOrderId());
                log.info("handleAlipayNotify 支付成功处理完成，订单id: {}", orderId);

            } else if ("TRADE_CLOSED".equals(tradeStatus)) {
                log.info("handleAlipayNotify 支付成功处理完成，订单关闭，订单id: {}", orderId);
                order.setStatus(OrderStatusEnum.CLOSED.getCode());
                order.setModifyTime(new Date());
                paymentOrderRepository.save(order);
            }
            return true;
        } catch (Exception e) {
            log.error("handleAlipayNotify 处理Alipay回调异常", e);
            throw new RuntimeException("Alipay回调处理失败", e);
        }
    }

}
