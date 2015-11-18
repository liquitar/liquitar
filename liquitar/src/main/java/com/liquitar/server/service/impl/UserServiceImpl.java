package com.liquitar.server.service.impl;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;

import com.liquitar.server.mapper.IUserMapper;
import com.liquitar.server.model.User;
import com.liquitar.server.service.IUserService;
import com.liquitar.www.util.SessionUtil;

public class UserServiceImpl implements IUserService {

    @Autowired
    private IUserMapper userMapper;

    public boolean userLogin(HttpServletRequest request, User user) {
        User exist = userMapper.selectByUser(user);
        if (exist != null && exist.getId() != null) {
            SessionUtil.setLoginUser(request, user);
            return true;
        }
        return false;
    }

}
