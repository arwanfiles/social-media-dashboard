import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import PostItem from 'components/widgets/posts/item';
import AlbumItem from 'components/widgets/albums/item';
import { generateAvatar } from 'helpers/image';
import { getDetail, getPosts, getAlbums } from './action';

const PageUserDetail = () => {
    const { id } = useParams();
    const state = useSelector((state) => state.user);
    const { detail, posts, albums } = state;

    useEffect(() => {
        getDetail(id);
        getPosts(id);
        getAlbums(id);
    }, []);

    return (
        <div>
            <div className="flex gap-7 mb-8 profile">
                <div className="profile-image">
                    {generateAvatar(detail?.data?.username, 120, 120)}
                </div>
                <div className="pt-10 pb-4">
                    <div className="">
                        <span className="text-2xl font-bold">{detail?.data?.name}</span>
                        <span className="text-gray-300 italic">{` @${detail?.data?.username}`}</span>
                    </div>
                    <div className="text-gray-500">{detail?.data?.email}</div>
                </div>
            </div>

            <div className="flex gap-8">
                <div className="w-7/12">
                    <div className="pt-8">
                        <div className=" font-bold text-lg text-gray-500 mb-6 pb-3 border-b border-gray-200">Recent Posts</div>
                    </div>
                    {posts?.data.map((el) => (
                        <PostItem key={el.id} profile={detail?.data} item={el} />
                    ))}
                </div>

                <div className="w-5/12">
                    <div className="shadow-2xl rounded-lg p-8">
                        <div className=" font-bold text-lg text-gray-500 mb-6 pb-3 border-b border-gray-200">{`${detail?.data?.username}'s Albums`}</div>
                        <div className="grid grid-cols-2 gap-8">
                            {albums?.data.map((el) => (
                                <AlbumItem key={el.id} item={el} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageUserDetail;
