import "./style.css";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartSimple,
    faAddressCard,
    faMessage,
    faUsers,
    faStore,
    faBox,
    faTicket,
    faBell,
    faPhoneVolume,
    faClockRotateLeft,
    faPrint,
    faTrash,
    faGear,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function NavigationBar() {
    const location = useLocation();
    const { t } = useTranslation();

    const tabs = [
        { to: "/dashboard", label: "navigation.dashboard", icon: faChartSimple, match: "dashboard" },
        { to: "/hrm", label: "navigation.hrm", icon: faAddressCard, match: "hrm" },
        { to: "/chat", label: "navigation.chat", icon: faMessage, match: "chat" },
        { to: "/user-management", label: "navigation.userManagement", icon: faUsers, match: "user-management" },
        { to: "/store-management", label: "navigation.storeManagement", icon: faStore, match: "store-management" },
        { to: "/product-management", label: "navigation.productManagement", icon: faBox, match: "product-management" },
        { to: "/voucher-management", label: "navigation.voucherManagement", icon: faTicket, match: "voucher-management" },
        { to: "/notification-management", label: "navigation.notificationManagement", icon: faBell, match: "notification-management" },
        { to: "/support", label: "navigation.support", icon: faPhoneVolume, match: "support" },
        { to: "/activities", label: "navigation.activities", icon: faClockRotateLeft, match: "activities" },
        { to: "/report", label: "navigation.report", icon: faPrint, match: "report" },
        { to: "/trash", label: "navigation.trash", icon: faTrash, match: "trash" },
        { to: "/setting", label: "navigation.setting", icon: faGear, match: "setting" },
    ];

    return (
        <div className="h-screen flex shrink-0 flex-col border-r border-gray-border shadow-lg">
            <div className="p-2">
                <Link to="/dashboard"
                    className="w-full py-2 flex justify-center rounded-md
                    duration-200 active:scale-90"
                >
                    <span className="font-semibold text-xl">Meal Loop Admin</span>
                </Link>
            </div>

            <div className="navigation-tabs grow px-2 overflow-y-auto">
                {tabs.map(({ to, label, icon, match }) => (
                    <Link key={to} to={to}
                        className={ location.pathname.includes(match)
                            ? "py-3 px-5 mb-1 flex items-center rounded-md bg-blue text-white"
                            : "py-3 px-5 mb-1 flex items-center rounded-md text-gray-text duration-200 hover:bg-blue-hover hover:text-blue active:scale-90"
                        }
                    >
                        <FontAwesomeIcon icon={icon} />
                        <span className="ml-2 font-semibold">{t(label)}</span>
                    </Link>
                ))}
            </div>

            <div className="p-2">
                <div className="border-b border-gray-border w-full mb-2"></div>
                <Link to="/profile"
                    className= { location.pathname.includes("profile")
                        ? "w-full py-1 px-5 flex justify-center items-center rounded-md duration-200 text-black bg-gray-hover"
                        : "w-full py-1 px-5 flex justify-center items-center rounded-md duration-200 hover:bg-blue-hover hover:text-blue active:scale-90"
                    }
                >
                    <img
                        className="w-[45px] h-[45px] rounded-full mr-2"
                        src="https://i.pinimg.com/736x/f9/84/e6/f984e67e9f21da42dab7e93b84e32a15.jpg"
                        alt="Admin"
                    />
                    <div className="flex flex-col">
                        <span className="font-semibold">Admin</span>
                        <span className="font-light text-sm">admin@email.com</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};