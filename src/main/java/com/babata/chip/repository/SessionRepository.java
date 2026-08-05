package com.babata.chip.repository;


import com.babata.chip.repository.entity.SessionDO;
import com.babata.chip.repository.entity.SessionDOExample;
import com.babata.chip.repository.mapper.SessionMapper;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Repository;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.List;

@Repository
public class SessionRepository {
    @Resource
    SessionMapper sessionMapper;

    public List<SessionDO> getSessions(Long userId) {
        if (userId == null) {
            return new ArrayList<>();
        }
        SessionDOExample example = new SessionDOExample();
        example.createCriteria().andUserIdEqualTo(userId);
        example.setOrderByClause("id asc");
        List<SessionDO> res = sessionMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(res)) {
            return new ArrayList<>();
        }
        return res;
    }

    public SessionDO getSessionById(Long sessionId) {
        if (sessionId == null) {
            return null;
        }
        SessionDOExample example = new SessionDOExample();
        example.createCriteria().andIdEqualTo(sessionId);
        List<SessionDO> res = sessionMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(res)) {
            return null;
        }
        return res.get(0);
    }

    public void updateSession(SessionDO sessionDO) {
        if (sessionDO == null) {
            return;
        }
        sessionMapper.updateByPrimaryKeySelective(sessionDO);
    }

    public Long createSession(Long userId, String title, String uuid) {
        SessionDO sessionDO = new SessionDO();
        sessionDO.setUserId(userId);
        sessionDO.setTitle(title);
        sessionDO.setUuid(uuid);
        sessionMapper.insertSelective(sessionDO);
        return sessionDO.getId();
    }
}
