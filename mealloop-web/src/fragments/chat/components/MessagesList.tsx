"use client";
import "../style.css";
import { useEffect, useRef } from "react";
import { TextMessage } from "./MessageItems";
import { Virtuoso } from "react-virtuoso";

const arr = [
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
]

// Sử dụng react-virtuoso để render tin nhắn
// Sửa lại item với ava ở cuối, tên ở cuối
export default function MessagesList() {
    const messageListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = messageListRef.current;
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }, []);

    return (
        <div ref={messageListRef}
            className="message-list grow-1 p-2 overflow-y-auto"
        >
            {arr?.map((message, index: number) => {
                const sendByMe // Tin nhắn được gửi bởi tôi. Các tin nhắn này sẽ nằm bên phải cuộc trò chuyện
                    = false;
                const isSimpleMessage // Tin nhắn đơn giản, chi bao gồm content. Ngược lại, nếu là true, các tin nhắn sẽ có thêm avatar và username của người dùng
                    = false;
                const isShowTimestamp // Tạo text đánh dấu khoảng thời gian trong cuộc trò chuyện
                    = true;
                const positionInGroup // Vị trí của tin nhắn đó trong group (group - một chuỗi tin nhắn được người dùng nhắn liên tục trong 1 khoảng thời gian ngắn)
                    = 'first'; // first, middle, last 

                return (
                    <div key={message?.id || `message-${index}`}>
                        { isShowTimestamp && <div className="w-full text-center">
                            <span className="">Thứ ba, ngày 01/01/2025</span>
                        </div> }
                        {
                            message?.type === "TEXT"
                            ? <TextMessage
                                message={message}
                                sendByMe={false}
                                isSimpleMessage={false}
                            />
                            : message?.type === "IMAGE" // được gửi multi, bao gồm cả sticker, gif
                            ? <TextMessage
                                message={message}
                                sendByMe={false}
                                isSimpleMessage={false}
                            />
                            : message?.type === "VIDEO" // có thể gửi multi
                            ? <TextMessage
                                message={message}
                                sendByMe={false}
                                isSimpleMessage={false}
                            />
                            : message?.type === "SOUND"
                            ? <></>
                            : message?.type === "FILE"
                            ? <TextMessage
                                message={message}
                                sendByMe={false}
                                isSimpleMessage={false}
                            />
                            : message?.type === "SHARED"
                            ? <TextMessage
                                message={message}
                                sendByMe={false}
                                isSimpleMessage={false}
                            />
                            : message?.type === "LOCATION" // chia sẻ vị trí
                            ? <TextMessage
                                message={message}
                                sendByMe={false}
                                isSimpleMessage={false}
                            />
                            : <TextMessage
                                message={message}
                                sendByMe={false}
                                isSimpleMessage={false}
                            />
                        }
                        <TextMessage
                            message={message}
                            sendByMe={false}
                            isSimpleMessage={false}
                        />
                        <TextMessage
                            message={message}
                            sendByMe={false}
                            isSimpleMessage={true}
                        />
                        <TextMessage
                            message={message}
                            sendByMe={false}
                            isSimpleMessage={true}
                        />
                        <TextMessage
                            message={message}
                            sendByMe={false}
                            isSimpleMessage={true}
                        />
                    </div>
                )
            })}
        </div>
    );
};