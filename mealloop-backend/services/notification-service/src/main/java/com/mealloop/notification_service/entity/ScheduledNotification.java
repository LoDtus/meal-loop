package com.mealloop.notification_service.entity;

import com.mealloop.notification_service.enums.NotificationScheduleStatus;
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
public class ScheduledNotification {
    @Id
    private String id; // 1 thông báo có thể được lên lịch để gửi lại nhiều lần
    private String notificationId;
    private OffsetDateTime scheduledAt;
    private NotificationScheduleStatus status; // PENDING, SENT, FAILED, CANCELLED...

    private String createdBy;
    private OffsetDateTime createdAt;
    private String failureReason; // nếu failed
}
