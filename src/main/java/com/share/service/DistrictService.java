package com.share.service;

import com.share.model.District;

/**
 * Created by max on 2016/11/22.
 */
public interface DistrictService {

    public District getDistrict(String code);

    public District getDistrictByName(String city);

    public int insertDistrict(District district);
}
