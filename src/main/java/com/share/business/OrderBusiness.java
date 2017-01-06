package com.share.business;

import com.share.model.*;
import com.share.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

/**
 * Created by max on 2016/12/5.
 */
@Component
public class OrderBusiness {

    @Autowired
    OrderService orderService;

    @Autowired
    InsuranceBusiness insuranceBusiness;

    @Autowired
    ProductService productService;

    @Autowired
    CouponService couponService;

    @Autowired
    PolicyService policyService;

    @Autowired
    PayService payService;

    //下单接口
    public int createOrder(CreateOrderDto dto){

        int userId = dto.getOrder().getUserId();
        //如果consumer没有落地，则在这里落数据库，并关联到对应user下面
        if (dto.getConsumer() != null && dto.getConsumer().getId() == 0 && userId > 0)
            dto.getConsumer().setUserId(userId);
        //订单创建后状态为待付款状态
        dto.getOrder().setStatus(1);
        //生成保险单对象
        if (dto.getInsurance() != null)
            dto.setInsurance(insuranceBusiness.create(10, "不计免赔"));
        dto.getOrder().setInsuranceId(dto.getInsurance().getId());
        return orderService.orderPersist(dto);
    }

    public int payOrder(int id, int type){

        Order order = orderService.getOrderById(id);
        BigDecimal price = calOrderPrice(order);
        Pay pay = new Pay();
        pay.setPrice(price);
        pay.setUserId(order.getUserId());
        pay.setOrderId(order.getId());
        pay.setPayType(type);
        return payService.insertPay(pay);
    }

    /*
     * 计算订单价格
     */
    public BigDecimal calOrderPrice(Order order){

        BigDecimal price = productService.getCarProductById(order.getProductId()).getPrice();
        //计算政策价格
        if (order.getPolicyId() > 0){
            Policy policy = policyService.getPolicyById(order.getPolicyId());
            calOrderPolicy(price, policy.getType());
        }
        //计算用完优惠劵的价格
        if (order.getCouponId() > 0){
            Coupon coupon = couponService.getCouponById(order.getCouponId());
            if (price.compareTo(coupon.getThreshold()) >= 0)
                price.subtract(coupon.getPrice());
        }
        return price;
    }

    /*
     * 取消订单
     * 1、未付款取消，直接删除订单
     * 2、付完款后取消，走退款流程，并将订单状态置为已失效
     */
    public int cancelOrder(int id){
        Order order = orderService.getOrderById(id);
        if (order.getStatus() == 1)
            return orderService.deleteOrder(id);
        else
            return orderService.cancelOrder(id);
    }

    /*
     *计算政策价格
     */
    public BigDecimal calOrderPolicy(BigDecimal price, int type){

        //type = 1，表示九折
        if (type == 1)
            price.subtract(price.divide(new BigDecimal(10)));
        //type = 2 半价
        if (type == 2)
            price.divide(new BigDecimal(2));
        return price;
    }
}
