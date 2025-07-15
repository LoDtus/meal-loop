package com.mealloop.notification_service.dto;

import com.mealloop.notification_service.enums.NotificationType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.OffsetDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class NotificationResponse {
    private String notificationId;
    private NotificationType type;
    private String image;
    private String title;
    private String content;
    private String preview; // image
    private String redirectUrl;
    private OffsetDateTime createdAt;

    private Boolean pinned;
    private Boolean read;
    private OffsetDateTime readAt;
}
