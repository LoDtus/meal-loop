package com.mealloop.auth_service.controller;

import com.mealloop.auth_service.dto.SignInRequest;
import com.mealloop.auth_service.dto.SignUpRequest;
import com.mealloop.auth_service.entity.Auth;
import com.mealloop.auth_service.enums.AuthProvider;
import com.mealloop.auth_service.service.AuthJwtService;
import com.mealloop.auth_service.service.AuthService;
import com.mealloop.common.dto.ApiResponse;
import com.mealloop.common.service.JwtService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.OffsetDateTime;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;
    private final JwtService jwtService;
    private final AuthJwtService authJwtService;

    @GetMapping("/check-exists/{usernameOrEmail}")
    public ResponseEntity<?> checkUsernameOrEmailExists(@PathVariable String usernameOrEmail) {
//        Profile profile = profileService.findByUsernameOrEmail(usernameOrEmail);
//        return ResponseEntity.ok(profile != null);
        return ResponseEntity.ok(authService.findAll());
    }

    @PostMapping("/sign-in")
    public ResponseEntity<?> signIn(
            @RequestBody SignInRequest request,
            HttpServletResponse response
    ) {
        Auth authExists = authService.findByUsernameOrEmail(request.getUsernameOrEmail());
        if (authExists == null) {
            ApiResponse<Void> error = ApiResponse.<Void>builder()
                    .statusCode(404)
                    .message("User not found")
                    .build();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
        }

        //...

        ApiResponse<Void> apiResponse = ApiResponse.<Void>builder()
                .message("Sign in successfully")
//                .data()
                .build();
        return ResponseEntity.ok(apiResponse);
    }

    @PostMapping("/sign-up")
    public ResponseEntity<?> signUp(
            @RequestBody SignUpRequest request,
            HttpServletResponse response
    ) {
        Auth usernameDb = authService.findByUsername(request.getUsername());
        Auth emailDb = authService.findByEmail(request.getEmail());
        if (usernameDb != null || emailDb != null) {
            ApiResponse<Void> error = ApiResponse.<Void>builder()
                    .statusCode(404)
                    .message(usernameDb != null ? "Username already exists" : "Email already exists")
                    .build();
            return ResponseEntity.status(HttpStatus.CONFLICT).body(error);
        }

        // ...

        Auth authDb = Auth.builder()
                .id(null)
                .username(request.getUsername())
                .email(request.getEmail())
                .password(request.getPassword())
                .provider(AuthProvider.LOCAL)
                .active(true)
                .emailVerified(false)
                .createdAt(OffsetDateTime.now())
                .updatedAt(OffsetDateTime.now())
                .build();
        authDb = authService.save(authDb);

        // create role, profile...

        ApiResponse<Auth> apiResponse = ApiResponse.<Auth>builder()
                .message("Verification email send")
                .build();
        return ResponseEntity.ok(apiResponse);
    }

    @GetMapping("/sign-out")
    public ResponseEntity<?> signOut(HttpServletRequest request) {
        String accessToken = authJwtService.extractTokenFromCookie(request, "accessToken");
        String id = jwtService.extractId(accessToken);

        Auth auth = authService.findById(id);
        if (auth == null) {
            ApiResponse<Void> error = ApiResponse.<Void>builder()
                    .statusCode(404)
                    .message("User not found")
                    .build();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
        }

        // ...

        ApiResponse<Void> apiResponse = ApiResponse.<Void>builder()
                .message("User signed out successfully")
                .build();
        return ResponseEntity.ok(apiResponse);
    }

    @PostMapping("/verify-email/{token}")
    public ResponseEntity<?> verifyEmail(@PathVariable String token) {
        // ... xác minh token

        String userId = jwtService.extractId(token);
        Auth userDb = authService.findById(userId);

        if (userDb == null) {
            ApiResponse<Void> apiResponse = ApiResponse.<Void>builder()
                    .statusCode(404)
                    .message("User not found")
                    .build();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(apiResponse);
        } else {
            userDb = userDb.toBuilder()
                    .emailVerified(true)
                    .build();
        }

        //...

        ApiResponse<Auth> apiResponse = ApiResponse.<Auth>builder()
                .message("Email verification successful")
                .data(userDb)
                .build();
        return ResponseEntity.ok(apiResponse);
    }

    @GetMapping("/forgot-password/{usernameOrEmail}")
    public ResponseEntity<ApiResponse<Void>> forgotPassword(@PathVariable String usernameOrEmail) {
        Auth auth = authService.findByUsernameOrEmail(usernameOrEmail);
        if (auth == null) {
            ApiResponse<Void> error = ApiResponse.<Void>builder()
                    .statusCode(404)
                    .message("Your profile not found")
                    .build();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
        }

        //...

        ApiResponse<Void> apiResponse = ApiResponse.<Void>builder()
                .message("Reset password email was sent")
                .build();
        return ResponseEntity.ok(apiResponse);
    }

    @GetMapping("/check-reset-password-token/{token}")
    public ResponseEntity<ApiResponse<Void>> checkResetPasswordToken(@PathVariable String token) {
        // ...

        ApiResponse<Void> apiResponse = ApiResponse.<Void>builder()
                .message("Reset password token is valid")
                .build();
        return ResponseEntity.ok(apiResponse);
    }

    @PostMapping("/reset-password/{password}")
    public ResponseEntity<ApiResponse<Void>> resetPassword(@PathVariable String password) {
        // ...

        ApiResponse<Void> apiResponse = ApiResponse.<Void>builder()
                .message("Password changed successfully")
                .build();
        return ResponseEntity.ok(apiResponse);
    }

    @PutMapping("/change-password/{oldPassword}/to/{newPassword}")
    public ResponseEntity<?> changePassword(
            HttpServletRequest request,
            @PathVariable String oldPassword,
            @PathVariable String newPassword
    ) {
//        String accessToken = jwtService.extractTokenFromCookie(request, "accessToken");
//        String id = jwtService.extractId(accessToken);
//        Auth auth = authService.findById(id);

        ApiResponse<Void> apiResponse = ApiResponse.<Void>builder()
                .message("Password changed successfully")
                .build();
        return ResponseEntity.ok(apiResponse);
    }
}
