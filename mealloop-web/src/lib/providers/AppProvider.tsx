import { ReactNode } from 'react';

type AppProviderProps = {
    children: ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
    return (
        <div>
            { children }
        </div>
    );
};