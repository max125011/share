package com.share.service.impl;

import com.share.mapper.*;
import com.share.model.CreateOrderDto;
import com.share.model.Order;
import com.share.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by max on 2016/12/5.
 */
@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    OrderMapper orderMapper;

    @Autowired
    ConsumerMapper consumerMapper;

    @Autowired
    CouponMapper couponMapper;

    @Autowired
    InsuranceMapper insuranceMapper;

    @Autowired
    PolicyMapper policyMapper;

    @Autowired
    PayMapper payMapper;

    @Override
    @Transactional(rollbackFor = Exception.class, propagation = Propagation.REQUIRED)
    public int orderPersist(CreateOrderDto dto) {
        //如果consumer信息没有落地到数据库中时，先落consumer信息，并关联到userId
        if (dto.getConsumer() != null && dto.getConsumer().getId() == 0){
            consumerMapper.insertConsumer(dto.getConsumer());
            dto.getOrder().setConsumerId(dto.getConsumer().getId());
        }
        //强订单使用的优惠劵状态置为已使用
        if (dto.getOrder().getCouponId() > 0){
            couponMapper.updateCouponFlag(dto.getOrder().getCouponId(), 3);
        }
        if (dto.getInsurance() != null && dto.getInsurance().getId() == 0) {
            insuranceMapper.insertInsurance(dto.getInsurance());
            dto.getOrder().setInsuranceId(dto.getInsurance().getId());
        }
        orderMapper.insertOrder(dto.getOrder());
        int orderId = dto.getOrder().getId();
        return orderId;
    }

    //未付款取消
    @Override
    @Transactional(rollbackFor = Exception.class, propagation = Propagation.REQUIRED)
    public int deleteOrder(int id) {
        Order order = orderMapper.getOrderById(id);
        if (order == null)
            return 0;
        if (order.getCouponId() > 0)
            couponMapper.deleteCoupon(order.getCouponId());
        if (order.getInsuranceId() > 0)
            insuranceMapper.deleteInsurance(order.getInsuranceId());
        orderMapper.deleteOrder(id);
        return 1;
    }

    @Override
    @Transactional(rollbackFor = Exception.class, propagation = Propagation.REQUIRED)
    public int cancelOrder(int id){
        //添加退款流程
        payMapper.deletePay(id);
        return orderMapper.updateOrderStatus(id, 5);
    }

    @Override
    public List<Order> getOrderList(Order order) {
        return orderMapper.getOrderList(order);
    }

    @Override
    public Order getOrderById(int id) {
        return orderMapper.getOrderById(id);
    }

    @Override
    public int insertOrder(Order order) {
        int res = orderMapper.insertOrder(order);
        return res;
    }

    @Override
    public int updateOrderStatus(int id, int status) {
        return orderMapper.updateOrderStatus(id, status);
    }
}
