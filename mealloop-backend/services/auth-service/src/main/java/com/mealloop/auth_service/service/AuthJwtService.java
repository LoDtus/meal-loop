package com.mealloop.auth_service.service;

import com.mealloop.auth_service.entity.Auth;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.userdetails.UserDetails;

public interface AuthJwtService {
    String extractTokenFromCookie(HttpServletRequest request, String cookieName);
    Boolean isTokenExpired(String token);
    Boolean isTokenValid(String token, UserDetails userDetails);

    String generateAccessToken(Auth auth);
    String generateRefreshToken(Auth auth);
    UserDetails refreshAccessToken(HttpServletRequest request, HttpServletResponse response, String refreshToken);

    void setTokensToCookies(String accessToken, String refreshToken, Boolean rememberMe, HttpServletResponse response);
    void clearTokensFromCookies(HttpServletResponse response);
}
