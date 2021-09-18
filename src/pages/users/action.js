import { User } from 'helpers/endpoints/users';
import { store } from 'services/store';
import { UserReducer } from './reducer';

export const getData = async () => {
    /*
    Hit api all user.
    Sebelum melakukan hit api, terlebih dahulu set loading sebagai variable untuk menampilkan indicator
    apakah proses sedang berjalan atau sudah selesai.
    */
    store.dispatch(UserReducer.actions.setLoading(true));
    User.index()
        .then((res) => {
            store.dispatch(UserReducer.actions.setData(res));
        })
        .catch(() => {})
        .finally(() => {
            store.dispatch(UserReducer.actions.setLoading(false));
        });
};
