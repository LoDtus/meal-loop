package test.mealloop.service;

import test.mealloop.entity.Auth;

import java.util.List;

public interface AuthService {
    List<Auth> findAll();
    Auth findById(String id);
    Auth findByUsername(String username);
    Auth save(Auth auth);
    Boolean deleteById(String id);
}
