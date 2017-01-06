package com.share.service.impl;

import com.share.mapper.DistrictMapper;
import com.share.model.District;
import com.share.service.DistrictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by max on 2016/11/22.
 */
@Service
public class DistrictServiceImpl implements DistrictService {

    @Autowired
    DistrictMapper districtMapper;

    @Override
    public District getDistrict(String code) {
        return districtMapper.getDistrict(code);
    }

    @Override
    public District getDistrictByName(String city) {
        return districtMapper.getDistrictByName(city);
    }

    @Override
    public int insertDistrict(District district) {
        return districtMapper.insertDistrict(district);
    }
}
