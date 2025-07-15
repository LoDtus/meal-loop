package com.mealloop.notification_service.service;

import com.mealloop.notification_service.entity.NotificationRecipient;

import java.util.List;

public interface NotificationRecipientService {
    List<NotificationRecipient> findAll();
    List<NotificationRecipient> findByRecipientId(String recipientId);
    List<NotificationRecipient> findByNotificationId(String notificationId);
    NotificationRecipient findById(String id);
    NotificationRecipient save(NotificationRecipient notificationRecipient);
    Boolean deleteById(String id);
}
