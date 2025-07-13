package test.mealloop.dto.chatroom;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import test.mealloop.entity.Message;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class ChatRoomItem {
    private String id;
    private String name;
    private String image;
    private Message latestMessage;
}
