package com.share.business;

import com.share.model.Insurance;
import com.share.util.CommonUtil;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

/**
 * Created by max on 2016/12/7.
 */
@Component
public class InsuranceBusiness {

    public Insurance create(int price, String des){
        Insurance insurance = new Insurance();
        insurance.setInsuranceNo(CommonUtil.getUUID());
        insurance.setPrice(new BigDecimal(price));
        insurance.setDescription(des);
        insurance.setInsuranceCompany("平安产险");
        return insurance;
    }
}
