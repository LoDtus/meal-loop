"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "nextjs-toploader/app";

export default function ChatHeader() {
    const router = useRouter();

    return (
        <div className="p-1 flex justify-between items-center border-b border-gray-line">
            <button
                className="flex items-center rounded-md pl-2 pr-5 py-1
                duration-200 hover:bg-gray-hover active:scale-90"
                onClick={() => router.push("/profile/username/user-123/all")}
            >
                <img
                    src="https://i.pinimg.com/736x/e9/ec/ea/e9eceadc66ad15bc099a31864c7beba0.jpg"
                    alt="Image"
                    className="w-[50px] h-[50px] aspect-square mr-2 rounded-full"
                />
                <div className="flex flex-col text-left">
                    <span className="font-semibold">Trần Thanh Hà</span>
                    <span className="font-light text-sm">tranthanhha</span>
                </div>
            </button>
            <button className="w-fit h-fit aspect-square p-2 mr-3
                flex justify-center items-center rounded-full
                duration-200 hover:bg-gray-hover active:scale-90"
                onClick={() => {}}
            >
                <FontAwesomeIcon icon={faCircleInfo} className="text-2xl"/>
            </button>
        </div>
    );
};