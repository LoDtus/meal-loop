package test.mealloop.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class Post {
    private String id;
    private String name;
    private String slug;
    private List<String> tags;

    private String content;
    private String description;

    private LocalDateTime createdAt;
    private LocalDateTime publishedAt;
    private LocalDateTime updatedAt;
    private Boolean hidden; // cập nhật lên thành loại hiển thị: chỉ mình tôi, cho người theo dõi, cho người cụ thể...
}
