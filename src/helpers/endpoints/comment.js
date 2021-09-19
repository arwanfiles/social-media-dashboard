import { post, put, destroy } from 'helpers/api';

export const Comment = {
    edit: (id, body) => put(`/comments/${id}`, body),
    create: (body) => post('/comments', body),
    delete: (id) => destroy(`/comments/${id}`)
};
