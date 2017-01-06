package com.share.restController;

import com.share.mapper.UserMapper;
import com.share.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by max on 2016/11/10.
 */
@RestController
public class UserController {

    private static Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    UserMapper userMapper;

    @RequestMapping("/user/{id}")
    public User getUserById(@PathVariable int id){
        logger.info("访问了/user接口，user_id=" + id + "的用户信息！");
        User user = userMapper.getUserById(id);
        return user;
    }



}
