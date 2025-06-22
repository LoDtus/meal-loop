import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingState {
    language: string,
}

const settingSlice = createSlice({
    name: 'setting',
    initialState: {
        language: "vi",
    },
    reducers: {
        setSetting: (state, action: PayloadAction<Partial<SettingState>>) => {
            Object.assign(state, action.payload);
        },
    }
});

export default settingSlice;