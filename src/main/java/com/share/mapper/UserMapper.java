package com.share.mapper;

import com.share.model.User;
import com.share.provider.SQLProvider;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

/**
 * Created by max on 2016/11/11.
 */
@Mapper
@Repository
public interface UserMapper {

    @Select("select * from user where user_id = #{id}")
    User getUserById(@Param("id")int id);

    @Select("select * from user where user_tel = #{tel}")
    User getUserByTel(@Param("tel")String tel);

    @SelectProvider(type = SQLProvider.class, method = "insertUser")
    @SelectKey(statement = "SELECT LAST_INSERT_ID() AS id", before = false, keyProperty = "user.id", resultType = int.class)
    int insertUser(@Param("user")User user);
}
