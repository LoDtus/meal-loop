"use client";
import Image from "next/image";
import Link from "next/link";
import SearchMain from "./SearchMain";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import propertiesSlice from "@/lib/redux/slices/propertiesSlices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell as faBellOutline,
    faMessage as faMessageOutline,
} from "@fortawesome/free-regular-svg-icons";
import { ShoppingBag } from 'react-feather';
import { RootState } from "@/lib/redux/store";
import SearchModal from "../search/components/SearchModal";

const totalNotify = 12;

export default function Header() {
    const headerRef = useRef<HTMLDivElement>(null);
    const notifyRef = useRef<HTMLDivElement>(null);
    const profileRef = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch();
    const sideWidth = useSelector((state: RootState) => state.properties.sideWidth);
    const openCartMenu = useSelector((state: RootState) => state.properties.openCartMenu);
    const openNotifycationMenu = useSelector((state: RootState) => state.properties.openNotifycationMenu);
    const openProfileMenu = useSelector((state: RootState) => state.properties.openProfileMenu);

    // Lắng nghe sự bất kỳ sự thay đổi nào về chiều cao của Header
    useEffect(() => {
        const observers: ResizeObserver[] = [];
        const notifyGapRef = { current: 0 };
        const profileGapRef = { current: 0 };

        const tryDispatch = () => {
            if (notifyGapRef.current > 0 && profileGapRef.current > 0) {
                dispatch(propertiesSlice.actions.setDistanceFromRightHeader({
                    notifyGap: notifyGapRef.current,
                    profileGap: profileGapRef.current,
                }));
            }
        };

        const createObserver = (
            ref: React.RefObject<HTMLDivElement | null>,
            callback: (rect: DOMRectReadOnly) => void
        ) => {
            if (!ref.current) return;
            const observer = new ResizeObserver((entries) => {
                for (const entry of entries) {
                    callback(entry.contentRect);
                }
            });
            observer.observe(ref.current);
            observers.push(observer);
        };

        // Header observer
        createObserver(headerRef, (rect) => {
            if (rect.height > 0) {
                // dispatch(propertiesSlice.actions.setHeaderHeight(rect.height + 17));
                dispatch(propertiesSlice.actions.setHeaderHeight(rect.height + 17));
            }
        });

        // Notify observer
        createObserver(notifyRef, (rect) => {
            notifyGapRef.current = rect.width;
            tryDispatch();
        });

        // Profile observer
        createObserver(profileRef, (rect) => {
            profileGapRef.current = rect.width;
            tryDispatch();
        });

        return () => { observers.forEach((observer) => observer.disconnect()) };
    }, []);

    return (
        <div ref={headerRef}
            className="z-10 fixed top-0 p-2 border-b border-gray-line
            flex justify-between items-center
            bg-white w-full"
        >
            <div className="flex items-center pr-2"
                style={{ minWidth: `${sideWidth}px` }}
            >
                <Link href="/explore" prefetch={true}
                    className="flex items-center w-fit border
                    duration-200 active:scale-90"
                >
                    <Image
                        src="/icons/icon.png"
                        alt="Meal Loop"
                        width={50}
                        height={50}
                    />
                    <span className="font-semibold">Meal Loop</span>
                </Link>
            </div>
        
            <SearchMain/>
        
            <div className="flex justify-end items-center pl-2"
                style={{ minWidth: `${sideWidth}px` }}
            >
                <button
                    className="relative w-11 mr-1 aspect-square flex justify-center items-center rounded-full
                    duration-200 hover:bg-gray-hover active:scale-90"
                    onClick={() => dispatch(propertiesSlice.actions.setOpenCartMenu(!openCartMenu))}
                >
                    <ShoppingBag size={22} color="black"/>
                    { totalNotify > 0 && <div className="absolute top-1 right-1 px-1 text-[10px] text-white bg-red rounded-full flex justify-center items-center">
                        { totalNotify > 99 ? `99+` : totalNotify }
                    </div> }
                </button>
        
                <button ref={notifyRef}
                    className="relative w-11 mr-1 aspect-square flex justify-center items-center rounded-full
                    duration-200 hover:bg-gray-hover active:scale-90"
                    onClick={() => dispatch(propertiesSlice.actions.setOpenNotificationMenu(!openNotifycationMenu))}
                >
                    <FontAwesomeIcon className="text-xl" icon={faBellOutline}/>
                    { totalNotify > 0 && <div className="absolute top-1 right-1 px-1 text-[10px] text-white bg-red rounded-full flex justify-center items-center">
                        { totalNotify > 99 ? `99+` : totalNotify }
                    </div> }
                </button>
        
                <button ref={profileRef}
                    className="relative w-11 aspect-square flex justify-center items-center rounded-full
                    duration-200 hover:bg-gray-hover active:scale-90"
                    onClick={() => dispatch(propertiesSlice.actions.setOpenProfileMenu(!openProfileMenu))}
                >
                    <Image
                        className="rounded-full p-1"
                        src="https://i.pinimg.com/736x/2b/72/99/2b72991c20ab4921d2976bbaeda7cc9d.jpg"
                        alt="Meal Loop"
                        width={50}
                        height={50}
                    />
                    { totalNotify > 0 && <div className="absolute top-0 right-0 px-1 text-[10px] text-white bg-red rounded-full flex justify-center items-center">
                        { totalNotify > 99 ? `99+` : totalNotify }
                    </div> }
                </button>
            </div>

            {/* <SearchModal/> */}
        </div>
    );
};