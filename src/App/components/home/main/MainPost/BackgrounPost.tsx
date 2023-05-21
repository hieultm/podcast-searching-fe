import React, { FC } from 'react';
import { Box } from '@mui/material';

interface Props {
    background: string;
}

const BackgrounPost: FC<Props> = ({ background }) => {
    return (
        <Box
            sx={{
                width: '100%'
            }}
            className="backgroundPodcast"
        >
            <img src={background} alt={background} style={{ width: '100%', height: '200px', borderRadius: '16px' }} />
        </Box>
    );
};

export default BackgrounPost;
