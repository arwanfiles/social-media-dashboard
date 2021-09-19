import { User } from 'helpers/endpoints/users';
import { Post } from 'helpers/endpoints/posts';
import { store } from 'services/store';
import { UserDetailReducer, UserPostsReducer, UserAlbumsReducer } from './reducer';

export const getDetail = async (id) => {
    /*
    Hit api user item.
    Sebelum melakukan hit api, terlebih dahulu set loading sebagai variable untuk menampilkan indicator
    apakah proses sedang berjalan atau sudah selesai.
    */
    store.dispatch(UserDetailReducer.actions.setLoading(true));
    User.show(id)
        .then((res) => {
            store.dispatch(UserDetailReducer.actions.setData(res));
        })
        .catch(() => {})
        .finally(() => {
            store.dispatch(UserDetailReducer.actions.setLoading(false));
        });
};

export const getPosts = async (id) => {
    /*
    Hit api user posts.
    Sebelum melakukan hit api, terlebih dahulu set loading sebagai variable untuk menampilkan indicator
    apakah proses sedang berjalan atau sudah selesai.
    */
    store.dispatch(UserPostsReducer.actions.setLoading(true));
    User.posts(id)
        .then((res) => {
            store.dispatch(UserPostsReducer.actions.setData(res));
        })
        .catch(() => {})
        .finally(() => {
            store.dispatch(UserPostsReducer.actions.setLoading(false));
        });
};

export const getAlbums = async (id) => {
    /*
    Hit api user albums.
    Sebelum melakukan hit api, terlebih dahulu set loading sebagai variable untuk menampilkan indicator
    apakah proses sedang berjalan atau sudah selesai.
    */
    store.dispatch(UserAlbumsReducer.actions.setLoading(true));
    User.albums(id)
        .then((res) => {
            store.dispatch(UserAlbumsReducer.actions.setData(res));
        })
        .catch(() => {})
        .finally(() => {
            store.dispatch(UserAlbumsReducer.actions.setLoading(false));
        });
};

export const deletePost = async (id) => {
    /*
    Hit api delete post.
    */
    Post.delete(id)
        .then(() => {
            store.dispatch(UserPostsReducer.actions.deleteItem(id));
        })
        .catch(() => {})
        .finally(() => {});
};
