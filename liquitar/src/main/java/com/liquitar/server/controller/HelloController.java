package com.liquitar.server.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/hello")
public class HelloController {

    @RequestMapping("/world.xhtml")
    public String sayHello(HttpServletRequest request, HttpServletResponse response) {

        return "hello";
    }
}
