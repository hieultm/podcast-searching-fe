import { Box, Typography, Avatar } from '@mui/material';
import React, { FC } from 'react';
import colors from '../../../../../styles/colors';
import moment from 'moment';
import { UserComment } from '../../../../redux/reducers/postReducers';

interface Props {
    listUserComment: UserComment[];
}

const ListComment: FC<Props> = ({ listUserComment }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            {listUserComment.map(({ user, text, date }) => (
                <Box key={text} sx={{ display: 'flex', marginBottom: '24px', gap: '16px' }}>
                    <Box>
                        <Avatar src={user.avatar} />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Box
                            sx={{
                                marginBottom: '6px',
                                display: 'flex',
                                gap: '6px'
                            }}
                        >
                            <Typography
                                component="span"
                                variant="subtitle2"
                                sx={{
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    color: `${colors.normalText}`,
                                    ':hover': {
                                        opacity: 0.5
                                    }
                                }}
                            >
                                {user.username}
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    color: `${colors.secondaryText}`
                                }}
                            >
                                {moment(date).startOf('hour').fromNow()}
                            </Typography>
                        </Box>
                        <Typography
                            component="span"
                            variant="body2"
                            sx={{
                                color: `${colors.normalText}`
                            }}
                        >
                            {text}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default ListComment;
