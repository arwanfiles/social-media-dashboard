import { Link } from 'react-router-dom';

const AlbumItem = ({ item }) => {
    return (
        <div className="shadow rounded-lg mb-5 p-5">
            <div>
                <div>{item.title}</div>
                <div>{item.body}</div>
                <Link to={`/albums/${item.id}`}>Show</Link>
            </div>
        </div>
    );
};

export default AlbumItem;
