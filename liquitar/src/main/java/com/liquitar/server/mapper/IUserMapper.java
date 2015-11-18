package com.liquitar.server.mapper;

import com.liquitar.server.model.User;

public interface IUserMapper {

    public User selectById(int id);

    public User selectByUser(User user);
}
