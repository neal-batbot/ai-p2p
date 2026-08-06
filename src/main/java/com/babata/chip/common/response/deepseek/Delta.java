package com.babata.chip.common.response.deepseek;

public class Delta {
    private String content;

    /** OpenAI-compatible reasoning stream emitted before final content by DeepSeek v4. */
    private String reasoningContent;

    private String role;

    public String getReasoningContent() {
        return reasoningContent;
    }

    public void setReasoningContent(String reasoningContent) {
        this.reasoningContent = reasoningContent;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
