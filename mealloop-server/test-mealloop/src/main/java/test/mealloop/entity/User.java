package test.mealloop.entity;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder (toBuilder = true)
public class User {
    @Id
    private String id;
    private String username;
    private String fullName;
    private String email;
}
