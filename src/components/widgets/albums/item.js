import { Link } from 'react-router-dom';
import { FiEye } from 'react-icons/fi';
import { generateAlbumImage } from 'helpers/image';

const AlbumItem = ({ item }) => {
    return (
        <div className="relative">
            <div className="mb-2 bg-blue-800 rounded-md relative">
                {generateAlbumImage(item.id)}
                <Link to={`/albums/${item.id}`} className="rounded-full bg-gray-100 p-2 absolute top-3 right-3 hover:bg-blue-300">
                    <FiEye className="text-xl" />
                </Link>
            </div>
            <div>
                <Link to={`/albums/${item.id}`} className="font-medium hover:text-blue-800">{item.title}</Link>
            </div>
        </div>
    );
};

export default AlbumItem;
