package com.babata.chip.service;

public interface ArticleService {
    String generateDirectory(String content);

    void addReadCount(Integer id);
}
