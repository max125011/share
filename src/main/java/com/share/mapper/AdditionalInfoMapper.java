package com.share.mapper;

import com.share.model.AdditionalInfo;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

/**
 * Created by max on 2016/12/14.
 */

@Mapper
@Repository
public interface AdditionalInfoMapper {

    AdditionalInfo getAdditionInfoById(int id);

    AdditionalInfo getAdditionInfoByProductId(int productId);

    int insertAdditionInfo(AdditionalInfo additionalInfo);

    int updateAdditionInfo(AdditionalInfo additionalInfo);

    int deleteAdditionalInfo(int id);
}
