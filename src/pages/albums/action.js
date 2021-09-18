import { Album } from 'helpers/endpoints/albums';
import { store } from 'services/store';
import { AlbumReducer } from './reducer';

export const getData = async () => {
    /*
    Hit api all album.
    Sebelum melakukan hit api, terlebih dahulu set loading sebagai variable untuk menampilkan indicator
    apakah proses sedang berjalan atau sudah selesai.
    */
    store.dispatch(AlbumReducer.actions.setLoading(true));
    Album.index()
        .then((res) => {
            store.dispatch(AlbumReducer.actions.setData(res));
        })
        .catch(() => {})
        .finally(() => {
            store.dispatch(AlbumReducer.actions.setLoading(false));
        });
};
