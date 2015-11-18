package com.liquitar.server.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/login")
public class LoginController {

    @RequestMapping("/showLogin.shtml")
    public String showLogin(HttpServletRequest request) {
        return "login";
    }
}
