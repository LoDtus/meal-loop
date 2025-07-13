package test.mealloop.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/message")
public class MessageController {

    @GetMapping("/get")
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

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteMessages() {
        // Có thể xóa được nhiều tin nhắn
        return ResponseEntity.ok("");
    }
}
