package com.mealloop.chat_service.service;

import com.mealloop.chat_service.entity.Message;

import java.util.List;

public interface MessageService {
    List<Message> findByConversationId(String conversationId);
    Message findById(String messageId);
    Message save(Message message);
    Boolean deleteByConversationId(String conversationId);
}
