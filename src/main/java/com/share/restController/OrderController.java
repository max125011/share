package com.share.restController;

import com.share.business.OrderBusiness;
import com.share.model.*;
import com.share.service.OrderService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

/**
 * Created by max on 2016/12/5.
 */
@RestController
@RequestMapping("/order")
public class OrderController {

    private static Logger logger = LoggerFactory.getLogger(OrderController.class);

    @Autowired
    OrderService orderService;

    @Autowired
    OrderBusiness orderBusiness;

    @RequestMapping("/list")
    public List<Order> getOrderList(){
        Order order = new Order();
        List<Order> message = orderService.getOrderList(order);
        return message;
    }

    @RequestMapping("/{id}")
    public Order getOrderById(@PathVariable int id){
        Order message = orderService.getOrderById(id);
        return message;
    }

    @RequestMapping("/insert")
    public int insertOrder(){
        Order order = new Order();
        order.setProductId(1);
        order.setProductType(1);
        order.setDays(2);
        order.setStartTime(new Date());
        order.setEndTime(new Date());
        order.setStatus(1);
        order.setConsumerId(1);
        order.setUserId(200001);
        int message = orderService.insertOrder(order);
        return message;
    }

    @RequestMapping("/update")
    public int updateOrderStatus(){
        int id = 1;
        int status = 4;
        int message = orderService.updateOrderStatus(id, status);
        return message;
    }

    @RequestMapping("/create")
    public int createOrder(){
        CreateOrderDto dto = new CreateOrderDto();
        Order order = orderService.getOrderById(2);
        dto.setOrder(order);
        Policy policy = new Policy();
        policy.setDescription("满一百减二十");
        policy.setType(1);
        dto.setPolicy(policy);
        Coupon coupon = new Coupon();
        coupon.setType(1);
        coupon.setDescription("10元红包");
        coupon.setFlag(1);
        coupon.setBeginTime(new Date());
        coupon.setEndTime(new Date());
        coupon.setPrice(new BigDecimal(10));
        coupon.setThreshold(new BigDecimal(100));
        dto.setCoupon(coupon);
        Insurance insurance = new Insurance();
        insurance.setPrice(new BigDecimal(20));
        insurance.setDescription("不计免赔");
        insurance.setInsuranceCompany("平安财险");
        dto.setInsurance(insurance);
        Consumer consumer = new Consumer();
        consumer.setAge(26);
        consumer.setCardId("320826199005021250");
        consumer.setCreditId("11111111112");
        consumer.setFlag(2);
        consumer.setName("马雄");
        consumer.setSex(1);
        consumer.setTel("18252063607");
        dto.setConsumer(consumer);
        dto.getOrder().setUserId(200001);
        int orderId = orderBusiness.createOrder(dto);
        return orderId;
    }

    @RequestMapping("/delete/{id}")
    public int deleteOrder(@PathVariable int id){
        return orderBusiness.cancelOrder(id);
    }
}
