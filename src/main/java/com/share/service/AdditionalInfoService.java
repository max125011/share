package com.share.service;

import com.share.model.AdditionalInfo;

/**
 * Created by max on 2016/12/14.
 */
public interface AdditionalInfoService {

    AdditionalInfo getAdditionInfoById(int id);

    AdditionalInfo getAdditionInfoByProductId(int productId);

    int insertAdditionInfo(AdditionalInfo additionalInfo);

    int updateAdditionInfo(AdditionalInfo additionalInfo);

    int deleteAdditionalInfo(int id);
}
