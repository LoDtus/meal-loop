package com.mealloop.auth_service.controller;

import com.mealloop.auth_service.service.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/role")
@RequiredArgsConstructor
public class RoleController {
    private final RoleService roleService;

    @GetMapping
    public ResponseEntity<?> getRoles() {
        return ResponseEntity.ok("");
    }

    @PutMapping
    public ResponseEntity<?> updateRoles() {
        return ResponseEntity.ok("");
    }
}
