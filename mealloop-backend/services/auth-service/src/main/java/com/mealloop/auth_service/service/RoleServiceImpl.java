package com.mealloop.auth_service.service;

import com.mealloop.auth_service.entity.Role;
import com.mealloop.auth_service.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RoleServiceImpl implements RoleService {
    private final RoleRepository repository;

    @Override
    public List<Role> findAll() {
        return repository.findAll();
    }

    @Override
    public Role findById(String roleId) {
        return repository.findById(roleId).orElse(null);
    }

    @Override
    public Role findByCode(String code) {
        return repository.findByCode(code).orElse(null);
    }

    @Override
    public Role findByName(String name) {
        return repository.findByName(name).orElse(null);
    }

    @Override
    public Role save(Role role) {
        return repository.save(role);
    }

    @Override
    public Boolean deleteById(String roleId) {
        if (!repository.existsById(roleId)) return false;
        repository.deleteById(roleId);
        return true;
    }
}
