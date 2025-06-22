import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        keyword: "",
        typeOfSearch: "explore", // setting
    },
    reducers: {
        startSearch: (state, action) => {
            state.keyword = action.payload.keyword;
            state.keyword = action.payload.type;
        },
    }
});

export default searchSlice;