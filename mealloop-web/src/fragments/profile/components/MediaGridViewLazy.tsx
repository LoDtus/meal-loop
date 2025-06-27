"use client";
import data from "@/lib/configs/tempData.json";
import { useWindowDimensions } from "@/lib/hooks/commonHooks";
import { useEffect, useState, useRef } from "react";

const FILES_PER_PAGE = 10; // Số lượng file mỗi lần tải hoặc load

// Chuyển cách lazy load này sang cho bài viết, còn tại media thì sẽ thực hiện phân trang, ngày tháng sẽ hiển thị khi được hover vào
export default function MediaGridView() {
    const { width } = useWindowDimensions(); // Kích thước màn hình
    const [cols, setCols] = useState(0); // Số lượng cột trong layout
    const [files, setFiles] = useState([]); // Các file sẽ được hiển thị
    const [page, setPage] = useState(1); // Trang hiện tại
    const [isLoading, setIsLoading] = useState(false); // Trạng thái loading
    const [hasMore, setHasMore] = useState(true); // Xác định xem còn có dữ liệu nào nữa không. Nếu không → thông báo rằng không còn data nào nữa
    // const observerRef = useRef(null);
    const loadMoreRef = useRef(null);

    // Cập nhật số cột dựa trên chiều rộng màn hình
    useEffect(() => {
        setCols(5);
    }, [width]);

    // Hàm giả lập lấy dữ liệu (sẽ thay bằng API sau)
    const getFiles = () => {
        if (!hasMore || isLoading) return;

        setIsLoading(true);
        // Giả lập API call với dữ liệu tĩnh
        setTimeout(() => {
            const startIndex = (page - 1) * FILES_PER_PAGE;
            const endIndex = startIndex + FILES_PER_PAGE;
            const newPosts = data.post.slice(startIndex, endIndex);

            if (newPosts.length === 0) {
                setHasMore(false);
            } else {
                setFiles((prev) => [...prev, ...newPosts]);
                setPage((prev) => prev + 1);
            }
            setIsLoading(false);
        }, 1000); // Giả lập độ trễ mạng
    };

    // Thay bằng API call sau này, ví dụ:
    /*
    const getFiles = async() => {
        if (!hasMore || isLoading) return;

        setIsLoading(true);
        try {
            const response = await fetch(`/api/posts?page=${page}&limit=${FILES_PER_PAGE}`);
            const newPosts = await response.json();

            if (newPosts.length === 0) { // Nếu không còn data nào nữa thì set trạng thái hasMore là false
                setHasMore(false);
            } else { // Nếu còn data → đẩy data mới vào mảng hiện tại, đồng thời +1 luôn cho page
                setFiles((prev) => [...prev, ...newPosts]);
                setPage((prev) => prev + 1);
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setIsLoading(false);
        }
    };
    */

    // Tải dữ liệu ban đầu
    useEffect(() => {
        getFiles();
    }, []);

    // Thiết lập IntersectionObserver để phát hiện khi người dùng scroll tới cuối
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => { // Callback
                if (entries[0].isIntersecting // Phần tử đang được quan sát có đang nằm trong viewport hay không
                    && hasMore // Có còn data để hiển thị hay không
                    && !isLoading // Tránh gọi getFiles() nếu đang gọi rồi, tránh get dữ liệu trùng lặp
                ) {
                    getFiles();
                }
            },
            { threshold: 0.1 } // Gọi callback khi ít nhất 10% phần tử loadMoreRef nằm trong viewport
        );

        if (loadMoreRef.current) { // Gán observer cho loadMoreRef → quan sát phần tử này
            observer.observe(loadMoreRef.current);
        }

        // observerRef.current = observer; // Chưa cần đến (lưu lại observer vào một ref để có thể truy cập sau này nếu cần (ví dụ dùng ở ngoài scope hoặc component khác))

        return () => {
            if (loadMoreRef.current) {
                observer.unobserve(loadMoreRef.current);
            }
        };
    }, [hasMore, isLoading]);

    return (
        <div className="min-h-[1000px] pt-2 pb-1 px-1 flex flex-wrap">
            {files?.map((file, index) => {
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

            {/* Phần tử để kích hoạt lazy load */}
            <div
                ref={loadMoreRef}
                className="w-full h-10 flex justify-center items-center"
            >
                {isLoading && <p>Đang tải...</p>}
                {!hasMore && !isLoading && <p>Không còn bài viết để tải.</p>}
            </div>
        </div>
    );
};