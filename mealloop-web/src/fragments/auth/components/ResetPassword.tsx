"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button, Input } from "antd";
import { useEffect, useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import propertiesSlice from "@/lib/redux/slices/propertiesSlices";

export default function ResetPassword({ mode, setOpenModal }) {
    const dispatch = useDispatch();
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {
        if (!newPassword || !confirmPassword) return;
        if (newPassword !== confirmPassword) return;
    }, [newPassword, confirmPassword]);

    const startResetPassword = async() => {
        // if (!usernameOrEmail) return;
        // const response = await forgotPassword(usernameOrEmail);
        // console.log(response);
    };

    return (
        <div className="w-[400px] p-5 bg-white shadow-lg rounded-md flex flex-col">
            <div className="w-full flex justify-end">
                <FontAwesomeIcon
                    icon={faXmark}
                    className="mb-1 px-[2px] cursor-pointer duration-200 active:scale-90"
                    onClick={() => dispatch(propertiesSlice.actions.setOpenAuth(false))}
                />
            </div>
            <span className="font-semibold text-center text-2xl">Thiết lập mật khẩu mới</span>
            <span className="text-center text-sm !mb-5">Nhập mật khẩu mới của bạn</span>

            <span className="text-[15px] font-semibold">Mật khẩu mới</span>
            <Input.Password
                placeholder="Aa"
                name="reset-password-new-password"
                id="reset-password-new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
            />

            <span className="text-[15px] font-semibold mt-2">Xác nhận mật khẩu</span>
            <Input.Password
                placeholder="Aa"
                name="reset-password-confirm-password"
                id="reset-password-confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
            />

            <Button
                className="mt-3 !font-semibold"
                type="primary"
                onClick={() => startResetPassword()}
            >
                Đặt lại mật khẩu
            </Button>
            <Button
                className="mt-1 !font-semibold"
                onClick={() => setOpenModal("sign-in")}
            >
                Quay lại đăng nhập
            </Button>
        </div>
    );
};