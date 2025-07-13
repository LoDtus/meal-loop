package test.mealloop.dto.request;

import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PaginationRequest {
    private int page = 0;
    private int size = 20;
    private String sortBy = "id";
    private String sortDirection = "asc";
}
