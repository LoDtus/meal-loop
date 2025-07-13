package test.mealloop.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class Product {
    private String id;
    private String name;
    private String slug;
    private String createdAt;
    private String publishedAt;
    private String updatedAt;
    private String total;
    private String status;
}
