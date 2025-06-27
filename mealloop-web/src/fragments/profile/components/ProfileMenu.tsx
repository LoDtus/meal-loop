import SignOut from "@/fragments/auth/components/SignOut";
import { Settings, ArrowRight, Star, Mail } from 'react-feather';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStore,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import propertiesSlice from "@/lib/redux/slices/propertiesSlices";

export default function ProfileMenu({ headerHeight }) {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleRouter = (page: string) => {
        router.push(page);
        dispatch(propertiesSlice.actions.setLoadingOverlay(true));
    }

    return (
        <div className="z-20 absolute top-0 right-2 p-2 bg-white border border-gray-line rounded-md shadow-lg"
            style={{ marginTop: `${headerHeight - 10}px`}}
        >
            <button
                className="w-full px-3 py-1 mb-1 rounded-md flex items-center border
                duration-200 active:scale-90"
                onClick={() => handleRouter("/profile/username/user-123/all")}
            >
                <img
                    className="w-[40px] aspect-square rounded-full"
                    src="https://i.pinimg.com/736x/ca/70/2c/ca702cddd216a2990f402aa303f4a03e.jpg"
                    alt="Nguyễn Trung Long"
                />
                <div className="ml-2 flex flex-col text-left">
                    <span className="font-semibold">Nguyễn Trung Long</span>
                    <span className="font-light">nguyentrunglong</span>
                </div>
            </button>

            <button
                className="w-full px-3 py-2 mb-1 rounded-md flex items-center border
                duration-200 active:scale-90"
                onClick={() => console.log(2)}
            >
                <FontAwesomeIcon icon={faStore} />
                <span className="font-semibold mx-2 grow-1 text-left">Cửa hàng của bạn</span>
                <ArrowRight size={18} color="black"/>
            </button>

            <button
                className="w-full px-3 py-2 mb-1 rounded-md flex items-center border
                duration-200 active:scale-90"
                onClick={() => handleRouter("/setting")}
            >
                <Settings size={18} color="black"/>
                <span className="font-semibold mx-2 grow-1 text-left">Cài đặt</span>
                <ArrowRight size={18} color="black"/>
            </button>

            <button
                className="w-full px-3 py-2 mb-1 rounded-md flex items-center border
                duration-200 active:scale-90"
                onClick={() => console.log(2)}
            >
                <Mail size={18} color="black"/>
                <span className="font-semibold mx-2 grow-1 text-left">Hỗ trợ</span>
                <ArrowRight size={18} color="black"/>
            </button>

            <button
                className="w-full px-3 py-2 mb-1 rounded-md flex items-center border
                duration-200 active:scale-90"
                onClick={() => console.log(2)}
            >
                <Star size={18} color="black"/>
                <span className="font-semibold mx-2 grow-1 text-left">Đánh giá</span>
                <ArrowRight size={18} color="black"/>
            </button>

            <SignOut/>
        </div>
    );
};