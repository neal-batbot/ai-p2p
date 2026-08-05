package com.babata.chip.common.enums;

public enum AuthorityEnum {
    SUPER((byte) 1, "超级管理员"),
    COMMON_ADMIN((byte) 2, "普通管理员"),
    USER((byte) 3, "普通用户");


    private final byte code;
    private final String desc;

    AuthorityEnum(byte code, String desc) {
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
