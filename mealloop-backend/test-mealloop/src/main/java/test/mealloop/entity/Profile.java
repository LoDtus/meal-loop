package test.mealloop.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class Profile {
    @Id
    private String id;
    private String username;
    private String email;
    private String fullName;
    private String address;
    private String city;
    private String phone;
    private String gender;
    private LocalDate dateOfBirth;
}
