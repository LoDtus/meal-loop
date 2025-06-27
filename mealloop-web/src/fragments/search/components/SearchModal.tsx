import { RootState } from "@/lib/redux/store";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXmark,
} from "@fortawesome/free-solid-svg-icons";

const arr = [
    "1", "1", "1", "1", "1", "1",
]

// Hiển thị cả kết quả tìm kiếm gần đây
export default function SearchModal() {
    const headerHeight = useSelector((state: RootState) => state.properties.headerHeight);
    const sideWidth = useSelector((state: RootState) => state.properties.sideWidth);

    // const TABS = [
    //     { id: "all", label: "Tất cả" },
    //     { id: "people", label: "Mọi người" },
    //     { id: "store", label: "Sản phẩm" },
    // ]

    return (
        <div
            className="z-20 fixed top-0 h-[500px] mx-2 p-3 bg-white border border-gray-line rounded-md shadow-md overflow-y-auto"
            style={{
                top: `${headerHeight - 8}px`,
                left: `${sideWidth}px`,
                right: `${sideWidth}px`,
            }}
        >
            <div className="flex justify-between items-center">
                <span className="font-semibold">Kết quả tìm kiếm</span>
                <button
                    className="w-[30px] aspect-square flex justify-center items-center rounded-md
                    duration-200 hover:bg-gray-hover active:scale-90"
                >
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </div>

            <div className="flex flex-col mt-2">
                {arr.map((item, index) => {
                    return (
                        <button key={index}
                            className={`flex p-2 border rounded-md border-gray-line
                                duration-200 active:scale-95
                                ${ index > 0 ? 'mt-1' : null }
                            `}
                        >
                            <img
                                src="https://i.pinimg.com/736x/59/60/41/59604102cb77643b647ddcd3c4a25e4c.jpg"
                                alt="Ảnh"
                                className="w-[50px] h-[50px] object-cover border-gray-line rounded-full"
                            />
                            <div className="ml-2 flex flex-col justify-center text-left">
                                <span className="font-semibold">Nguyễn Trung Long</span>
                                <span className="font-light text-sm">1 thông báo mới</span>
                            </div>
                        </button>
                    )
                })}
            </div>

            <button>
                Xem thêm
            </button>
        </div>
    );
};