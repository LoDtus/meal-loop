package test.mealloop.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import test.mealloop.entity.Auth;

import java.util.Optional;

public interface AuthRepository extends MongoRepository<Auth, String> {
    Optional<Auth> findByUsername(String username);
}