"use client";
import "../style.css";
import { useEffect, useRef } from "react";
import { TextMessage } from "./MessageItems";

const arr = [
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
]

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
            {arr?.map((message, index) => {
                return (
                    <div key={index}>
                        <div className="w-full text-center">
                            <span className="">Thứ ba, ngày 01/01/2025</span>
                        </div>
                        <TextMessage
                            message={""}
                            sendByMe={false}
                            isSimpleMessage={false}
                        />
                        <TextMessage
                            message={""}
                            sendByMe={false}
                            isSimpleMessage={true}
                        />
                        <TextMessage
                            message={""}
                            sendByMe={false}
                            isSimpleMessage={true}
                        />
                        <TextMessage
                            message={""}
                            sendByMe={false}
                            isSimpleMessage={true}
                        />
                    </div>
                )
            })}
        </div>
    );
};