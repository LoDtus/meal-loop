import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PropertiesState {
    isLoading: boolean;
}

const propertiesSlice = createSlice({
    name: 'properties',
    initialState: {
        isLoadingOverlay: false,
        headerHeight: 0,
        sideWidth: 0,
    },
    reducers: {
        setProperties: (state, action: PayloadAction<Partial<PropertiesState>>) => {
            Object.assign(state, action.payload);
        },
        setLoadingOverlay: (state, action) => {
            state.isLoadingOverlay = action.payload;
        },
        setHeaderHeight: (state, action) => {
            state.headerHeight = action.payload;
        },
        setSideWidth: (state, action) => {
            state.sideWidth = action.payload;
        },
    }
});

export default propertiesSlice;