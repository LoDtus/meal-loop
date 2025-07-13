package com.mealloop.auth_service.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/role")
@RequiredArgsConstructor
public class RoleController {

    @GetMapping
    public ResponseEntity<?> getRoles() {
        return ResponseEntity.ok("");
    }

    @PutMapping
    public ResponseEntity<?> updateRoles() {
        return ResponseEntity.ok("");
    }
}
