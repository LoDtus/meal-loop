import './i18n';
import './index.css';
import App from './App.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { unstableSetRender } from 'antd';

unstableSetRender((node, container) => {
    const typedContainer = container as HTMLElement & {
        _reactRoot?: ReturnType<typeof createRoot>;
    };

    typedContainer._reactRoot ||= createRoot(typedContainer);
    const root = typedContainer._reactRoot!;

    root.render(node);
    return async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
        root.unmount();
    };
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>
);