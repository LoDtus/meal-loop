import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AuthLayout from './fragments/auth/AuthLayout';
import SignIn from './fragments/auth/components/SignIn';
import ForgotPassword from './fragments/auth/components/ForgotPassword';
import ResetPassword from './fragments/auth/components/ResetPassword';
import RootLayout from './fragments/shared-ui/RootLayout';
import UserManagementLayout from './fragments/user-management/UserManagementLayout';
import ProfileLayout from './fragments/profile/ProfileLayout';
import DashboardLayout from './fragments/dashboard/DashboardLayout';
import HRMLayout from './fragments/human-resources-management/HRMLayout';
import SettingLayout from './fragments/setting/SettingLayout';

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
        // navigate('/dashboard', { replace: true });
    }, [isSignedIn, location.pathname, navigate]);

    return (
        <div className='w-[100vw] h-[100vh]'>
            <Routes>
                <Route path="/auth" element={ <AuthLayout/> }>
                    <Route index element={ <SignIn/> }/> 
                    <Route path="sign-in" element={ <SignIn/> }/>
                    <Route path="forgot-password" element={ <ForgotPassword/> }/>
                    <Route path="reset-password" element={ <ResetPassword/> }/>
                </Route>

                <Route path="/" element={ <RootLayout/> }>
                    <Route index element={ <DashboardLayout/> }/>
                    <Route path="dashboard" element={ <DashboardLayout/> }/>
                    <Route path="hrm" element={ <HRMLayout/> }/>
                    <Route path="chat" element={ <HRMLayout/> }/>
                    <Route path="user-management" element={ <UserManagementLayout/> }/>
                    <Route path="store-management" element={ <HRMLayout/> }/>
                    <Route path="product-management" element={ <HRMLayout/> }/>
                    <Route path="voucher-management" element={ <HRMLayout/> }/>
                    <Route path="notification-management" element={ <HRMLayout/> }/>
                    <Route path="support" element={ <HRMLayout/> }/>
                    <Route path="activities" element={ <HRMLayout/> }/>
                    <Route path="report" element={ <HRMLayout/> }/>
                    <Route path="trash" element={ <HRMLayout/> }/>
                    <Route path="setting" element={ <SettingLayout/> }/>
                    <Route path="profile" element={ <ProfileLayout/> }/>
                </Route>
            </Routes>
        </div>
    );
};