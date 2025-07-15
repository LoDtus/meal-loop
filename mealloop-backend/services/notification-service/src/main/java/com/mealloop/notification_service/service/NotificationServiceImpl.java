package com.mealloop.notification_service.service;

import com.mealloop.notification_service.entity.Notification;
import com.mealloop.notification_service.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NotificationServiceImpl implements NotificationService {
    private final NotificationRepository repository;

    @Override
    public List<Notification> findAll() {
        return repository.findAll();
    }

    @Override
    public Notification findById(String id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Notification save(Notification notification) {
        return repository.save(notification);
    }

    @Override
    public Boolean deleteById(String id) {
        if(!repository.existsById(id)) return false;
        repository.deleteById(id);
        return true;
    }
}
