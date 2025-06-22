import AppProvider from "@/lib/providers/AppProvider";
import "./globals.css";
import '@ant-design/v5-patch-for-react-19';
import type { Metadata } from "next";

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
            <body className="antialiased">
                <AppProvider>
                    { children }
                </AppProvider>
            </body>
        </html>
    );
};