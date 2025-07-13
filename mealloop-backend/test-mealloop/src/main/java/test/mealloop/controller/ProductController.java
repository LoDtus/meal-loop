package test.mealloop.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import test.mealloop.dto.filter.ProductFilter;
import test.mealloop.dto.request.QueryRequest;
import test.mealloop.dto.response.ApiResponse;
import test.mealloop.entity.Product;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/product")
public class ProductController {

    @PostMapping("/get")
    public ResponseEntity<?> getProduct(
            @RequestBody QueryRequest<ProductFilter> request
    ) {
        Pageable pageable = PageRequest.of(
                request.getPagination().getPage(),
                request.getPagination().getSize(),
                Sort.by(
                        Sort.Direction.fromString(request.getPagination().getSortDirection()),
                        request.getPagination().getSortBy()
                )
        );

        // ...

        ApiResponse<Void> apiResponse = ApiResponse.<Void>builder()
//                .data()
                .build();
        return ResponseEntity.ok(apiResponse);
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateProduct(
            List<String> productList
    ) {
        // Có một số tác vụ có thể thay đổi được hàng loạt. ví dụ như thay đổi trang thái sản phẩm từ hết hàng sang thành sắp về

        // ...

        ApiResponse<Void> apiResponse = ApiResponse.<Void>builder()
//                .data()
                .build();
        return ResponseEntity.ok(apiResponse);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteProducts() {
        // Có thể xóa được nhiều sản phẩm, hoặc xóa được theo nhóm các sản phẩm

        ApiResponse<Void> apiResponse = ApiResponse.<Void>builder()
//                .data()
                .build();
        return ResponseEntity.ok(apiResponse);
    }
}
