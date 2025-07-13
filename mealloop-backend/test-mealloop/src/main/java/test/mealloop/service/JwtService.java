package test.mealloop.service;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.userdetails.UserDetails;
import test.mealloop.entity.Auth;

public interface JwtService {
    <T> T extractClaim(String token, String claimKey, Class<T> nameClass);
    String extractId(String token);
    String extractEmail(String token);
    String extractRole(String token);
    String extractTokenFromCookie(HttpServletRequest request, String cookieName);
    Boolean isTokenExpired(String token);
    Boolean isTokenValid(String token, UserDetails userDetails);
    String generateAccessToken(Auth auth);
    String generateRefreshToken(Auth auth);
    UserDetails refreshAccessToken(HttpServletRequest request, HttpServletResponse response, String refreshToken);
    void setTokensToCookies(String accessToken, String refreshToken, Boolean rememberMe, HttpServletResponse response);
    void clearTokensFromCookies(HttpServletResponse response);
}
