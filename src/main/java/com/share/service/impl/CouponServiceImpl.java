package com.share.service.impl;

import com.share.mapper.CouponMapper;
import com.share.model.Coupon;
import com.share.service.CouponService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by max on 2016/12/7.
 */
@Service
public class CouponServiceImpl implements CouponService {

    @Autowired
    CouponMapper couponMapper;

    @Override
    public Coupon getCouponById(int id) {
        return couponMapper.getCouponById(id);
    }

    @Override
    public int insertCoupon(Coupon coupon) {
        return couponMapper.insertCoupon(coupon);
    }

    @Override
    public int deleteCoupon(int id) {
        return couponMapper.deleteCoupon(id);
    }

    @Override
    public int updateCouponFlag(int id, int flag) {
        return couponMapper.updateCouponFlag(id, flag);
    }
}
