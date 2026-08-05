package com.babata.chip.common.response.deepseek;

public class Usage {
    private Integer completionTokens;
    private Integer promptTokens;
    private Integer totalTokens;

    private Integer promptCacheHitTokens;
    private Integer promptCacheMissTokens;

    private Object completionTokenDetails;

    public Integer getPromptTokens() {
        return promptTokens;
    }

    public void setPromptTokens(Integer promptTokens) {
        this.promptTokens = promptTokens;
    }

    public Integer getCompletionTokens() {
        return completionTokens;
    }

    public void setCompletionTokens(Integer completionTokens) {
        this.completionTokens = completionTokens;
    }

    public Integer getTotalTokens() {
        return totalTokens;
    }

    public void setTotalTokens(Integer totalTokens) {
        this.totalTokens = totalTokens;
    }

    public Integer getPromptCacheMissTokens() {
        return promptCacheMissTokens;
    }

    public void setPromptCacheMissTokens(Integer promptCacheMissTokens) {
        this.promptCacheMissTokens = promptCacheMissTokens;
    }

    public Integer getPromptCacheHitTokens() {
        return promptCacheHitTokens;
    }

    public void setPromptCacheHitTokens(Integer promptCacheHitTokens) {
        this.promptCacheHitTokens = promptCacheHitTokens;
    }

    public Object getCompletionTokenDetails() {
        return completionTokenDetails;
    }

    public void setCompletionTokenDetails(Object completionTokenDetails) {
        this.completionTokenDetails = completionTokenDetails;
    }

}
