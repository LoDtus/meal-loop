import AppProvider from "@/lib/providers/AppProvider";
import "./globals.css";
import '@ant-design/v5-patch-for-react-19';
import type { Metadata } from "next";
import NextTopLoader from 'nextjs-toploader';

export const metadata: Metadata = {
    title: "Meal Loop",
    description: "Food Application",
    keywords: ["portfolio", "developer", "Nguyen Trung Long", "Long Nguyen"],
    authors: [{
        name: "Nguyen Trung Long",
        // url: "https://porfolio-nguyentrunglong.com",
    }],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased !p-0 !m-0">
                <NextTopLoader
                    color="red"
                    height={2}
                    showSpinner={false} // Ẩn icon loading ở góc trên, bên phải
                    speed={300}
                    crawlSpeed={100}
                />
                <AppProvider>
                    { children }
                </AppProvider>
            </body>
        </html>
    );
};