import { FiEdit3, FiTrash } from 'react-icons/fi';
import { generateAvatar } from 'helpers/image';
import { deleteComment } from 'pages/posts/detail/action';

const CommentItem = ({ item }) => {
    return (
        <div className="mb-6">
            <div className="flex gap-3 mb-4 profile">
                <div className="profile-image flex-shrink-0 w-12">
                    {generateAvatar(item?.email, 40, 40)}
                </div>
                <div className=" bg-gray-50 rounded-lg p-4 flex-grow">
                    <div className="text-gray-700 font-bold mb-1">{item?.email}</div>
                    <div className="text-gray-500 font-thin">{item.body}</div>
                    <div className="flex justify-end gap-5 text-blue-700 pt-3 text-sm">
                        <button type="button" className="inline-flex items-center">
                            <FiEdit3 className="mr-2" />
                            Edit
                        </button>
                        <button type="button" onClick={() => deleteComment(item.id)} className="inline-flex items-center">
                            <FiTrash className="mr-2" />
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentItem;
