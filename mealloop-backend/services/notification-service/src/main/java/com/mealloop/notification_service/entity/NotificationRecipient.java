package com.mealloop.notification_service.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.OffsetDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Document
public class NotificationRecipient {
    @Id
    private String id;
    private String recipientId;
    private String notificationId;
    private Boolean read;
    private OffsetDateTime readAt;
    private Boolean pinned; // đánh dấu
}
