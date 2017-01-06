package com.share.provider;

import com.share.model.CarCheck;
import com.share.model.CarProduct;
import com.share.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static org.apache.ibatis.jdbc.SqlBuilder.*;

/**
 * Created by max on 2016/12/1.
 */

public class SQLProvider {

    private  static Logger logger = LoggerFactory.getLogger(SQLProvider.class);

    public String getCarProductList(CarProduct car){
        BEGIN();
        SELECT("*");
        FROM("car_product");
        if(car.getVehicleType() > 0)
            WHERE("vehicle_type = #{car.vehicleType}");
        if (car.getBrandId() > 0)
            WHERE("brand_id = #{car.brandId}");
        if (car.getAreaCode() != null && car.getAreaCode() != "")
            WHERE("area_code = #{car.areaCode}");
        String sql = SQL();
        logger.info(sql.replace("\n", ""));
        return sql;
    }

    public String insertCarProduct(CarProduct car){
        BEGIN();
        INSERT_INTO("car_product");
        if (car.getAreaCode() != null)
            VALUES("area_code", "#{car.areaCode}");
        if (car.getBrandId() > 0)
            VALUES("brand_id", "#{car.brandId}");
        if (car.getVehicleType() > 0)
            VALUES("vehicle_type", "#{car.vehicleType}");
        if (car.getAdditionalId() > 0)
            VALUES("additional_id", "#{car.additionalId}");
        if (car.getAddress() != null)
            VALUES("address", "#{car.address}");
        if (car.getCarriageNum() > 0)
            VALUES("carriage_num", "#{car.carriageNum}");
        if (car.getColor() != null)
            VALUES("color", "#{car.color}");
        if (car.getContactTel() != null)
            VALUES("contact_tel", "#{car.contactTel}");
        if (car.getDescription() != null)
            VALUES("description", "#{car.description}");
        if (car.getDisplacement() != null)
            VALUES("displacement", "#{car.displacement}");
        if (car.getFlag() > 0)
            VALUES("flag", "#{car.flag}");
        if (car.getGearboxType() > 0)
            VALUES("gearbox_type", "#{car.gearboxType}");
        if (car.getPassengerNum() > 0)
            VALUES("passenger_num", "#{car.passengerNum}");
        if (car.getPictureUrl() != null)
            VALUES("picture_url", "#{car.pictureUrl}");
        if (car.getPrice() != null)
            VALUES("price", "#{car.price}");
        if (car.getVehicleBrand() != null)
            VALUES("vehicle_brand", "#{car.vehicleBrand}");
        if (car.getVehicleModel() != null)
            VALUES("vehicle_model", "#{car.vehicleModel}");
        String sql = SQL();
        logger.info(sql);
        return sql;
    }

    public String insertUser(User user){
        BEGIN();
        INSERT_INTO("user");
        if (user.getName() != null)
            VALUES("user_id", "#{user.userId}");
        if (user.getNickName() != null)
            VALUES("nick_name", "#{user.nickName}");
        if (user.getUserTel() != null)
            VALUES("user_tel", "#{user.userTel}");
        if (user.getEmail() != null)
            VALUES("email", "#{user.email}");
        if (user.getSex() > 0)
            VALUES("sex", "#{user.sex}");
        if (user.getAge() > 0)
            VALUES("age", "#{user.age}");
        if (user.getFlag() > 0)
            VALUES("flag", "#{user.flag}");
        if (user.getPictureUrl() != null)
            VALUES("picture_url", "#{user.pictureId}");
        String sql = SQL();
        logger.info(sql);
        return sql;
    }

    public String insertCarCheck(CarCheck carCheck){
        BEGIN();
        INSERT_INTO("car_check");
        if (carCheck.getCardUrl() != null)
            VALUES("card_url", "#{carCheck.cardUrl}");
        if (carCheck.getProductId() > 0)
            VALUES("product_id", "#{carCheck.productId}");
        if (carCheck.getVehicleLicenseUrl() != null)
            VALUES("vehicle_license_url", "#{carCheck.vehicleLicenseUrl}");
        if (carCheck.getVehicleRegisterUrl() != null)
            VALUES("vehicle_register_url", "#{carCheck.vehicleRegisterUrl}");
        String sql = SQL();
        return sql;
    }

    public String updateCarCheck(CarCheck carCheck){
        BEGIN();
        UPDATE("car_check");
        if (carCheck.getProductId() > 0)
            SET("product_id = #{carCheck.productId}");
        if (carCheck.getVehicleRegisterUrl() != null)
            SET("vehicle_register_url = #{carCheck.vehicleRegisterUrl}");
        if (carCheck.getVehicleLicenseUrl() != null)
            SET("vehicle_license_url = #{carCheck.vehicleLicenseUrl}");
        if (carCheck.getCardUrl() != null)
            SET("card_url = #{carCheck.cardUrl}");
        WHERE("id = #{carCheck.id}");
        String sql = SQL();
        return sql;
    }

}
