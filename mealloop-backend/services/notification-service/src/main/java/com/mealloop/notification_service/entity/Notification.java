package com.mealloop.notification_service.entity;

import com.mealloop.notification_service.enums.NotificationType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.OffsetDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Document
public class Notification {
    @Id
    private String id;
    private NotificationType type;
    private String image;
    private String title;
    private String content;
    private String preview; // image
    private String redirectUrl;
    private String targetId; // id nơi xuất phát thông báo
    private String createdBy; // người tạo ra thông báo
    private OffsetDateTime createdAt;
    private OffsetDateTime publishedAt; // với các thông báo được lên lịch sẵn
    private OffsetDateTime updatedAt; // có thể cập nhật thông báo đối với các thông báo từ hệ thống, chủ động soạn tin nhắn
    private OffsetDateTime expireAt; // nếu thông báo có thời hạn xóa
}
