import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className='w-[100vw] h-[100vh] relative overflow-hidden'>
            <div className='absolute inset-0 z-0'>
                <img
                    className='w-full h-full object-cover'
                    src='/images/wallpaper-auth.jpg'
                    alt='Background Access Layout'
                />
            </div>

            <div className="relative z-10 flex justify-center items-center">
                <div className='h-[100vh] flex justify-center items-center'>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};