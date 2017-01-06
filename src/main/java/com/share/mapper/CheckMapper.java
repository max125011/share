package com.share.mapper;

import com.share.model.CarCheck;
import com.share.provider.SQLProvider;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

/**
 * Created by max on 2016/12/11.
 */
@Mapper
@Repository
public interface CheckMapper {

    @Select("select * from car_check where id = #{id}")
    CarCheck getCarCheckById(@Param("id") int id);

    @InsertProvider(type = SQLProvider.class, method = "insertCarCheck")
    int insertCarCheck(@Param("carCheck") CarCheck carCheck);

    @UpdateProvider(type = SQLProvider.class, method = "updateCarCheck")
    int updateCarCheck(@Param("carCheck") CarCheck carCheck);
}
