package test.mealloop.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;
import test.mealloop.dto.auth.SignInRequest;
import test.mealloop.dto.auth.SignUpRequest;
import test.mealloop.dto.response.ApiResponse;
import test.mealloop.entity.Auth;
import test.mealloop.entity.Profile;
import test.mealloop.service.AuthService;
import test.mealloop.service.JwtService;
import test.mealloop.service.ProfileService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService authService;
    private final ProfileService profileService;
    private final JwtService jwtService;

    @GetMapping("/check-exists/{usernameOrEmail}")
    public ResponseEntity<Boolean> checkUsernameOrEmailExists(@PathVariable String usernameOrEmail) {
        Profile profile = profileService.findByUsernameOrEmail(usernameOrEmail);
        return ResponseEntity.ok(profile != null);
    }

    @PostMapping("/sign-in")
    public ResponseEntity<?> signIn(
            @RequestBody SignInRequest request,
            HttpServletResponse response
    ) {
        Profile profileExists = profileService.findByUsernameOrEmail(request.getUsernameOrEmail());
        if (profileExists == null) {
            ApiResponse<Void> error = ApiResponse.<Void>builder()
                    .statusCode(404)
                    .message("Your profile not found")
                    .build();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
        }

        Auth authExists = authService.findById(profileExists.getId());
        if (authExists == null) {
            ApiResponse<Void> error = ApiResponse.<Void>builder()
                    .statusCode(404)
                    .message("Your authentication data not found")
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
        Profile profileExists = profileService.findByUsernameOrEmail(request.getUsernameOrEmail());
        if (profileExists != null) {
            ApiResponse<Void> error = ApiResponse.<Void>builder()
                    .statusCode(404)
                    .message("Username or email already exists")
                    .build();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
        }

        // ...

        ApiResponse<Void> apiResponse = ApiResponse.<Void>builder()
                .message("Sign up successfully")
//                .data()
                .build();
        return ResponseEntity.ok(apiResponse);
    }

    @GetMapping("/sign-out")
    public ResponseEntity<?> signOut(HttpServletRequest request) {
        String accessToken = jwtService.extractTokenFromCookie(request, "accessToken");
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

    @GetMapping("/forgot-password/{usernameOrEmail}")
    public ResponseEntity<ApiResponse<Void>> forgotPassword(@PathVariable String usernameOrEmail) {
        Profile profile = profileService.findByUsernameOrEmail(usernameOrEmail);
        if (profile == null) {
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
        String accessToken = jwtService.extractTokenFromCookie(request, "accessToken");
        String id = jwtService.extractId(accessToken);
        Auth auth = authService.findById(id);

        ApiResponse<Void> apiResponse = ApiResponse.<Void>builder()
                .message("Password changed successfully")
                .build();
        return ResponseEntity.ok(apiResponse);
    }
}