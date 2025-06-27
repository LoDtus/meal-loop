"use client";
import { ReactNode, useEffect } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import LoadingRedux from '@/fragments/shared-ui/LoadingRedux';
import { persistor, store } from "@/lib/redux/store";
import ReduxProvider from './ReduxProvider';
import GlobalNotification from './GlobalNotification';
import WebSocketProvider from './WebSocketProvider';

type AppProviderProps = {
    children: ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
    useEffect(() => {
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
        console.log("AppProvider - rememberMe: ", rememberMe);

        if (rememberMe) sessionStorage.removeItem('persist:meal-loop');
        else localStorage.removeItem('persist:meal-loop');
    }, []);

    return (
        <Provider store={store}>
            <PersistGate loading={<LoadingRedux/>} persistor={persistor}>
                <ReduxProvider> {/* Provider có sử dụng redux */}
                    <WebSocketProvider>
                        <AntdRegistry>
                            <GlobalNotification> {/* Provider cung cấp hàm gọi tới thông báo toàn cục, sử dụng thành phần do antd cung cấp */}
                                <div className='w-full h-full'>
                                    { children }
                                </div>
                            </GlobalNotification>
                        </AntdRegistry>
                    </WebSocketProvider>
                </ReduxProvider>
            </PersistGate>
        </Provider>
    );
};