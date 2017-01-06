package com.share.restController;

import com.share.business.EmailBusiness;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by max on 2016/12/16.
 */
@RestController
@RequestMapping("/email")
public class EmailController {

    @Autowired
    EmailBusiness emailBusiness;

    @RequestMapping("/send")
    public String send(String to){
        emailBusiness.send(to);
        return "邮件发送成功";
    }

    @RequestMapping("/sendCode")
    public String sendCode(String to){
        emailBusiness.sendCode(to);
        return "邮件发送成功";
    }

    @RequestMapping("/orderSuccess")
    public String sendOrderSuccess(String to, int orderId){
        emailBusiness.sendOrderSuccess(to, orderId);
        return "邮件发送成功";
    }
}
