import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMessageCircle, FiShare2, FiMoreVertical, FiEye } from 'react-icons/fi';
import { useClickOutside } from 'helpers/hooks/clickoutside';
import { generateAvatar } from 'helpers/image';

const PostItem = ({ item, profile }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const { innerBorderRef } = useClickOutside(() => setDropdownOpen(false));

    return (
        <div className="shadow rounded-lg mb-5 p-5">
            <div className="flex justify-between gap-7 mb-4 profile">
                <div className="inline-flex gap-7">
                    <div className="profile-image">
                        {generateAvatar(profile?.username, 32, 32)}
                    </div>
                    <div className="">
                        <div className="font-bold text-sm">{profile?.name}</div>
                        <div className="text-gray-300 text-xs italic">{` @${profile?.username}`}</div>
                    </div>
                </div>
                <div className="relative">
                    <div className="rounded-full bg-gray-100 p-2" onClick={() => setDropdownOpen(!isDropdownOpen)}>
                        <FiMoreVertical className="text-xl" />
                    </div>
                    <div className={`absolute top-full right-0 border border-gray-300 rounded w-40 shadow bg-white ${isDropdownOpen ? '' : 'hidden'}`} ref={innerBorderRef}>
                        <Link to={`/posts/${item.id}`} className="inline-flex items-center px-3 py-2">
                            <FiEye className="mr-2" />
                            Show Post
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <div className="font-bold capitalize">
                    <Link to={`/posts/${item.id}`} className="hover:text-blue-700">{item.title}</Link>
                </div>
                <div className="text-gray-500">{item.body}</div>
            </div>

            <div className="flex justify-between border-t border-gray-200 text-blue-700 pt-3">
                <Link to={`/posts/${item.id}`} className="inline-flex items-center">
                    <FiMessageCircle className="mr-2" />
                    Comments
                </Link>
                <div className="inline-flex items-center">
                    <FiShare2 className="mr-2" />
                    Share
                </div>
            </div>
        </div>
    );
};

export default PostItem;
