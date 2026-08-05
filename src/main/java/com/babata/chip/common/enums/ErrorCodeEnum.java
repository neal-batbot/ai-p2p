package com.babata.chip.common.enums;

public enum ErrorCodeEnum {
    DEFAULT_ERROR(-1, "Default Error"),
    SUCCESS(0, "Success"),
    NOT_FOUND(404, "Not Found"),
    SERVER_ERROR(500, "Server Error"),
    ;

    private final int code;
    private final String desc;

    ErrorCodeEnum(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public int getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

}
