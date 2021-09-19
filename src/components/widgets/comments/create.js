import { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { addComment } from 'pages/posts/detail/action';

const initialState = {
    body: '',
    email: 'arwanfiles@gmail.com',
    name: 'Arwani Ali'
};

const CommentCreate = () => {
    const [fields, setFields] = useState(initialState);

    const onChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addComment(fields);
    };

    return (
        <form className="mb-5 relative" onSubmit={onSubmit}>
            <textarea name="body" onChange={onChange} className="w-full border border-gray-300 rounded-lg px-5 py-4" placeholder="Add new comment..."></textarea>
            <button type="submit" className="rounded-full bg-gray-200 text-gray-600 hover:bg-blue-700 hover:text-white p-4 absolute right-4 top-1/2 transform -translate-y-1/2">
                <FiSend />
            </button>
        </form>
    );
};

export default CommentCreate;
