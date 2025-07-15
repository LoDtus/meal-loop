package com.mealloop.auth_service.repository;

import com.mealloop.auth_service.entity.Auth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface AuthRepository extends JpaRepository<Auth, String> {
    Optional<Auth> findByUsername(String username);
    Optional<Auth> findByEmail(String email);

    @Query("SELECT a FROM Auth a WHERE a.username = :input OR a.email = :input")
    Optional<Auth> findByUsernameOrEmail(@Param("input") String input);
}
