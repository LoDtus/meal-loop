package com.mealloop.chat_service.service;

import com.mealloop.chat_service.entity.Message;
import com.mealloop.chat_service.repository.MessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MessageServiceImpl implements MessageService {
    private final MessageRepository repository;

    @Override
    public List<Message> findByConversationId(String conversationId) {
        return List.of();
    }

    @Override
    public Message findById(String messageId) {
        return repository.findById(messageId).orElse(null);
    }

    @Override
    public Message save(Message message) {
        return repository.save(message);
    }

    @Override
    public Boolean deleteByConversationId(String conversationId) {
        return null;
    }
}
