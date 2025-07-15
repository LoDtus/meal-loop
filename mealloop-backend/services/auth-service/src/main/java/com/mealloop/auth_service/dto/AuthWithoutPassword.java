package com.mealloop.auth_service.dto;

import com.mealloop.auth_service.enums.AuthProvider;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.OffsetDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AuthWithoutPassword {
    private String authId;
    private String roleId;
    private String username;
    private String email;
    private AuthProvider provider;

    private Boolean active;
    private Boolean emailVerified;

    private OffsetDateTime createdAt;
    private OffsetDateTime updatedAt;
}
