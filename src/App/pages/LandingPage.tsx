import { Box, Typography } from '@mui/material';
import { LogoWithoutBackground, Landing1 } from '../utils/dataImg';
import colors from '../../styles/colors';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();
    const handleMoveToLoginPage = () => {
        navigate('/login');
    };

    const handleMoveToSignUpPage = () => {
        navigate('/signup');
    };
    return (
        <Box
            sx={{
                height: '100vh',
                backgroundImage: `url(${Landing1})`,
                backgroundSize: 'cover'
            }}
        >
            <Box
                component="header"
                sx={{
                    height: '120px',
                    display: 'flex',
                    alignItems: 'center',
                    marginX: '30px',
                    justifyContent: 'space-between'
                }}
            >
                <Box
                    sx={{
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <img
                        src={LogoWithoutBackground}
                        alt="Logo"
                        style={{
                            height: '100px'
                        }}
                    />
                    <Typography
                        sx={{
                            color: `${colors.white}`
                        }}
                        variant="h5"
                    >
                        Podcast social network
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '4px'
                    }}
                >
                    <Box
                        sx={{
                            padding: '12px 22px',
                            borderRadius: '30px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            border: `1px solid ${colors.white}`
                        }}
                        onClick={() => handleMoveToLoginPage()}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 'bold',
                                color: `${colors.white}`
                            }}
                        >
                            Log in
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            padding: '12px 22px',
                            borderRadius: '30px',
                            backgroundColor: `${colors.white}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                        }}
                        onClick={() => handleMoveToSignUpPage()}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 'bold'
                            }}
                        >
                            Sign up
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default LandingPage;
