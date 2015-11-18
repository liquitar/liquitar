package com.liquitar.server.service;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.liquitar.server.model.User;

@Service
@Transactional(rollbackFor = Exception.class)
public interface IUserService {

    public boolean userLogin(HttpServletRequest request, User user);
}
