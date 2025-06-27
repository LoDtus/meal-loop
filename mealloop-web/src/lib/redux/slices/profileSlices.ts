import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
    id: string;
    username: string;
    fullName: string;
    email: string;
    rememberMe: boolean;
    selectedProfile: string,
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        id: "",
        username: "",
        fullName: "",
        email: "",
        rememberMe: false,

        selectedProfile: "", // username
    },
    reducers: {
        setProfile: (state, action: PayloadAction<Partial<ProfileState>>) => {
            Object.assign(state, action.payload);
        }, // dispatch(setProfile({ fullName: "Long Nguyễn", username: "long" })); // Cần cập nhật gì thì đẩy vào, không bị ghi đè nếu không đẩy
        setSelectedProfile: (state, action) => {
            state.selectedProfile = action.payload;
        }
    }
});

export default profileSlice;