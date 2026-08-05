package com.babata.chip.common.response;

public class LlmStreamResponse {
    private String type;
    private String content;
    private boolean isFinished;

    public LlmStreamResponse(String content) {
        this.content = content;
    }

    public LlmStreamResponse(String type, String content) {
        this.type = type;
        this.content = content;
    }

    public LlmStreamResponse(String content, boolean isFinished) {
        this.content = content;
        this.isFinished = isFinished;
    }

    public LlmStreamResponse(String type, String content, boolean isFinished) {
        this.type = type;
        this.content = content;
        this.isFinished = isFinished;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }


    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public boolean isFinished() {
        return isFinished;
    }

    public void setFinished(boolean finished) {
        isFinished = finished;
    }
}
