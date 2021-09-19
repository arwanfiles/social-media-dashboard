import { generateAvatar } from 'helpers/image';

const UserCard = ({ item }) => {
    return (
        <div className="shadow rounded-lg text-center p-12 inline-block">
            <div className="profile-image inline-block mb-5">
                {generateAvatar(item?.username, 120, 120)}
            </div>
            <div className="">
                <div className="font-bold text-lg">{item?.name}</div>
                <div className="text-gray-300 text-xs italic">{` @${item?.username}`}</div>
            </div>
        </div>
    );
};

export default UserCard;
