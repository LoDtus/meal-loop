import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PropertiesState {
    sideWidth: number;
    headerHeight: number;
    openCartMenu: boolean;
    openNotifycationMenu: boolean;
    openProfileMenu: boolean;
    distanceFromRightHeader: number[];
}

const propertiesSlice = createSlice({
    name: 'properties',
    initialState: {
        sideWidth: 0,
        openAuth: false,

        // Header
        headerHeight: 0,
        openCartMenu: false,
        openNotifycationMenu: false,
        openProfileMenu: false,
        distanceFromRightHeader: [0, 0], // notify width, profile width
    },
    reducers: {
        setProperties: (state, action: PayloadAction<Partial<PropertiesState>>) => {
            Object.assign(state, action.payload);
        },
        setHeaderHeight: (state, action) => {
            state.headerHeight = action.payload;
        },
        setOpenAuth: (state, action) => {
            state.openAuth = action.payload;
        },
        setSideWidth: (state, action) => {
            state.sideWidth = action.payload;
        },
        setOpenCartMenu: (state, action) => {
            state.openCartMenu = action.payload;
        },
        setOpenNotificationMenu: (state, action) => {
            state.openNotifycationMenu = action.payload;
        },
        setOpenProfileMenu: (state, action) => {
            state.openProfileMenu = action.payload;
        },
        setDistanceFromRightHeader: (state, action) => {
            state.distanceFromRightHeader[0] = action.payload.notifyGap;
            state.distanceFromRightHeader[1] = action.payload.profileGap;
        },
    }
});

export default propertiesSlice;