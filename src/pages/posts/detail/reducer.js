import { createSlice, combineReducers } from '@reduxjs/toolkit';

const initialPostDetailState = {
    is_loading: false,
    data: {}
};

const initialPostCommentsState = {
    is_loading: false,
    data: []
};

export const PostDetailReducer = createSlice({
    name: 'postDetail',
    initialState: initialPostDetailState,
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

export const PostCommentsReducer = createSlice({
    name: 'postComments',
    initialState: initialPostCommentsState,
    reducers: {
        setLoading: (state, action) => ({
            ...state,
            is_loading: action.payload
        }),
        setData: (state, action) => ({
            ...state,
            data: action.payload
        }),
        addItem: (state, action) => ({
            ...state,
            data: [action.payload].concat(state.data) // Insert to first index
        }),
        deleteItem: (state, action) => ({
            ...state,
            data: state.data.filter(el => el.id !== Number(action.payload))
        })
    }
});

const PostReducer = combineReducers({
    detail: PostDetailReducer.reducer,
    comments: PostCommentsReducer.reducer
});

export default PostReducer;
