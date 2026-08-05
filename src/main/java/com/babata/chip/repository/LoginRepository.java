package com.babata.chip.repository;

import com.babata.chip.repository.entity.LoginDO;
import com.babata.chip.repository.entity.LoginDOExample;
import com.babata.chip.repository.mapper.LoginMapper;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Repository;
import org.springframework.util.CollectionUtils;

import java.util.List;

@Repository
public class LoginRepository {
    @Resource
    private LoginMapper loginMapper;

    public LoginDO getLatestSuccessfulLoginByUsername(String username) {
        LoginDOExample example = new LoginDOExample();
        example.createCriteria().andUsernameEqualTo(username).andLoginFlagEqualTo((byte) 1);
        example.setOrderByClause("id desc");
        List<LoginDO> res = loginMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(res)) {
            return null;
        }
        return res.get(0);
    }

    public LoginDO getLatestLoginByIp(String ip) {
        LoginDOExample example = new LoginDOExample();
        example.createCriteria().andIpEqualTo(ip);
        example.setOrderByClause("id desc");
        List<LoginDO> res = loginMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(res)) {
            return null;
        }
        return res.get(0);
    }

    public void addLoginRecord(LoginDO loginDO) {
        loginMapper.insert(loginDO);
    }
}
