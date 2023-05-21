import React, { useEffect } from 'react';

import MainHome from '../../components/home/main';

import { useDispatch } from 'react-redux';

import { getPodcastByUserFollowing } from '../../redux/actions/podcastActions';

import ClientLayout from '../../../Layouts/ClientLayout';
import { getProfile } from '../../redux/actions/userActions';
import { useLocalstorage } from '../../../hooks/useLocalstorage';

const HomePage = () => {
    const dispatch = useDispatch();

    const { data } = useLocalstorage();
    useEffect(() => {
        dispatch(getPodcastByUserFollowing());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        dispatch(getProfile(data?._id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data?.username, data?.avatar]);

    return (
        <>
            <ClientLayout>
                <MainHome />
            </ClientLayout>
        </>
    );
};

export default HomePage;
