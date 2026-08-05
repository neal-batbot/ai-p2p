package com.babata.chip.common.dto;

import lombok.Data;

import java.util.Date;

@Data
public class ChipCompareRecordDTO {

    private Integer id;

    private Integer userId;

    private String firstChipPartNumber;

    private String secondChipPartNumber;

    private String fileList;


    private Byte status;

    private String prompt;


    private String apiSupplier;


    private String model;


    private Integer inputTokens;


    private Integer outputTokens;


    private Integer duration;


    private Integer cost;


    private String result;


    private String createTime;


    private String modifyTime;
}
