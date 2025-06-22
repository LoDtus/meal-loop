import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        notificationsList: [],
        newNotifications: [],
    },
    reducers: {
        setNotificationsList: (state, action) => {
            state.notificationsList = action.payload;
        },
        pushNewNotification: (state, action) => {
            state.newNotifications.push(action.payload);
        },
    }
});

export default notificationSlice;