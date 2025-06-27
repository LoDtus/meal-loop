"use client";
import "../style.css";
import data from "@/lib/configs/tempData.json";
import { useWindowDimensions } from "@/lib/hooks/commonHooks";
import { useEffect, useState } from "react";
import { Pagination } from 'antd';
import type { PaginationProps } from 'antd';

const FILES_PER_PAGE = 10; // Số lượng file mỗi lần tải hoặc load

// Chuyển cách lazy load này sang cho bài viết, còn tại media thì sẽ thực hiện phân trang, ngày tháng sẽ hiển thị khi được hover vào
export default function MediaGridView() {
    const { width } = useWindowDimensions(); // Kích thước màn hình
    const [cols, setCols] = useState(0); // Số lượng cột trong layout

    // Cập nhật số cột dựa trên chiều rộng màn hình
    useEffect(() => {
        setCols(5);
    }, [width]);

    const movePage: PaginationProps['onChange'] = async(page) => {
        console.log(page);
        const response = "";
    };

    return (
        <div className="min-h-[1000px] pt-2 pb-1 px-1 flex flex-wrap">
            {data?.post?.map((file, index) => {
                const row = Math.floor(index / cols);
                const isFirstRow = row === 0;

                return (
                    <div
                        // key={file?.id}
                        key={index}
                        className={`px-1 ${isFirstRow ? "" : "pt-1"}`}
                        style={{ flex: `0 0 ${100 / cols}%` }}
                    >
                        <button
                            className="relative group w-full aspect-square border border-gray-line rounded-md overflow-hidden
                            duration-200 active:scale-90"
                            onClick={() => {}}
                        >
                            <img
                                src={file?.img}
                                alt={file?.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-[-20%] w-full h-[20%] text-white text-left
                                duration-300 group-hover:bottom-0"
                            >
                                <div className="absolute w-full h-full bg-black opacity-50"></div>
                                <div className="absolute w-full h-full flex items-center px-2">
                                    <span className="font-light">01/01/2025</span>
                                </div>
                            </div>
                        </button>
                    </div>
                );
            })}

            <Pagination
                className="w-full !my-2 !mr-1"
                align="end"
                defaultCurrent={1}
                total={5000}
                defaultPageSize={FILES_PER_PAGE}
                onChange={movePage}
            />
        </div>
    );
};