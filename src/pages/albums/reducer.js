import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    is_loading: false,
    data: []
};

export const AlbumReducer = createSlice({
    name: 'albums',
    initialState,
    reducers: {
        setLoading: (state, action) => ({
            ...state,
            is_loading: action.payload
        }),
        setData: (state, action) => ({
            ...state,
            data: action.payload
        })
    }
});

export default AlbumReducer.reducer;
