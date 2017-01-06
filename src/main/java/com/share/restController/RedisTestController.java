package com.share.restController;

import com.share.util.RedisUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by max on 2017/1/4.
 */
@RestController
@RequestMapping("/redis")
public class RedisTestController {

    @Autowired
    RedisUtil redisUtil;

    @RequestMapping("/get")
    public Object get(String key){
        return redisUtil.get(key);
    }

    @RequestMapping("/set")
    public boolean set(String key, String value){
        return redisUtil.set(key, value);
    }
}
