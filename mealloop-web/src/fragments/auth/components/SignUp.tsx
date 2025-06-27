"use client";
import Link from "next/link";
import { useRouter } from 'nextjs-toploader/app';

export default function SignUp({
    mode,
    setOpenModal,
}) {
    const router = useRouter();

    return (
        <div className="bg-white p-5 rounded-md">
            Sign up

            {
                mode === "overlay"
                ? <button
                    onClick={() => setOpenModal("sign-in")}
                    className=""
                >
                    Sign in
                </button>
                : <Link href="/auth/sign-in" prefetch={true}>
                    Đăng nhập
                </Link>
            }
        </div>
    );
};