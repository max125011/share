package com.share.service.impl;

import com.share.mapper.PayMapper;
import com.share.model.Pay;
import com.share.service.PayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by max on 2016/12/14.
 */
@Service
public class PayServiceImpl implements PayService {

    @Autowired
    PayMapper payMapper;

    @Override
    public List<Pay> getPayByUserId(int userId) {
        return payMapper.getPayByUserId(userId);
    }

    @Override
    public List<Pay> getPayByOrderId(int orderId) {
        return payMapper.getPayByOrderId(orderId);
    }

    @Override
    public int insertPay(Pay pay) {
        return payMapper.insertPay(pay);
    }

    @Override
    public int UpdatePay(Pay pay) {
        if (pay != null && payMapper.getPayByOrderId(pay.getOrderId()) != null)
            return payMapper.updatePay(pay);
        else
            return 0;
    }

    @Override
    public int deletePay(int orderId) {
        if (payMapper.getPayByOrderId(orderId) != null)
            return payMapper.deletePay(orderId);
        return 0;
    }
}
