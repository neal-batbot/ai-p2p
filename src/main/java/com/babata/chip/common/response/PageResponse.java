package com.babata.chip.common.response;

import lombok.Data;

@Data
public class PageResponse extends BaseResponse{
    private Object total;
    private int page;
    private int pageSize;
}
