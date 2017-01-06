package com.share.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by max on 2016/11/17.
 */
@Controller
public class HomeController {

    @GetMapping(value = {"/home","/"})
    public String home(){
        return "home";
    }

}
