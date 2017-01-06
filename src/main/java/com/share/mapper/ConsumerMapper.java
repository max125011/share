package com.share.mapper;

import com.share.model.Consumer;
import com.share.provider.OrderSQLProvider;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

/**
 * Created by max on 2016/12/6.
 */
@Mapper
@Repository
public interface ConsumerMapper {

    @Select("select * from consumer where id = #{id}")
    Consumer getConsumerById(@Param("id")int id);

    @InsertProvider(type = OrderSQLProvider.class, method = "insertConsumer")
    @SelectKey(statement = "SELECT LAST_INSERT_ID() AS id", before = false, keyProperty = "consumer.id", resultType = int.class)
    int insertConsumer(@Param("consumer") Consumer consumer);

    @Delete("delete from consumer where id = #{id}")
    int deleteConsumer(@Param("id")int id);
}
