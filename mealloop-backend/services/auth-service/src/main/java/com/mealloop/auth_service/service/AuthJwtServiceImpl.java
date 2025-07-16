package com.mealloop.auth_service.service;

import com.mealloop.auth_service.entity.Auth;
import com.mealloop.common.service.JwtServiceImpl;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseCookie;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.*;

@Getter
@Slf4j
@Service
@RequiredArgsConstructor
public class AuthJwtServiceImpl extends JwtServiceImpl implements AuthJwtService {
    private final AuthService userService;
    private final UserDetailsService userDetailsService;

    @Value("${SECRET_KEY}")
    private String secretKey;

    @Value("${ACCESS_TOKEN.EXPIRATION}")
    private long accessTokenExpiration;

    @Value("${REFRESH_TOKEN.EXPIRATION}")
    private long refreshTokenExpiration;

    @Override
    protected String getSecretKey() {
        return secretKey;
    }

    @Override
    public String extractTokenFromCookie(HttpServletRequest request, String cookieName) {
        if (request.getCookies() == null) {
            System.out.println("No cookies found in request");
            return null;
        }

        for (Cookie cookie : request.getCookies()) {
            if (cookie.getName().equals(cookieName)) {
                return cookie.getValue();
            }
        }
        return null;
    }

    @Override
    public Boolean isTokenExpired(String token) {
        Date expiration = extractClaim(token, "exp", Date.class);
        return expiration.before(new Date());
    }

    @Override
    public Boolean isTokenValid(String token, UserDetails userDetails) {
        final String email = extractEmail(token);
        final String id = extractId(token);

        // Kiểm tra xem token đã hết hạn hay chưa
        if (isTokenExpired(token)) {
            System.out.println("Token het han");
            return false;
        }
        // Kiểm tra xem userDetails có phải là instance của User hay không. Nếu đúng thì tiếp tục so sánh xem email, id
        // và role có khớp với dữ liệu được lưu trong cơ sở dữ liệu hay không
        if (userDetails instanceof Auth auth) {
            return (email.equals(auth.getEmail()) &&
                    id.equals(auth.getId())
            );
        }
        return false;
    }

    @Override
    public String generateAccessToken(Auth auth) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("id", auth.getId());
        claims.put("email", auth.getEmail());

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(auth.getEmail()) // tạo subject, giúp server nhận ra user nhanh chóng mà không phải scan tìm lại
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + accessTokenExpiration))
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    @Override
    public String generateRefreshToken(Auth auth) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("id", auth.getId());
        claims.put("email", auth.getEmail());

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(auth.getEmail())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + refreshTokenExpiration))
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    @Override
    public UserDetails refreshAccessToken(
            HttpServletRequest request,
            HttpServletResponse response,
            String refreshToken
    ) {
        if (refreshToken == null) {
            throw new RuntimeException("Refresh token missing");
        }
        String email = extractEmail(refreshToken);
        UserDetails userDetails = userDetailsService.loadUserByUsername(email);
        if (userDetails == null) {
            throw new RuntimeException("User not found");
        }
        if (!isTokenValid(refreshToken, userDetails)) {
            throw new RuntimeException("Invalid refresh token");
        }
        String newAccessToken = generateAccessToken((Auth) userDetails);
        setTokensToCookies(newAccessToken, null, true, response);
        return userDetails;
    }

    @Override
    public void setTokensToCookies(
            String accessToken,
            String refreshToken,
            Boolean rememberMe,
            HttpServletResponse response
    ) {
        ResponseCookie accessTokenCookie = ResponseCookie.from("accessToken", accessToken)
                .httpOnly(true)
                .path("/")
                .sameSite("Lax")
                .secure(false)
                .maxAge(rememberMe ? (int) (getAccessTokenExpiration() / 1000) : -1)
                .build();
        response.addHeader("Set-Cookie", accessTokenCookie.toString());
        System.out.println("Set access cookie");

        if (refreshToken != null) {
            ResponseCookie refreshTokenCookie = ResponseCookie.from("refreshToken", refreshToken)
                    .httpOnly(true)
                    .path("/")
                    .sameSite("Lax")
                    .secure(false)
                    .maxAge(rememberMe ? (int) (getRefreshTokenExpiration() / 1000) : -1)
                    .build();
            response.addHeader("Set-Cookie", refreshTokenCookie.toString());
            System.out.println("Set refresh cookie");
        }

        ResponseCookie rememberMeCookie = ResponseCookie.from("rememberMe", rememberMe.toString())
                .httpOnly(false)
                .path("/")
                .sameSite("Lax")
                .secure(false)
                .maxAge(rememberMe ? (int) (getRefreshTokenExpiration() / 1000) : -1)
                .build();
        response.addHeader("Set-Cookie", rememberMeCookie.toString());
        System.out.println("Set remember me cookie");
    }

    @Override
    public void clearTokensFromCookies(HttpServletResponse response) {
        List<String> cookiesToClear = List.of("accessToken", "refreshToken");

        for (String cookieName : cookiesToClear) {
            Cookie cookie = new Cookie(cookieName, "");
            cookie.setPath("/");
            cookie.setMaxAge(0);
            cookie.setHttpOnly("refreshToken".equals(cookieName));
            response.addCookie(cookie);
        }
    }
}
