import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function App() {
    const navigate = useNavigate();
    const location = useLocation();

    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        // Kiểm tra đăng nhập, thiết lập trạng thái đăng nhập cho storage, redux
    }, []);

    useEffect(() => {
        const isAccessRoute = location.pathname.startsWith('/access')

        // Nếu chưa đăng nhập và không ở /access → chuyển hướng về /access/sign-in
        // if (!isSignedIn && !isAccessRoute) {
        //     navigate('/access/sign-in', { replace: true });
        // }

        // // Nếu đã đăng nhập
        // if (isSignedIn && isAccessRoute) {
        //     navigate('/dashboard', { replace: true });
        // }
        navigate('/user-management', { replace: true });
    }, [isSignedIn, location.pathname, navigate]);

    return (
        <div className='w-[100vw] h-[100vh]'>
            <Routes>
                {/* <Route path="/access" element={
                    <AccessLayout/>
                }>
                    <Route index element={
                        <SignIn/>
                    } /> 
                    <Route path="sign-in" element={
                        <SignIn/>
                    } />
                    <Route path="forgot-password" element={
                        <ForgotPassword/>
                    } />
                    <Route path="reset-password" element={
                        <ResetPassword/>
                    } />
                </Route>

                <Route path="/" element={
                    <RootLayout/>
                }>
                    <Route index element={
                        <DashboardLayout/>
                    } />
                    <Route path="dashboard" element={
                        <DashboardLayout/>
                    } />
                    <Route path="user-management" element={
                        <UserManagementLayout/>
                    } />
                    <Route path="key-and-token-management" element={
                        <UserManagementLayout/>
                    } />
                    <Route path="profile" element={
                        <ProfileLayout/>
                    } />
                </Route> */}
            </Routes>
        </div>
    );
};