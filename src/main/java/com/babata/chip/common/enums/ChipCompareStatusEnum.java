package com.babata.chip.common.enums;

public enum ChipCompareStatusEnum {
    SUCCESS((byte) 0, "对比成功"),
    PDF_PROCESS_ERROR((byte) 1, "PDF解析失败"),
    FAILED((byte) 2, "对比失败");

    private final byte code;
    private final String desc;

    ChipCompareStatusEnum(byte code, String desc) {
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
