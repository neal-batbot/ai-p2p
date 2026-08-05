package com.babata.chip.common.dto;

import lombok.Data;

@Data
public class ArticleDTO {
    private Integer id;
    private String title;
    private String subtitle;
    private String enTitle;
    private String summary;
    private String content;
    private String contentText;
    private String tag;
    private String coverImage;
    private String createTime;
    private Integer commentCount;
    private Integer readCount;
    private String author;
    private Integer status;
//    private String tags;
}
