package com.babata.chip.repository;


import com.babata.chip.repository.entity.VisitorDO;
import com.babata.chip.repository.entity.VisitorDOExample;
import com.babata.chip.repository.mapper.VisitorMapper;
import com.github.pagehelper.PageHelper;
import jakarta.annotation.Resource;
import org.apache.commons.collections.CollectionUtils;
import org.springframework.stereotype.Repository;



import java.util.ArrayList;
import java.util.List;

@Repository
public class VisitorRepository {
    @Resource
    private VisitorMapper visitorMapper;

    public Integer getIndexVisitorsCount() {
        VisitorDOExample example = new VisitorDOExample();
        example.createCriteria()
                .andIdGreaterThanOrEqualTo(0)
                .andUriEqualTo("/");
        return (int) visitorMapper.countByExample(example);
    }

    public List<VisitorDO> getRecentVisitors(int limit) {
        VisitorDOExample example = new VisitorDOExample();
        example.setOrderByClause("id desc");
        PageHelper.startPage(1, limit);
        List<VisitorDO> res = visitorMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(res)) {
            return new ArrayList<>();
        }
        return res;
    }

    public void addVisitor(VisitorDO visitorDO) {
        visitorMapper.insert(visitorDO);
    }
}
