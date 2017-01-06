package com.share.restController;

import com.share.business.SMSBusiness;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

/**
 * Created by max on 2016/12/18.
 */
@RestController
public class SMSController {

    @Autowired
    SMSBusiness smsBusiness;

    @RequestMapping("/sms/send")
    public String send(String tel, String name){
        smsBusiness.send(tel, "1", name, "红色-别克-威朗", "2", new Date());
        return "短信发送成功！";
    }
}
