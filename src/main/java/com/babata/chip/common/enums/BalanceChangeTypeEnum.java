package com.babata.chip.common.enums;

public enum BalanceChangeTypeEnum {
    RECHARGE((byte) 0, "充值"),
    CONSUME((byte) 1, "消费"),
    REFUND((byte) 2, "退款");

    private final byte code;
    private final String desc;

    BalanceChangeTypeEnum(byte code, String desc) {
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
