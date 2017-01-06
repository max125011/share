package com.share.mapper;

import com.share.model.Pay;
import com.share.provider.OrderSQLProvider;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by max on 2016/12/14.
 */
@Mapper
@Repository
public interface PayMapper {

    @Select("select * from pay where user_id = #{userId}")
    List<Pay> getPayByUserId(@Param("userId") int userId);

    @Select("select * from pay where order_id = #{orderId]")
    List<Pay> getPayByOrderId(@Param("orderId") int orderId);

    @InsertProvider(type = OrderSQLProvider.class, method = "insertPay")
    int insertPay(@Param("pay") Pay pay);

    @UpdateProvider(type = OrderSQLProvider.class, method = "updatePay")
    int updatePay(@Param("pay") Pay pay);

    @Delete("delete from pay where id = #{id}")
    int deletePay(@Param("id") int id);
}
