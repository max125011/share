package com.share.service;

import com.share.model.CreateOrderDto;
import com.share.model.Order;

import java.util.List;

/**
 * Created by max on 2016/12/5.
 */
public interface OrderService {

    public int orderPersist(CreateOrderDto dto);

    public int deleteOrder(int id);

    public int cancelOrder(int id);

    public List<Order> getOrderList(Order order);

    public Order getOrderById(int id);

    public int insertOrder(Order order);

    public int updateOrderStatus(int id, int status);
}
