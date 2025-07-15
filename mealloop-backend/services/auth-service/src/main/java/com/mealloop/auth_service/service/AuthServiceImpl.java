package com.mealloop.auth_service.service;

import com.mealloop.auth_service.entity.Auth;
import com.mealloop.auth_service.repository.AuthRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
        return repository.findByUsername(username).orElse(null);
    }

    @Override
    public Auth findByEmail(String email) {
        return repository.findByEmail(email).orElse(null);
    }

    @Override
    public Auth findByUsernameOrEmail(String usernameOrEmail) {
        return repository.findByUsernameOrEmail(usernameOrEmail).orElse(null);
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
