package com.babata.chip.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.NoHandlerFoundException;

@ControllerAdvice
public class GlobalExceptionHandler {
    private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

//    @ExceptionHandler(Exception.class)
//    public ModelAndView handleException(Exception ex) {
//        logger.error(getStackTraceStr(ex));
//        ModelAndView mv = new ModelAndView("500");
//        mv.setStatus(HttpStatus.INTERNAL_SERVER_ERROR);
//        return mv;
//    }

    @ExceptionHandler(NoHandlerFoundException.class)
    public ModelAndView handleNoHandlerFoundException(Exception ex) {
        // logger.warn(getStackTraceStr(ex));
        ModelAndView mv = new ModelAndView("404");
        mv.setStatus(HttpStatus.NOT_FOUND);
        return mv;
    }

    public static String getStackTraceStr(Exception ex) {
        StringBuilder sb = new StringBuilder();
        sb.append("[Exception] ");
        sb.append(ex.toString()).append("\r\n");
        StackTraceElement[] trace = ex.getStackTrace();
        for (StackTraceElement element : trace) {
            sb.append("\tat ").append(element).append("\r\n");
        }
        return sb.toString();
    }
}
