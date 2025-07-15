package com.mealloop.notification_service.repository;

import com.mealloop.notification_service.entity.NotificationRecipient;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface NotificationRecipientRepository extends MongoRepository<NotificationRecipient, String> {
    List<NotificationRecipient> findByRecipientId(String recipientId);
    List<NotificationRecipient> findByNotificationId(String notificationId);
}
