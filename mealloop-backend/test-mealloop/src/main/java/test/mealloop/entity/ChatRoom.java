package test.mealloop.entity;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.annotation.Id;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.github.f4b6a3.ulid.UlidCreator;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// Thiếu cách lưu số lượng tin nhắn chưa đọc
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class ChatRoom {
    @Id
    private String id;
    private String name;
    private String image;
    private String type; // single, group
    private List<String> members; // Khi truy vấn thì cần trả về cả các thông tin cần thiết. Nếu người dùng bị xóa, thì trong quá trình tìm nếu không thấy → xóa id của người dùng đó khỏi mảng
    private Message lastMessage;

    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS", shape = JsonFormat.Shape.STRING)
    private LocalDateTime updatedAt;

    // @PrePersist
    public void generateId() {
        if (this.id == null) {
            this.id = "message-" + UlidCreator.getUlid().toString();
        }
    }
}
