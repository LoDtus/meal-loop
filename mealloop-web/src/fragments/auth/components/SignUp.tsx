"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button, Checkbox, Input, Typography } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useRouter } from 'nextjs-toploader/app';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import propertiesSlice from "@/lib/redux/slices/propertiesSlices";

const { Text } = Typography;

export default function SignUp({
    mode,
    setOpenModal,
}) {
    const router = useRouter();
    const dispatch = useDispatch();
    const [usernameOrEmail, serUsernameOrEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const startCheckUsernameOrEmail = async(usernameOrEmail: string) => {
        console.log(usernameOrEmail);
        const response = "";
    };

    useEffect(() => {
        if (!usernameOrEmail) return;

        const delayDebounce = setTimeout(() => {
            startCheckUsernameOrEmail(usernameOrEmail);
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [usernameOrEmail]);

    useEffect(() => {
        if (!password || !confirmPassword) return;
        if (password !== confirmPassword) return;
    }, [password, confirmPassword]);

    const startSignUp = async() => {

    }

    return (
        <div className="w-[400px] p-5 bg-white shadow-lg rounded-md flex flex-col">
            <div className="w-full flex justify-end">
                <FontAwesomeIcon
                    icon={faXmark}
                    className="mb-1 px-[2px] cursor-pointer duration-200 active:scale-90"
                    onClick={() => dispatch(propertiesSlice.actions.setOpenAuth(false))}
                />
            </div>
            <span className="font-semibold text-center text-2xl">Đăng ký</span>
            <span className="text-center text-sm !mb-5">Điền thông tin của bạn</span>

            <span className="font-semibold text-[15px]">Tên đăng nhập</span>
            <Input
                placeholder="Aa"
                value={usernameOrEmail}
                onChange={(e) => serUsernameOrEmail(e.target.value)}
                allowClear
            />

            <span className="font-semibold text-[15px] mt-2">Mật khẩu</span>
            <Input.Password
                placeholder="Aa"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
            />

            <span className="font-semibold text-[15px] mt-2">Xác nhận mật khẩu</span>
            <Input.Password
                placeholder="Aa"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
            />

            <Checkbox className="w-fit !my-2 !pb-[1px] !pr-1" onClick={(e) => setRememberMe(e.target.checked)}>
                Duy trì đăng nhập
            </Checkbox>

            <Button
                className="mb-1 !font-semibold"
                type="primary"
                onClick={() => startSignUp()}
            >
                Đăng ký
            </Button>

            <div className="flex justify-center items-center">
                <Text>Bạn đã có tài khoản?</Text>
                { mode === "overlay"
                ? <Text
                    className="ml-1 !text-blue cursor-pointer duration-200 active:scale-90"
                    onClick={() => setOpenModal("sign-in")}
                >
                    Đăng nhập
                </Text>
                : <Link href="/auth/sign-in" prefetch={true}>
                    <Text className="ml-1 !text-blue cursor-pointer duration-200 active:scale-90">
                        Đăng nhập
                    </Text>
                </Link> }
            </div>
        </div>
    );
};