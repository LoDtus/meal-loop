import "./styles/style.css";
import "./styles/navigation-toggle.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "@mui/x-date-pickers";

const menu = [
    { to: "/dashboard", label: "navigation.dashboard", icon: faChartSimple },
    { to: "/hrm", label: "navigation.hrm", icon: faAddressCard },
    { to: "/chat", label: "navigation.chat", icon: faMessage,
        badge: { value: 12, color: "red" }
    },
    { to: "/user-management", label: "navigation.userManagement", icon: faUsers, badge: { value: 12, color: "red" },
        subMenu: [
            { to: "/user-management/infor", label: "navigation.userManagement_infor", icon: null },
            { to: "/user-management/report", label: "navigation.userManagement_report", icon: null },
        ]
    },
    { to: "/store-management", label: "navigation.storeManagement", icon: faStore },
    { to: "/product-management", label: "navigation.productManagement", icon: faBox },
    { to: "/voucher-management", label: "navigation.voucherManagement", icon: faTicket },
    { to: "/notification-management", label: "navigation.notificationManagement", icon: faBell },
    { to: "/support", label: "navigation.support", icon: faPhoneVolume },
    { to: "/activities", label: "navigation.activities", icon: faClockRotateLeft },
    { to: "/report", label: "navigation.report", icon: faPrint },
    { to: "/trash", label: "navigation.trash", icon: faTrash },
    { to: "/setting", label: "navigation.setting", icon: faGear },
];

export default function NavigationBar() {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    const navBarRef = useRef(null);
    const [isOpenNavBar, setIsOpenNavBar] = useState(true);
    const [expandedTabs, setExpandedTabs] = useState([]);

    const handleClick = useCallback((tab) => {
        if (tab.subMenu && location.pathname.startsWith(tab.to)) {
            setExpandedTabs((prev) => prev.includes(tab.to)
                ? prev.filter((item) => item !== tab.to)
                : [...prev, tab.to]
            );
            return;
        } else if (tab.subMenu && !location.pathname.startsWith(tab.to)) {
            setExpandedTabs((prev) => [...prev, tab.to]);
            navigate(tab.subMenu[0].to);
            return;
        }
        navigate(tab.to);
    }, [navigate]);

    useEffect(() => {
        console.log(isOpenNavBar)
    }, [isOpenNavBar]);

    return (
        <React.Fragment>
            <input
                className="nav-input hidden"
                type="checkbox"
                checked={isOpenNavBar}
                onChange={(e) => setIsOpenNavBar(e.target.checked)}
                id="nav-toggle" name="nav-toggle"
            />
            <aside ref={navBarRef}
                className={`h-screen flex shrink-0 flex-col border-r border-gray-line shadow-lg
                    transition-all duration-300
                `}
            >
                <div className="p-2 flex">
                    <Link to="/dashboard"
                        className="nav-title shrink-0 mr-1 py-2 px-3 flex justify-center rounded-md
                        duration-200 active:scale-90"
                    >
                        <span className="font-semibold text-xl line-clamp-1">Meal Loop Admin</span>
                    </Link>
                    <label className={`
                            w-full py-2 border rounded-md border-gray-line text-gray-text flex justify-center items-center
                            cursor-pointer duration-200 hover:text-black hover:bg-gray-hover active:scale-90
                        `}
                        htmlFor="nav-toggle"
                    >
                        <div className={`pb-[2px] duration-200 ${ isOpenNavBar ? "rotate-y-180" : null }`}>
                            <ArrowRightIcon/>
                        </div>
                    </label>
                </div>
            
                <nav className="nav-tabs grow px-2 overflow-y-auto"><ul>
                    {menu.map((item, itemIndex) => (
                        <li key={item.to}>
                            <button
                                title={t(item.label)}
                                onClick={() => handleClick(item)}
                                className={`
                                    relative w-full py-3 px-5 mb-1 flex items-center rounded-md text-left
                                    ${ location.pathname.startsWith(item.to)
                                        ? "text-left bg-blue text-white"
                                        : "text-gray-text duration-200 hover:bg-blue-hover hover:text-blue active:scale-90"
                                    }
                                `}
                            >
                                <div className="w-[22px] flex justify-center items-center py-1">
                                    <FontAwesomeIcon icon={item.icon}/>
                                </div>
                                <span className="nav-tab-text grow ml-2 font-semibold line-clamp-1">{t(item.label)}</span>
                                { item?.badge && <div className={`nav-badge-right
                                        w-[30px] py-[1px] ml-2 flex justify-center items-center
                                        text-[10px] text-white rounded-full bg-red-500
                                        ${ item.badge.value > 99 ? null : "pr-[2px]" }
                                    `}
                                >
                                    {item.badge.value > 99 ? "99+" : item.badge.value}
                                </div> }
                                { item?.badge && <div className={`
                                        nav-badge-float absolute top-1
                                        w-[25px] py-[1px] ml-2 flex justify-center items-center
                                        text-[10px] text-white rounded-full bg-red-500
                                        ${ item.badge.value > 99 ? null : "pr-[2px]" }
                                    `}
                                >
                                    {item.badge.value > 99 ? "99+" : item.badge.value}
                                </div> }
                            </button>

                            { item?.subMenu && expandedTabs.includes(item.to) && isOpenNavBar && <ul>
                                { item?.subMenu.map((subItem, subItemIndex) => {
                                    return (
                                        <li className="flex">
                                            <button
                                                title={t(subItem.label)}
                                                onClick={() => handleClick(subItem)}
                                                className={`group w-full px-5 py-2 border-x border-b border-gray-line text-gray-text text-left
                                                    duration-200 hover:bg-gray-hover hover:text-black
                                                    ${ subItemIndex === 0 ? "border-t rounded-t-md" : null }
                                                    ${ subItemIndex === item.subMenu.length - 1 ? "mb-1 rounded-b-md" : null }
                                                    ${ location.pathname.startsWith(subItem.to) ? "bg-gray-hover !text-black" : null }
                                                `}
                                            >
                                                <p className="duration-200 group-active:scale-90">{t(subItem.label)}</p>
                                            </button>
                                        </li>
                                    )
                                })}
                            </ul>}
                        </li>
                    ))}
                </ul></nav>
            
                <div className="p-2">
                    <div className="border-b border-gray-line w-full mb-2"></div>
                    <Link to="/profile"
                        className= {`
                            w-full py-1 flex justify-center items-center rounded-md duration-200
                            ${ location.pathname.startsWith("/profile")
                                ? "text-black bg-gray-hover"
                                : "hover:bg-blue-hover hover:text-blue active:scale-90"
                            }
                            ${ isOpenNavBar ? "px-5" : "px-1" }
                        `}
                    >
                        <img
                            className="nav-profile-img w-[45px] h-[45px] rounded-full"
                            src="https://i.pinimg.com/736x/f9/84/e6/f984e67e9f21da42dab7e93b84e32a15.jpg"
                            alt="Admin"
                        />
                        <div className="nav-profile-infor flex flex-col ml-2">
                            <span className="font-semibold line-clamp-1">Admin</span>
                            <span className="font-light text-sm line-clamp-1">admin@email.com</span>
                        </div>
                    </Link>
                </div>
            </aside>
        </React.Fragment>
    );
};