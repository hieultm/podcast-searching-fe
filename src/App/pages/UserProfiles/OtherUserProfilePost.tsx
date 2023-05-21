import { Box, ImageList, ImageListItem, Typography } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import colors from '../../../styles/colors';
import { dataPodcast } from '../../redux/reducers/podcastReducers';

interface Props {
    dataPodcasts: dataPodcast[];
}

const OtherUserProfilePost: FC<Props> = ({ dataPodcasts }) => {
    const navigate = useNavigate();

    const moveToDetailPodcast = (idPodcast: string) => {
        navigate(`/podcast/${idPodcast}`);
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
                {dataPodcasts.map(({ background, _id }) => (
                    <ImageListItem
                        key={_id}
                        sx={{
                            cursor: 'pointer',
                            position: 'relative'
                        }}
                        onClick={() => moveToDetailPodcast(_id)}
                    >
                        <img
                            src={`${background}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${background}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={background}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};

export default OtherUserProfilePost;
