package com.mealloop.chat_service.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.mealloop.chat_service.dto.ForwardFrom;
import com.mealloop.chat_service.dto.Reaction;
import com.mealloop.chat_service.enums.ChatRoomType;
import com.mealloop.chat_service.enums.MessageType;
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
public class Message {
    @Id
    private String id;
    private String conversationId;
    private String senderId;
    private String replyTo;
    private MessageType type;
    private String content;
    private ForwardFrom forwardFrom;
    private List<String> mentions;
    private List<Reaction> reactions;
    private Boolean deleted;

    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ssXXX", shape = JsonFormat.Shape.STRING, timezone = "UTC")
    private OffsetDateTime createdAt;
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ssXXX", shape = JsonFormat.Shape.STRING, timezone = "UTC")
    private OffsetDateTime updatedAt;
}
