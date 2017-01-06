package com.share.mapper;

import com.share.model.District;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

/**
 * Created by max on 2016/11/22.
 */
@Mapper
@Repository
public interface DistrictMapper {

    @Select("select * from district where adcode = #{adcode}")
    District getDistrict(@Param("adcode") String code);

    @Select("select * from district where name = #{name}")
    District getDistrictByName(@Param("name") String city);

    @Insert("insert into district values(#{district.adcode}, #{district.citycode}, #{district.name}, " +
            "#{district.center}," +" #{district.level})")
    int insertDistrict(@Param("district") District district);



}
