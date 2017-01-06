package com.share.model;

import java.util.Date;

/**
 * Created by max on 2016/12/11.
 */
public class CarCheck {

    private int id;
    private int productId;
    private String vehicleRegisterUrl;
    private String vehicleLicenseUrl;
    private String cardUrl;
    private Date createTime;
    private Date updateTime;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getVehicleRegisterUrl() {
        return vehicleRegisterUrl;
    }

    public void setVehicleRegisterUrl(String vehicleRegisterUrl) {
        this.vehicleRegisterUrl = vehicleRegisterUrl;
    }

    public String getVehicleLicenseUrl() {
        return vehicleLicenseUrl;
    }

    public void setVehicleLicenseUrl(String vehicleLicenseUrl) {
        this.vehicleLicenseUrl = vehicleLicenseUrl;
    }

    public String getCardUrl() {
        return cardUrl;
    }

    public void setCardUrl(String cardUrl) {
        this.cardUrl = cardUrl;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }
}
