package test.mealloop.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder (toBuilder = true)
public class Response {
    private String status;
    private String message;
    private String data;
    private String count;
}
