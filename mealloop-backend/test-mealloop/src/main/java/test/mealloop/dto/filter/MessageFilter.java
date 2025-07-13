package test.mealloop.dto.filter;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class MessageFilter {
    private String id;
    private String chatRoomId;
    private String content;
    private List<LocalDate> dateRanges; // [startDate, endDate]
    private List<String> messageTypes; // ảnh, video,...
    private List<String> senders; // [senderId1, senderId2...]
}
