package com.babata.chip.controller.rest;

import com.babata.chip.common.response.BaseResponse;
import com.babata.chip.common.response.EditorMDResponse;
import com.babata.chip.config.AlbumFileAllowedTypeConfig;
import com.babata.chip.util.FileUtil;
import jakarta.annotation.Resource;
import net.coobird.thumbnailator.Thumbnails;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Objects;

import static com.babata.chip.util.ResponseUtil.*;

@RestController
public class FileRestController {

    @Value("${files.path.pdf-file-path}")
    private String PDF_FILE_PATH;

    @Value("${files.path.album-raw-path}")
    private String ALBUM_RAW_FILE_PATH;

    @Value("${files.path.album-compress-path}")
    private String ALBUM_COMPRESS_FILE_PATH;

    @Resource
    private AlbumFileAllowedTypeConfig albumFileAllowedTypeConfig;

    @PostMapping("/api/chip/pdf/upload")
    public BaseResponse uploadPdfFile(@RequestParam("file") MultipartFile[] files) throws IOException {
        for (MultipartFile file : files) {
            if (file.isEmpty()) {
                return buildErrorResponse("文件为空");
            }
            String fileType = FileUtil.getFileType(Objects.requireNonNull(file.getOriginalFilename()));
            if (!Objects.equals(fileType, "pdf")) {
                return buildErrorResponse("文件格式不合法");
            }

            File f = new File(System.getProperty("user.dir") + PDF_FILE_PATH + file.getOriginalFilename());
            file.transferTo(f);
        }
        return buildSuccessResponse("文件上传成功");
    }

    @PostMapping("/api/file/album")
    public EditorMDResponse uploadEditorMdAlbum(@RequestParam("editormd-image-file") MultipartFile file) throws IOException {
        if (file.isEmpty()) {
            return buildEditorMDResponse(0, "文件为空", "");
        }

        String originalFilename = file.getOriginalFilename();
        if (originalFilename == null || originalFilename.trim().isEmpty()) {
            return buildEditorMDResponse(0, "文件名不能为空", "");
        }

        String fileType = FileUtil.getFileType(originalFilename);
        if (!albumFileAllowedTypeConfig.isAllowedType(fileType)) {
            return buildEditorMDResponse(0, "文件类型非法", "");
        }

        try {
            // 确保目录存在
            File rawDir = new File(System.getProperty("user.dir") + ALBUM_RAW_FILE_PATH);
            File compressDir = new File(System.getProperty("user.dir") + ALBUM_COMPRESS_FILE_PATH);
            if (!rawDir.exists()) {
                rawDir.mkdirs();
            }
            if (!compressDir.exists()) {
                compressDir.mkdirs();
            }

            // 保存原始文件
            File rawFile = new File(rawDir, originalFilename);
            file.transferTo(rawFile);

            // 保存压缩文件
            File compressFile = new File(compressDir, originalFilename);
            try {
                Thumbnails.of(rawFile)
                        .outputQuality(0.6)
                        .scale(1.0)
                        .toFile(compressFile);
            } catch (Exception e) {
                // 如果压缩失败，至少返回原始文件
                return buildEditorMDResponse(1, "文件上传成功（压缩失败）", "/files/album/raw/" + originalFilename);
            }

            return buildEditorMDResponse(1, "文件上传成功", "/files/album/" + originalFilename);
        } catch (Exception e) {
            return buildEditorMDResponse(0, "文件上传失败: " + e.getMessage(), "");
        }
    }
}
