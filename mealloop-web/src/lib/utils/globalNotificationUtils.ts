"use client";
import type { NotificationInstance } from 'antd/es/notification/interface';

let notificationApi: NotificationInstance | null = null;
let t: ((key: string) => string) | null = null;

export const setNotificationApi = (api: NotificationInstance) => {
    notificationApi = api;
};

export const setTranslationFn = (translateFn: (key: string) => string) => {
    t = translateFn;
};

export const pushNotify = (
    type: 'success' | 'error' | 'warning' | 'info',
    description: string,
    placement: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' = 'topRight',
    messageNotify: string | null = null
) => {
    if (!notificationApi) return;

    const message = messageNotify
        ? messageNotify
        : t ? t(`globalNotification.${type}`) : "Thông báo";

    notificationApi[type]({
        message,
        description,
        placement,
        duration: 3,
        showProgress: true,
    });
};