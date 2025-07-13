"use client";
import "../../app/globals.css";
import { ReactNode, useEffect } from 'react';
import { NextIntlClientProvider } from "next-intl";
import { useDispatch, useSelector } from 'react-redux';
import enMessages from "@/lib/configs/en-language.json";
import viMessages from "@/lib/configs/vi-language.json";
import type { RootState } from '@/lib/redux/store';
import { usePathname } from 'next/navigation';
import RightSide from '@/fragments/shared-ui/RightSide';
import LeftSide from '@/fragments/shared-ui/LeftSide';
import Header from '@/fragments/shared-ui/Header';
import { useWindowDimensions } from '../hooks/commonHooks';
import propertiesSlice from '../redux/slices/propertiesSlices';
import ProfileMenu from "@/fragments/profile/components/ProfileMenu";
import NotificationMenu from "@/fragments/notification/NotificationMenu";
import CartMenu from "@/fragments/cart/components/CartMenu";
import Footer from "@/fragments/shared-ui/Footer";
import { PATHNAME_WITHOUT_FOOTER } from "../configs/contants";
import AuthLayout from "@/fragments/auth/AuthLayout";

type ReduxProviderProps = {
    children: ReactNode;
};

export default function ReduxProvider({ children }: ReduxProviderProps) {
    const pathname = usePathname();
    const dispatch = useDispatch();
    const { width } = useWindowDimensions();

    const properties = useSelector((state: RootState) => state.properties);
    const language = useSelector((state: RootState) => state.setting.language);
    const messages = language === "vi" ? viMessages : enMessages;

    const isHideFooter = PATHNAME_WITHOUT_FOOTER.some(path =>
        pathname === path || pathname.startsWith(path + "/")
    );  

    useEffect(() => {
        dispatch(propertiesSlice.actions.setSideWidth(260));
    }, []);

    // useEffect(() => {
    //     connectWS(profile, dispatch);
    //     return () => {
    //         disconnectWS();
    //     };
    // }, [profile, dispatch]);

    return (
        <NextIntlClientProvider locale={language} messages={messages}>
            {
                pathname.startsWith("/auth")
                ? <> { children } </>
                : <>
                    <Header/>
                    <div className="flex" style={{ marginTop: properties?.headerHeight }}>
                        <LeftSide/>
                        {/* <div style={{ minWidth: `${sideWidth}px` }}></div> */}
                        <div
                            className="w-full flex flex-col"
                            style={{
                                paddingLeft: `${properties?.sideWidth}px`,
                                paddingRight: `${properties?.sideWidth + 1}px`,
                            }}
                        >
                            { children }
                            { !isHideFooter ? <Footer/> : null }
                        </div>
                        {/* <div style={{ minWidth: `${sideWidth}px` }}></div> */}
                        <RightSide/>
                    </div>

                    { properties?.openCartMenu && <CartMenu headerHeight={properties?.headerHeight} distanceFromRightHeader={properties?.distanceFromRightHeader}/> }
                    { properties?.openNotifycationMenu && <NotificationMenu headerHeight={properties?.headerHeight}/> }
                    { properties?.openProfileMenu && <ProfileMenu headerHeight={properties?.headerHeight}/> }

                    {properties?.openAuth && <AuthLayout
                        mode="overlay"
                    />}
                </>
            }
        </NextIntlClientProvider>
    );
};