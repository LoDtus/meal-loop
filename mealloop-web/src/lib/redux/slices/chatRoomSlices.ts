import { createSlice } from "@reduxjs/toolkit";

const chatRoomSlice = createSlice({
    name: 'chatRoom',
    initialState: {
        chatRoomsList: [],
        selectedChatRoom: {
            info: {},
            members: {},
        },
    },
    reducers: {
        setChatRoomsList: (state, action) => {
            state.chatRoomsList = action.payload;
        },
        pushUpdatedChatRoom: (state, action) => {
            
        },
        setSelectedChatRoom: (state, action) => {
            state.selectedChatRoom = action.payload;
        },
    }
});

export default chatRoomSlice;