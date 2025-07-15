package com.mealloop.notification_service.controller;

import com.mealloop.notification_service.service.NotificationRecipientService;
import com.mealloop.notification_service.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/notification")
public class NotificationController {
    private final NotificationService notificationService;
    private final NotificationRecipientService notificationRecipientService;

    @PostMapping("/get")
    public ResponseEntity<?> getNotifications() {
        return ResponseEntity.ok("");
    }

    @PostMapping("/create")
    public ResponseEntity<?> createNotifications() {
        return ResponseEntity.ok("");
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateNotifications() {
        return ResponseEntity.ok("");
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteNotifications() {
        return ResponseEntity.ok("");
    }
}
