package com.liquitar.server.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.liquitar.server.model.User;
import com.liquitar.server.service.IUserService;
import com.liquitar.www.util.RequestUtil;

import net.sf.json.JSONObject;

@Controller
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private IUserService userServiceImpl;

    @RequestMapping("/showLogin.shtml")
    public String showLogin(HttpServletRequest request) {
        return "login";
    }

    @RequestMapping("/userLogin.shtml")
    @ResponseBody
    public String userLogin(HttpServletRequest request, HttpServletResponse response) {
        try {
            String userName = RequestUtil.getString(request, "userName");
            String userPwd = RequestUtil.getString(request, "userPwd");
            User user = new User();
            user.setUserName(userName);
            user.setUserPwd(userPwd);
            boolean vip = userServiceImpl.userLogin(request, user);
            if (vip) {
                response.sendRedirect("/chess/ready.shtml");
            } else {
                JSONObject json = new JSONObject();
                json.put("code", 1);
                json.put("info", "用户名或密码失败");
                return json.toString();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
