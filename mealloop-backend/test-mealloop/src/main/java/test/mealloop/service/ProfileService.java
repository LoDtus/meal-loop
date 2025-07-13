package test.mealloop.service;

import test.mealloop.entity.Profile;

import java.util.List;

public interface ProfileService {
    List<Profile> findAll();
    Profile findById(String id);
    Profile findByUsernameOrEmail(String usernameOrEmail);
    Profile save(Profile profile);
    Boolean deleteById(String id);
}
