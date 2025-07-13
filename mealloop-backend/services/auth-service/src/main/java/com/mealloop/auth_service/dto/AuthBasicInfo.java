package com.mealloop.auth_service.dto;

import com.mealloop.auth_service.enums.AuthProvider;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AuthBasicInfo {
    private String authId;
    private String roleId;
    private String username;
    private String email;
    private Boolean active;
}
