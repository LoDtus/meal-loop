import { signOut } from "@/lib/services/authService";
import { Button } from "antd";
import { useDispatch } from "react-redux";

export default function SignOut() {
    const dispatch = useDispatch();

    const startSignOut = async() => {
        // const response = await signOut();
    }

    return (
        <Button
            className="!font-semibold w-full"
            color="danger" variant="solid"
            onClick={() => startSignOut()}
        >
            Đăng xuất
        </Button>
    );
};