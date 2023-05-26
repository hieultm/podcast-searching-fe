import { Box, CircularProgress, Divider } from '@mui/material';
import Container from '@mui/material/Container';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useLocalstorage } from '../../../hooks/useLocalstorage';
import ClientLayout from '../../../Layouts/ClientLayout';
import HeaderProfile, { contentButton } from '../../components/profile/HeaderProfile';
import { userFollow, userUnFollow } from '../../redux/actions/postActions';
import { getOtherUserProfile, getRelationship } from '../../redux/actions/userActions';
import { typeFetchingFollow, typeFetchingUnfollow } from '../../redux/reducers/postReducers';
import { RelationshipState, otherUserProfile } from '../../redux/reducers/userReducers';
import { RootState } from '../../redux/store';
import { getAllPodcast } from '../../redux/actions/podcastActions';
import { podcastState } from '../../redux/reducers/podcastReducers';
import OtherUserProfilePost from './OtherUserProfilePost';

const UserProfiles = () => {
    const myUser = useLocalstorage();
    const dispatch = useDispatch();
    const path = useLocation();
    const params = path.pathname.replace('/user/', '').trim();
    const dataOtherUserProfile = useSelector<RootState, otherUserProfile>((state) => state.getOtherUserProfile);
    const dataFollowUserProfile = useSelector<RootState, typeFetchingFollow>((state) => state.userFollow);
    const dataUnfollowUserProfile = useSelector<RootState, typeFetchingUnfollow>((state) => state.userUnFollow);
    const statusFollow = useSelector<RootState, RelationshipState>((state) => state.getRelationship);
    const getPodcastUser = useSelector<RootState, podcastState>((state) => state.getAllPodcast);

    const { userProfile } = dataOtherUserProfile;
    const { statusRelationship } = statusFollow;
    const { podcastInfo } = getPodcastUser;

    const { data } = myUser;

    const hanleFollowUser = useCallback(async () => {
        await dispatch(userFollow(data._id, params));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const hanleUnFollowUser = useCallback(async () => {
        await dispatch(userUnFollow(data._id, params));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        dispatch(getOtherUserProfile(data._id, params));
        dispatch(getRelationship(data._id, params));
        dispatch(getAllPodcast(params));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params, dataFollowUserProfile.followFetching, dataUnfollowUserProfile.unFollowFetching]);

    const listButton: contentButton[] = [{ label: 'Follow', handleEvent: () => hanleFollowUser() }];

    const listButtonFollowed: contentButton[] = [{ label: 'Following ✓', handleEvent: () => hanleUnFollowUser() }];

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
                        avatar={userProfile.infoUser[0].user.avatar}
                        username={userProfile.infoUser[0].user.username}
                        listButton={statusRelationship?.status ? listButtonFollowed : listButton}
                        followerCount={userProfile.infoUser[0].user.followers.length}
                        followingCount={userProfile.infoUser[0].user.following.length}
                        isFollowing={statusRelationship?.status}
                        isFetching={dataFollowUserProfile.followFetching || dataUnfollowUserProfile.unFollowFetching}
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
                {podcastInfo && <OtherUserProfilePost dataPodcasts={podcastInfo.dataPodcast} />}
            </Container>
        </ClientLayout>
    );
};

export default UserProfiles;
