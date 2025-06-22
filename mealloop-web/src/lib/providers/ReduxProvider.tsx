"use client";
import "../../app/globals.css";
import { ReactNode, useEffect } from 'react';
import { NextIntlClientProvider } from "next-intl";
import { useDispatch, useSelector } from 'react-redux';
import enMessages from "@/lib/configs/en-language.json";
import viMessages from "@/lib/configs/vi-language.json";
import type { RootState } from '@/lib/redux/store';
import LoadingOverlay from '@/fragments/shared-ui/LoadingOverlay';
import { usePathname } from 'next/navigation';
import RightSide from '@/fragments/shared-ui/RightSide';
import LeftSide from '@/fragments/shared-ui/LeftSide';
import Header from '@/fragments/shared-ui/Header';
import { useWindowDimensions } from '../hooks/commonHooks';
import propertiesSlice from '../redux/slices/propertiesSlices';

type ReduxProviderProps = {
    children: ReactNode;
};

export default function ReduxProvider({ children }: ReduxProviderProps) {
    const pathname = usePathname();
    const dispatch = useDispatch();
    const { width } = useWindowDimensions();

    const isLoading = useSelector((state: RootState) => state.properties.isLoadingOverlay);
    const headerHeight = useSelector((state: RootState) => state.properties.headerHeight);
    const sideWidth = useSelector((state: RootState) => state.properties.sideWidth);

    const language = useSelector((state: RootState) => state.setting.language);
    const messages = language === "vi" ? viMessages : enMessages;

    useEffect(() => {
        dispatch(propertiesSlice.actions.setSideWidth(260));
    }, []);

    useEffect(() => {
        console.log(width);
    }, [width]);

    // useEffect(() => {
    //     connectWS(profile, dispatch);
    //     return () => {
    //         disconnectWS();
    //     };
    // }, [profile, dispatch]);

    return (
        <NextIntlClientProvider locale={language} messages={messages}>
            { isLoading && <LoadingOverlay/>}

            {
                pathname.startsWith("/auth")
                ? <> { children } </>
                : <>
                    <Header/>
                    <div
                        className='flex justify-between'
                        style={{ marginTop: headerHeight }}
                    >
                        <LeftSide/>
                        <div style={{ minWidth: `${sideWidth}px` }}></div>
                        { children }
                        <div style={{ minWidth: `${sideWidth}px` }}></div>
                        <RightSide/>
                    </div>
                </>
            }
        </NextIntlClientProvider>
    );
};