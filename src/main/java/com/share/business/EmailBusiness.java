package com.share.business;

import com.share.model.CarProduct;
import com.share.model.Order;
import com.share.service.OrderService;
import com.share.service.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Properties;

/**
 * Created by max on 2016/12/15.
 */
@Component
public class EmailBusiness {

    private static Logger logger = LoggerFactory.getLogger(EmailBusiness.class);

    @Autowired
    OrderService orderService;

    @Autowired
    ProductService productService;

    JavaMailSenderImpl mailSender;

    SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    public void send(String to){

        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(to);
        mailMessage.setSubject("【share】影片分享成功");
        mailMessage.setText("尊敬的 蒋欣成 先生您好：\n皇甫立波 先生分享了一部电影给您，影片观看地址：https://pan.baidu.com/s/1i5qLRQt\n祝您生活愉快！");
        mailMessage.setFrom("share.max@qq.com");
        mailSender.send(mailMessage);
    }

    public void sendCode(String to){

        String code = String.valueOf((int) (100000*Math.random()));
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(to);
        mailMessage.setSubject("【share】验证码");
        String context = "尊敬的 " + to + " ：此次验证码为：" + code + " ，30分钟内有效！";
        mailMessage.setText(context);
        mailMessage.setFrom("share.max@qq.com");
        mailSender.send(mailMessage);
        logger.info(context);
    }

    public void sendOrderSuccess(String to, int orderId){
        Order order = orderService.getOrderById(orderId);
        CarProduct product = productService.getCarProductById(order.getProductId());
        //拼接邮件内容
        StringBuffer context = new StringBuffer("尊敬的 ");
        context.append(to);
        context.append("：\n\t\t您已成功预定：");
        context.append(product.getColor());
        context.append("-");
        context.append(product.getVehicleBrand());
        context.append("-");
        context.append(product.getVehicleModel());
        context.append(order.getDays());
        context.append("天，使用时间为：");
        context.append(format.format(order.getStartTime()));
        context.append("~");
        context.append(format.format(order.getEndTime()));
        context.append("。祝您旅途愉快！");
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(to);
        mailMessage.setSubject("【share】预定成功");
        mailMessage.setText(context.toString());
        mailMessage.setFrom("share.max@qq.com");
        mailSender.send(mailMessage);
        logger.info(context.toString());
    }

    public EmailBusiness(){
        //初始化JavaMailSenderImpl实例
        mailSender = new JavaMailSenderImpl();
        mailSender.setHost("smtp.qq.com");
        mailSender.setPort(587);
        mailSender.setUsername("share.max@qq.com");
        mailSender.setPassword("jwxmtqrwyytdcjjd");
        mailSender.setDefaultEncoding("UTF-8");
        Properties properties = new Properties();
        properties.setProperty("mail.smtp.auth", "true");
        mailSender.setJavaMailProperties(properties);
    }
}
