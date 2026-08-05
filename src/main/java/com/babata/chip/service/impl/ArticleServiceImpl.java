package com.babata.chip.service.impl;

import com.babata.chip.repository.ArticleRepository;
import com.babata.chip.service.ArticleService;

import jakarta.annotation.Resource;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class ArticleServiceImpl implements ArticleService {
    @Resource
    private ArticleRepository articleRepository;

    @Override
    public String generateDirectory(String content) {
        return null;
    }

    @Async
    @Override
    public void addReadCount(Integer articleId) {
        articleRepository.addArticleReadCount(articleId);
    }
}
