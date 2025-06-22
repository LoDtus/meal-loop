import { ReactNode, createContext, useContext, useEffect } from 'react';
import { notification } from 'antd';
import { useTranslations } from 'next-intl';
import { pushNotify, setNotificationApi, setTranslationFn } from '../utils/globalNotificationUtils';

type GlobalNotificationProviderProps = {
    children: ReactNode;
};

type GlobalNotificationContextType = {
    pushNotify: typeof pushNotify;
};

const NotificationContext = createContext<GlobalNotificationContextType | undefined>(undefined);

export default function GlobalNotification({ children }: GlobalNotificationProviderProps) {
    const t = useTranslations();
    const [api, contextHolder] = notification.useNotification();

    useEffect(() => {
        setNotificationApi(api);
        setTranslationFn(t);
    }, [api, t]);

    return (
        <NotificationContext.Provider value={{ pushNotify }}>
            { contextHolder }
            { children }
        </NotificationContext.Provider>
    );
};

export function useGlobalNotification() {
    const context = useContext(NotificationContext);

    if (!context) {
        throw new Error("useGlobalNotification must be used within a GlobalNotification provider");
    };

    return context;
}