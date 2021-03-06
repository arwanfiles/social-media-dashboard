import { get, post, put, destroy } from 'helpers/api';

export const Post = {
    index: () => get('/posts'),
    create: (body) => post('/posts', body),
    show: (id) => get(`/posts/${id}`),
    edit: (id, body) => put(`/posts/${id}`, body),
    comments: (id) => get(`/posts/${id}/comments`),
    delete: (id) => destroy(`/posts/${id}`)
};
