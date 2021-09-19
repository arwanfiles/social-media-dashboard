import { Album } from 'helpers/endpoints/albums';
import { store } from 'services/store';
import { AlbumDetailReducer, AlbumPhotosReducer } from './reducer';

export const getDetail = async (album_id) => {
    /*
    Hit api album item.
    Sebelum melakukan hit api, terlebih dahulu set loading sebagai variable untuk menampilkan indicator
    apakah proses sedang berjalan atau sudah selesai.
    */
    store.dispatch(AlbumDetailReducer.actions.setLoading(true));
    Album.show(album_id)
        .then((res) => {
            store.dispatch(AlbumDetailReducer.actions.setData(res));
        })
        .catch(() => {})
        .finally(() => {
            store.dispatch(AlbumDetailReducer.actions.setLoading(false));
        });
};

export const getPhotos = async (album_id) => {
    /*
    Hit api get album photos.
    Sebelum melakukan hit api, terlebih dahulu set loading sebagai variable untuk menampilkan indicator
    apakah proses sedang berjalan atau sudah selesai.
    */
    store.dispatch(AlbumPhotosReducer.actions.setLoading(true));
    Album.photos(album_id)
        .then((res) => {
            store.dispatch(AlbumPhotosReducer.actions.setData(res));
        })
        .catch(() => {})
        .finally(() => {
            store.dispatch(AlbumPhotosReducer.actions.setLoading(false));
        });
};
