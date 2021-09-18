import { get, post, put, destroy } from 'helpers/api';

export const User = {
    index: () => get('/users'),
    create: (body) => post('/users', body),
    show: (id) => get(`/users/${id}`),
    edit: (id, body) => put(`/users/${id}`, body),
    delete: (id, body) => destroy(`/users/${id}`)
};
