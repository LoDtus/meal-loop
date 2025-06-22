import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: 'message',
    initialState: {
        messagesList: [],
        newMessages: [],
    },
    reducers: {
        setMessagesList: (state, action) => {
            state.messagesList = action.payload;
        },
        pushNewMessage: (state, action) => {
            state.newMessages.push(action.payload);
        },
    }
});

export default messageSlice;