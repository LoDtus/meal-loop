"use client";
import "./style.css";
import { RootState } from "@/lib/redux/store";
import { useSelector } from "react-redux";

export default function RightSide() {
    const headerHeight = useSelector((state: RootState) => state.properties.headerHeight);
    const sideWidth = useSelector((state: RootState) => state.properties.sideWidth);

    const arr = [
        "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
        "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
        "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
        "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
    ]

    return (
        <div
            className="rightSide z-10 fixed right-0 bg-white overflow-y-auto
            flex flex-col flex-shrink-0 p-2 border-l border-gray-line"
            style={{
                width: `${sideWidth}px`,
                height: `calc(100vh - ${headerHeight}px)`,
            }}
        >
            <span className="font-semibold">Bạn bè</span>
            <div>
                {
                    arr.map((user, index) => {
                        return (
                            <button key={index} onClick={() => {}}
                                className={`border w-full flex items-center p-2 rounded-md
                                duration-200 active:scale-90
                                ${ index > 0 ? 'mt-1' : null }
                                `}
                            >
                                <img
                                    src="https://i.pinimg.com/736x/be/f8/4a/bef84aae128334669d8a70615dd4d828.jpg"
                                    alt="Nguyễn Trung Long"
                                    className="w-[50px] h-[50px] aspect-square rounded-full"
                                />
                                <div className="flex flex-col text-left ml-2">
                                    <span className="font-semibold">Nguyễn Trung Long</span>
                                    <span className="font-light text-sm">nguyentrunglong</span>
                                </div>
                            </button>
                        )
                    })
                }
            </div>
        </div>
    );
};