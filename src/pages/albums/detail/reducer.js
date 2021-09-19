import { createSlice, combineReducers } from '@reduxjs/toolkit';

const initialAlbumDetailState = {
    is_loading: false,
    data: {}
};

const initialAlbumPhotosState = {
    is_loading: false,
    data: []
};

export const AlbumDetailReducer = createSlice({
    name: 'albumDetail',
    initialState: initialAlbumDetailState,
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

export const AlbumPhotosReducer = createSlice({
    name: 'albumPhotos',
    initialState: initialAlbumPhotosState,
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

const AlbumReducer = combineReducers({
    detail: AlbumDetailReducer.reducer,
    photos: AlbumPhotosReducer.reducer
});

export default AlbumReducer;
