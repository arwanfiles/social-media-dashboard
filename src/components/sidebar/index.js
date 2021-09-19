import { Link } from 'react-router-dom';
import { generateAvatar } from 'helpers/image';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="text-center py-8">
                <div className="inline-block bg-white rounded-full shadow-2xl">
                    {generateAvatar('arwani', 120, 120)}
                </div>
                <div className="text-white pt-3 pb-8">
                    <div className="font-bold text-xl">Arwani</div>
                    <div className=" text-blue-400">@arwanfiles</div>
                </div>
                <div className="px-5">
                    <Link className="block border border-white w-full py-3 rounded text-white hover:bg-white hover:text-blue-700" to="/dashboard">
                        Dashboard
                    </Link>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
