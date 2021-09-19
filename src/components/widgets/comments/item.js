import { generateAvatar } from 'helpers/image';

const CommentItem = ({ item }) => {
    return (
        <div className="mb-5">
            <div className="flex gap-3 mb-4 profile">
                <div className="profile-image flex-shrink-0 w-12">
                    {generateAvatar(item?.email, 40, 40)}
                </div>
                <div className=" bg-gray-50 rounded-lg p-4">
                    <div className="text-gray-700 font-bold mb-1">{` @${item?.email}`}</div>
                    <div className="text-gray-500 font-thin">{item.body}</div>
                </div>
            </div>
        </div>
    );
};

export default CommentItem;
