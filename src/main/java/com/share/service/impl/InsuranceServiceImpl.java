package com.share.service.impl;

import com.share.model.Insurance;
import com.share.service.InsuranceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by max on 2016/12/7.
 */
@Service
public class InsuranceServiceImpl implements InsuranceService{

    @Autowired
    InsuranceService insuranceService;

    @Override
    public Insurance getInsuranceById(int id) {
        return insuranceService.getInsuranceById(id);
    }

    @Override
    public int insertInsurance(Insurance insurance) {
        return insuranceService.insertInsurance(insurance);
    }

    @Override
    public int deleteInsurance(int id) {
        return insuranceService.deleteInsurance(id);
    }
}
