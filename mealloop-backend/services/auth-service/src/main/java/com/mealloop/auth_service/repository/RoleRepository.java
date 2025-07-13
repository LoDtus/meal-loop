package com.mealloop.auth_service.repository;

import com.mealloop.auth_service.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, String> {
    Optional<Role> findByCode(String code);
    Optional<Role> findByName(String name);
}
