package com.mealloop.chat_service.controller;

import com.mealloop.chat_service.service.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/message")
@RequiredArgsConstructor
public class MessageController {
    private final MessageService messageService;

    @PostMapping("/get")
    public ResponseEntity<?> getMessages() {
        return ResponseEntity.ok("");
    }

    @PostMapping("/send")
    public ResponseEntity<?> sendMessage() {
        return ResponseEntity.ok("");
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateMessage() {
        return ResponseEntity.ok("");
    }
}
