package com.babata.chip.common.enums;

public enum ArticleStatusEnum {
    PUBLISHED((byte) 0, "已发布"),
    DRAFT((byte) 1, "保存草稿"),
    DELETED((byte) 2, "已删除");

    private final byte code;
    private final String desc;

    ArticleStatusEnum(byte code, String desc) {
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
