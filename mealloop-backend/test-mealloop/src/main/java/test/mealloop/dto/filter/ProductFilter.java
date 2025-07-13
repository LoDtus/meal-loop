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
public class ProductFilter {
    private String id;
    private String name;
    private String storeId;
    private String storeName;
    private String ownerId;
    private String ownerName;
    private List<String> categories;
    private List<String> cities;
    private List<Integer> price; // [min, max]
    private List<String> status; // đang bán, sẵn hàng, hết hàng, sắp về...
}
