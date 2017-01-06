package com.share.mapper;

import com.share.model.Coupon;
import com.share.provider.OrderSQLProvider;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

/**
 * Created by max on 2016/12/6.
 */
@Mapper
@Repository
public interface CouponMapper {

    @Select("select * from coupon where id = #{id}")
    Coupon getCouponById(@Param("id") int id);

    @InsertProvider(type = OrderSQLProvider.class, method = "insertCoupon")
    @SelectKey(statement = "SELECT LAST_INSERT_ID() AS id", keyProperty = "coupon.id", before = false, resultType = int.class)
    int insertCoupon(@Param("coupon")Coupon coupon);

    @Delete("delete from coupon where id = #{id}")
    int deleteCoupon(@Param("id") int id);

    @Update("update pay set flag = #{flag} where id = #{id}")
    int updateCouponFlag(@Param("id")int id, @Param("flag")int flag);
}
