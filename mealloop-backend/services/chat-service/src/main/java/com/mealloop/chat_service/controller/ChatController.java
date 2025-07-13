package com.mealloop.chat_service.controller;

import com.mealloop.chat_service.service.ChatRoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chat-room")
@RequiredArgsConstructor
public class ChatController {
    private final ChatRoomService chatRoomService;

    @PostMapping("/get")
    public ResponseEntity<?> getChatRooms() {
        return ResponseEntity.ok("");
    }

    @PostMapping("/create")
    public ResponseEntity<?> createChatRooms() {
        return ResponseEntity.ok("");
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateChatRooms() {
        return ResponseEntity.ok("");
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteChatRooms() {
        return ResponseEntity.ok("");
    }
}
