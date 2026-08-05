package com.babata.chip.repository;

import com.babata.chip.common.enums.PermissionEnum;
import com.babata.chip.repository.entity.ArticleDO;
import com.babata.chip.repository.entity.ArticleDOExample;
import com.babata.chip.repository.mapper.ArticleMapper;
import com.github.pagehelper.PageHelper;
import io.micrometer.common.util.StringUtils;
import jakarta.annotation.Resource;
import org.apache.commons.collections.CollectionUtils;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Repository
public class ArticleRepository {
    @Resource
    private ArticleMapper articleMapper;

    public Integer getAllArticlesCount() {
        ArticleDOExample example = new ArticleDOExample();
        example.createCriteria().andIdGreaterThanOrEqualTo(0);
        return (int) articleMapper.countByExample(example);
    }

    public List<ArticleDO> pageGetArticlesOrderById(int pageNum, int pageSize, String tag) {
        ArticleDOExample example = new ArticleDOExample();
        if (!StringUtils.isEmpty(tag)) {
            example.createCriteria().andTagEqualTo(tag);
        }
        example.setOrderByClause("id desc");
        PageHelper.startPage(pageNum, pageSize);
        return articleMapper.selectByExample(example);
    }

    public List<ArticleDO> pageGetPublicArticlesOrderById(int pageNum, int pageSize, String tag) {
        ArticleDOExample example = new ArticleDOExample();
        ArticleDOExample.Criteria criteria = example.createCriteria();
        if (!StringUtils.isEmpty(tag)) {
            criteria.andTagEqualTo(tag);
        }
        criteria.andPermissionEqualTo(PermissionEnum.PUBLIC.getCode());
        example.setOrderByClause("id desc");
        PageHelper.startPage(pageNum, pageSize);
        return articleMapper.selectByExample(example);
    }

    public int getArticlesCountByTag(String tag) {
        ArticleDOExample example = new ArticleDOExample();
        if (!StringUtils.isEmpty(tag)) {
            example.createCriteria().andTagEqualTo(tag);
        }
        return (int) articleMapper.countByExample(example);
    }

    public List<ArticleDO> getMostPopularPublicArticles(int limit) {
        ArticleDOExample example = new ArticleDOExample();
        example.setOrderByClause("read_count desc");
        PageHelper.startPage(1, limit);
        return articleMapper.selectByExample(example);
    }

    public List<ArticleDO> getArticlesOrderById() {
        ArticleDOExample example = new ArticleDOExample();
        example.createCriteria().andIdGreaterThanOrEqualTo(0);
        example.setOrderByClause("id desc");
        List<ArticleDO> res = articleMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(res)) {
            return new ArrayList<>();
        }
        return res;
    }

    public ArticleDO getArticleById(Integer id) {
        ArticleDOExample example = new ArticleDOExample();
        example.createCriteria().andIdEqualTo(id);
        List<ArticleDO> res = articleMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(res)) {
            return null;
        }
        return res.get(0);
    }

    public ArticleDO getPreviousArticleById(Integer id) {
        ArticleDOExample example = new ArticleDOExample();
        PageHelper.startPage(1, 1);
        example.createCriteria().andIdGreaterThan(id);
        example.setOrderByClause("id asc");
        List<ArticleDO> res = articleMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(res)) {
            return null;
        }
        return res.get(0);
    }

    public ArticleDO getNextArticleById(Integer id) {
        ArticleDOExample example = new ArticleDOExample();
        PageHelper.startPage(1, 1);
        example.createCriteria().andIdLessThan(id);
        example.setOrderByClause("id desc");
        List<ArticleDO> res = articleMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(res)) {
            return null;
        }
        return res.get(0);
    }


    public ArticleDO getArticleByEnTitle(String enTitle) {
        if (StringUtils.isBlank(enTitle)) {
            return null;
        }
        ArticleDOExample example = new ArticleDOExample();
        example.createCriteria().andEnTitleEqualTo(enTitle);
        List<ArticleDO> res = articleMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(res)) {
            return null;
        }
        return res.get(0);
    }

    public List<String> getAllArticleTags() {
        ArticleDOExample example = new ArticleDOExample();
        example.createCriteria().andIdGreaterThanOrEqualTo(0);
        example.setOrderByClause("id desc");
        List<ArticleDO> res = articleMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(res)) {
            return new ArrayList<>();
        }
        return res.stream().map(ArticleDO::getTag).distinct().collect(Collectors.toList());
    }

    public List<ArticleDO> getRelativeArticlesByTitle(String keyword) {
        ArticleDOExample example = new ArticleDOExample();
        example.createCriteria().andTitleLike("%" + keyword + "%");
        List<ArticleDO> res = articleMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(res)) {
            return new ArrayList<>();
        }
        return res;
    }

    public List<ArticleDO> getRelativeArticlesByContent(String keyword) {
        ArticleDOExample example = new ArticleDOExample();
        example.createCriteria().andContentMdLike("%" + keyword + "%");
        List<ArticleDO> res = articleMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(res)) {
            return new ArrayList<>();
        }
        return res;
    }

    public void addArticleReadCount(Integer articleId) {
        ArticleDOExample example = new ArticleDOExample();
        example.createCriteria().andIdEqualTo(articleId);
        List<ArticleDO> res = articleMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(res)) {
            return;
        }
        ArticleDO articleDO = res.get(0);
        articleDO.setReadCount(articleDO.getReadCount() + 1);
        articleMapper.updateByPrimaryKeySelective(articleDO);
    }

    public int addArticle(ArticleDO articleDO) {
        return articleMapper.insert(articleDO);
    }

    public void deleteArticle(Integer id) {
        articleMapper.deleteByPrimaryKey(id);

    }

    public void updateArticle(ArticleDO articleDO) {
        articleMapper.updateByPrimaryKeySelective(articleDO);
    }

}
