import { combineReducers } from '@reduxjs/toolkit';

import posts from 'pages/posts/reducer';
import albums from 'pages/albums/reducer';
import users from 'pages/users/reducer';

const reducers = combineReducers({
    posts,
    albums,
    users
});

export default reducers;
