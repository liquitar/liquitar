package com.liquitar.server.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.liquitar.server.model.User;
import com.liquitar.www.util.SessionUtil;

public class LoginInterceptorController extends HandlerInterceptorAdapter {

    private String REDIRECT_URL = "/liquitar/login/showLogin.shtml";

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        super.postHandle(request, response, handler, modelAndView);
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        User user = SessionUtil.getLoginUser(request);
        boolean allow = true;
        if (user == null) {
            response.sendRedirect(REDIRECT_URL);
            allow = false;
        }
        return allow;
    }

}
