import { Box, Typography, CircularProgress } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import colors from '../../../../../styles/colors';
import { FC, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalLikeCountPost, userLikePost, userStatusLike, userUnlikePost } from '../../../../redux/actions/postActions';
import { RootState } from '../../../../redux/store';
import { totalLikeCountState, typeStatusLikePost } from '../../../../redux/reducers/postReducers';

interface Props {
    postId: any;
    likeId: string;
}

const InteractionPost: FC<Props> = ({ postId, likeId }) => {
    const dispatch = useDispatch();
    const dataStatusLike = useSelector<RootState, typeStatusLikePost>((state) => state.userStatusLike);
    const { statusLike } = dataStatusLike;

    const [statusLikePost, setStatusLikePost] = useState(statusLike ? statusLike?.isLike : false);

    const totalLikeCountData = useSelector<RootState, totalLikeCountState>((state) => state.getTotalLikeCountPost);
    const { totalLikeCount, likeCountFetching } = totalLikeCountData;

    console.log(statusLike?.isLike, statusLikePost);

    const handleLikePost = useCallback(async () => {
        await dispatch(userLikePost(likeId, postId));
        setStatusLikePost(true);
        dispatch(getTotalLikeCountPost(postId));
    }, [dispatch, likeId, postId]);

    const handleUnlikePost = useCallback(async () => {
        await dispatch(userUnlikePost(likeId, postId));
        setStatusLikePost(false);
        dispatch(getTotalLikeCountPost(postId));
    }, [dispatch, likeId, postId]);

    useEffect(() => {
        dispatch(userStatusLike(likeId, postId));
        dispatch(getTotalLikeCountPost(postId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {/* cmt, like ... */}

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%'
                }}
            >
                {/* Icon */}

                <Box
                    component="section"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flex: 1,
                        justifyContent: 'flex-end'
                    }}
                >
                    {statusLikePost ? (
                        <Box
                            sx={{
                                padding: '8px',
                                marginLeft: '-8px',
                                cursor: 'pointer',
                                ':hover': {
                                    opacity: 0.5
                                }
                            }}
                            onClick={() => handleUnlikePost()}
                        >
                            <FavoriteOutlinedIcon color="error" />
                        </Box>
                    ) : (
                        <Box
                            sx={{
                                padding: '8px',
                                marginLeft: '-8px',
                                cursor: 'pointer',
                                ':hover': {
                                    opacity: 0.5
                                }
                            }}
                            onClick={() => handleLikePost()}
                        >
                            <FavoriteBorderIcon />
                        </Box>
                    )}
                    <Box>
                        {!totalLikeCount && (
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    fontWeight: 600,
                                    color: `${colors.normalText}`
                                }}
                            >
                                {likeCountFetching ? <CircularProgress size={20} /> : 0}
                            </Typography>
                        )}
                        {totalLikeCount && (
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    fontWeight: 600,
                                    color: `${colors.normalText}`
                                }}
                            >
                                {likeCountFetching ? <CircularProgress size={20} /> : totalLikeCount.likes.length}
                            </Typography>
                        )}
                    </Box>
                </Box>

                {/* like count */}

                {/* comment count */}

                <Box
                    component="section"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    {/* list comment */}
                </Box>
            </Box>
        </>
    );
};

export default InteractionPost;
