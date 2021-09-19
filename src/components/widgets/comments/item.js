import { useState } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';
import { generateAvatar } from 'helpers/image';
import { deleteComment, updateComment } from 'pages/posts/detail/action';

const CommentItem = ({ item }) => {
    const [isEditor, setIsEditor] = useState(false);
    const [fields, setFields] = useState(item);

    const onChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setIsEditor(false);
        const dt = { ...item, ...fields };
        updateComment(item.id, dt);
    };

    return (
        <div className="mb-6">
            <div className="flex gap-3 mb-4 profile">
                <div className="profile-image flex-shrink-0 w-12">
                    {generateAvatar(item?.email, 40, 40)}
                </div>
                <div className=" bg-gray-50 rounded-lg p-4 flex-grow">
                    <div className="text-gray-700 font-bold mb-1">{item?.email}</div>

                    <div className={`${isEditor ? 'hidden' : ''}`}>
                        <div className="text-gray-500 font-thin">{item.body}</div>
                    </div>

                    <div className={`${isEditor ? '' : 'hidden'}`}>
                        <form onSubmit={onSubmit}>
                            <textarea name="body" onChange={onChange} defaultValue={item.body} className="w-full border border-gray-300 rounded-lg px-5 py-4 mb-3"></textarea>
                            <div className="flex">
                                <button type="submit" className="px-12 py-3 bg-blue-700 text-white rounded-lg">Save</button>
                                <button type="button" onClick={() => setIsEditor(!isEditor)} className="px-8 py-3 text-gray-500 rounded-lg">Cancel</button>
                            </div>
                        </form>
                    </div>

                    <div className="flex justify-end gap-5 text-blue-700 pt-3 text-sm">
                        <button type="button" onClick={() => setIsEditor(!isEditor)} className="inline-flex items-center">
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
