import ClientLayout from '../../../Layouts/ClientLayout';

import { CircularProgress, Container, Box, Divider } from '@mui/material';
import HeaderProfile, { contentButton } from '../../components/profile/HeaderProfile';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { userProfileState } from '../../redux/reducers/userReducers';
import { useNavigate } from 'react-router-dom';
import ProfilePost from './ProfilePost/ProfilePost';
import { useCallback, useEffect } from 'react';
import { deletePodcast, getAllPodcast } from '../../redux/actions/podcastActions';
import { podcastState } from '../../redux/reducers/podcastReducers';
import { useLocalstorage } from '../../../hooks/useLocalstorage';

const UserProfile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getProfileUser = useSelector<RootState, userProfileState>((state) => state.getProfile);
    const getPodcastUser = useSelector<RootState, podcastState>((state) => state.getAllPodcast);
    const { data } = useLocalstorage();

    const { userProfile } = getProfileUser;

    const { podcastInfo } = getPodcastUser;

    const handleMoveToEditProfile = () => {
        navigate('/accounts/edit');
    };

    useEffect(() => {
        dispatch(getAllPodcast(data?._id));
    }, []);

    const onDeletePost = useCallback(
        async (idPost: string, idUser: string) => {
            await dispatch(deletePodcast(idPost, idUser));
            dispatch(getAllPodcast(data?._id));
        },
        [data?._id, dispatch]
    );

    const listButton: contentButton[] = [{ label: 'Edit Profile', handleEvent: () => handleMoveToEditProfile() }];

    return (
        <ClientLayout>
            <Container component="main">
                {!userProfile && (
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <CircularProgress color="secondary" />
                    </Box>
                )}
                {userProfile && (
                    <HeaderProfile
                        avatar={userProfile.avatar}
                        username={userProfile.username}
                        listButton={listButton}
                        followerCount={userProfile.followers.length}
                        followingCount={userProfile.following.length}
                        isFollowing={true}
                        isFetching={false}
                        postCount={podcastInfo?.dataPodcast.length || 0}
                    />
                )}
                <Divider />
                {!podcastInfo && (
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <CircularProgress color="secondary" />
                    </Box>
                )}
                {podcastInfo && <ProfilePost dataPodcasts={podcastInfo.dataPodcast} deletePost={onDeletePost} />}
            </Container>
        </ClientLayout>
    );
};

export default UserProfile;
