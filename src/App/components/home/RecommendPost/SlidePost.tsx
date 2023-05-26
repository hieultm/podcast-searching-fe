import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@mui/material';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper';

import { useNavigate } from 'react-router-dom';
import { RecommendPodcatState, dataRecommendPodcast } from '../../../redux/reducers/podcastReducers';
import { RootState } from '../../../redux/store';
import BackgrounPost from '../main/MainPost/BackgrounPost';
import HeaderPost from '../main/MainPost/HeaderPost';
import { useSelector } from 'react-redux';

const SlidePost = () => {
    const navigate = useNavigate();
    const dataPodcasts = useSelector<RootState, RecommendPodcatState>((state) => state.getRecommendPodcast);
    const { podcastDatas } = dataPodcasts;

    const moveToDetailPodcast = (idPodcast: string) => {
        navigate(`/podcast/${idPodcast}`);
    };

    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true
                }}
                modules={[FreeMode]}
                className="mySwiper"
            >
                <>
                    {podcastDatas?.podcastData &&
                        podcastDatas.podcastData.map((podcastData: dataRecommendPodcast) => (
                            <SwiperSlide key={podcastData._id}>
                                <Box
                                    component="article"
                                    sx={{
                                        paddingBottom: '20px',
                                        marginBottom: '12px',
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
                                        onClick={() => moveToDetailPodcast(podcastData._id)}
                                    >
                                        <BackgrounPost background={podcastData.background} />
                                        <HeaderPost
                                            username={podcastData.user.username}
                                            uploadDate={podcastData.uploadDate}
                                            avatar={podcastData.user.avatar}
                                            caption={podcastData.caption}
                                            likeCount={podcastData.likes}
                                        />
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        ))}
                </>
            </Swiper>
        </>
    );
};

export default SlidePost;
