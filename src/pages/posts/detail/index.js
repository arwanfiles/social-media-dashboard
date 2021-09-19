import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import PostItem from 'components/widgets/posts/item';
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
            <PostItem profile={user?.detail?.data} item={detail?.data} />
            <div className="flex gap-8">
                <div className="w-7/12">
                    <div className="pt-8">
                        <div className=" font-bold text-lg text-gray-500 mb-6 pb-3 border-b border-gray-200">Recent Comments</div>
                    </div>
                    {comments?.data.map((el) => (
                        <CommentItem key={el.id} item={el} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PagePostDetail;
