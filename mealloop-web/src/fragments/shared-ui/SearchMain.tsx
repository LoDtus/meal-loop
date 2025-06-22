"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { Input } from "antd";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchMain() {
    const [text, setText] = useState("");
    const router = useRouter();

    function startSearch() {
        console.log(1);
        router.push("/search");
    };

    return (
        <div className="flex items-center w-full">
            <div className="flex items-center w-full border rounded-md border-gray-line overflow-hidden">
                <Input
                    variant="borderless"
                    placeholder="Tìm kiếm"
                    allowClear
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <div className="self-stretch border-l border-gray-line"></div>
                <div className="duration-200 hover:bg-gray-hover">
                    <button
                        className="py-[6px] px-8
                        duration-200 active:scale-90"
                        onClick={() => startSearch()}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>
                </div>
            </div>

            <button
                className="w-11 ml-1 aspect-square rounded-full bg-gray-hover
                duration-200 hover:bg-dark-gray-hover active:scale-90"
            >
                <FontAwesomeIcon icon={faMicrophone} />
            </button>
        </div>
    );
};