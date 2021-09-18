import { get, post, put, destroy } from 'helpers/api';

export const Post = {
    index: () => get('/posts'),
    create: (body) => post('/posts', body),
    show: (id) => get(`/posts/${id}`),
    edit: (id, body) => put(`/posts/${id}`, body),
    delete: (id, body) => destroy(`/posts/${id}`)
};
