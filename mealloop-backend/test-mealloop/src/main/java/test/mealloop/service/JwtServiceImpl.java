package test.mealloop.service;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import test.mealloop.entity.Auth;

@Slf4j
@Getter
@Service
@RequiredArgsConstructor
public class JwtServiceImpl implements JwtService {
    @Override
    public <T> T extractClaim(String token, String claimKey, Class<T> nameClass) {
        return null;
    }

    @Override
    public String extractId(String token) {
        return "";
    }

    @Override
    public String extractEmail(String token) {
        return "";
    }

    @Override
    public String extractRole(String token) {
        return "";
    }

    @Override
    public String extractTokenFromCookie(HttpServletRequest request, String cookieName) {
        return "";
    }

    @Override
    public Boolean isTokenExpired(String token) {
        return null;
    }

    @Override
    public Boolean isTokenValid(String token, UserDetails userDetails) {
        return null;
    }

    @Override
    public String generateAccessToken(Auth auth) {
        return "";
    }

    @Override
    public String generateRefreshToken(Auth auth) {
        return "";
    }

    @Override
    public UserDetails refreshAccessToken(HttpServletRequest request, HttpServletResponse response, String refreshToken) {
        return null;
    }

    @Override
    public void setTokensToCookies(String accessToken, String refreshToken, Boolean rememberMe, HttpServletResponse response) {

    }

    @Override
    public void clearTokensFromCookies(HttpServletResponse response) {

    }
}
