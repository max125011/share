package com.share.business;

import com.share.model.CarProduct;
import com.share.model.ProductDetailDto;
import com.share.service.AdditionalInfoService;
import com.share.service.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by max on 2016/12/1.
 */
@Component
public class CarProductBusiness {

    private static Logger logger = LoggerFactory.getLogger(CarProductBusiness.class);

    @Autowired
    ProductService productService;

    @Autowired
    AdditionalInfoService additionalInfoService;

    /**
     *  产品详情接口
     * @param id
     * @return
     */
    public ProductDetailDto getProductDetail(int id){
        ProductDetailDto dto = new ProductDetailDto();
        CarProduct product = productService.getCarProductById(id);
        if (product != null){
            dto.setProduct(product);
            if (product.getAdditionalId() > 0)
                dto.setAdditionalInfo(additionalInfoService.getAdditionInfoById(product.getAdditionalId()));
        }
        return dto;
    }

    /**
     *  查询产品列表接口，根据输入的product条件
     * @param product
     * @return
     */
    public List<CarProduct> getProductList(CarProduct product){
        List<CarProduct> list = productService.getCarproductList(product);
        return list;
    }

}
