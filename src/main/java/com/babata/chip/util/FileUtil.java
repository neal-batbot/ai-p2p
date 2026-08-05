package com.babata.chip.util;

public class FileUtil {
    public static String getFileSizeStr(Long fileSize) {
        if (fileSize == null) {
            return "";
        }
        String fileSizeStr;
        if (fileSize < 1024) {
            fileSizeStr = fileSize + "B";
        } else if (fileSize < 1024 * 1024) {
            fileSizeStr = String.format("%.3f", fileSize / 1024.0) + "KB";
        } else if (fileSize < 1024.0 * 1024 * 1024) {
            fileSizeStr = String.format("%.3f", fileSize / 1024.0 / 1024) + "MB";
        } else {
            fileSizeStr = String.format("%.3f", fileSize / 1024.0 / 1024 / 1024) + "GB";
        }
        return fileSizeStr;
    }

    public static String getFileType(String fileName) {
        int idx = fileName.lastIndexOf(".");
        if (idx != -1) {
            return fileName.substring(idx + 1).toLowerCase();
        } else {
            return "";
        }
    }
}
