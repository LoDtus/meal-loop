import { Button, Input } from "antd";
import { useState } from "react";

export default function SignIn() {
    const [username, setUsername] = useState("");

    const startSignIn = async () => {

    }

    return (
        <div className="p-3 bg-white shadow-lg rounded-md">
            <span className="font-semibold text-xl">Đăng nhập</span>
            <div className="flex items-center">
                <span>Tên đăng nhập</span>
                <Input
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div className="flex items-center">
                
            </div>

            <Button
                className="w-full !font-semibold"
                onClick={() => startSignIn()}
                type="primary"
            >
                Đăng nhập
            </Button>
        </div>
    );
};