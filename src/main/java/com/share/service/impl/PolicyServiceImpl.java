package com.share.service.impl;

import com.share.mapper.PolicyMapper;
import com.share.model.Policy;
import com.share.service.PolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by max on 2016/12/7.
 */
@Service
public class PolicyServiceImpl implements PolicyService {

    @Autowired
    PolicyMapper policyMapper;

    @Override
    public Policy getPolicyById(int id) {
        return policyMapper.getPolicyById(id);
    }

    @Override
    public int insertPolicy(Policy policy) {
        return policyMapper.insertPolicy(policy);
    }

    @Override
    public int deletePolicy(int id) {
        return policyMapper.deletePolicy(id);
    }
}
