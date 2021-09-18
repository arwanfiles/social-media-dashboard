import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    is_loading: false,
    data: []
};

export const UserReducer = createSlice({
    name: 'users',
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

export default UserReducer.reducer;
