package com.mealloop.chat_service.repository;

import com.mealloop.chat_service.entity.Message;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MessageRepository extends MongoRepository<Message, String> {
}