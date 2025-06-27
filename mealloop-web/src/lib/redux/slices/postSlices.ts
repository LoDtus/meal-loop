import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        status: null,
    },
    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        pushToPosts: (state, action) => {
            state.posts = [...state.posts, ...action.payload];
        },
        resetPosts: (state, action) => {
            state.posts = [];
            state.status = null;
        }
    }
});

export default postSlice;