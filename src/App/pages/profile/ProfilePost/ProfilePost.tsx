import { Box, ImageList, ImageListItem, Typography, Button } from '@mui/material';
import { FC, useState } from 'react';
import { dataPodcast } from '../../../redux/reducers/podcastReducers';
import colors from '../../../../styles/colors';
import { useNavigate } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

interface Props {
    dataPodcasts: dataPodcast[];
    deletePost: Function;
}

const ProfilePost: FC<Props> = ({ dataPodcasts, deletePost }) => {
    const navigate = useNavigate();
    const [showDialog, setShowDialog] = useState('');

    const moveToDetailPodcast = (idPodcast: string) => {
        navigate(`/podcast/${idPodcast}`);
    };

    const showDialogRemovePost = (idPost: string) => {
        setShowDialog(idPost);
    };

    const onHideDialogRemovePost = () => {
        setShowDialog('');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '20px'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '-20px',
                    paddingTop: '16px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1px',
                    borderTopColor: 'black',
                    cursor: 'pointer'
                }}
            >
                <Typography
                    sx={{
                        color: `${colors.normalText}`,
                        fontWeight: 'bold'
                    }}
                    variant="body2"
                >
                    POSTS
                </Typography>
            </Box>
            <ImageList
                sx={{
                    width: {
                        xs: '100%',
                        lg: '80%'
                    }
                }}
                cols={3}
            >
                {dataPodcasts.map(({ background, _id, user }) => (
                    <ImageListItem
                        key={_id}
                        sx={{
                            cursor: 'pointer',
                            position: 'relative'
                        }}
                    >
                        <img
                            src={`${background}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${background}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={background}
                            loading="lazy"
                            onClick={() => moveToDetailPodcast(_id)}
                        />

                        <Box
                            sx={{
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                cursor: 'pointer',
                                color: 'white',
                                zIndex: 1,
                                ':hover': {
                                    opacity: 0.5,
                                    '& .editIcon': {
                                        scale: '1.2'
                                    }
                                }
                            }}
                            onClick={() => showDialogRemovePost(_id)}
                        >
                            <MoreHorizIcon className="editIcon" />
                        </Box>

                        <Box
                            sx={
                                showDialog === _id
                                    ? {
                                          marginTop: '16px',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          width: '100%',
                                          borderWidth: '1px',
                                          borderStyle: 'solid',
                                          borderColor: 'myCustomTheme.main',
                                          borderRadius: '8px',
                                          position: 'absolute',
                                          top: '10px',
                                          zIndex: '2',
                                          background: 'white'
                                      }
                                    : {
                                          display: 'none'
                                      }
                            }
                        >
                            <Button
                                variant="text"
                                sx={{
                                    color: `${colors.discardText}`,
                                    textTransform: 'capitalize',
                                    fontWeight: 700,
                                    borderTopWidth: '1px',
                                    borderTopStyle: 'solid',
                                    borderTopColor: 'myCustomTheme.main'
                                }}
                                onClick={() => deletePost(_id, user._id)}
                            >
                                Delete
                            </Button>

                            <Button
                                variant="text"
                                sx={{
                                    color: `${colors.normalText}`,
                                    textTransform: 'capitalize',
                                    borderTopWidth: '1px',
                                    borderTopStyle: 'solid',
                                    borderTopColor: 'myCustomTheme.main'
                                }}
                                onClick={() => onHideDialogRemovePost()}
                            >
                                Cancel
                            </Button>
                        </Box>
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};

export default ProfilePost;
