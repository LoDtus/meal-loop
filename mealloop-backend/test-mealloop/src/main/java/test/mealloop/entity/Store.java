package test.mealloop.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class Store {
    private String id;
    private String owners; // Có thể có nhiều chủ sở hữu
    private String name;
    private String slug;
    private String description;
    private String storeImage;
    private String storeBackground;
    private String createdAt;
    private String address;
    private String city;
    private String status;
}
