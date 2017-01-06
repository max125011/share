package com.share.service.impl;

import com.share.mapper.CheckMapper;
import com.share.model.CarCheck;
import com.share.service.CheckService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by max on 2016/12/13.
 */
@Service
public class CheckServiceImpl implements CheckService {

    @Autowired
    CheckMapper checkMapper;

    @Override
    public CarCheck getCarCheckById(int id) {
        return checkMapper.getCarCheckById(id);
    }

    @Override
    public int insertCarCheck(CarCheck carCheck) {
        if (carCheck != null && carCheck.getProductId() > 0)
            return checkMapper.insertCarCheck(carCheck);
        else
            return 0;
    }

    @Override
    public int updateCarCheck(CarCheck carCheck) {
        if (carCheck != null && carCheck.getProductId() > 0)
            return checkMapper.updateCarCheck(carCheck);
        else
            return 0;
    }
}
