package com.mealloop.auth_service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class SignInRequest {
    private String usernameOrEmail;
    private String password;
    private String rememberMe;
}
