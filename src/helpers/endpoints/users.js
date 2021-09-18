import { get } from 'helpers/api';

export const User = {
    index: () => get('/users'),
    show: (id) => get(`/users/${id}`),
    posts: (id) => get(`/users/${id}/posts`),
    albums: (id) => get(`/users/${id}/albums`)
};
