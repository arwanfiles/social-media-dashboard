import { combineReducers } from '@reduxjs/toolkit';

import posts from 'pages/posts/reducer';
import albums from 'pages/albums/reducer';
import users from 'pages/users/reducer';
import user from 'pages/users/detail/reducer';

const reducers = combineReducers({
    posts,
    albums,
    users,
    user
});

export default reducers;
