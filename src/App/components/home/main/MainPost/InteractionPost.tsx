import { Box, Typography, CircularProgress } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import colors from '../../../../../styles/colors';
import { FC, useCallback, useEffect } from 'react';
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

    const totalLikeCountData = useSelector<RootState, totalLikeCountState>((state) => state.getTotalLikeCountPost);
    const { totalLikeCount, likeCountFetching } = totalLikeCountData;

    const handleLikePost = useCallback(async () => {
        await dispatch(userLikePost(likeId, postId));
        dispatch(getTotalLikeCountPost(postId));
        dispatch(userStatusLike(likeId, postId));
    }, [dispatch, likeId, postId]);

    const handleUnlikePost = useCallback(async () => {
        await dispatch(userUnlikePost(likeId, postId));
        dispatch(getTotalLikeCountPost(postId));
        dispatch(userStatusLike(likeId, postId));
    }, [dispatch, likeId, postId]);

    useEffect(() => {
        dispatch(userStatusLike(likeId, postId));
        dispatch(getTotalLikeCountPost(postId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%'
                }}
            >
                <Box
                    component="section"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flex: 1,
                        justifyContent: 'flex-end'
                    }}
                >
                    {statusLike?.isLike ? (
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
            </Box>
        </>
    );
};

export default InteractionPost;
