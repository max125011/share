package com.share.service.impl;

import com.share.mapper.UserMapper;
import com.share.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by max on 2016/11/14.
 */
@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    UserMapper userMapper;

    @Override
    public boolean checkUser(String tel, String pwd){

        String password = userMapper.getUserByTel(tel).getPassword();
        if(password.equals(pwd))
            return true;
        else
            return false;
    }
}
