import { get, post, destroy } from 'helpers/api';

export const Post = {
    index: () => get('/posts'),
    create: (body) => post('/posts', body),
    show: (id) => get(`/posts/${id}`),
    comments: (id) => get(`/posts/${id}/comments`),
    delete: (id) => destroy(`/posts/${id}`)
};
