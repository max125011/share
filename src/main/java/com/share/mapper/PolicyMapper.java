package com.share.mapper;

import com.share.model.Policy;
import com.share.provider.OrderSQLProvider;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

/**
 * Created by max on 2016/12/6.
 */
@Mapper
@Repository
public interface PolicyMapper {

    @Select("select * from policy where id = #{id}")
    Policy getPolicyById(@Param("id") int id);

    @InsertProvider(type = OrderSQLProvider.class, method = "insertPolicy")
    @SelectKey(statement = "SELECT LAST_INSERT_ID() AS id", keyProperty = "policy.id", before = false, resultType = int.class)
    int insertPolicy(@Param("policy") Policy policy);

    @Delete("delete from policy where id = #{id}")
    int deletePolicy(@Param("id")int id);
}
