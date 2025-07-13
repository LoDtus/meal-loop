package test.mealloop.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class MyProfileResponse {
    private String id;
    private String username;
    private String fullName;
    private ProfileField<String> email;
    private String active;
    private String profileImage;
    private String profileBackground;
    private ProfileField<String> phone;
    private ProfileField<String> address;
    private ProfileField<String> city;
}
