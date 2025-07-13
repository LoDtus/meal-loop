package com.mealloop.chat_service.service;

import com.mealloop.chat_service.entity.ChatRoom;
import com.mealloop.chat_service.repository.ChatRoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ChatRoomServiceImpl implements ChatRoomService {
    private final ChatRoomRepository repository;

    @Override
    public List<ChatRoom> findAll() {
        return repository.findAll();
    }

    @Override
    public List<ChatRoom> findByMember(String userId) {
        return List.of();
    }

    @Override
    public ChatRoom findById(String conversationId) {
        return repository.findById(conversationId).orElse(null);
    }

    @Override
    public ChatRoom save(ChatRoom chatRoom) {
        return repository.save(chatRoom);
    }

    @Override
    public Boolean deleteById(String conversationId) {
        if (!repository.existsById(conversationId)) return false;
        repository.deleteById(conversationId);
        return true;
    }
}
