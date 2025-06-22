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
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';

const totalNotify = 12;

const onClick: MenuProps['onClick'] = ({ key }) => {
    console.log(key);
};

const items: MenuProps['items'] = [
    {
        label: '1st menu item',
        key: '1',
    },
    {
        label: '2nd menu item',
        key: '2',
    },
    {
        label: '3rd menu item',
        key: '3',
    },
];

export default function Header() {
    const headerRef = useRef(null);
    const dispatch = useDispatch();
    const sideWidth = useSelector((state: RootState) => state.properties.sideWidth);

    // Lắng nghe sự bất kỳ sự thay đổi nào về chiều cao của Header
    useEffect(() => {
        if (!headerRef.current) return;

        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const newHeight = entry.contentRect.height;
                if (newHeight > 0) dispatch(propertiesSlice.actions.setHeaderHeight(newHeight + 17));
                console.log("Header height:", newHeight);
            }
        });

        observer.observe(headerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={headerRef}
            className="fixed top-0 p-2 border-b border-gray-line
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
                <Dropdown menu={{ items, onClick }} placement="bottomRight" trigger={['click']}>
                    <button
                        className="relative w-11 mr-1 aspect-square flex justify-center items-center rounded-full
                        duration-200 hover:bg-gray-hover active:scale-90"
                    >
                        <ShoppingBag size={22} color="black"/>
                        { totalNotify > 0 && <div className="absolute top-1 right-1 px-1 text-[10px] text-white bg-red rounded-full flex justify-center items-center">
                            { totalNotify > 99 ? `99+` : totalNotify }
                        </div> }
                    </button>
                </Dropdown>

                <Dropdown menu={{ items, onClick }} placement="bottomRight" trigger={['click']}>
                    <button
                        className="relative w-11 mr-1 aspect-square flex justify-center items-center rounded-full
                        duration-200 hover:bg-gray-hover active:scale-90"
                    >
                        <FontAwesomeIcon className="text-xl" icon={faBellOutline}/>
                        { totalNotify > 0 && <div className="absolute top-1 right-1 px-1 text-[10px] text-white bg-red rounded-full flex justify-center items-center">
                            { totalNotify > 99 ? `99+` : totalNotify }
                        </div> }
                    </button>
                </Dropdown>

                <Dropdown menu={{ items, onClick }} placement="bottomRight" trigger={['click']}>
                    <button
                        className="relative w-11 mr-1 aspect-square flex justify-center items-center rounded-full
                        duration-200 hover:bg-gray-hover active:scale-90"
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
                </Dropdown>
            </div>
        </div>
    );
};