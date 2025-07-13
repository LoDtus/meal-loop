"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Checkbox, Input, Typography } from 'antd';
import Image from "next/image";
import { useDispatch } from "react-redux";
import propertiesSlice from "@/lib/redux/slices/propertiesSlices";

const { Text } = Typography;

// Nếu truy cập từ profile, home... thì sẽ hiển thị dạng modal với nền mờ, không đổi router, nếu truy cập vào router trực tiếp thì sẽ render với ảnh cố định
export default function SignIn({
    mode,
    setOpenModal,
}) {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        console.log(username)
    }, [username]);

    const startManualSignIn = async() => {
        if (!username) return;
        if (!password) return;

        const response = "";
    };

    const startSignInWithGoogle = async() => {

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
            <span className="font-semibold text-center text-2xl">Đăng nhập</span>
            <span className="text-center text-sm !mb-5">Nhập thông tin tài khoản của bạn</span>

            <span className="font-semibold text-[15px]">Tên đăng nhập</span>
            <Input
                placeholder="Tên tài khoản"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                allowClear
            />

            <span className="font-semibold text-[15px] mt-2">Mật khẩu</span>
            <Input.Password
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
            />

            <div className="my-1 flex justify-between items-center">
                <Checkbox className="!pb-[1px]" onClick={(e) => setRememberMe(e.target.checked)}>
                    Duy trì đăng nhập
                </Checkbox>
                { mode === "overlay"
                ? <Button className='!px-0' type="link" onClick={() => setOpenModal("forgot-password")}>
                    Quên mật khẩu
                </Button>
                : <Link href='/auth/forgot-password' className='text-blue'>
                    <Button className='!px-0' type="link">
                        Quên mật khẩu
                    </Button>
                </Link> }
            </div>

            <Button
                className="mb-1 !font-semibold"
                type="primary"
                onClick={() => startManualSignIn()}
            >
                Đăng nhập
            </Button>

            <Button
                className="mb-2 !font-medium !py-2"
                onClick={() => startSignInWithGoogle()}
            >
                <Image
                    className="h-full w-auto"
                    src="/icons/google-64x64.png"
                    alt="Google Icon"
                    width={64}
                    height={64}
                />
                Đăng nhập bằng Google
            </Button>

            <div className="flex justify-center items-center">
                <Text>Bạn chưa có tài khoản?</Text>
                { mode === "overlay"
                ? <Text
                    className="ml-1 !text-blue cursor-pointer duration-200 active:scale-90"
                    onClick={() => setOpenModal("sign-up")}
                >
                    Đăng ký tại đây
                </Text>
                : <Link href="/auth/sign-up" prefetch={true}>
                    <Text className="ml-1 !text-blue cursor-pointer duration-200 active:scale-90">
                        Đăng ký tại đây
                    </Text>
                </Link> }
            </div>
        </div>
    );
};