import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getDetail, getPhotos } from './action';

const PageAlbumDetail = () => {
    const { id } = useParams();
    const state = useSelector((state) => state);
    const { album } = state;
    const { detail, photos } = album;

    useEffect(() => {
        getDetail(id);
        getPhotos(id);
    }, []);

    return (
        <div>
            <div>
                {detail?.data?.title}
            </div>

            <div>
                {photos?.data.map(el => (
                    <img key={el.id} src={el.thumbnailUrl} alt={el.title} />
                ))}
            </div>
        </div>
    );
};

export default PageAlbumDetail;
