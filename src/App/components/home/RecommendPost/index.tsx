import { Box, Typography } from '@mui/material';
import React from 'react';
import colors from '../../../../styles/colors';
import SlidePost from './SlidePost';

const RecommendPost = () => {
    return (
        <Box
            sx={{
                marginBottom: '20px',
                display: {
                    xs: 'none',
                    smallSidebar: 'block'
                }
            }}
        >
            <Typography
                sx={{
                    color: `${colors.normalText}`,
                    marginBottom: '20px',
                    cursor: 'pointer'
                }}
                variant="h6"
            >
                Recommend Podcast
            </Typography>
            <SlidePost />
        </Box>
    );
};

export default RecommendPost;
