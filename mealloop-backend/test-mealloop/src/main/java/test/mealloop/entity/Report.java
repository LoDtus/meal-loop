package test.mealloop.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import test.mealloop.enums.TargetType;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class Report {
    private String id;
    private String reporterId;
    private TargetType targetType; // cửa hàng, người dùng, tin nhắn, nhóm chat, sản phẩm, quảng cáo...
    private String targetId;
    private String reason;
    private String reportedAt;
    private String updatedAt;
    private String status; // Chưa xem, đã xem, đang giải quyết, đã giải quyết
    // cho phép người dùng gửi ảnh, video minh họa
}
