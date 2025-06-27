import { RootState } from "@/lib/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

const arr = [
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1",
]

export default function NotificationMenu({ headerHeight }) {
    const profileGap = useSelector((state: RootState) => state.properties.distanceFromRightHeader[1]);
    const profile = useSelector((state: RootState) => state.profile);

    useEffect(() => {
        if (!profile?.id) return;
        
    }, [profile]);

    return (
        <div className="absolute top-0 p-2 bg-white rounded-md shadow-lg"
            style={{
                marginTop: `${headerHeight - 8}px`,
                right: `${profileGap*1.5}px`,
            }}
        >
            <span>Thông báo</span>
            {arr.map((item, index) => {
                return (
                    <button key={index}
                        className={`p-2 rounded-md flex items-center
                            duration-200 active:scale-90
                            ${index > 0 ? 'mt-1' : null}
                        `}
                    >
                        <img
                            className="w-[40px] aspect-square rounded-full"
                            src=""
                            alt=""
                        />
                        <div className="text-left ml-2 grow-1">
                            <span>Tiêu đề thông báo</span>
                            <p>Nội dung thông báo</p>
                        </div>
                        <button
                            className="w-[30px] aspect-square rounded-full
                            duration-200 active:scale-90"
                        >
                            <FontAwesomeIcon icon={faEllipsis} />
                        </button>
                    </button>
                )
            })}
        </div>
    );
};