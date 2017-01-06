package com.share.provider;

import com.share.model.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static org.apache.ibatis.jdbc.SqlBuilder.*;

/**
 * Created by max on 2016/12/5.
 */
public class OrderSQLProvider {

    private static Logger logger = LoggerFactory.getLogger(OrderSQLProvider.class);

    public String getOrderList(Order order){
        BEGIN();
        SELECT("*");
        FROM("car_order");
        if (order.getProductId() > 0)
            WHERE("product_id = #{order.productId}");
        if (order.getProductType() > 0)
            WHERE("product_type = #{order.productType}");
        if (order.getStatus() > 0)
            WHERE("status = #{order.status}");
        if (order.getConsumerId() > 0)
            WHERE("consumer_id = #{order.consumerId}");
        if (order.getUserId() > 0)
            WHERE("user_id = #{order.userId}");
        String sql = SQL();
        logger.info(sql.replace("\n", ""));
        return sql;
    }

    public String insertOrder(Order order){
        BEGIN();
        INSERT_INTO("car_order");
        if (order.getProductId() > 0)
            VALUES("product_id", "#{order.productId}");
        if (order.getProductType() > 0)
            VALUES("product_type", "#{order.productType}");
        if (order.getDays() > 0)
            VALUES("days", "#{order.days}");
        if (order.getPrice() != null)
            VALUES("price", "#{order.price}");
        if (order.getStartTime() != null)
            VALUES("start_time", "#{order.startTime}");
        if (order.getEndTime() != null)
            VALUES("end_time", "#{order.endTime}");
        if (order.getStatus() > 0){
            VALUES("status", "#{order.status}");
            VALUES("status_name", "(select name from car_order_status where id = #{order.status})");
        }
        if (order.getStarLevel() >= 0)
            VALUES("star_level", "#{order.starLevel}");
        if (order.getCommentNum() >= 0)
            VALUES("comment_num", "#{order.commentNum}");
        if (order.getInsuranceId() > 0)
            VALUES("insurance_id", "#{order.insuranceId}");
        if (order.getCouponId() > 0)
            VALUES("coupon_id", "#{order.couponId}");
        if (order.getPolicyId() > 0)
            VALUES("policy_id", "#{order.policyId}");
        if (order.getConsumerId() > 0)
            VALUES("consumer_id", "#{order.consumerId}");
        if (order.getUserId() > 0)
            VALUES("user_id", "#{order.userId}");
        String sql = SQL();
        logger.info(sql);
        return sql;
    }

    public  String insertInsurance(Insurance insurance){
        BEGIN();
        INSERT_INTO("insurance");
        if (insurance.getInsuranceNo() != null)
            VALUES("insurance_no", "#{insurance.insuranceNo}");
        if (insurance.getPrice() != null)
            VALUES("price", "#{insurance.price}");
        if (insurance.getDescription() != null)
            VALUES("description", "#{insurance.description}");
        if (insurance.getInsuranceCompany() != null)
            VALUES("insurance_company", "#{insurance.insuranceCompany}");
        String sql = SQL();
        logger.info(sql);
        return sql;
    }

    public String insertCoupon(Coupon coupon){
        BEGIN();
        INSERT_INTO("coupon");
        if (coupon.getPrice() != null)
            VALUES("price", "#{coupon.price}");
        if (coupon.getUserId() > 0)
            VALUES("user_id", "#{coupon.userId}");
        if (coupon.getThreshold() != null)
            VALUES("threshold", "#{coupon.threshold}");
        if (coupon.getDescription() != null)
            VALUES("description", "#{coupon.description}");
        if (coupon.getType() > 0)
            VALUES("type", "#{coupon.type}");
        if (coupon.getFlag() > 0)
            VALUES("flag", "#{coupon.flag}");
        if (coupon.getBeginTime() != null)
            VALUES("begin_time", "#{coupon.beginTime}");
        if (coupon.getEndTime() != null)
            VALUES("end_time", "#{coupon.endTime}");
        String sql = SQL();
        logger.info(sql);
        return sql;
    }

    public String insertPolicy(Policy policy){
        BEGIN();
        INSERT_INTO("policy");
        if (policy.getType() > 0)
            VALUES("type", "#{policy.type}");
        if (policy.getDescription() != null)
            VALUES("description", "#{policy.description}");
        String sql = SQL();
        logger.info(sql);
        return sql;
    }

    public String insertConsumer(Consumer consumer){
        BEGIN();
        INSERT_INTO("consumer");
        if (consumer.getUserId() > 0)
            VALUES("user_id", "#{consumer.userId}");
        if (consumer.getName() != null)
            VALUES("name", "#{consumer.name}");
        if (consumer.getTel() != null)
            VALUES("tel", "#{consumer.tel}");
        if (consumer.getSex() > 0)
            VALUES("sex", "#{consumer.sex}");
        if (consumer.getAge() > 0)
            VALUES("age", "#{consumer.age}");
        if (consumer.getCardId() != null)
            VALUES("card_id", "#{consumer.cardId}");
        if (consumer.getCardUrl() != null)
            VALUES("card_url", "#{consumer.cardUrl}");
        if (consumer.getDriveLicenseUrl() != null)
            VALUES("drive_license_url", "#{consumer.driveLicenseUrl}");
        if (consumer.getCreditId() != null)
            VALUES("credit_id", "#{consumer.creditId}");
        if (consumer.getCreditUrl() != null)
            VALUES("credit_url", "#{consumer.creditUrl}");
        if (consumer.getFlag() > 0)
            VALUES("flag", "#{consumer.flag}");
        String sql = SQL();
        logger.info(sql);
        return sql;
    }

    public String insertPay(Pay pay){
        BEGIN();
        INSERT_INTO("pay");
        //orderId必须有，作为主键
        VALUES("order_id", "#{pay.orderId}");
        if (pay.getUserId() > 0)
            VALUES("user_id", "#{pay.userId}");
        if (pay.getPayType() > 0)
            VALUES("pay_type", "#{pay.payType}");
        if (pay.getPrice() != null)
            VALUES("price", "#{pay.price}");
        String sql = SQL();
        logger.info(sql);
        return sql;
    }

    public String updatePay(Pay pay){
        BEGIN();
        UPDATE("pay");
        if (pay.getUserId() > 0)
            SET("user_id = #{pay.userId}");
        if (pay.getPayType() > 0)
            SET("pay_type = #{pay.payType}");
        if (pay.getPrice() != null)
            SET("price = #{pay.price}");
        WHERE("order_id = #{pay.orderId}");
        String sql = SQL();
        logger.info(sql);
        return sql;
    }
}
