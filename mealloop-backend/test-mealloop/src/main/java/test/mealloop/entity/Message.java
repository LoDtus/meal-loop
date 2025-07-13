package test.mealloop.entity;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;

import com.github.f4b6a3.ulid.UlidCreator;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// service này ưu tiên dùng mongodb
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class Message {
    @Id
    private String id;
    private String chatRoomId;
    private String senderId;
    private String replyToMessageId;
    private String type;
    private String content; // Nếu content == "" → đã xóa
    private LocalDateTime sendAt;
    private LocalDateTime updatedAt;

    // @PrePersist
    public void generateId() {
        if (this.id == null) {
            this.id = "message-" + UlidCreator.getUlid().toString();
        }
    }
}
