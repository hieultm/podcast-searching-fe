import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContentPodcast } from '../../redux/actions/podcastActions';
import { useLocation, useNavigate } from 'react-router-dom';
import ClientLayout from '../../../Layouts/ClientLayout';
import { Box, Container, CircularProgress, Typography } from '@mui/material';
import SearchPost from '../../components/home/main/SearchPost';
import { RootState } from '../../redux/store';
import { ContentPodcastState, podcastInfo } from '../../redux/reducers/podcastReducers';
import BackgrounPost from '../../components/home/main/MainPost/BackgrounPost';
import HeaderPost from '../../components/home/main/MainPost/HeaderPost';

const ResultPodcast = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const path = useLocation();
    const params = path.pathname.replace('/result/', '').trim();
    const contentPodcastDatas = useSelector<RootState, ContentPodcastState>((state) => state.getContentPodcast);
    const { podcastDatas, isFetching } = contentPodcastDatas;

    const moveToDetailPodcast = (idPodcast: string) => {
        navigate(`/podcast/${idPodcast}`);
    };

    useEffect(() => {
        dispatch(getContentPodcast(params));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        dispatch(getContentPodcast(params));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params]);

    return (
        <>
            <ClientLayout>
                <Container>
                    <Box
                        sx={{
                            paddingTop: '14px'
                        }}
                        component="section"
                    >
                        <SearchPost />
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        {isFetching ? (
                            <>
                                <CircularProgress color="secondary" />
                            </>
                        ) : (
                            <>
                                {!podcastDatas?.podcastData ? (
                                    <Box>
                                        <Typography>The podcast does not exist.</Typography>
                                    </Box>
                                ) : podcastDatas?.podcastData.length > 0 ? (
                                    podcastDatas?.podcastData.map(({ user, _id, uploadDate, caption, background }: podcastInfo) => (
                                        <Box
                                            component="article"
                                            sx={{
                                                paddingBottom: '20px',
                                                marginBottom: '12px',
                                                // marginLeft: '100px',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                justifyContent: {
                                                    xs: 'center'
                                                }
                                            }}
                                            key={_id}
                                        >
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    width: {
                                                        xs: '90%',
                                                        sm: '60%',
                                                        mdField: '50%',
                                                        laptopMini: '36%',
                                                        lg: '30%'
                                                    },
                                                    '&:hover': {
                                                        '& .backgroundPodcast': {
                                                            scale: '1.01'
                                                        }
                                                    }
                                                }}
                                                onClick={() => moveToDetailPodcast(_id)}
                                            >
                                                <BackgrounPost background={background} />
                                                <HeaderPost
                                                    username={user.username}
                                                    uploadDate={uploadDate}
                                                    avatar={user.avatar}
                                                    caption={caption}
                                                />
                                            </Box>
                                        </Box>
                                    ))
                                ) : (
                                    <Box>
                                        <Typography>The podcast does not exist.</Typography>
                                    </Box>
                                )}
                            </>
                        )}
                    </Box>
                </Container>
            </ClientLayout>
        </>
    );
};

export default ResultPodcast;
