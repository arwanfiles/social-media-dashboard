import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul className="">
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/albums">Albums</Link></li>
                <li><Link to="/users">Users</Link></li>
            </ul>

        </aside>
    );
};

export default Sidebar;
