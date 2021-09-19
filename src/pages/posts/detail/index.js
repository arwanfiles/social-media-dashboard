import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { FiPlus, FiSend } from 'react-icons/fi';
import PostHero from 'components/widgets/posts/hero';
import UserCard from 'components/widgets/users/card';
import CommentItem from 'components/widgets/comments/item';
import { getDetail, getComments } from './action';

const PagePostDetail = () => {
    const { id } = useParams();
    const state = useSelector((state) => state);
    const { user, post } = state;
    const { detail, comments } = post;

    useEffect(() => {
        getDetail(id);
        getComments(id);
    }, []);

    return (
        <div>
            <div className="flex gap-8">
                <div className="w-7/12">
                    <PostHero item={detail?.data} />
                    <div className="pt-8">
                        <div className="font-bold text-lg text-gray-500 mb-6 pb-3 border-b border-gray-200 flex justify-between">
                            <div>Comments</div>
                            <FiPlus />
                        </div>
                    </div>
                    <form className="mb-5 relative">
                        <textarea name="comment" className="w-full border border-gray-300 rounded-lg px-5 py-4" placeholder="Add new comment..."></textarea>
                        <button type="submit" className="rounded-full bg-gray-200 text-gray-600 hover:bg-blue-700 hover:text-white p-4 absolute right-4 top-1/2 transform -translate-y-1/2">
                            <FiSend />
                        </button>
                    </form>
                    {comments?.data.map((el) => (
                        <CommentItem key={el.id} item={el} />
                    ))}
                </div>

                <div className="w-5/12 text-center">
                    <UserCard item={user?.detail?.data} />
                </div>
            </div>
        </div>
    );
};

export default PagePostDetail;
