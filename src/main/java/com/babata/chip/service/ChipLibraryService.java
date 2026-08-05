package com.babata.chip.service;

import com.babata.chip.common.result.ChipPdfResult;
import com.babata.chip.repository.ChipRepository;
import com.babata.chip.repository.entity.ChipDO;
import jakarta.annotation.Resource;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.Date;
import java.util.List;
import java.util.regex.Pattern;

/**
 * 芯片库沉淀服务：每次分析时，把参与分析的芯片自动录入 chip 表。
 * 用户使用一次，库就多一个芯片；后续可在库中直接选择芯片，无需重新上传 datasheet。
 */
@Service
public class ChipLibraryService {
    private static final Logger logger = LoggerFactory.getLogger(ChipLibraryService.class);

    @Resource
    private ChipRepository chipRepository;

    /** 常见厂商名（用于从 datasheet 文本中识别制造商） */
    private static final String[] KNOWN_MANUFACTURERS = {
            "Texas Instruments", "TI", "NXP", "STMicroelectronics", "ST", "Analog Devices", "ADI",
            "Infineon", "Microchip", "onsemi", "ON Semiconductor", "Renesas", "Maxim", "Vishay",
            "Samsung", "Murata", "Panasonic", "Sony", "Qualcomm", "Silicon Labs", "Cypress",
            "3PEAK", "Novosense", "SiTime", "SiT", "Chipanalog", "MERAKI", "MPS", "Monolithic Power"
    };

    private static final Pattern MANUFACTURER_PATTERN = Pattern.compile(
            "\\b(" + String.join("|", KNOWN_MANUFACTURERS).replace(" ", "\\s+") + ")\\b",
            Pattern.CASE_INSENSITIVE);

    /** 文本摘要保留长度 */
    private static final int SUMMARY_LENGTH = 3000;

    /**
     * 将本次分析的芯片沉淀到芯片库。
     * 已存在的型号跳过；新型号插入（part_number + 文本摘要）。
     *
     * @return 新增的芯片数量
     */
    public int recordChips(List<ChipPdfResult> pdfResultList) {
        if (CollectionUtils.isEmpty(pdfResultList)) {
            return 0;
        }
        int added = 0;
        for (ChipPdfResult result : pdfResultList) {
            String partNumber = result.getChipModel();
            if (StringUtils.isBlank(partNumber)) {
                continue;
            }
            partNumber = partNumber.trim();
            // 已存在则跳过（保持库内数据纯净）
            if (chipRepository.getChipByPartNumberExact(partNumber) != null) {
                continue;
            }
            ChipDO chipDO = new ChipDO();
            chipDO.setPartNumber(partNumber);
            chipDO.setManufacturer(extractManufacturer(result.getTextContent()));
            chipDO.setSheetUrl(result.getPdfPath());
            chipDO.setParameter(buildParameterSummary(result.getTextContent()));
            chipDO.setDescription(buildDescription(result.getTextContent()));
            chipDO.setCreateTime(new Date());
            chipDO.setModifyTime(new Date());
            try {
                chipRepository.addChip(chipDO);
                added++;
                logger.info("chip library: added chip {}, manufacturer={}", partNumber, chipDO.getManufacturer());
            } catch (Exception e) {
                logger.warn("chip library: add chip {} failed: {}", partNumber, e.getMessage());
            }
        }
        return added;
    }

    /** 从 datasheet 文本中识别厂商 */
    private String extractManufacturer(String text) {
        if (StringUtils.isBlank(text)) {
            return null;
        }
        java.util.regex.Matcher m = MANUFACTURER_PATTERN.matcher(text);
        if (m.find()) {
            return m.group(1);
        }
        return null;
    }

    /** 生成参数摘要：取 datasheet 开头文本（通常含标题、特性、关键参数） */
    private String buildParameterSummary(String text) {
        if (StringUtils.isBlank(text)) {
            return "";
        }
        String cleaned = text.trim();
        return cleaned.length() > SUMMARY_LENGTH ? cleaned.substring(0, SUMMARY_LENGTH) : cleaned;
    }

    /** 生成描述：datasheet 标题行（通常第一行或前几行） */
    private String buildDescription(String text) {
        if (StringUtils.isBlank(text)) {
            return null;
        }
        String cleaned = text.trim();
        int newline = cleaned.indexOf('\n');
        String firstLine = newline > 0 ? cleaned.substring(0, newline) : cleaned;
        return firstLine.length() > 200 ? firstLine.substring(0, 200) : firstLine;
    }
}
