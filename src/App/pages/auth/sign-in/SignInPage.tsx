import { Box, Container, Typography } from '@mui/material';
import { Logo } from '../../../utils/dataImg';

import LoginSlide from '../../../components/login/LoginSlide';
import LoginForm from '../../../components/login/LoginForm';
import colors from '../../../../styles/colors';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
    const navigate = useNavigate();
    return (
        <section style={{ backgroundColor: `${colors.backgroundLogin}` }}>
            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '30px',
                        width: '100%',
                        height: '100vh'
                    }}
                >
                    <Box
                        sx={{
                            width: '600px',
                            height: '360px',
                            flex: '1',
                            display: {
                                xs: 'none',
                                lg: 'block'
                            }
                        }}
                    >
                        <LoginSlide />
                    </Box>

                    <Box
                        sx={{
                            flex: {
                                lg: '1'
                            },
                            width: {
                                xs: '80%',
                                sm: '60%',
                                md: '40%'
                            }
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                borderColor: `${colors.borderForm}`,
                                borderRadius: '2px',
                                backgroundColor: `${colors.white}`,
                                marginBottom: '10px'
                            }}
                        >
                            <Box
                                sx={{
                                    marginTop: '36px',
                                    marginBottom: '12px'
                                }}
                            >
                                <img src={Logo} alt="logo" style={{ height: '100px', width: '100px' }} />
                            </Box>

                            <LoginForm />
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                borderColor: `${colors.borderForm}`,
                                borderRadius: '2px',
                                backgroundColor: `${colors.white}`
                            }}
                        >
                            <Typography
                                sx={{
                                    marginBottom: '10px',
                                    padding: ' 10px 4px'
                                }}
                                variant="body1"
                                component="span"
                            >
                                Don't have an account?
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'myCustomTheme.myBtn',
                                        fontWeight: '600',
                                        marginLeft: '2px',
                                        cursor: 'pointer'
                                    }}
                                    component="span"
                                    onClick={() => {
                                        navigate('/signup');
                                    }}
                                >
                                    Sign up
                                </Typography>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </section>
    );
};

export default SignInPage;
