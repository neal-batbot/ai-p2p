package com.babata.chip.common.enums;

public enum StatusEnum {
    VALID((byte) 0, "生效"),
    INVALID((byte) -1, "无效");

    private final byte code;
    private final String desc;

    StatusEnum(byte code, String desc) {
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
