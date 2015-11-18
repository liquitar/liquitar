package com.liquitar.www.util;

import javax.servlet.http.HttpServletRequest;

public class RequestUtil {

    public static String getString(HttpServletRequest request, String key) {
        String value = request.getParameter(key);
        if (value == null) {
            value = "";
        }
        return value;
    }

    public static Integer getInteger(HttpServletRequest request, String key) {
        String value = request.getParameter(key);
        Integer result = 0;
        try {
            result = Integer.valueOf(value);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

}
