package com.share.mapper;

import com.share.model.Order;
import com.share.provider.OrderSQLProvider;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by max on 2016/12/5.
 */
@Mapper
@Repository
public interface OrderMapper {

    @SelectProvider(type = OrderSQLProvider.class, method = "getOrderList")
    List<Order> getOrderList(@Param("order") Order order);

    @Select("select * from car_order where id = #{id}")
    Order getOrderById(@Param("id") int id);

    @InsertProvider(type = OrderSQLProvider.class, method = "insertOrder")
    @SelectKey(statement = "SELECT LAST_INSERT_ID() AS id", keyProperty = "order.id",before = false,resultType = int.class)
    int insertOrder(@Param("order") Order order);

    @Update("update car_order set status = #{status}, status_name = (select name from car_order_status where id = #{status}) where id = #{id}")
    int updateOrderStatus(@Param("id") int id, @Param("status") int status);

    @Delete("delete from car_order where id = #{id}")
    int deleteOrder(@Param("id") int id);

    @Update("update car_order set comment_num = comment_num + 1 where id = #{id}")
    int increaseCommentNum(@Param("id") int id);

    @Update("update car_orde")
    int updateStarLevel(@Param("id") int id, @Param("level")float starLevel);
}
