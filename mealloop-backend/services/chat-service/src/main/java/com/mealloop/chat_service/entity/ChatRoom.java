package com.mealloop.chat_service.entity;

import com.mealloop.chat_service.enums.ChatRoomType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.OffsetDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Document
public class ChatRoom {
    @Id
    private String id;
    private String name;
    private ChatRoomType type;
    private String image;
    private OffsetDateTime createdAt;
    private OffsetDateTime updatedAt;
    private String description;
    private List<String> admins;
    private List<String> members;
}
