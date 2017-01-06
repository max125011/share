package com.share.mapper;

import com.share.model.Insurance;
import com.share.provider.OrderSQLProvider;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

/**
 * Created by max on 2016/12/6.
 */
@Mapper
@Repository
public interface InsuranceMapper {

    @Select("select * from insurance where id = #{id}")
    Insurance getInsuranceById(@Param("id") int id);

    @InsertProvider(type = OrderSQLProvider.class, method = "insertInsurance")
    @SelectKey(statement = "SELECT LAST_INSERT_ID() AS id", keyProperty = "insurance.id", before = false, resultType = int.class)
    int insertInsurance(@Param("insurance") Insurance insurance);

    @Delete("delete from insurance where id = #{id}")
    int deleteInsurance(@Param("id")int id);
}
