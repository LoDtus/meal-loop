import {
    faHouse,
    faStore,
    faClockRotateLeft,
    faBookmark,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";

// Left side
export const LEFT_SIDE_TABS = [
    { id: "explore", route: "/explore", icon: faHouse, isPrefetch: true },
    { id: "shop", route: "/shop", icon: faStore },
    { id: "activity", route: "/activity", icon: faClockRotateLeft },
    { id: "saved", route: "/saved", icon: faBookmark },
    { id: "trash", route: "/trash", icon: faTrash },
];