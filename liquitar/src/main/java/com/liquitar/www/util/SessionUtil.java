package com.liquitar.www.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.liquitar.server.constant.Constant;
import com.liquitar.server.model.User;

public class SessionUtil {

    public static User getLoginUser(HttpServletRequest request) {
        HttpSession session = request.getSession();
        return (User) session.getAttribute(Constant.SESSION_USER_KEY);
    }

    public static void setLoginUser(HttpServletRequest request, User user) {
        HttpSession session = request.getSession();
        session.setAttribute(Constant.SESSION_USER_KEY, user);
    }

}
