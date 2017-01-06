package com.share.restController;

import com.share.model.CarProduct;
import com.share.service.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.List;

/**
 * Created by max on 2016/12/1.
 */
@RestController
@RequestMapping("/car")
public class CarProductController {

    private static Logger logger = LoggerFactory.getLogger(CarProductController.class);

    @Autowired
    ProductService productService;

    @RequestMapping("/list")
    public List<CarProduct> getCarProductList(){
        CarProduct carProduct = new CarProduct();
        carProduct.setAreaCode("320106");
        List<CarProduct> list =  productService.getCarproductList(carProduct);
        logger.info("car/list返回结果：" + list);
        return list;
    }

    @RequestMapping("/{id}")
    public CarProduct getCarProductById(@PathVariable int id) {
        CarProduct carProduct = productService.getCarProductById(id);
        return carProduct;
    }

    @RequestMapping("/insert")
    public int insertCarProduct(){
        CarProduct carProduct = new CarProduct();
        carProduct.setAreaCode("320106");
        carProduct.setAddress("南京市新模范马路66号（南京邮电大学）");
        carProduct.setBrandId(10003);
        carProduct.setVehicleBrand("现代");
        carProduct.setCarriageNum(3);
        carProduct.setColor("白");
        carProduct.setContactTel("18252063607");
        carProduct.setDescription("性价比SUV");
//        carProduct.setDisplacement("1.5L");
        carProduct.setFlag(1);
        carProduct.setGearboxType(2);
        carProduct.setPassengerNum(5);
        carProduct.setPrice(new BigDecimal(200));
        carProduct.setVehicleModel("ix35");
        carProduct.setVehicleType(1);
        int message = productService.insertCarProduct(carProduct);
        logger.info("insert入参：" + carProduct);
        logger.info("insert结果：" + message);
        return message;
    }
}
