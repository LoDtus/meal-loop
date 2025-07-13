package test.mealloop.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class Voucher {
    private String id;
    private String code;
    private String description;
    private String publishedBy; // store
    private String iat;
    private String exp;
    private String value;
    private String total;
    // loại sản phẩm được áp dụng
    // mô tả
}
