package com.mealloop.auth_service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class SignUpRequest {
    private String email;
    private String username;
    private String fullName;
    private String password;
    private String rememberMe;
    // Các thuộc tính khác nếu có
}
