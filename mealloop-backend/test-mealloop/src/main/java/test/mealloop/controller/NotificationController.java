package test.mealloop.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/notification")
public class NotificationController {
    @PostMapping("/get")
    public ResponseEntity<?> getNotifications() {
        return ResponseEntity.ok("");
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteCategories() {
        return ResponseEntity.ok("");
    }
}