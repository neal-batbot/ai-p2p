package com.babata.chip.util;

import com.babata.chip.common.result.ChipPdfResult;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import org.apache.pdfbox.cos.COSName;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDResources;
import org.apache.pdfbox.pdmodel.graphics.PDXObject;
import org.apache.pdfbox.pdmodel.graphics.form.PDFormXObject;
import org.apache.pdfbox.pdmodel.graphics.image.PDImageXObject;
import org.apache.pdfbox.text.PDFTextStripper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;
import java.util.concurrent.TimeUnit;


@Service
public class PDFProcessor {
    private static final Logger logger = LoggerFactory.getLogger(PDFProcessor.class);

    private final Path tempPath;

    // 添加全局图片计数器
    private int globalImageCounter = 1;

    @Value("${files.path.pdf-file-path}")
    private String PDF_FILE_PATH;

    public PDFProcessor() throws IOException {
        this.tempPath = Paths.get(System.getProperty("user.dir") + "/files/");
        if (!Files.exists(this.tempPath)) {
            Files.createDirectories(this.tempPath);
        }
    }

    public String extractTextFromPdf(String pdfPath) throws IOException {
        // 优先使用 pdf-inspector（Rust 极速解析：表格/标题/格式保留）
        String pdfInspectorText = extractWithPdfInspector(pdfPath);
        if (pdfInspectorText != null) {
            return pdfInspectorText;
        }
        // fallback: Apache PDFBox 纯文本提取
        try (PDDocument document = PDDocument.load(new File(pdfPath))) {
            PDFTextStripper stripper = new PDFTextStripper() {
                @Override
                protected void writePageEnd() throws IOException {
                    super.writePageEnd();
                    super.writeString(String.format("\n\n--- Page %d ---\n\n", getCurrentPageNo()));
                }
            };
            return stripper.getText(document);
        }
    }

    /**
     * 通过 pdf-inspector CLI（Node.js）提取结构化 Markdown 文本。
     * 返回 null 表示不可用/失败（由调用方 fallback 到 PDFBox）。
     */
    private String extractWithPdfInspector(String pdfPath) {
        try {
            String script = System.getProperty("user.dir") + "/scripts/pdf-inspector/extract.js";
            if (!Files.exists(Paths.get(script))) {
                return null;
            }
            ProcessBuilder pb = new ProcessBuilder("node", script, pdfPath);
            pb.redirectErrorStream(true);
            Process proc = pb.start();
            String output = new String(proc.getInputStream().readAllBytes(), StandardCharsets.UTF_8);
            if (!proc.waitFor(30, TimeUnit.SECONDS)) {
                proc.destroyForcibly();
                return null;
            }
            JSONObject json = JSON.parseObject(output);
            if (json != null && Boolean.TRUE.equals(json.getBoolean("ok"))) {
                String md = json.getString("markdown");
                if (md != null && !md.isEmpty()) {
                    return md;
                }
            }
        } catch (Exception e) {
            logger.warn("pdf-inspector extraction failed, fallback to PDFBox: {}", e.getMessage());
        }
        return null;
    }

    public List<Map<String, Object>> extractTablesFromPdf(String pdfPath) throws IOException {
        // 注意：这是一个简化的实现，实际表格提取需要更复杂的逻辑
        List<Map<String, Object>> tables = new ArrayList<>();
        try (PDDocument document = PDDocument.load(new File(pdfPath))) {
            PDFTextStripper stripper = new PDFTextStripper();
            for (int i = 1; i <= document.getNumberOfPages(); i++) {
                stripper.setStartPage(i);
                stripper.setEndPage(i);
                String pageText = stripper.getText(document);

                // 按连续空行分块
                String[] blocks = pageText.split("\\r?\\n\\s*\\r?\\n");
                for (String block : blocks) {
                    String[] lines = block.split("\\r?\\n");
                    if (lines.length > 3) {  // 如果块内行数大于3，认为是表格
                        Map<String, Object> tableData = new HashMap<>();
                        tableData.put("page", i);    // zero-based page index
                        tableData.put("content", block.trim());
                        tables.add(tableData);
                    }
                }
            }
        }
        return tables;
    }


    public List<String> extractImagesFromPdf(String pdfPath, String outputDir) throws IOException {
        Path outputPath = outputDir != null ? Paths.get(outputDir) : tempPath;
        if (!Files.exists(outputPath)) {
            Files.createDirectories(outputPath);
        }
        pdfPath = this.tempPath + "\\" + pdfPath;
        List<String> imagePaths = new ArrayList<>();
        try (PDDocument document = PDDocument.load(new File(pdfPath))) {
            // 先处理文档全局资源
            // processResources(document, document, outputPath, imagePaths);

            // 处理每个页面的资源
            for (PDPage page : document.getPages()) {
                processResources(page.getResources(), document, outputPath, imagePaths);
            }
        }
        return imagePaths;
    }

    private void processResources(PDResources resources,
                                  PDDocument document,
                                  Path outputPath,
                                  List<String> imagePaths) throws IOException {
        if (resources == null) return;

        for (COSName name : resources.getXObjectNames()) {
            PDXObject xObject = resources.getXObject(name);

            if (xObject instanceof PDImageXObject) {
                handleImage((PDImageXObject) xObject, outputPath, imagePaths);
            } else if (xObject instanceof PDFormXObject) {
                // 递归处理表单对象中的资源
                processResources(((PDFormXObject) xObject).getResources(),
                        document, outputPath, imagePaths);
            }
        }
    }

    private void handleImage(PDImageXObject image,
                             Path outputPath,
                             List<String> imagePaths) {
        try {
            String suffix = image.getSuffix();
            if (suffix == null || suffix.isEmpty()) {
                suffix = determineImageFormat(image.getImage());
            }

            // 处理特殊格式转换
            suffix = normalizeSuffix(suffix);

            // 生成唯一文件名
            String fileName = String.format("img_%d_%s.%s",
                    globalImageCounter++,
                    UUID.randomUUID().toString().substring(0, 8),
                    suffix);

            Path imagePath = outputPath.resolve(fileName);
            BufferedImage bufferedImage = image.getImage();

            // 检查ImageIO支持情况
            String[] formats = ImageIO.getWriterFormatNames();
            String finalSuffix = suffix;
            String format = Arrays.stream(formats)
                    .filter(f -> f.equalsIgnoreCase(finalSuffix))
                    .findFirst()
                    .orElse("png"); // 默认回退到PNG

            // 特殊格式处理
            if (bufferedImage.getColorModel().getPixelSize() == 1) {
                format = "png"; // 二值图像强制使用PNG
            }

            if (ImageIO.write(bufferedImage, format, imagePath.toFile())) {
                imagePaths.add(imagePath.toString());
                System.out.println("成功保存图片: " + imagePath);
            } else {
                System.err.println("无法保存图片格式: " + format);
            }
        } catch (IOException e) {
            System.err.println("图片保存失败: " + e.getMessage());
            logger.error("handleImage error", e);
        }
    }

    private String determineImageFormat(BufferedImage image) {
        // 根据图像类型判断格式
        if (image.getColorModel().getPixelSize() == 1) return "png";
        if (image.getColorModel().hasAlpha()) return "png";
        return "jpg";
    }

    private String normalizeSuffix(String suffix) {
        Map<String, String> formatMapping = new HashMap<>();
        formatMapping.put("jpx", "jpeg");
        formatMapping.put("tif", "tiff");
        formatMapping.put("tiff", "tiff");
        formatMapping.put("jp2", "jpeg2000");
        return formatMapping.getOrDefault(suffix.toLowerCase(), suffix);
    }

    public ChipPdfResult processPdf(String pdfPath, String chipPartNumber) throws IOException {
        String fileName = new File(pdfPath).getName();
//        String chipModel = fileName.contains(".") ?
//                fileName.substring(0, fileName.lastIndexOf('.')) : fileName;
        ChipPdfResult result = new ChipPdfResult();
        result.setChipModel(chipPartNumber);
        result.setTextContent(extractTextFromPdf(pdfPath));
        // result.put("tables", extractTablesFromPdf(pdfPath));
        result.setPdfPath(pdfPath);
        return result;
    }

    public List<ChipPdfResult> processMultiplePdfs(List<String> pdfPaths, List<String> chipPartNumberList) throws IOException {
        List<ChipPdfResult> results = new ArrayList<>();
        for (int i = 0; i < pdfPaths.size(); i++) {
            String pdfPath = pdfPaths.get(i);
            // chipPartNumberList 为空时从文件名推断型号
            String chipPartNumber = (chipPartNumberList != null && i < chipPartNumberList.size())
                    ? chipPartNumberList.get(i)
                    : getBaseName(pdfPath);
            ChipPdfResult result = processPdf(System.getProperty("user.dir") + PDF_FILE_PATH + pdfPath, chipPartNumber);
            results.add(result);
        }
        return results;
    }

    public void cleanTempFolder() throws IOException {
        if (Files.exists(tempPath)) {
            Files.walk(tempPath)
                    .sorted((a, b) -> -a.compareTo(b))
                    .forEach(path -> {
                        try {
                            Files.delete(path);
                        } catch (IOException e) {
                            System.err.println("Failed to delete: " + path);
                        }
                    });
        }
    }

    private String getBaseName(String path) {
        File file = new File(path);
        String name = file.getName();
        int dotIndex = name.lastIndexOf('.');
        return (dotIndex == -1) ? name : name.substring(0, dotIndex);
    }
}