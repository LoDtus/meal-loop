package test.mealloop.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping ("/api/message")
public class MessageController {
    

    @GetMapping ("/get-all")
    public ResponseEntity<?> getAllMessages() {
        return ResponseEntity.ok("");
    }
}
