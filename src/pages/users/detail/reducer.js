import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    is_loading: false,
    data: {}
};

export const UserDetailReducer = createSlice({
    name: 'userDetail',
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

export default UserDetailReducer.reducer;
