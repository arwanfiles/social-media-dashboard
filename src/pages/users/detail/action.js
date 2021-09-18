import { User } from 'helpers/endpoints/users';
import { store } from 'services/store';
import { UserDetailReducer } from './reducer';

export const getData = async (id) => {
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
