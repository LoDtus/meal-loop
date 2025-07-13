package test.mealloop.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/chat-room")
public class ChatRoomController {
    @PostMapping("/get")
    public ResponseEntity<?> getChatRooms() {
        return ResponseEntity.ok("");
    }

    @PostMapping("/create")
    public ResponseEntity<?> createChatRoom() {
        return ResponseEntity.ok("");
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateChatRoom() {
        return ResponseEntity.ok("");
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteChatRooms() {
        return ResponseEntity.ok("");
    }
}
