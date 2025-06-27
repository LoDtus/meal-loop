"use client";
import { useState } from "react";
import "../style.css";
import MediaGridView from "./MediaGridView";
import { useRouter } from 'nextjs-toploader/app';
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

const arr = [
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
]

export default function MediaLayout() {
    const TABS = [
        { id: "all", label: "Tất cả" },
        { id: "images", label: "Ảnh" },
        { id: "videos", label: "Video" },
    ];
    const router = useRouter();
    const profile = useSelector((state: RootState) => state.profile);

    return (
        <>
            <div className="px-2 pt-2">
                <span className="font-semibold">Bộ sưu tập</span>
                <div className="album-slider flex overflow-x-auto pb-3">
                    {arr.map((alb, index) => {
                        return (
                            <button key={index}
                                className={`min-w-[200px] group aspect-square flex flex-col justify-center items-center
                                    ${index > 0 ? 'ml-2' : null}
                                `}
                                onClick={() => router.push("/profile/username/user-123/album/123")}
                            >
                                <div className="relative
                                    duration-200 group-active:scale-90"
                                >
                                    <div className="rounded-md overflow-hidden">
                                        <img
                                            src="https://i.pinimg.com/736x/11/df/6d/11df6dcd5c3db79b04469bfb74e9c234.jpg"
                                            alt="Album"
                                            className="w-full object-cover rounded-md
                                            duration-200 group-hover:blur-[2px]"
                                        />
                                    </div>
                                    <div className="absolute top-0 w-full h-full opacity-0
                                        duration-200 group-hover:opacity-100"
                                    >
                                        <div className="absolute top-0 w-full h-full bg-black opacity-50 rounded-md
                                            flex justify-center items-center"
                                        ></div>
                                        <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-white">
                                            <span>152 ảnh</span>
                                            <span>20 video</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-left w-full flex flex-col p-1">
                                    <span className="font-semibold line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio, labore maxime laboriosam quam, commodi sint, laudantium soluta eveniet esse assumenda repudiandae aliquid facere reprehenderit itaque. Quaerat laborum explicabo fugiat.</span>
                                    <span className="font-light text-[13px]">Ngày tạo: 01/01/2025</span>
                                    <span className="font-light text-[13px]">Ngày cập nhật: 01/02/2025</span>
                                </div>
                            </button>
                        )
                    })}
                </div>
                
                <div className="flex justify-between mt-8 mb-1">
                    {TABS?.map((tab, index) => {
                        return (
                            <button key={index}
                                className="basis-1/3
                                duration-200 active:scale-90"
                                onClick={() => {}}
                            >
                                <span className="font-semibold">
                                    {tab?.label}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </div>

            <MediaGridView/>
        </>
    );
};