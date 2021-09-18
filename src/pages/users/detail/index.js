import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { generateAvatar } from 'helpers/avatar';
import { getData } from './action';

const PageUserDetail = () => {
    const { id } = useParams();
    const state = useSelector((state) => state.userDetail);
    const { data } = state;

    useEffect(() => {
        getData(id);
    }, []);

    return (
        <div>
            <div className="flex gap-7 profile">
                <div className="profile-image">
                    {generateAvatar(data?.username, 120, 120)}
                </div>
                <div className="pt-10 pb-4">
                    <div className="">
                        <span className="text-2xl font-bold">{data?.name}</span>
                        <span className="text-gray-300 italic">{` @${data?.username}`}</span>
                    </div>
                    <div className="text-gray-500">{data?.email}</div>
                </div>
            </div>
        </div>
    );
};

export default PageUserDetail;
