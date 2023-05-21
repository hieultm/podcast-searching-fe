import { Box, CircularProgress, Typography } from '@mui/material';

import HeaderPost from './HeaderPost';

import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { podcastInfo, podcastState } from '../../../../redux/reducers/podcastReducers';
import BackgrounPost from './BackgrounPost';
import { useNavigate } from 'react-router-dom';

const MainPost = () => {
    const navigate = useNavigate();
    const dataPodcasts = useSelector<RootState, podcastState>((state) => state.getPodcastByUserFollowing);
    const { podcastInfo, isFetching } = dataPodcasts;

    const moveToDetailPodcast = (idPodcast: string) => {
        navigate(`/podcast/${idPodcast}`);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: {
                    xs: 'center',
                    sm: 'center',
                    laptopMini: 'start',
                    smallSidebar: 'start'
                },
                paddingRight: {
                    xs: 0
                },
                gap: '20px'
            }}
        >
            {isFetching ? (
                <>
                    <CircularProgress color="secondary" />
                </>
            ) : (
                <>
                    {!podcastInfo ? (
                        <Box>
                            <Typography>There are no posts yet</Typography>
                        </Box>
                    ) : podcastInfo ? (
                        podcastInfo.map(({ user, _id, uploadDate, caption, background }: podcastInfo) => (
                            <Box
                                component="article"
                                sx={{
                                    paddingBottom: '20px',
                                    marginBottom: '12px',
                                    // borderBottomWidth: '1px',
                                    // borderBottomStyle: 'solid',
                                    // borderBottomColor: 'myCustomTheme.main',
                                    flexBasis: {
                                        xs: '80%',
                                        sm: '58%',
                                        md: '50%',
                                        laptopMini: '48%',
                                        lg: '40%',
                                        smallSidebar: '32%'
                                    },
                                    cursor: 'pointer'
                                }}
                                key={_id}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: '100%',
                                        '&:hover': {
                                            '& .backgroundPodcast': {
                                                scale: '1.01'
                                            }
                                        }
                                    }}
                                    onClick={() => moveToDetailPodcast(_id)}
                                >
                                    <BackgrounPost background={background} />
                                    <HeaderPost username={user.username} uploadDate={uploadDate} avatar={user.avatar} caption={caption} />
                                </Box>
                            </Box>
                        ))
                    ) : (
                        <Box>
                            <Typography>There are no posts yet</Typography>
                        </Box>
                    )}
                </>
            )}
        </Box>
    );
};

export default MainPost;
