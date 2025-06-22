"use client";

import { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

export default function AuthLayout({
    setOpenAuth,
    mode,
}) {
    const [openModal, setOpenModal] = useState("sign-in");

    return (
        <div className="z-10 absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div
                className="z-20 absolute top-0 left-0 w-full h-full bg-black opacity-50"
                onClick={() => setOpenAuth(false)}
            ></div>

            <div className="z-30">
                { openModal === "sign-in" && <SignIn
                    mode={mode}
                    setOpenModal={setOpenModal}
                /> }
                { openModal === "sign-up" && <SignUp
                    mode={mode}
                    setOpenModal={setOpenModal}
                /> }
                { openModal === "forgot-password" && <SignIn
                    mode={mode}
                    setOpenModal={setOpenModal}
                /> }
            </div>
        </div>
    );
};