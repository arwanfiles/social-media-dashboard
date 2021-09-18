import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import DataTable from 'react-data-table-component';
import { generateAvatar } from 'helpers/avatar';
import { getData } from './action';

const columns = [
    {
        name: 'Photo',
        selector: row => row.id,
        cell: row => generateAvatar(row.username, 32, 32),
        width: '64px'
    },
    {
        name: 'Profile',
        selector: row => row.username,
        cell: row => (
            <div className="py-4">
                <div className="mb-1">
                    <span className="font-bold" data-tag="allowRowEvents">{row.name}</span>
                    <span className="text-xs text-gray-400 italic" data-tag="allowRowEvents">{` (@${row.username})`}</span>
                </div>
                <div className="text-gray-500" data-tag="allowRowEvents">{row.email}</div>
            </div>
        )
    }
];

const PageUsers = () => {
    const history = useHistory();
    const state = useSelector((state) => state.users);
    const { data, is_loading } = state;

    // Panggil api ketika membuka page users.
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <DataTable
                columns={columns}
                data={data}
                onRowClicked={row => history.push(`/users/${row.id}`)}
                progressPending={is_loading}
                noTableHead
            />
        </>
    );
};

export default PageUsers;
