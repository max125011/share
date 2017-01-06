package com.share.service.impl;

import com.share.mapper.AdditionalInfoMapper;
import com.share.model.AdditionalInfo;
import com.share.service.AdditionalInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by max on 2016/12/14.
 */
@Service
public class AdditionalInfoServiceImpl implements AdditionalInfoService{

    @Autowired
    AdditionalInfoMapper additionalInfoMapper;

    @Override
    public AdditionalInfo getAdditionInfoById(int id) {
        return additionalInfoMapper.getAdditionInfoById(id);
    }

    @Override
    public AdditionalInfo getAdditionInfoByProductId(int productId) {
        return additionalInfoMapper.getAdditionInfoByProductId(productId);
    }

    @Override
    public int insertAdditionInfo(AdditionalInfo additionalInfo) {
        return additionalInfoMapper.insertAdditionInfo(additionalInfo);
    }

    @Override
    public int updateAdditionInfo(AdditionalInfo additionalInfo) {
        return additionalInfoMapper.updateAdditionInfo(additionalInfo);
    }

    @Override
    public int deleteAdditionalInfo(int id) {
        return additionalInfoMapper.deleteAdditionalInfo(id);
    }
}
