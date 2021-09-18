import { get, post, put, destroy } from 'helpers/api';

export const Album = {
    index: () => get('/albums'),
    create: (body) => post('/albums', body),
    show: (id) => get(`/albums/${id}`),
    edit: (id, body) => put(`/albums/${id}`, body),
    delete: (id, body) => destroy(`/albums/${id}`)
};
