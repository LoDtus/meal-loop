"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faUnlockKeyhole,
} from "@fortawesome/free-solid-svg-icons";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Checkbox, Input, Typography } from 'antd';

const { Text } = Typography;

// Nếu truy cập từ profile, home... thì sẽ hiển thị dạng modal với nền mờ, không đổi router, nếu truy cập vào router trực tiếp thì sẽ render với ảnh cố định
export default function SignIn({
    mode,
    setOpenModal,
}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        console.log(username)
    }, [username]);

    return (
        <div className="bg-white p-5 rounded-md flex flex-col">
            <span className="font-semibold text-center">Đăng nhập</span>
            <span>Nhập thông tin của bạn</span>

            <div className="flex items-center py-1 px-2 mb-1 rounded-md bg-[#f5f5f5]">
                <div className="pl-2">
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <Input
                    variant="borderless"
                    placeholder="Tên tài khoản"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    showCount
                />
            </div>

            <div className="flex items-center py-1 px-2 mb-1 rounded-md bg-[#f5f5f5]">
                <div className="pl-2">
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <Input.Password
                    variant="borderless"
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                />
            </div>

            <div className="flex justify-between items-center">
                <Checkbox onClick={(e) => setRememberMe(e.target.checked)}>
                    Duy trì đăng nhập
                </Checkbox>
                <Link href='/access/forgot-password' className='text-blue'>
                    <Button className='!px-0' type="link">
                        Quên mật khẩu
                    </Button>
                </Link>
            </div>

            <Button
                className="mb-1"
                onClick={() => {}}
            >
                Đăng nhập
            </Button>

            <Button
                onClick={() => {}}
            >
                Đăng nhập bằng Google
            </Button>

            {
                mode === "overlay"
                ? <button
                    onClick={() => setOpenModal("sign-up")}
                    className=""
                >
                    Sign up
                </button>
                : <Link href="/auth/sign-up" prefetch={true}>
                    Đăng ký
                </Link>
            }
        </div>
    );
};