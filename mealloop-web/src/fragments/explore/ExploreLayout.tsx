"use client";
import AuthLayout from "@/fragments/auth/AuthLayout";
import { useWindowDimensions } from "@/lib/hooks/commonHooks";
import { useEffect, useState } from "react";

const arr = [
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
]

export default function ExploreLayout() {
    const [openAuth, setOpenAuth] = useState(false);
    const [cols, setCols] = useState(Array.from({ length: 0 }));
    const { width, height } = useWindowDimensions();

    useEffect(() => {
        setCols(Array.from({ length: 5 }));
    }, []);

    return (
        <>
            <div className="w-full h-full p-2">
                {/* <Image
                    src="https://i.pinimg.com/736x/d1/ed/66/d1ed662515e0e919b023d0d43ecaa924.jpg"
                    alt="background"
                    fill
                    className="z-0 object-cover"
                /> */}

                <div className="flex">
                    { cols.map((col, i) => {
                        const totalCols = cols.length;
                        // giả sử có cách phần tử từ 1 → 90, thì mình xếp từ trên xuống dưới của 1 cột, rồi sang cột tiếp theo, nếu cột cuối còn chưa lấp đầy (tạo hàm xác định) thì mình gọi tiếp API
                        return (
                            <div key={i} className={`
                                    ${ i === 0 ? 'pr-1'
                                    : i === totalCols - 1 ? 'pl-1'
                                    : 'px-1' }
                                `}
                                style={{ flexBasis: `${100 / totalCols}%` }}
                            >
                                { arr.map((item, j) => {
                                    const totalRows = arr.length;

                                    return (
                                        <button
                                            key={`${i}_${j}`}
                                            className={`w-full border rounded-md h-[100px]
                                                duration-200 active:scale-90
                                                ${j === 0 ? 'mb-1'
                                                : j === totalRows - 1 ? 'mt-1'

                                                : 'my-1'}
                                            `}
                                        >
                                            a
                                        </button>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>

                <button onClick={() => setOpenAuth(true)}>
                    Đăng nhập
                </button>
            </div>

            { openAuth && <AuthLayout
                setOpenAuth={setOpenAuth}
                mode="overlay"
            /> }
        </>
    );
};