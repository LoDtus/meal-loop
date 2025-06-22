import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
    id: string;
    username: string;
    fullName: string;
    email: string;
    rememberMe: boolean;
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        id: "",
        username: "",
        fullName: "",
        email: "",
        rememberMe: false,
    },
    reducers: {
        setProfile: (state, action: PayloadAction<Partial<ProfileState>>) => {
            Object.assign(state, action.payload);
        }, // dispatch(setProfile({ fullName: "Long Nguyễn", username: "long" })); // Cần cập nhật gì thì đẩy vào, không bị ghi đè nếu không đẩy
    }
});

export default profileSlice;