package com.share.model;

/**
 * Created by max on 2016/12/19.
 */
public class ProductDetailDto {

    private CarProduct product;
    private AdditionalInfo additionalInfo;

    public CarProduct getProduct() {
        return product;
    }

    public void setProduct(CarProduct product) {
        this.product = product;
    }

    public AdditionalInfo getAdditionalInfo() {
        return additionalInfo;
    }

    public void setAdditionalInfo(AdditionalInfo additionalInfo) {
        this.additionalInfo = additionalInfo;
    }
}
