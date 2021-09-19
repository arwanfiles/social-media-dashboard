import { get } from 'helpers/api';

export const Album = {
    index: () => get('/albums'),
    show: (id) => get(`/albums/${id}`),
    photos: (id) => get(`/albums/${id}/photos`)
};
