import { createSlice, combineReducers } from '@reduxjs/toolkit';

const initialUserDetailState = {
    is_loading: false,
    data: {}
};

const initialUserPostsState = {
    is_loading: false,
    data: []
};

const initialUserAlbumsState = {
    is_loading: false,
    data: []
};

export const UserDetailReducer = createSlice({
    name: 'userDetail',
    initialState: initialUserDetailState,
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

export const UserPostsReducer = createSlice({
    name: 'userPosts',
    initialState: initialUserPostsState,
    reducers: {
        setLoading: (state, action) => ({
            ...state,
            is_loading: action.payload
        }),
        setData: (state, action) => ({
            ...state,
            data: action.payload
        }),
        deleteItem: (state, action) => ({
            ...state,
            data: state.data.filter(el => el.id !== Number(action.payload))
        })
    }
});

export const UserAlbumsReducer = createSlice({
    name: 'userAlbums',
    initialState: initialUserAlbumsState,
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

const UserReducer = combineReducers({
    detail: UserDetailReducer.reducer,
    posts: UserPostsReducer.reducer,
    albums: UserAlbumsReducer.reducer
});

export default UserReducer;
