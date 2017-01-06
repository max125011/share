package com.share.service.impl;

import com.share.mapper.ConsumerMapper;
import com.share.mapper.UserMapper;
import com.share.model.Consumer;
import com.share.model.User;
import com.share.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by max on 2016/12/7.
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserMapper userMapper;

    @Autowired
    ConsumerMapper consumerMapper;

    @Override
    public User getUserById(int id) {
        return userMapper.getUserById(id);
    }

    @Override
    public User getUserByTel(String tel) {
        return userMapper.getUserByTel(tel);
    }

    @Override
    public int insertUser(User user) {
        return userMapper.insertUser(user);
    }

    @Override
    public Consumer getConsumerById(int id) {
        return consumerMapper.getConsumerById(id);
    }

    @Override
    public int insertConsumer(Consumer consumer) {
        return consumerMapper.insertConsumer(consumer);
    }

    @Override
    public int deleteConsumer(int id) {
        return consumerMapper.deleteConsumer(id);
    }
}
