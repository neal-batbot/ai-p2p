package com.babata.chip.common.enums;

public enum PermissionEnum {

    PUBLIC((byte) 0, "公有"),
    PRIVATE((byte) 1, "私有");

    private final byte code;
    private final String desc;

    PermissionEnum(byte code, String desc) {
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
