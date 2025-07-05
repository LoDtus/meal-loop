import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";

export default function RootLayout() {
    return (
        <div className="flex">
            <NavigationBar/>

            <div className="flex-grow overflow-auto">
                <Outlet/>
            </div>
        </div>
    );
};