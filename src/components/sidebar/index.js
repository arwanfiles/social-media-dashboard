import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-brand px-4 py-8">
                <div className="flex items-center">
                    <img
                        className="sidebar-brand-icon"
                        src={`${process.env.PUBLIC_URL}/assets/img/logo_icon-white.svg`}
                        alt=""
                    />
                    <div className="sidebar-brand-text">Social Media</div>
                </div>
            </div>
            <ul className="sidebar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard"><span className="nav-text">Dashboard</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/posts"><span className="nav-text">Posts</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/albums"><span className="nav-text">Albums</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/users"><span className="nav-text">Users</span></Link>
                </li>
            </ul>

        </aside>
    );
};

export default Sidebar;
