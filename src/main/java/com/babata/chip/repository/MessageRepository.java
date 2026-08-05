package com.babata.chip.repository;


import com.babata.chip.repository.entity.MessageDO;
import com.babata.chip.repository.entity.MessageDOExample;
import com.babata.chip.repository.mapper.MessageMapper;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Repository;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.List;

@Repository
public class MessageRepository {
    @Resource
    MessageMapper messageMapper;

    public List<MessageDO> getSessionMessages(Long sessionId) {
        if (sessionId == null) {
            return new ArrayList<>();
        }
        MessageDOExample example = new MessageDOExample();
        example.createCriteria().andSessionIdEqualTo(sessionId);
        example.setOrderByClause("id asc");
        List<MessageDO> res = messageMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(res)) {
            return new ArrayList<>();
        }
        return res;
    }

    public void addMessage(Long sessionId, Long senderId, String role, String content, String model, Byte status) {
        if (sessionId == null || role == null || model == null || status == null) {
            return;
        }
        MessageDO messageDO = new MessageDO();
        messageDO.setSessionId(sessionId);
        messageDO.setSenderId(senderId);
        messageDO.setRole(role);
        messageDO.setContent(content);
        messageDO.setModel(model);
        messageDO.setStatus(status);
        messageMapper.insertSelective(messageDO);
    }
}
