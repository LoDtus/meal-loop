package com.mealloop.auth_service.service;

import com.mealloop.auth_service.entity.Auth;

import java.util.List;

public interface AuthService {
    List<Auth> findAll();
    Auth findById(String authId);
    Auth findByUsername(String username);
    Auth findByEmail(String email);
    Auth findByUsernameOrEmail(String usernameOrEmail);
    Auth save(Auth auth);
    Boolean deleteById(String authId);
}
