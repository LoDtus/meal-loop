package com.mealloop.gateway.services;

import org.springframework.security.core.userdetails.UserDetails;

public interface JwtService {
    <T> T extractClaim(String token, String claimKey, Class<T> nameClass);
    String extractId(String token);
    String extractEmail(String token);
    String extractRole(String token);
    Boolean isTokenExpired(String token);
    Boolean isTokenValid(String token, UserDetails userDetails);
}