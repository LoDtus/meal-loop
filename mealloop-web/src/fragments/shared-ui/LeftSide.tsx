"use client";
import "./style.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { LEFT_SIDE_TABS } from "@/lib/configs/contants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import propertiesSlice from "@/lib/redux/slices/propertiesSlices";

export default function LeftSide() {
    const t = useTranslations();
    const dispatch = useDispatch();
    const pathname = usePathname();
    const headerHeight = useSelector((state: RootState) => state.properties.headerHeight);
    const sideWidth = useSelector((state: RootState) => state.properties.sideWidth);

    useEffect(() => {
        console.log(pathname)
    }, [pathname]);

    return (
        <div className="leftSide z-10 fixed left-0 bg-white overflow-y-auto
            flex flex-col flex-shrink-0 p-2 border-r border-gray-line"
            style={{
                width: `${sideWidth}px`, 
                height: `calc(100vh - ${headerHeight}px)`,
            }}
        >
            { LEFT_SIDE_TABS.map((tab, index) => {
                return (
                    <Link key={tab?.id} href={tab?.route} prefetch={tab?.isPrefetch}
                        className={`rounded-md w-full py-2 px-3 mb-1
                            duration-200 active:scale-90
                            ${ pathname.includes(tab?.route)
                                ? "text-black bg-gray-hover hover:bg-dark-gray-hover"
                                : "text-dark-gray hover:bg-gray-hover"}
                        `}
                        title={t(`leftSide.${tab?.id}`)}
                    >
                        <FontAwesomeIcon icon={tab?.icon}/>
                        <span className="ml-2 font-semibold">{t(`leftSide.${tab?.id}`)}</span>
                    </Link>
                )
            })}
            <button
                className="mt-2 border rounded-md py-2 duration-200 active:scale-90"
                onClick={() => dispatch(propertiesSlice.actions.setOpenAuth(true))}
            >
                Đăng nhập overlay
            </button>
            <Link href="/auth/sign-in"
                className="mt-1 border rounded-md py-2 duration-200 active:scale-90 text-center"
                onClick={() => {}}
            >
                Đăng nhập Link
            </Link>
        </div>
    );
};