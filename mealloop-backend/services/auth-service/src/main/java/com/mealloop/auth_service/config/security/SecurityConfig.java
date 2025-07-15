package com.mealloop.auth_service.config.security;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())  // Tắt CSRF
                .cors(cors -> cors.disable())  // Tắt CORS
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll()   // Cho phép tất cả mọi request
                )
                .headers(headers -> headers
                        .frameOptions(frame -> frame.disable())
                        .httpStrictTransportSecurity(hsts -> hsts.disable())
                )
                .httpBasic(Customizer.withDefaults()); // hoặc có thể bỏ dòng này nếu không dùng basic auth

        return http.build();
    }
}