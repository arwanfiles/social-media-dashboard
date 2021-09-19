import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createData } from 'pages/posts/action';

const initialFields = {
    title: '',
    body: '',
    userId: 1
};

const Alert = () => {
    const [hidden, setHidden] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setHidden(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={` bg-green-300 border border-green-400 rounded-lg p-3 mb-3 text-green-700 ${hidden ? 'hidden' : ''}`}>
            Successfully create a new post
        </div>
    );
};

const PostCreate = () => {
    const state = useSelector(state => state.posts);
    const { is_creating, is_create_success } = state;
    const [fields, setFields] = useState(initialFields);

    const onChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        if (is_create_success) setFields(initialFields);
    }, [is_create_success]);

    const onSubmit = (e) => {
        e.preventDefault();
        createData(fields);
    };

    return (
        <div className="p-8 shadow-2xl rounded-lg">
            <div className="font-bold text-2xl text-gray-700 mb-5">Create New Post</div>

            {is_create_success && <Alert />}

            <form className="" onSubmit={onSubmit}>
                <div className="mb-3">
                    <input onChange={onChange} value={fields.title} name="title" className="w-full border border-gray-300 rounded-lg px-5 py-4" placeholder="Title" />
                </div>
                <div className="mb-3">
                    <textarea onChange={onChange} value={fields.body} name="body" className="w-full border border-gray-300 rounded-lg px-5 py-4" placeholder="Description..."></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-700 hover:bg-blue-900 text-white p-4 uppercase disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
                    disabled={is_creating}
                >
                    Add Post
                </button>
            </form>
        </div>
    );
};

export default PostCreate;
