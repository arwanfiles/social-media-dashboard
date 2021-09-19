import { post, destroy } from 'helpers/api';

export const Comment = {
    create: (body) => post('/comments', body),
    delete: (id) => destroy(`/comments/${id}`)
};
