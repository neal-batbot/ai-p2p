package com.babata.chip.interceptor;


import com.babata.chip.common.UserCache;
import com.babata.chip.common.UserContext;
import com.babata.chip.common.enums.ErrorCodeEnum;
import com.babata.chip.repository.VisitorRepository;
import com.babata.chip.repository.entity.VisitorDO;
import com.babata.chip.util.IpUtil;

import eu.bitwalker.useragentutils.UserAgent;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import net.dreamlu.mica.ip2region.core.Ip2regionSearcher;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;


import java.util.Date;
import java.util.Objects;
import java.util.concurrent.LinkedBlockingDeque;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

@Component
public class GlobalHandlerInterceptor implements HandlerInterceptor {
    private static final Logger logger = LoggerFactory.getLogger(GlobalHandlerInterceptor.class);

    @Resource
    private Ip2regionSearcher ip2regionSearcher;

    @Resource
    private VisitorRepository visitorRepository;

    private final ThreadPoolExecutor executor = new ThreadPoolExecutor(4, 8, 60, TimeUnit.SECONDS,
            new LinkedBlockingDeque<>(500), new ThreadPoolExecutor.AbortPolicy());

    @Override
    public boolean preHandle(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response, @NonNull Object handler) throws Exception {
        // ip地址
        String ip = IpUtil.getIp(request);

        String location = ip2regionSearcher.getAddress(ip);

        // user-agent
        UserAgent ua = UserAgent.parseUserAgentString(request.getHeader("User-Agent"));
        String platform = null, browser = null, version = null;
        if (ua.getOperatingSystem() != null) {
            platform = ua.getOperatingSystem().getName();
        }
        if (ua.getBrowser() != null) {
            browser = ua.getBrowser().getName();
        }
        if (ua.getBrowserVersion() != null) {
            version = ua.getBrowserVersion().getVersion();
        }

        // 登录信息
        HttpSession session = request.getSession();
        Integer userid = (Integer) session.getAttribute("userid");

        // 写入上下文
        UserContext context = new UserContext();
        if (userid != null) {
            // 已登录
            String username = (String) session.getAttribute("username");
            String nickname = (String) session.getAttribute("nickname");
            String sex = (String) session.getAttribute("sex");
            Byte authority = (byte) session.getAttribute("authority");
            context.setUserid(userid);
            context.setUsername(username);
            context.setNickname(nickname);
            context.setSex(sex);
            context.setAuthority(authority);
            context.setLoginFlag(true);
        } else {
            // 未登录
            context.setLoginFlag(false);
        }
        context.setIp(ip);
        context.setLocation(location);
        context.setPlatform(platform);
        context.setBrowser(browser);
        context.setVersion(version);
        context.setCurrentTimeMillis(System.currentTimeMillis()); // 当前时间
        UserCache.setUserContext(context);

        // 异步添加访问记录
        executor.execute(() -> {
            if (StringUtils.isBlank(request.getRequestURI()) || request.getRequestURI().startsWith("/api")) {
                return;
            }
            VisitorDO visitorDO = new VisitorDO();
            visitorDO.setIp(ip);
            visitorDO.setUri(request.getRequestURI());
            if (userid != null) {
                visitorDO.setUserId(userid);
            }
            visitorDO.setLocation(context.getLocation());
            visitorDO.setPlatform(context.getPlatform());
            visitorDO.setBrowser(context.getBrowser());
            visitorDO.setVersion(context.getVersion());
            visitorDO.setVisitDate(new Date());
            visitorRepository.addVisitor(visitorDO);
        });

        return HandlerInterceptor.super.preHandle(request, response, handler);
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        UserContext context = UserCache.getUserContext();
        if (Objects.equals(request.getRequestURI(), "/api/video")) {
            return;
        }
        Long end = System.currentTimeMillis();
        Long start = context.getCurrentTimeMillis();
        if (response.getStatus() == ErrorCodeEnum.NOT_FOUND.getCode() || response.getStatus() == ErrorCodeEnum.DEFAULT_ERROR.getCode()) {
            logger.warn("[Method: {}, URL: {}, Query: {}, IP: {}, Location: {}, Cost: {}ms]", request.getMethod(), request.getRequestURI(), request.getQueryString(), context.getIp(), context.getLocation(), (end - start));
        } else if (response.getStatus() == ErrorCodeEnum.SERVER_ERROR.getCode()) {
            logger.error("[Method: {}, URL: {}, Query: {}, IP: {}, Location: {}, Cost: {}ms]", request.getMethod(), request.getRequestURI(), request.getQueryString(), context.getIp(), context.getLocation(), (end - start));
        } else {
            logger.info("[Method: {}, URL: {}, Query: {}, IP: {}, Location: {}, Cost: {}ms]", request.getMethod(), request.getRequestURI(), request.getQueryString(), context.getIp(), context.getLocation(), (end - start));
        }
        HandlerInterceptor.super.postHandle(request, response, handler, modelAndView);
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        HandlerInterceptor.super.afterCompletion(request, response, handler, ex);
    }
}
