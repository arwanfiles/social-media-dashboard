import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import { getData } from './action';

const columns = [
    {
        name: 'ID',
        selector: row => row.id
    },
    {
        name: 'Name',
        selector: row => row.name
    },
    {
        name: 'Username',
        selector: row => row.username
    },
    {
        name: 'Email',
        selector: row => row.email
    }
];

const PageUsers = () => {
    const state = useSelector((state) => state.users);
    const { data, is_loading } = state;

    // Panggil api ketika membuka page posts.
    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1>User List</h1>
            <DataTable
                columns={columns}
                data={data}
                progressPending={is_loading}
                pagination
            />
        </div>
    );
};

export default PageUsers;
