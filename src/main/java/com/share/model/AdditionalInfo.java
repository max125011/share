package com.share.model;

import java.util.Date;

/**
 * Created by max on 2016/12/14.
 */
public class AdditionalInfo {

    private int id;
    private int productId;
    private String flowInfo;
    private String fuelInfo;
    private String cancelInfo;
    private String peccancyNotice;
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

    public String getFlowInfo() {
        return flowInfo;
    }

    public void setFlowInfo(String flowInfo) {
        this.flowInfo = flowInfo;
    }

    public String getFuelInfo() {
        return fuelInfo;
    }

    public void setFuelInfo(String fuelInfo) {
        this.fuelInfo = fuelInfo;
    }

    public String getCancelInfo() {
        return cancelInfo;
    }

    public void setCancelInfo(String cancelInfo) {
        this.cancelInfo = cancelInfo;
    }

    public String getPeccancyNotice() {
        return peccancyNotice;
    }

    public void setPeccancyNotice(String peccancyNotice) {
        this.peccancyNotice = peccancyNotice;
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
