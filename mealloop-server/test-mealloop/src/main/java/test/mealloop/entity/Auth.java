package test.mealloop.entity;

import org.springframework.data.annotation.Id;

import com.github.f4b6a3.ulid.UlidCreator;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder (toBuilder = true)
public class Auth {
    @Id
    private String id;
    private String username;
    private String password;
    private Boolean active;

    // @PrePersist
    public void generateId() {
        if (this.id == null) {
            this.id = "user-" + UlidCreator.getUlid().toString();
        }
    }
}
