package com.share.service;

import com.share.model.Consumer;
import com.share.model.User;

/**
 * Created by max on 2016/11/14.
 */
public interface UserService  {

    public User getUserById(int id);

    public User getUserByTel(String tel);

    public int insertUser(User user);

    public Consumer getConsumerById(int id);

    public int insertConsumer(Consumer consumer);

    public int deleteConsumer(int id);
}
