package com.babata.chip.config;

import com.babata.chip.interceptor.GlobalHandlerInterceptor;
import com.babata.chip.interceptor.LoginHandlerInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// @EnableWebMvc 万恶之源！
@Configuration
public class BlogWebMvcConfigurer implements WebMvcConfigurer {
    @Bean
    GlobalHandlerInterceptor getGlobalInterceptor() {
        return new GlobalHandlerInterceptor();
    }

    @Bean
    LoginHandlerInterceptor getLoginInterceptor() {
        return new LoginHandlerInterceptor();
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // doocs/md 编辑器：内部资源引用 /md/** 绝对路径，映射到 classpath:/static/md/
        registry.addResourceHandler("/md/**")
                .addResourceLocations("classpath:/static/md/");
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        // WebMvcConfigurer.super.addInterceptors(registry);
        // 全局拦截器
        registry.addInterceptor(getGlobalInterceptor()).addPathPatterns("/**").excludePathPatterns("/static/**");
        // 登录拦截器
        registry.addInterceptor(getLoginInterceptor()).addPathPatterns("/manage", "/album", "/video", "api/**", "/api/**/**", "/api/**/**/**",
                        "/files/private/**", "/article/add", "/article/*/*/edit", "/admin/**", "/admin/add", "/admin/*/edit", "/chip/compare",
                        "/chip/compare/admin", "/api/chip/**", "/chat", "/ai/chat", "/study", "/chip/**", "/payment")
                .excludePathPatterns("/api/admin/authentication", "/api/article/retrieval", "/api/files/public", "/api/comment", "/api/video", "/api/article/**");
    }
}
