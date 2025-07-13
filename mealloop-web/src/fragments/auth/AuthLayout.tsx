"use client";

import { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { useDispatch } from "react-redux";
import propertiesSlice from "@/lib/redux/slices/propertiesSlices";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

export default function AuthLayout({
    mode,
}) {
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState("sign-in");

    return (
        <div className="z-10 absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div
                className="z-20 absolute top-0 left-0 w-full h-full bg-black opacity-50"
                onClick={() => dispatch(propertiesSlice.actions.setOpenAuth(false))}
            ></div>

            <div className="z-30 mb-8">
                { openModal === "sign-in" && <SignIn
                    mode={mode}
                    setOpenModal={setOpenModal}
                /> }
                { openModal === "sign-up" && <SignUp
                    mode={mode}
                    setOpenModal={setOpenModal}
                /> }
                { openModal === "forgot-password" && <ForgotPassword
                    mode={mode}
                    setOpenModal={setOpenModal}
                /> }
                { openModal === "reset-password" && <ResetPassword
                    mode={mode}
                    setOpenModal={setOpenModal}
                /> }
            </div>
        </div>
    );
};