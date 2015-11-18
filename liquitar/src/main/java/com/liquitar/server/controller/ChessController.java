package com.liquitar.server.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/chess")
public class ChessController {

    @RequestMapping("/ready.shtml")
    public String toChess(HttpServletRequest request) {

        return "chessSimple";
    }
}
