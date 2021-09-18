import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import { getData } from './action';

const columns = [
    {
        name: 'Title',
        selector: row => row.title
    }
];

const PageAlbums = () => {
    const state = useSelector((state) => state.albums);
    const { data, is_loading } = state;

    // Panggil api ketika membuka page posts.
    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1>Album List</h1>
            <DataTable
                columns={columns}
                data={data}
                progressPending={is_loading}
                pagination
            />
        </div>
    );
};

export default PageAlbums;
