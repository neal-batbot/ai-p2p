package com.babata.chip.controller.rest;

import com.babata.chip.common.UserCache;
import com.babata.chip.common.dto.ArticleDTO;
import com.babata.chip.common.enums.ArticleStatusEnum;
import com.babata.chip.common.enums.PermissionEnum;
import com.babata.chip.common.response.BaseResponse;
import com.babata.chip.converter.ArticleConverter;
import com.babata.chip.repository.ArticleRepository;
import com.babata.chip.repository.entity.ArticleDO;
import com.babata.chip.util.MarkdownUtil;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;
import java.util.Objects;

import static com.babata.chip.util.ResponseUtil.*;

@RestController
public class ArticleRestController {

    @Resource
    private ArticleRepository articleRepository;

    public static final String DEFAULT_COVER_IMAGE = "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1770";

    @PostMapping("/api/article/add")
    public BaseResponse addArticle(@RequestParam(name = "title") String title, @RequestParam(name = "tag") String tag,
                                   @RequestParam(name = "subtitle") String subtitle, @RequestParam(name = "enTitle") String enTitle,
                                   @RequestParam(name = "privacy") String privacy, @RequestParam(name = "coverImage") String coverImage,
                                   @RequestParam(name = "content") String content, HttpServletRequest request) {
        ArticleDO articleDO = new ArticleDO();
        articleDO.setTitle(title);
        articleDO.setTag(tag);
        articleDO.setSubtitle(subtitle);
        articleDO.setEnTitle(enTitle);
        if (Objects.equals(privacy, "public")) {
            articleDO.setPermission(PermissionEnum.PUBLIC.getCode());
        } else {
            articleDO.setPermission(PermissionEnum.PRIVATE.getCode());
        }
        articleDO.setContentMd(content);
        articleDO.setContentText(MarkdownUtil.extractText(content));
        
        if (StringUtils.isBlank(coverImage)) {
            articleDO.setCoverImage(DEFAULT_COVER_IMAGE);
        }
        articleDO.setAuthor(UserCache.getUserContext().getUsername());
        articleDO.setAuthorId(UserCache.getUserContext().getUserid());
        articleDO.setCreateTime(new Date());
        articleDO.setModifyTime(new Date());
        articleDO.setReadCount(0);
        articleDO.setStatus(ArticleStatusEnum.PUBLISHED.getCode());

        int res = articleRepository.addArticle(articleDO);
        if (res > 0) {
            return buildSuccessResponse();
        }
        return buildErrorResponse();
    }

    @GetMapping("/api/article/posts")
    public BaseResponse getArticlePosts(@RequestParam(defaultValue = "1") Integer page, @RequestParam(defaultValue = "9") Integer pageSize, @RequestParam(required = false) String tag) {
        if (page == null || page < 1 || pageSize == null || pageSize < 1) {
            return buildErrorResponse("page or pageSize invalid");
        }

        List<ArticleDO> articleDOList = articleRepository.pageGetPublicArticlesOrderById(page, pageSize, tag);
        for (ArticleDO articleDO : articleDOList) {
            if (articleDO.getContentMd() != null && articleDO.getContentMd().length() > 200) {
                articleDO.setContentMd(articleDO.getContentMd().substring(0, 200));
            }
            if (StringUtils.isBlank(articleDO.getCoverImage())) {
                articleDO.setCoverImage(DEFAULT_COVER_IMAGE);
            }
        }
        List<ArticleDTO> data = ArticleConverter.convert2ArticleDTOList(articleDOList);
        int total = articleRepository.getArticlesCountByTag(tag);

        return buildSuccessPageResponse(page, pageSize, total, data);
    }

    @GetMapping("/api/article/{enTitle}")
    public BaseResponse getArticle() {
        return buildSuccessResponse();
    }

}
