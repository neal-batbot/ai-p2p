package com.babata.chip.util;

import org.apache.commons.lang3.StringUtils;
import java.util.regex.Pattern;

/**
 * Markdown文本处理工具类
 * 使用纯正则表达式高效提取Markdown内容中的纯文本
 * 
 * 特点：
 * 1. 无外部依赖，性能最佳
 * 2. 支持常见的Markdown语法
 * 3. 预编译正则表达式，提高性能
 * 4. 保留文本内容，移除格式标记
 */
public class MarkdownUtil {

    // 预编译的正则表达式模式，提高性能
    private static final Pattern HEADER_PATTERN = Pattern.compile("^#{1,6}\\s+", Pattern.MULTILINE);
    private static final Pattern BOLD_PATTERN = Pattern.compile("\\*\\*(.*?)\\*\\*|__(.*?)__");
    private static final Pattern ITALIC_PATTERN = Pattern.compile("\\*(.*?)\\*|_(.*?)_");
    private static final Pattern CODE_BLOCK_PATTERN = Pattern.compile("```[\\s\\S]*?```");
    private static final Pattern INLINE_CODE_PATTERN = Pattern.compile("`([^`]+)`");
    private static final Pattern LINK_PATTERN = Pattern.compile("\\[([^\\]]+)\\]\\([^)]+\\)");
    private static final Pattern IMAGE_PATTERN = Pattern.compile("!\\[([^\\]]*)\\]\\([^)]+\\)");
    private static final Pattern LIST_PATTERN = Pattern.compile("^[\\s]*[-*+]\\s+", Pattern.MULTILINE);
    private static final Pattern NUMBERED_LIST_PATTERN = Pattern.compile("^[\\s]*\\d+\\.\\s+", Pattern.MULTILINE);
    private static final Pattern BLOCKQUOTE_PATTERN = Pattern.compile("^[\\s]*>\\s+", Pattern.MULTILINE);
    private static final Pattern HORIZONTAL_RULE_PATTERN = Pattern.compile("^[\\s]*[-*_]{3,}[\\s]*$", Pattern.MULTILINE);
    private static final Pattern STRIKETHROUGH_PATTERN = Pattern.compile("~~(.*?)~~");
    private static final Pattern HTML_TAG_PATTERN = Pattern.compile("<[^>]+>");
    private static final Pattern MULTIPLE_SPACES_PATTERN = Pattern.compile("\\s+");
    private static final Pattern MULTIPLE_NEWLINES_PATTERN = Pattern.compile("\\n\\s*\\n");

    /**
     * 提取Markdown内容中的纯文本
     * 
     * @param markdown Markdown格式的文本
     * @return 提取的纯文本
     */
    public static String extractText(String markdown) {
        if (StringUtils.isBlank(markdown)) {
            return "";
        }

        String text = markdown;

        // 1. 移除代码块（保留内容）
        text = CODE_BLOCK_PATTERN.matcher(text).replaceAll("");

        // 2. 移除HTML标签
        text = HTML_TAG_PATTERN.matcher(text).replaceAll("");

        // 3. 移除标题标记
        text = HEADER_PATTERN.matcher(text).replaceAll("");

        // 4. 移除粗体标记（保留内容）
        text = BOLD_PATTERN.matcher(text).replaceAll("$1$2");

        // 5. 移除斜体标记（保留内容）
        text = ITALIC_PATTERN.matcher(text).replaceAll("$1$2");

        // 6. 移除删除线标记（保留内容）
        text = STRIKETHROUGH_PATTERN.matcher(text).replaceAll("$1");

        // 7. 移除行内代码标记（保留内容）
        text = INLINE_CODE_PATTERN.matcher(text).replaceAll("$1");

        // 8. 移除链接，保留链接文本
        text = LINK_PATTERN.matcher(text).replaceAll("$1");

        // 9. 移除图片，保留alt文本
        text = IMAGE_PATTERN.matcher(text).replaceAll("$1");

        // 10. 移除列表标记
        text = LIST_PATTERN.matcher(text).replaceAll("");
        text = NUMBERED_LIST_PATTERN.matcher(text).replaceAll("");

        // 11. 移除引用标记
        text = BLOCKQUOTE_PATTERN.matcher(text).replaceAll("");

        // 12. 移除水平分割线
        text = HORIZONTAL_RULE_PATTERN.matcher(text).replaceAll("");

        // 13. 清理多余的空格和换行
        text = MULTIPLE_SPACES_PATTERN.matcher(text).replaceAll(" ");
        text = MULTIPLE_NEWLINES_PATTERN.matcher(text).replaceAll("\n");

        return text.trim();
    }

    /**
     * 提取Markdown内容中的纯文本，并限制长度
     * 
     * @param markdown Markdown格式的文本
     * @param maxLength 最大长度限制
     * @return 提取的纯文本
     */
    public static String extractText(String markdown, int maxLength) {
        String text = extractText(markdown);
        if (text.length() <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength) + "...";
    }

    /**
     * 提取Markdown内容中的纯文本，保留段落结构
     * 
     * @param markdown Markdown格式的文本
     * @return 提取的纯文本，保留段落分隔
     */
    public static String extractTextWithParagraphs(String markdown) {
        if (StringUtils.isBlank(markdown)) {
            return "";
        }

        String text = markdown;

        // 移除代码块
        text = CODE_BLOCK_PATTERN.matcher(text).replaceAll("");

        // 移除HTML标签
        text = HTML_TAG_PATTERN.matcher(text).replaceAll("");

        // 移除标题标记
        text = HEADER_PATTERN.matcher(text).replaceAll("");

        // 移除粗体、斜体、删除线标记（保留内容）
        text = BOLD_PATTERN.matcher(text).replaceAll("$1$2");
        text = ITALIC_PATTERN.matcher(text).replaceAll("$1$2");
        text = STRIKETHROUGH_PATTERN.matcher(text).replaceAll("$1");

        // 移除行内代码标记（保留内容）
        text = INLINE_CODE_PATTERN.matcher(text).replaceAll("$1");

        // 移除链接，保留链接文本
        text = LINK_PATTERN.matcher(text).replaceAll("$1");

        // 移除图片，保留alt文本
        text = IMAGE_PATTERN.matcher(text).replaceAll("$1");

        // 移除列表标记
        text = LIST_PATTERN.matcher(text).replaceAll("");
        text = NUMBERED_LIST_PATTERN.matcher(text).replaceAll("");

        // 移除引用标记
        text = BLOCKQUOTE_PATTERN.matcher(text).replaceAll("");

        // 移除水平分割线
        text = HORIZONTAL_RULE_PATTERN.matcher(text).replaceAll("");

        // 清理多余的空格，但保留换行
        text = MULTIPLE_SPACES_PATTERN.matcher(text).replaceAll(" ");

        return text.trim();
    }

    /**
     * 获取Markdown内容的摘要（前N个字符的纯文本）
     * 
     * @param markdown Markdown格式的文本
     * @param length 摘要长度
     * @return 摘要文本
     */
    public static String getSummary(String markdown, int length) {
        return extractText(markdown, length);
    }

    /**
     * 检查文本是否包含Markdown语法
     * 
     * @param text 待检查的文本
     * @return 是否包含Markdown语法
     */
    public static boolean containsMarkdown(String text) {
        if (StringUtils.isBlank(text)) {
            return false;
        }

        // 检查常见的Markdown语法
        return text.contains("#") || 
               text.contains("*") || 
               text.contains("_") || 
               text.contains("`") || 
               text.contains("[") || 
               text.contains("!") || 
               text.contains("-") || 
               text.contains(">") || 
               text.contains("~~");
    }

    /**
     * 获取文本的字符数（去除Markdown语法后）
     * 
     * @param markdown Markdown格式的文本
     * @return 纯文本字符数
     */
    public static int getTextLength(String markdown) {
        return extractText(markdown).length();
    }

    /**
     * 提取Markdown中的标题
     * 
     * @param markdown Markdown格式的文本
     * @return 标题列表
     */
    public static String[] extractHeaders(String markdown) {
        if (StringUtils.isBlank(markdown)) {
            return new String[0];
        }

        Pattern headerPattern = Pattern.compile("^(#{1,6})\\s+(.+)$", Pattern.MULTILINE);
        return headerPattern.matcher(markdown)
                .results()
                .map(match -> match.group(2).trim())
                .toArray(String[]::new);
    }

    /**
     * 提取Markdown中的链接文本
     * 
     * @param markdown Markdown格式的文本
     * @return 链接文本列表
     */
    public static String[] extractLinkTexts(String markdown) {
        if (StringUtils.isBlank(markdown)) {
            return new String[0];
        }

        return LINK_PATTERN.matcher(markdown)
                .results()
                .map(match -> match.group(1))
                .toArray(String[]::new);
    }
} 