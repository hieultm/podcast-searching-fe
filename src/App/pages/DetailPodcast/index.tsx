import React, { useCallback, useEffect } from 'react';
import ClientLayout from '../../../Layouts/ClientLayout';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Container, CircularProgress, Typography, Avatar, Collapse, CardContent } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { getDetailPodcast } from '../../redux/actions/podcastActions';
import { useDispatch, useSelector } from 'react-redux';
import { DetailPodcastState } from '../../redux/reducers/podcastReducers';
import { RootState } from '../../redux/store';
import InteractionPost from '../../components/home/main/MainPost/InteractionPost';
import CommentPost from '../../components/home/main/MainPost/CommentPost';
import ListComment from '../../components/home/main/MainPost/ListComment';
import { useLocalstorage } from '../../../hooks/useLocalstorage';
import { getUserCommentPost } from '../../redux/actions/postActions';
import { userCommentState } from '../../redux/reducers/postReducers';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
    })
}));

const DetailPodcast = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const path = useLocation();
    const params = path.pathname.replace('/podcast/', '').trim();
    const detailPodcast = useSelector<RootState, DetailPodcastState>((state) => state.getDetailPodcast);
    const { dataPodcast, isFetching } = detailPodcast;
    const { data } = useLocalstorage();
    const userCommentDatas = useSelector<RootState, userCommentState>((state) => state.getUserCommentPost);
    const { userCommentData } = userCommentDatas;

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const goToProfileUser = (idUser: string) => {
        if (idUser === data._id) {
            navigate(`/profile/${idUser}`);
        } else {
            navigate(`/user/${idUser}`);
        }
    };

    useEffect(() => {
        dispatch(getDetailPodcast(params));
        dispatch(getUserCommentPost(params));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onloadComment = useCallback(async () => {
        await dispatch(getUserCommentPost(params));
    }, [dispatch, params]);

    return (
        <>
            <ClientLayout>
                <Container>
                    <Box
                        sx={{
                            marginTop: '40px',
                            marginBottom: '40px'
                        }}
                    >
                        {isFetching ? (
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: '100vh'
                                }}
                            >
                                <CircularProgress />
                            </Box>
                        ) : (
                            <>
                                {!dataPodcast && (
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '100%',
                                            height: '100vh'
                                        }}
                                    >
                                        <CircularProgress />
                                    </Box>
                                )}
                                {dataPodcast && (
                                    <>
                                        <Box
                                            sx={{
                                                width: {
                                                    xs: '100%',
                                                    sm: '68%',
                                                    md: '68%',
                                                    laptopMini: '60%',
                                                    lg: '68%'
                                                },
                                                height: {
                                                    xs: '200px',
                                                    sm: '200px',
                                                    md: '300px',
                                                    laptopMini: '400px',
                                                    lg: '480px'
                                                },
                                                position: 'relative',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <img
                                                src={dataPodcast.background}
                                                alt={dataPodcast.background}
                                                style={{
                                                    height: '100%',
                                                    width: '100%',
                                                    borderRadius: '26px'
                                                }}
                                            />

                                            <audio
                                                id="myAudio"
                                                controls
                                                style={{
                                                    width: '100%',
                                                    position: 'absolute',
                                                    bottom: 0,
                                                    left: 0
                                                }}
                                            >
                                                <source src={dataPodcast.audio} type="audio/mpeg" />
                                            </audio>
                                        </Box>
                                        <Box
                                            sx={{
                                                marginTop: '20px'
                                            }}
                                        >
                                            <Typography
                                                component="h4"
                                                sx={{
                                                    fontWeight: '600',
                                                    wordWrap: 'break-word',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    width: '60%',
                                                    maxHeight: '50px',
                                                    marginBottom: '10px'
                                                }}
                                            >
                                                {dataPodcast.caption}
                                            </Typography>
                                            <Box
                                                sx={{
                                                    width: '66%'
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            cursor: 'pointer'
                                                        }}
                                                        onClick={() => goToProfileUser(dataPodcast.user._id)}
                                                    >
                                                        <Avatar sx={{ width: 40, height: 40 }} src={dataPodcast.user.avatar} />
                                                    </Box>
                                                    <Box
                                                        sx={{
                                                            marginLeft: '10px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            cursor: 'pointer',
                                                            width: '50%'
                                                        }}
                                                        onClick={() => goToProfileUser(dataPodcast.user._id)}
                                                    >
                                                        <Typography
                                                            sx={{
                                                                fontWeight: '600'
                                                            }}
                                                            variant="body2"
                                                        >
                                                            {dataPodcast.user.username}
                                                        </Typography>
                                                    </Box>

                                                    <InteractionPost postId={dataPodcast._id} likeId={data._id} />
                                                </Box>
                                            </Box>
                                        </Box>

                                        {/* Show more transcript */}
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                width: '20%',
                                                marginTop: '10px'
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    paddingLeft: '10px'
                                                }}
                                            >
                                                Show transcript
                                            </Typography>
                                            <ExpandMore
                                                expand={expanded}
                                                onClick={handleExpandClick}
                                                aria-expanded={expanded}
                                                aria-label="show more"
                                            >
                                                <ExpandMoreIcon />
                                            </ExpandMore>
                                        </Box>

                                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                                            <CardContent>
                                                <Typography paragraph>{dataPodcast.content}</Typography>
                                            </CardContent>
                                        </Collapse>
                                        {/* Comment  */}
                                        <Box
                                            sx={{
                                                marginBottom: '20px'
                                            }}
                                        >
                                            <CommentPost podcastId={dataPodcast._id} userId={data._id} loadComment={onloadComment} />
                                        </Box>
                                        {/* List comment */}

                                        {!userCommentData ? (
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    width: '100%',
                                                    height: '100vh'
                                                }}
                                            >
                                                <CircularProgress />
                                            </Box>
                                        ) : (
                                            <ListComment listUserComment={userCommentData?.userComments} />
                                        )}
                                    </>
                                )}
                            </>
                        )}
                    </Box>
                </Container>
            </ClientLayout>
        </>
    );
};

export default DetailPodcast;
