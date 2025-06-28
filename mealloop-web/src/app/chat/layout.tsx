"use client";
import { RootState } from "@/lib/redux/store";
import { Input } from "antd";
import { useRouter } from "nextjs-toploader/app";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Search } from "react-feather";
import { getChatRoomByUser } from "@/lib/services/chatroomService";

const arr = [
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
]

export default function ChatLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const headerHeight = useSelector((state: RootState) => state.properties.headerHeight);

    const [chatRooms, setChatRooms] = useState([]);
    const [keyword, setKeyword] = useState("");

    const getChatRoom = async(keyword: string) => {
        console.log(keyword);
        const response = await getChatRoomByUser();
    };

    useEffect(() => {
        getChatRoom("");
    }, []);

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (keyword.trim()) {
                getChatRoom(keyword.trim());
            }
        }, 1000);

        return () => clearTimeout(delayDebounce);
    }, [keyword]);

    return (
        <div className="w-full h-full flex"
            style={{ height: `calc(100vh - ${headerHeight}px)`}}
        >
            <div className="basis-[30%] flex flex-col border-r border-gray-line">
                <div className="p-2 border-b border-gray-line">
                    <span className="font-semibold">Trò chuyện</span>
                    <div className="flex items-center border border-gray-line rounded-md">
                        <Input
                            variant="borderless"
                            placeholder="Tìm kiếm"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                        <Search/>
                    </div>
                </div>
                <div className="chatroom-list p-2 overflow-y-auto">
                    { arr?.map((room, index) => {
                        return (
                            <button key={index}
                                className={`w-full p-2 flex items-center border rounded-md
                                duration-200 active:scale-90
                                ${ index > 0 ? 'mt-2' : null }
                                `}
                                onClick={() => router.push("/chat/chat-123")}
                            >
                                <img
                                    src="https://i.pinimg.com/736x/f1/2a/ba/f12aba87431ec534df38c98a88c0f705.jpg"
                                    alt="Image"
                                    className="w-[50px] h-[50px] mr-2 rounded-full"
                                />
                                <div className="text-left">
                                    <span className="font-semibold">Nguyễn Văn A</span>
                                    <p className="line-clamp-2 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, nesciunt error perspiciatis expedita saepe natus eos voluptatem, perferendis quae ipsam similique a fugiat laboriosam! Explicabo voluptatum ducimus aliquam commodi ex.</p>
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>

            <div className="basis-[70%]">
                { children }
            </div>
        </div>
    );
};