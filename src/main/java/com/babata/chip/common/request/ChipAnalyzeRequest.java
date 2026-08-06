package com.babata.chip.common.request;

import java.util.List;

public class ChipAnalyzeRequest {
    private List<String> chipPartNumberList;
    private List<String> fileList;
    private String modelName;
    private Boolean stream;
    private Float temperature;
    private Integer maxTokens;
    private String systemPrompt;
    private String userPrompt;
    /** quick=快速结论, full=完整报告（默认） */
    private String mode;

    public String getMode() {
        return mode;
    }

    public void setMode(String mode) {
        this.mode = mode;
    }

    public List<String> getChipPartNumberList() {
        return chipPartNumberList;
    }

    public void setChipPartNumberList(List<String> chipPartNumberList) {
        this.chipPartNumberList = chipPartNumberList;
    }

    public Boolean isStream() {
        return stream;
    }

    public void setStream(Boolean stream) {
        this.stream = stream;
    }

    public String getUserPrompt() {
        return userPrompt;
    }

    public void setUserPrompt(String userPrompt) {
        this.userPrompt = userPrompt;
    }

    public String getSystemPrompt() {
        return systemPrompt;
    }

    public void setSystemPrompt(String systemPrompt) {
        this.systemPrompt = systemPrompt;
    }

    public Integer getMaxTokens() {
        return maxTokens;
    }

    public void setMaxTokens(Integer maxTokens) {
        this.maxTokens = maxTokens;
    }

    public Float getTemperature() {
        return temperature;
    }

    public void setTemperature(Float temperature) {
        this.temperature = temperature;
    }

    public String getModelName() {
        return modelName;
    }

    public void setModelName(String modelName) {
        this.modelName = modelName;
    }

    public List<String> getFileList() {
        return fileList;
    }

    public void setFileList(List<String> fileList) {
        this.fileList = fileList;
    }
}
