"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFaceSmileWink,
} from "@fortawesome/free-regular-svg-icons";
import { Image, Mic, Send } from "react-feather";
import { Input } from "antd";
import { useState } from "react";

export default function ChatInput() {
    const [message, setMessage] = useState("");
    
    const startSendMessage = async() => {
        console.log(message);
    };

    return (
        <div className="p-2 flex items-center border-t border-gray-line">
            <button>
                <FontAwesomeIcon icon={faPaperclip} />
            </button>
            <button
                onClick={() => startSendMessage()}
            >
                <Image/>
            </button>
            <div className="grow-1 flex items-center border rounded-md border-gray-line">
                <Input
                    variant="borderless"
                    placeholder="Aa"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    onClick={() => startSendMessage()}
                >
                    <Mic/>
                </button>
            </div>
            <button
                onClick={() => startSendMessage()}
            >
                <FontAwesomeIcon icon={faFaceSmileWink} />
            </button>
        </div>
    );
};