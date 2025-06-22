import { useEffect, useState } from "react";

// Theo dõi kích thước của màn hình
export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        function handleResize() {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Gọi ngay khi mounted (chỉ khi chạy client)
        if (typeof window !== 'undefined') {
            handleResize(); // set kích thước lần đầu
            window.addEventListener('resize', handleResize);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowDimensions;
}