import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { FiEye } from 'react-icons/fi';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { getDetail, getPhotos } from './action';

const PageAlbumDetail = () => {
    const { id } = useParams();
    const state = useSelector((state) => state);
    const { album } = state;
    const { detail, photos } = album;

    const [isLightBoxOpen, setLightBoxOpen] = useState(false);
    const [images, setImages] = useState([]);
    const [photoIndex, setPhotoIndex] = useState(0);

    useEffect(() => {
        getDetail(id);
        getPhotos(id);
    }, []);

    useEffect(() => {
        setImages(photos?.data.map(el => el.url));
    }, [photos]);

    const openLightbox = (index) => {
        setPhotoIndex(index);
        setLightBoxOpen(true);
    };

    return (
        <div>
            <div className="flex gap-8 justify-between mb-5 border-b border-gray-200 pb-3">
                <div>
                    <div className="uppercase font-bold text-gray-300 text-sm mb-2">Album Title</div>
                    <div className="font-bold text-xl capitalize">{detail?.data?.title}</div>
                </div>
                <div className="text-right">
                    <div className="uppercase font-bold text-gray-300 text-sm mb-2">Total Photos</div>
                    <div className="font-bold text-5xl">{photos?.data.length}</div>
                </div>
            </div>

            <div>
                <div className="grid grid-cols-5 gap-3">
                    {photos?.data.map((el, i) => (
                        <div key={el.id} className="relative">
                            <img src={el.thumbnailUrl} alt={el.title} className="w-full rounded-lg" />
                            <button onClick={() => openLightbox(i)} className="rounded-full bg-gray-100 p-2 absolute top-3 right-3 hover:bg-blue-300">
                                <FiEye className="text-xl" />
                            </button>
                        </div>
                    ))}
                </div>
                {isLightBoxOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setLightBoxOpen(false)}
                        onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                    />
                )}
            </div>
        </div>
    );
};

export default PageAlbumDetail;
