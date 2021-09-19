import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import DataTable from 'react-data-table-component';
import { generateAvatar } from 'helpers/image';
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
        <div className="flex gap-8">
            <div className="w-7/12">
                <div className="mb-8">
                    <div className="font-bold text-4xl mb-3">Welcome Back, Arwani</div>
                    <div className="text-xl text-gray-600">You can see your friend update or start creating new post here...</div>
                </div>
                <div className="border border-gray-300 rounded-lg p-5">
                    <DataTable
                        columns={columns}
                        data={data}
                        onRowClicked={row => history.push(`/users/${row.id}`)}
                        progressPending={is_loading}
                        noTableHead
                        highlightOnHover
                        pointerOnHover
                    />
                </div>
            </div>
            <div className="w-5/12">
                <div className="p-8 shadow-2xl rounded-lg">
                    <div className="font-bold text-2xl text-gray-700 mb-5">Create New Post</div>
                    <form className="">
                        <div className="mb-3">
                            <input name="title" className="w-full border border-gray-300 rounded-lg px-5 py-4" placeholder="Title" />
                        </div>
                        <div className="mb-3">
                            <textarea name="body" className="w-full border border-gray-300 rounded-lg px-5 py-4" placeholder="Description..."></textarea>
                        </div>
                        <button type="submit" className="w-full rounded-lg bg-blue-700 hover:bg-blue-900 text-white p-4 uppercase">
                            Add Post
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PageUsers;
