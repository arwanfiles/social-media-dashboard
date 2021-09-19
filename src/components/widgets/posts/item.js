import { Link } from 'react-router-dom';
import { generateAvatar } from 'helpers/avatar';

const PostItem = ({ item, profile }) => {
    return (
        <div className="shadow rounded-lg mb-5 p-5">
            <div className="flex gap-7 mb-4 profile">
                <div className="profile-image">
                    {generateAvatar(profile?.username, 32, 32)}
                </div>
                <div className="">
                    <div className="font-bold text-sm">{profile?.name}</div>
                    <div className="text-gray-300 text-xs italic">{` @${profile?.username}`}</div>
                </div>
            </div>

            <div className="mb-4">
                <div className="font-bold capitalize">{item.title}</div>
                <div className="text-gray-500">{item.body}</div>
            </div>

            <div className="flex justify-between border-t border-gray-200 text-gray-600 pt-3">
                <Link to={`/posts/${item.id}`}>Comments</Link>
                <div>Share</div>
            </div>
        </div>
    );
};

export default PostItem;
