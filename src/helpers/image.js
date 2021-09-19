const AVATAR_SERVICE_URL = 'https://avatars.dicebear.com/api/avataaars';
const ALBUM_SERVICE_URL = 'https://avatars.dicebear.com/api/croodles-neutral';

export const generateAvatar = (username, width, height) => {
    return (
        <img
            src={`${AVATAR_SERVICE_URL}/${username}.svg`}
            alt={username}
            width={`${width}px`}
            height={`${height}px`}
            className="shadow-md rounded-full"
            data-tag="allowRowEvents"
        />
    );
};

export const generateAlbumImage = (key) => {
    return (
        <img
            src={`${ALBUM_SERVICE_URL}/${key}.svg`}
            alt={key}
            className="w-full"
            data-tag="allowRowEvents"
        />
    );
};
