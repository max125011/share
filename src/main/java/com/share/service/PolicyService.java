package com.share.service;

import com.share.model.Policy;

/**
 * Created by max on 2016/12/7.
 */
public interface PolicyService {

    public Policy getPolicyById(int id);

    public int insertPolicy(Policy policy);

    public int deletePolicy(int id);
}
