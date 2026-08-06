package com.babata.chip.service;

import com.babata.chip.common.result.ChipPdfResult;
import org.junit.jupiter.api.Test;

import java.lang.reflect.Method;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class ChipAnalyzeServicePromptTest {

    @Test
    void addsMandatoryTimingAcceptanceCriteriaForAdcDatasheets() throws Exception {
        ChipPdfResult adc = new ChipPdfResult();
        adc.setChipModel("AD7606");
        adc.setTextContent("16-bit analog-to-digital converter with CONVST and BUSY timing");

        String prompt = buildUserPrompt(List.of(adc));

        assertTrue(prompt.contains("ADC 报告交付验收（不可省略）"));
        assertTrue(prompt.contains("ADC 时序与接口兼容性"));
        assertTrue(prompt.contains("BUSY/EOC/DRDY"));
    }

    @Test
    void doesNotApplyAdcCriteriaToNonConverterDatasheets() throws Exception {
        ChipPdfResult opAmp = new ChipPdfResult();
        opAmp.setChipModel("OP07");
        opAmp.setTextContent("Precision operational amplifier, low offset voltage");

        String prompt = buildUserPrompt(List.of(opAmp));

        assertFalse(prompt.contains("ADC 报告交付验收（不可省略）"));
    }

    private String buildUserPrompt(List<ChipPdfResult> chips) throws Exception {
        Method method = ChipAnalyzeService.class.getDeclaredMethod("buildUserPrompt", List.class, String.class, String.class);
        method.setAccessible(true);
        return (String) method.invoke(new ChipAnalyzeService(), chips, null, "full");
    }
}
