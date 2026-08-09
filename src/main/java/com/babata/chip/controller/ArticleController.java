package com.babata.chip.controller;

import com.babata.chip.common.UserCache;
import com.babata.chip.common.dto.ArticleDTO;
import com.babata.chip.common.enums.ErrorCodeEnum;
import com.babata.chip.common.enums.PermissionEnum;
import com.babata.chip.converter.ArticleConverter;
import com.babata.chip.repository.ArticleRepository;
import com.babata.chip.repository.entity.ArticleDO;
import com.babata.chip.service.ArticleService;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Objects;

@Controller
public class ArticleController {
    @Resource
    private ArticleRepository articleRepository;

    @Resource
    private ArticleService articleService;

    @RequestMapping(value = "/article/{enTitle}", method = RequestMethod.GET)
    public String article(@PathVariable String enTitle, Model model, HttpServletResponse response) {
        ArticleDO articleDO = articleRepository.getArticleByEnTitle(enTitle);
        if (articleDO == null && enTitle.matches("\\d+")) {
            articleDO = articleRepository.getArticleById(Integer.parseInt(enTitle));
        }
        if (articleDO == null) {
            response.setStatus(ErrorCodeEnum.NOT_FOUND.getCode());
            return "404";
        }

        // 未登录访问非公开文章返回404
        if (!UserCache.getUserContext().getLoginFlag() && Objects.equals(articleDO.getPermission(), PermissionEnum.PRIVATE.getCode())) {
            response.setStatus(ErrorCodeEnum.NOT_FOUND.getCode());
            return "404";
        }

        // 增加阅读数
        articleService.addReadCount(articleDO.getId());

        ArticleDTO articleDTO = ArticleConverter.convert2ArticleDTO(articleDO);

        model.addAttribute("username", UserCache.getUserContext().getUsername());
        model.addAttribute("nickname", UserCache.getUserContext().getNickname());
        model.addAttribute("article", articleDTO);
        return "article";
    }

    @RequestMapping(value = "/blog", method = RequestMethod.GET)
    public String blog(Model model, HttpServletResponse response) {
        return "blog_list";
    }
}
