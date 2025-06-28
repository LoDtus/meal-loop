
import ChatInput from "@/fragments/chat/components/ChatInput";
import ChatHeader from "./components/ChatHeader";
import MessagesList from "./components/MessagesList";

export default function ChatArea() {
    return (
        <div className="h-full flex flex-col">
            <ChatHeader/>
            <MessagesList/>
            <ChatInput/>
        </div>
    );
};