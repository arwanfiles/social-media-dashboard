import { Post } from 'helpers/endpoints/posts';
import { store } from 'services/store';
import { PostDetailReducer, PostCommentsReducer } from './reducer';

export const getDetail = async (post_id) => {
    /*
    Hit api post item.
    Sebelum melakukan hit api, terlebih dahulu set loading sebagai variable untuk menampilkan indicator
    apakah proses sedang berjalan atau sudah selesai.
    */
    store.dispatch(PostDetailReducer.actions.setLoading(true));
    Post.show(post_id)
        .then((res) => {
            store.dispatch(PostDetailReducer.actions.setData(res));
        })
        .catch(() => {})
        .finally(() => {
            store.dispatch(PostDetailReducer.actions.setLoading(false));
        });
};

export const getComments = async (post_id) => {
    /*
    Hit api post comments.
    Sebelum melakukan hit api, terlebih dahulu set loading sebagai variable untuk menampilkan indicator
    apakah proses sedang berjalan atau sudah selesai.
    */
    store.dispatch(PostCommentsReducer.actions.setLoading(true));
    Post.comments(post_id)
        .then((res) => {
            store.dispatch(PostCommentsReducer.actions.setData(res));
        })
        .catch(() => {})
        .finally(() => {
            store.dispatch(PostCommentsReducer.actions.setLoading(false));
        });
};
