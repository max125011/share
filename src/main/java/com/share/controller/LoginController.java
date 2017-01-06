package com.share.controller;

import com.share.service.LoginService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by max on 2016/11/11.
 */
@Controller
public class LoginController {

    private static Logger logger = LoggerFactory.getLogger(LoginController.class);

    @Autowired
    LoginService loginService;

    @RequestMapping(value = "/login")
    public String login(String username, String password){
        logger.info("访问了/login接口！");
        if(username != null && password != null && loginService.checkUser(username, password))
            return "redirect:home";
        return "login";
    }

    @RequestMapping(value = "/login/do", method = RequestMethod.POST)
    public String loginDo(String username, String password){
        if(loginService.checkUser(username, password))
            return "/home";
        return "/login";
    }
}
