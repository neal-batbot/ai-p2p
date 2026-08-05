package com.babata.chip.repository;


import com.babata.chip.repository.entity.AdminDO;
import com.babata.chip.repository.entity.AdminDOExample;
import com.babata.chip.repository.mapper.AdminMapper;
import jakarta.annotation.Resource;
import org.apache.commons.collections.CollectionUtils;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class AdminRepository {
    @Resource
    AdminMapper adminMapper;

    public AdminDO getAdminByUsername(String username) {
        AdminDOExample example = new AdminDOExample();
        example.createCriteria().andUsernameEqualTo(username);
        List<AdminDO> res = adminMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(res)) {
            return null;
        }
        return res.get(0);
    }

    public AdminDO getAdminById(Integer id) {
        AdminDOExample example = new AdminDOExample();
        example.createCriteria().andIdEqualTo(id);
        List<AdminDO> res = adminMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(res)) {
            return null;
        }
        return res.get(0);
    }

    public List<AdminDO> getAllAdmins() {
        AdminDOExample example = new AdminDOExample();
        example.createCriteria().andIdGreaterThanOrEqualTo(0);
        List<AdminDO> res = adminMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(res)) {
            return new ArrayList<>();
        }
        return res;
    }

    public void addAdmin(AdminDO adminDO) {
        adminMapper.insert(adminDO);
    }

    public void updateAdmin(AdminDO adminDO) {
        adminMapper.updateByPrimaryKeySelective(adminDO);
    }

    public void deleteAdmin(Integer id) {
        adminMapper.deleteByPrimaryKey(id);
    }

}
