package com.share.service;

import com.share.model.Coupon;

/**
 * Created by max on 2016/12/7.
 */
public interface CouponService {

    public Coupon getCouponById(int id);

    public int insertCoupon(Coupon coupon);

    public int deleteCoupon(int id);

    public int updateCouponFlag(int id, int flag);
}
