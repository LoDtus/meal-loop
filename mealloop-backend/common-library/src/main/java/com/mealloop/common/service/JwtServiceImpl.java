package com.mealloop.common.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import java.security.Key;

public abstract class JwtServiceImpl implements JwtService {
    protected abstract String getSecretKey();

    protected Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(getSecretKey());
        return Keys.hmacShaKeyFor(keyBytes);
    }

    @Override
    public <T> T extractClaim(String token, String claimKey, Class<T> nameClass) {
        Claims claims = Jwts
                .parserBuilder()
                .setSigningKey(getSignInKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
        return claims.get(claimKey, nameClass);
    }

    @Override
    public String extractId(String token) {
        return extractClaim(token, "id", String.class);
    }

    @Override
    public String extractEmail(String token) {
        return extractClaim(token, "email", String.class);
    }

    @Override
    public String extractUsername(String token) {
        return extractClaim(token, "username", String.class);
    }
}
