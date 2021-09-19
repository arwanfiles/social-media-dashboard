import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';

const PostHero = ({ item }) => {
    return (
        <div className="mb-4 relative pt-5 pr-12">
            <div className="font-bold text-3xl mb-3 capitalize leading-normal">{item.title}</div>
            <div className="text-gray-500 text-lg">{item.body}</div>
            <Link to={`/posts/${item.id}`} className="rounded-full bg-blue-700 hover:bg-blue-900 text-white p-4 absolute right-0 top-0">
                <FiEdit className="text-lg" />
            </Link>
        </div>
    );
};

export default PostHero;
