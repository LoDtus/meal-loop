"use client";
import "./style.css";
import data from "@/lib/configs/tempData.json";
import { useWindowDimensions } from "@/lib/hooks/commonHooks";
import { useEffect, useState, useRef, useMemo } from "react";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import AuthLayout from "../auth/AuthLayout";
import { STATUS_TYPE } from "@egjs/infinitegrid";
import PostItem from "./components/PostItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import postSlice from "@/lib/redux/slices/postSlices";

const POSTS_PER_PAGE = 10;

function getItems(nextGroupKey: number, count: number) {
    const nextItems = [];
    const nextKey = nextGroupKey * count;

    for (let i = 0; i < count; ++i) {
        nextItems.push({ groupKey: nextGroupKey, key: nextKey + i });
    }
    return nextItems;
}

// Tham khảo MasonryInfiniteGrid: https://naver.github.io/egjs-infinitegrid/Guides#use-wait--ready
// Tối ưu, nâng cấp các chức năng khác: Tìm tới Restore Visible Status trong link trên
export default function ExploreLayout() {
    const { width } = useWindowDimensions();
    const dispatch = useDispatch();
    const posts = useSelector((state: RootState) => state.post.posts);
    const status = useSelector((state: RootState) => state.post.status);

    const [masonryWidth, setMasonryWidth] = useState(0); // Lưu chiều rộng của Masonry
    const masonryRef = useRef<HTMLDivElement | null>(null);
    const masonryStatus = useRef(null); // Lưu lại trạng thái của Masonry
    const isLoading = useRef(false); // Lưu trạng thái loading, điều này là quan trọng để tránh lỗi Maximum update depth exceeded

    const columns = useMemo(() => {
        console.log(width)
        // if (width > 1200) return 4;
        // if (width > 768) return 3;
        return 4;
    }, [width]);

    // Tải thêm dữ liệu mới
    const handleGetMorePosts = async(e) => {
        if (isLoading.current) return; // Ngăn gọi lại khi đang tải
        isLoading.current = true;
        const nextGroupKey = (+e.groupKey! || 0) + 1;

        e.wait(); // Tạm dừng
        setTimeout(() => { // Giả lập 1s chờ load dữ liệu
            const response = ""; // get dữ liệu mới

            const newPost = getItems(nextGroupKey, POSTS_PER_PAGE);
            dispatch(postSlice.actions.pushToPosts(newPost));

            e.ready(); // Tiếp tục
            isLoading.current = false;
        }, 2000);
    }

    // Lắng nghe chiều rộng của masonryRef
    useEffect(() => {
        const updateWidth = () => {
            if (masonryRef.current) {
                setMasonryWidth(masonryRef.current.clientWidth - 8);
            }
        };

        if (masonryRef.current) {
            updateWidth(); // ✅ chỉ gọi nếu đã có ref
            const observer = new ResizeObserver(() => {
                updateWidth();
            });
            observer.observe(masonryRef.current);

            return () => {
                observer.disconnect();
            };
        }
    }, []);

    useEffect(() => {
        console.log(masonryWidth);
    }, [masonryWidth]);

    // Khôi phục lại trạng thái trước đó nếu có
    useEffect(() => {
        if (status && masonryStatus.current) {
            masonryStatus.current.setStatus(status);
        }
    }, []);

    // Lưu lại trạng thái hiện tại khi unmount
    useEffect(() => {
        return () => {
            if (masonryStatus.current) {
                const statusData = masonryStatus.current.getStatus(STATUS_TYPE.NOT_REMOVE);
                console.log(statusData);
                // dispatch(postSlice.actions.setStatus(statusData));
            }
        };
    }, []);

    function log() {
        if (masonryStatus.current) {
            const statusData = masonryStatus.current.getStatus(STATUS_TYPE.NOT_REMOVE);
            console.log(statusData);
            // dispatch(postSlice.actions.setStatus(statusData));
        }
    }

    // Đang bị lỗi là từ các layout có scroll, chuyển sang layout này thì sẽ có hiện tượng nháy
    // Nguyên nhân là do mới đầu khi chuyển sang, layout này vốn chưa có scroll
    // Layout có scroll → chuyển sang, mới đầu chưa có scroll (nháy 1 lần để fill lại màn hình) → sau khi có dữ liệu
    // thì tạo lại scroll (nháy lần 2 để thêm scroll). Giải pháp là tạo 1 chiếm chỗ scroll, nếu dữ liệu đã được get đủ rồi
    // thì ẩn div này đi
    return (
        <div className="w-full h-full">
            <button onClick={() => log()}>
                log
            </button>
            <div>{masonryWidth}</div>

            <div className="px-1">
                <div ref={masonryRef} className="w-full py-1">
                    <MasonryInfiniteGrid
                        ref={masonryStatus}
                        column={columns}
                        align="start"
                        loading={<div className="loading">Loading...</div>}
                        onRequestAppend={handleGetMorePosts}
                        useRecycle={false} // Duy trì DOM trong mọi trường hợp, không bị thu hồi như Recycle View
                    >
                        {posts.map((item, index) => {
                            return (
                                <PostItem
                                    data-grid-groupkey={item.groupKey}
                                    key={item.key}
                                    num={item.key}
                                    masonryWidth={masonryWidth}
                                    columns={columns}
                                />
                        )})}
                    </MasonryInfiniteGrid>
                </div>
            </div>
        </div>
    );
};