package com.share.mapper;

import com.share.model.CarProduct;
import com.share.provider.SQLProvider;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by max on 2016/12/1.
 */
@Mapper
@Repository
public interface CarProductMapper {

    @SelectProvider(type = SQLProvider.class, method = "getCarProductList")
//    @Select("<script> select * from car_product where 1=1" +
//            "<if test=\"car.vehicleType != null\">and vehicle_type = #{car.vehicleType}</if>" +
//            "<if test=\"car.brandId != null\"> and brand_id = #{car.brandId}</if>" +
//            "<if test=\"car.areaCode != null\">and area_code = #{car.areaCode}</if></script>")
    List<CarProduct> getCarProductList(@Param("car") CarProduct carProduct);

    @Select("select * from car_product where id = #{id}")
    CarProduct getCarProductById(@Param("id")int id);

    @InsertProvider(type = SQLProvider.class, method = "insertCarProduct")
    @SelectKey(statement = "SELECT LAST_INSERT_ID() AS id", before = false, keyProperty = "car.id", resultType = int.class)
    int insertCarProduct(@Param("car") CarProduct car);
}
