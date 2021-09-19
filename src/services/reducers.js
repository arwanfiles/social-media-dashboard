import { combineReducers } from '@reduxjs/toolkit';

import posts from 'pages/posts/reducer';
import post from 'pages/posts/detail/reducer';
import albums from 'pages/albums/reducer';
import album from 'pages/albums/detail/reducer';
import users from 'pages/users/reducer';
import user from 'pages/users/detail/reducer';

const reducers = combineReducers({
    posts,
    post,
    albums,
    album,
    users,
    user
});

export default reducers;
