import { styled } from '@mui/material/styles';
import { Box, Typography, Button, BoxProps } from '@mui/material';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            width: '90vw'
        }
    }));
    return (
        <Box className="content-center">
            <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <BoxWrapper>
                    <Typography variant="h1">404</Typography>
                    <Typography variant="h5" sx={{ mb: 1, fontSize: '1.5rem !important' }}>
                        Page Not Found ⚠️
                    </Typography>
                    <Typography variant="body2">We couldn&prime;t find the page you are looking for.</Typography>
                </BoxWrapper>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '20px'
                    }}
                >
                    <Link to="/">
                        <Button component="a" variant="contained" sx={{ px: 5.5, color: 'white' }}>
                            Back to Home
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default PageNotFound;
