import { Box, Container } from '@mui/material';
import MainPost from './MainPost';
import SearchPost from './SearchPost';

const MainHome = () => {
    return (
        <Container>
            <Box
                sx={{
                    paddingTop: '14px'
                }}
                component="section"
            >
                <SearchPost />
                <MainPost />
            </Box>
        </Container>
    );
};

export default MainHome;
