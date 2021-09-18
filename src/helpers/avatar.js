const AVATAR_SERVICE_URL = 'https://avatars.dicebear.com/api/avataaars';

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
