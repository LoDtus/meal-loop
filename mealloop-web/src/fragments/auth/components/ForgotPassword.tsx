"use client";
import { forgotPassword } from "@/lib/services/authService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button, Input } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import propertiesSlice from "@/lib/redux/slices/propertiesSlices";

export default function ForgotPassword({ mode, setOpenModal }) {
    const dispatch = useDispatch();
    const [usernameOrEmail, setUsernameOrEmail] = useState("");

    const startSendResetPasswordEmail = async() => {
        setOpenModal("reset-password");
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
            <span className="font-semibold text-center text-2xl">Bạn quên mật khẩu?</span>
            <span className="text-center text-sm !mb-5">Hãy điền thông tin của bạn vào đây</span>

            <span className="text-[15px] font-semibold">Tên đăng nhập hoặc email</span>
            <Input
                placeholder="Aa"
                name="forgot-password-username-or-email"
                id="forgot-password-username-or-email"
                value={usernameOrEmail}
                onChange={(e) => setUsernameOrEmail(e.target.value)}
                allowClear
            />

            <Button
                className="mt-3 !font-semibold"
                type="primary"
                onClick={() => startSendResetPasswordEmail()}
            >
                Gửi email
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