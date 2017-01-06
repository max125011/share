package com.share.service.impl;

import com.share.mapper.CarProductMapper;
import com.share.model.CarProduct;
import com.share.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by max on 2016/12/1.
 */
@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    CarProductMapper carProductMapper;

    @Override
    public List<CarProduct> getCarproductList(CarProduct carProduct) {
        return carProductMapper.getCarProductList(carProduct);
    }

    @Override
    public CarProduct getCarProductById(int id) {
        return carProductMapper.getCarProductById(id);
    }

    @Override
    public int insertCarProduct(CarProduct carProduct) {
        return carProductMapper.insertCarProduct(carProduct);
    }
}
