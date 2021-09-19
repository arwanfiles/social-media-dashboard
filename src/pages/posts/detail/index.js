import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import PostHero from 'components/widgets/posts/hero';
import UserCard from 'components/widgets/users/card';
import CommentCreate from 'components/widgets/comments/create';
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
                        </div>
                    </div>
                    <CommentCreate />
                    {comments?.data.map((el) => (
                        <CommentItem key={el.email} item={el} />
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
