package test.mealloop.dto.auth;

import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class SignInRequest {
    private String usernameOrEmail;
    private String password;
    private String rememberMe;
}
