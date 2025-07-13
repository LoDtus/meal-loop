package com.mealloop.chat_service.service;

import com.mealloop.chat_service.entity.ChatRoom;

import java.util.List;

public interface ChatRoomService {
    List<ChatRoom> findAll();
    List<ChatRoom> findByMember(String userId);
    ChatRoom findById(String conversationId);
    ChatRoom save(ChatRoom chatRoom);
    Boolean deleteById(String conversationId);
}
