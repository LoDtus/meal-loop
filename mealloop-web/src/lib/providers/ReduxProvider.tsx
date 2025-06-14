import { ReactNode } from 'react';

type ReduxProviderProps = {
    children: ReactNode;
};

export default function ReduxProvider({ children }: ReduxProviderProps) {
    return (
        <div>
            { children }
        </div>
    );
};