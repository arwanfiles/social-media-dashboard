import { get } from 'helpers/api';

export const Post = {
    index: () => get('/posts'),
    show: (id) => get(`/posts/${id}`),
    comments: (id) => get(`/posts/${id}/comments`)
};
