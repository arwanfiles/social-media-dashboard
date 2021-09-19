import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import PostItem from 'components/widgets/posts/item';
import AlbumItem from 'components/widgets/albums/item';
import { generateAvatar } from 'helpers/avatar';
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
                <div className="rounded-lg w-1/2">
                    {posts?.data.map((el) => (
                        <PostItem key={el.id} profile={detail?.data} item={el} />
                    ))}
                </div>

                <div className="w-1/2">
                    <div className="shadow-2xl rounded-lg p-8">
                        {albums?.data.map((el) => (
                            <AlbumItem key={el.id} item={el} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageUserDetail;
