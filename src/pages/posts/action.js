import { Post } from 'helpers/endpoints/posts';
import { store } from 'services/store';
import { PostReducer } from './reducer';

export const getData = async () => {
    /*
    Hit api all post.
    Sebelum melakukan hit api, terlebih dahulu set loading sebagai variable untuk menampilkan indicator
    apakah proses sedang berjalan atau sudah selesai.
    */
    store.dispatch(PostReducer.actions.setLoading(true));
    Post.index()
        .then((res) => {
            store.dispatch(PostReducer.actions.setData(res));
        })
        .catch(() => {})
        .finally(() => {
            store.dispatch(PostReducer.actions.setLoading(false));
        });
};
