import { ReactNode, createContext, useContext, useEffect } from 'react';
import { pushNotify } from '../utils/globalNotificationUtils';
import { useDispatch } from 'react-redux';

// Tạo các hàm global thay vì hook, tương tự như với notification
type WebSocketProviderProps = {
    children: ReactNode;
};

type WebSocketContextType = {
    pushNotify: typeof pushNotify;
};

const WebSocketContext = createContext<WebSocketContextType | undefined>(undefined);

export default function WebSocketProvider({ children }: WebSocketProviderProps) {
    const dispatch = useDispatch();

    useEffect(() => {
        
    }, []);

    return (
        <WebSocketContext.Provider value={{ pushNotify }}>
            { children }
        </WebSocketContext.Provider>
    );
};

export const useWebSocket = () => {
    const context = useContext(WebSocketContext);

    if (!context) {
        throw new Error("useGlobalNotification must be used within a GlobalNotification provider");
    };

    return context;
}