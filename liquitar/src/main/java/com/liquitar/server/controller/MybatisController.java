package com.liquitar.server.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.liquitar.server.mapper.IUserMapper;
import com.liquitar.server.model.User;

@Controller
@RequestMapping("/mybatis")
public class MybatisController {

    @Autowired
    private IUserMapper userMapper;

    @RequestMapping("/getUser.shtml")
    public String getUser(HttpServletRequest request) {
        User user = userMapper.selectById(1);
        request.setAttribute("user", user);
        return "mybatis";
    }
}
