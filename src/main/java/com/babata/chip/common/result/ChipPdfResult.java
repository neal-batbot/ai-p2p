package com.babata.chip.common.result;


public class ChipPdfResult {
    private String chipModel;
    private String textContent;
    private String pdfPath;

    public String getTextContent() {
        return textContent;
    }

    public void setTextContent(String textContent) {
        this.textContent = textContent;
    }

    public String getPdfPath() {
        return pdfPath;
    }

    public void setPdfPath(String pdfPath) {
        this.pdfPath = pdfPath;
    }

    public String getChipModel() {
        return chipModel;
    }

    public void setChipModel(String chipModel) {
        this.chipModel = chipModel;
    }
}
