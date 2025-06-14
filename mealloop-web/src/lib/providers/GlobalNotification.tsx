import { ReactNode } from 'react';

type GlobalNotificationProviderProps = {
    children: ReactNode;
};

export default function GlobalNotification({ children }: GlobalNotificationProviderProps) {
    return (
        <div>
            { children }
        </div>
    );
};