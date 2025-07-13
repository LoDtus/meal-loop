package test.mealloop.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import test.mealloop.entity.Profile;

import java.util.Optional;

public interface ProfileRepository extends MongoRepository<Profile, String> {
    Optional<Profile> findByUsernameOrEmail(String username, String email);
}
