package com.mealloop.notification_service.repository;

import com.mealloop.notification_service.entity.Notification;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface NotificationRepository extends MongoRepository<Notification, String> {
}
