package com.mealloop.notification_service.service;

import com.mealloop.notification_service.entity.NotificationRecipient;
import com.mealloop.notification_service.repository.NotificationRecipientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NotificationRecipientServiceImpl implements NotificationRecipientService {
    private final NotificationRecipientRepository repository;

    @Override
    public List<NotificationRecipient> findAll() {
        return repository.findAll();
    }

    @Override
    public List<NotificationRecipient> findByRecipientId(String recipientId) {
        return List.of();
    }

    @Override
    public List<NotificationRecipient> findByNotificationId(String notificationId) {
        return List.of();
    }

    @Override
    public NotificationRecipient findById(String id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public NotificationRecipient save(NotificationRecipient notificationRecipient) {
        return repository.save(notificationRecipient);
    }

    @Override
    public Boolean deleteById(String id) {
        if(!repository.existsById(id)) return false;
        repository.deleteById(id);
        return true;
    }
}
