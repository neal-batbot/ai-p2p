package com.babata.chip.converter;

import com.babata.chip.common.dto.ArticleDTO;
import com.babata.chip.repository.entity.ArticleDO;
import com.babata.chip.util.DateUtil;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;

import java.util.ArrayList;
import java.util.List;

import static com.babata.chip.controller.rest.ArticleRestController.DEFAULT_COVER_IMAGE;

public class ArticleConverter {
    public static List<ArticleDTO> convert2ArticleDTOList(List<ArticleDO> articleDOList) {
        if (CollectionUtils.isEmpty(articleDOList)) {
            return new ArrayList<>();
        }
        List<ArticleDTO> articleDTOList = new ArrayList<>();
        for (ArticleDO articleDO : articleDOList) {
            ArticleDTO articleDTO = convert2ArticleDTO(articleDO);
            articleDTOList.add(articleDTO);
        }
        return articleDTOList;
    }

    public static ArticleDTO convert2ArticleDTO(ArticleDO articleDO) {
        ArticleDTO articleDTO = new ArticleDTO();
        articleDTO.setId(articleDO.getId());
        articleDTO.setTitle(articleDO.getTitle());
        articleDTO.setTag(articleDO.getTag());
        articleDTO.setEnTitle(articleDO.getEnTitle());
        articleDTO.setSubtitle(articleDO.getSubtitle());
        articleDTO.setStatus(Integer.valueOf(articleDO.getStatus()));

        if (StringUtils.isBlank(articleDO.getCoverImage())) {
            articleDO.setCoverImage(DEFAULT_COVER_IMAGE);
        }

        // articleDTO.setContent(articleDO.getContentMd());
        articleDTO.setContentText(articleDO.getContentText());

        articleDTO.setSummary(articleDO.getContentText());
        if (articleDTO.getSummary() != null && articleDTO.getSummary().length() > 150) {
            articleDTO.setSummary(articleDTO.getSummary().substring(0, 150));
        }

        articleDTO.setReadCount(articleDO.getReadCount());
        articleDTO.setCreateTime(
                articleDO.getCreateTime() != null ? DateUtil.getDateString(articleDO.getCreateTime()) : "");
        articleDTO.setAuthor(articleDO.getAuthor());
        articleDTO.setCoverImage(articleDO.getCoverImage());
        return articleDTO;
    }

}
