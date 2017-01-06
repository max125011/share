package com.share.service;

import com.share.model.Insurance;

/**
 * Created by max on 2016/12/7.
 */
public interface InsuranceService {

    public Insurance getInsuranceById(int id);

    public int insertInsurance(Insurance insurance);

    public int deleteInsurance(int id);
}
