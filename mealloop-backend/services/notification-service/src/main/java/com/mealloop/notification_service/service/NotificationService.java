package com.mealloop.notification_service.service;

import com.mealloop.notification_service.entity.Notification;

import java.util.List;

public interface NotificationService {
    List<Notification> findAll();
    Notification findById(String id);
    Notification save(Notification notification);
    Boolean deleteById(String id);
}
