package com.mealloop.common.service;

public interface JwtService {
    <T> T extractClaim(String token, String claimKey, Class<T> nameClass);
    String extractId(String token);
    String extractUsername(String token);
    String extractEmail(String token);
}