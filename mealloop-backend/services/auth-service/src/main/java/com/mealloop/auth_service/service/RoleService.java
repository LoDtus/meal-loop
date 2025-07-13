package com.mealloop.auth_service.service;

import com.mealloop.auth_service.entity.Role;

import java.util.List;

public interface RoleService {
    List<Role> findAll();
    Role findById(String roleId);
    Role findByCode(String code);
    Role findByName(String name);
    Role save(Role role);
    Boolean deleteById(String roleId);
}
