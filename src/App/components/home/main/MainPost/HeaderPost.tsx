import { Box, Avatar, Typography } from '@mui/material';
import colors from '../../../../../styles/colors';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { FC } from 'react';
import moment from 'moment';

interface Props {
    username: string | undefined;
    avatar: string | undefined;
    uploadDate: any;
    caption: string;
    likeCount: number;
}

const HeaderPost: FC<Props> = ({ username, avatar, uploadDate, caption, likeCount }) => {
    const currentTime = moment();
    const relativeTimeString = moment(uploadDate).from(currentTime);

    return (
        <>
            {/* header */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flex: '1'
                }}
            >
                <Box
                    component="header"
                    sx={{
                        display: 'flex',
                        margin: '8px 4px 8px 5px',
                        flex: '1'
                    }}
                >
                    <Avatar sx={{ width: 32, height: 32 }} src={avatar} />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginLeft: '10px',
                            justifyContent: 'center',
                            flexGrow: 1,
                            flexShrink: 1,
                            minHeight: '40px'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginLeft: '4px'
                            }}
                        >
                            <Typography
                                component="span"
                                sx={{
                                    fontWeight: '500 ',
                                    wordWrap: 'break-word',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    width: '100%',
                                    maxHeight: '44px',
                                    marginBottom: '10px'
                                }}
                            >
                                {caption}
                            </Typography>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex'
                                    }}
                                >
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            fontWeight: 600,
                                            cursor: 'pointer',
                                            color: `${colors.secondaryText}`
                                            // ':hover': {
                                            //     color: `${colors.normalText}`
                                            // }
                                        }}
                                    >
                                        {username}
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex' }}>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            color: `${colors.secondaryText}`
                                        }}
                                    >
                                        {likeCount > 1 ? `${likeCount} likes` : `${likeCount} like`}
                                    </Typography>
                                    <Typography
                                        component="span"
                                        sx={{
                                            marginLeft: '4px',
                                            marginRight: '4px',
                                            color: `${colors.secondaryText}`
                                        }}
                                    >
                                        •
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            color: `${colors.secondaryText}`
                                        }}
                                    >
                                        {relativeTimeString}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Typography
                            variant="caption"
                            component="span"
                            sx={{
                                color: `${colors.normalText}`
                            }}
                        ></Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default HeaderPost;
