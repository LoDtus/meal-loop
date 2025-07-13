package test.mealloop.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import test.mealloop.enums.NotificationType;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class Notification {
    private String id;
    private String title;
    private String content;
    private String url;
    private String image;
    private NotificationType type;
}
