"use client";
import type { NotificationInstance } from 'antd/es/notification/interface';

let notificationApi: NotificationInstance | null = null;
let t: ((key: string) => string) | null = null;

export function setNotificationApi(api: NotificationInstance) {
    notificationApi = api;
};

export function setTranslationFn(translateFn: (key: string) => string) {
    t = translateFn;
};

export function pushNotify(
    type: 'success' | 'error' | 'warning' | 'info',
    description: string,
    placement: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' = 'topRight',
    messageNotify: string | null
) {
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