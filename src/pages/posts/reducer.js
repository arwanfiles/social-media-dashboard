import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    is_loading: false,
    is_creating: false,
    is_create_success: false,
    data: []
};

export const PostReducer = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setLoading: (state, action) => ({
            ...state,
            is_loading: action.payload
        }),
        setCreating: (state, action) => ({
            ...state,
            is_creating: action.payload
        }),
        setSuccess: (state, action) => ({
            ...state,
            is_create_success: action.payload
        }),
        setData: (state, action) => ({
            ...state,
            data: action.payload
        }),
        setItem: (state, action) => ({
            ...state,
            data: action.payload
        })
    }
});

export default PostReducer.reducer;
