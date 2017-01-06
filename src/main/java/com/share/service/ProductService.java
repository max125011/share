package com.share.service;

import com.share.model.CarProduct;

import java.util.List;

/**
 * Created by max on 2016/12/1.
 */
public interface ProductService {

    public List<CarProduct> getCarproductList(CarProduct carProduct);

    public CarProduct getCarProductById(int id);

    int insertCarProduct(CarProduct carProduct);
}
