package com.share.service;

import com.share.model.CarCheck;

/**
 * Created by max on 2016/12/13.
 */
public interface CheckService {

    public CarCheck getCarCheckById(int id);

    public int insertCarCheck(CarCheck carCheck);

    public int updateCarCheck(CarCheck carCheck);
}
