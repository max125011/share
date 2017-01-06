package com.share.service;

import com.share.model.Pay;

import java.util.List;

/**
 * Created by max on 2016/12/14.
 */
public interface PayService {

    List<Pay> getPayByUserId(int userId);

    List<Pay> getPayByOrderId(int orderId);

    int insertPay(Pay pay);

    int UpdatePay(Pay pay);

    int deletePay(int id);
}
