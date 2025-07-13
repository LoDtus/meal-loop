package test.mealloop.dto.filter;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class ProfileFilter {
    private String id;
    private String fullName;
    private String username;
    private String email;
    private List<String> role;
    private String active;
    private String status;
}
