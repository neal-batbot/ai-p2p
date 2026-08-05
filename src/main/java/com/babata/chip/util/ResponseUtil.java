package com.babata.chip.util;

import com.babata.chip.common.enums.ErrorCodeEnum;
import com.babata.chip.common.response.BaseResponse;
import com.babata.chip.common.response.EditorMDResponse;
import com.babata.chip.common.response.PageResponse;

public class ResponseUtil {
    public static BaseResponse buildSuccessResponse(BaseResponse response) {
        response.setStatus(ErrorCodeEnum.SUCCESS.getCode());
        response.setMessage("success");
        return response;
    }

    public static BaseResponse buildSuccessResponse(Object data) {
        BaseResponse response = new BaseResponse();
        response.setStatus(ErrorCodeEnum.SUCCESS.getCode());
        response.setMessage("success");
        response.setData(data);
        return response;
    }

    public static BaseResponse buildSuccessResponse(Object data, String message) {
        BaseResponse response = new BaseResponse();
        response.setStatus(ErrorCodeEnum.SUCCESS.getCode());
        response.setMessage(message);
        response.setData(data);
        return response;
    }

    public static BaseResponse buildSuccessResponse() {
        BaseResponse response = new BaseResponse();
        response.setStatus(ErrorCodeEnum.SUCCESS.getCode());
        response.setMessage("success");
        return response;
    }

    public static PageResponse buildSuccessPageResponse(int pageNo, int pageSize, int total ,Object data) {
        PageResponse response = new PageResponse();
        response.setStatus(ErrorCodeEnum.SUCCESS.getCode());
        response.setMessage("success");
        response.setTotal(total);
        response.setData(data);
        response.setPage(pageNo);
        response.setPageSize(pageSize);
        return response;
    }

    public static BaseResponse buildErrorResponse(Object data) {
        BaseResponse response = new BaseResponse();
        response.setStatus(ErrorCodeEnum.DEFAULT_ERROR.getCode());
        response.setMessage("server error");
        response.setData(data);
        return response;
    }

    public static BaseResponse buildErrorResponse(Object data, String message) {
        BaseResponse response = new BaseResponse();
        response.setStatus(ErrorCodeEnum.DEFAULT_ERROR.getCode());
        response.setMessage(message);
        response.setData(data);
        return response;
    }

    public static BaseResponse buildErrorResponse() {
        BaseResponse response = new BaseResponse();
        response.setStatus(ErrorCodeEnum.DEFAULT_ERROR.getCode());
        response.setMessage("server error");
        return response;
    }

    public static BaseResponse buildErrorResponse(String message) {
        BaseResponse response = new BaseResponse();
        response.setStatus(ErrorCodeEnum.DEFAULT_ERROR.getCode());
        response.setMessage(message);
        return response;
    }

    public static BaseResponse buildBaseResponse(Integer status, String message, Object data) {
        BaseResponse response = new BaseResponse();
        response.setStatus(status);
        response.setMessage(message);
        response.setData(data);
        return response;
    }

    public static EditorMDResponse buildEditorMDResponse(Integer success, String message, String url) {
        EditorMDResponse response = new EditorMDResponse();
        response.setSuccess(success);
        response.setMessage(message);
        response.setUrl(url);
        return response;
    }

}