import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { updatePost } from 'pages/posts/detail/action';

const PostHero = ({ item }) => {
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
        updatePost(item.id, dt);
    };

    return (
        <div className="mb-4 relative pt-5">
            <div className={`${isEditor ? 'hidden' : ''}`}>
                <div className="font-bold text-3xl mb-3 capitalize leading-normal">{item.title}</div>
                <div className="text-gray-500 text-lg">{item.body}</div>
            </div>

            <div className={`${isEditor ? '' : 'hidden'}`}>
                <form onSubmit={onSubmit}>
                    <input type="text" name="title" onChange={onChange} defaultValue={item.title} className="w-full border border-gray-300 rounded-lg px-5 py-4 mb-3" />
                    <textarea name="body" onChange={onChange} defaultValue={item.body} className="w-full border border-gray-300 rounded-lg px-5 py-4 mb-3"></textarea>
                    <div className="flex">
                        <button type="submit" className="px-12 py-3 bg-blue-700 text-white rounded-lg">Save</button>
                        <button type="button" onClick={() => setIsEditor(!isEditor)} className="px-8 py-3 text-gray-500 rounded-lg">Cancel</button>
                    </div>
                </form>
            </div>

            <button type="button" onClick={() => setIsEditor(!isEditor)} className="rounded-full bg-blue-700 hover:bg-blue-900 text-white p-4 absolute left-full top-0 ml-3">
                <FiEdit className="text-lg" />
            </button>
        </div>
    );
};

export default PostHero;
