package com.babata.chip.common.enums;

public enum OrderStatusEnum {
    WAIT_PAY((byte) 0, "待支付"),
    SUCCESS((byte) 1, "支付成功"),
    FAILED((byte) 2, "支付失败"),
    CLOSED((byte) 2, "已关闭"),
    TIMEOUT((byte) 2, "已超时");

    private final byte code;
    private final String desc;

    OrderStatusEnum(byte code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public byte getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }
}
