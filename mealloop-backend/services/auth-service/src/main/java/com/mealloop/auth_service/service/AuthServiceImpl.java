package com.mealloop.auth_service.service;

import com.mealloop.auth_service.entity.Auth;
import com.mealloop.auth_service.repository.AuthRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final AuthRepository repository;

    @Override
    public List<Auth> findAll() {
        return repository.findAll();
    }

    @Override
    public Auth findById(String authId) {
        return repository.findById(authId).orElse(null);
    }

    @Override
    public Auth findByUsername(String username) {
        return repository.findById(username).orElse(null);
    }

    @Override
    public Auth findByEmail(String email) {
        return repository.findById(email).orElse(null);
    }

    @Override
    public Auth save(Auth auth) {
        return repository.save(auth);
    }

    @Override
    public Boolean deleteById(String authId) {
        if (!repository.existsById(authId)) return false;
        repository.deleteById(authId);
        return true;
    }
}
