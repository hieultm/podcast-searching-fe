import React from 'react';
import { useNavigate } from 'react-router-dom';
import colors from '../styles/colors';
import { Box, Container, Divider, Typography } from '@mui/material';
import LockPersonIcon from '@mui/icons-material/LockPerson';

interface Props {
    children: React.ReactNode;
}

const ForgotPasswordLayout: React.FC<Props> = ({ children }) => {
    const navigate = useNavigate();
    return (
        <section style={{ backgroundColor: `${colors.backgroundLogin}`, paddingTop: '20px' }}>
            <Container
                sx={{
                    width: 'fit-content',
                    height: '100vh'
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
                            marginBottom: '12px',
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            borderRadius: '50%',
                            padding: '20px'
                        }}
                    >
                        <LockPersonIcon sx={{ width: '96px', height: '96px' }} />
                    </Box>
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: '600',
                            margin: '0 40px 16px'
                            // color: `${colors.secondaryText}`
                        }}
                    >
                        Trouble logging in?
                    </Typography>

                    {children}

                    <Box
                        sx={{
                            width: '80%',
                            marginTop: '12px',
                            marginBottom: '18px',
                            position: 'relative'
                        }}
                    >
                        <Divider />
                        <Box
                            sx={{
                                position: 'absolute',
                                zIndex: 10,

                                backgroundColor: `${colors.white}`,
                                padding: '0 6px',
                                right: '45%',
                                top: '-10px'
                            }}
                        >
                            <Typography
                                sx={{
                                    color: 'myCustomTheme.main',
                                    fontWeight: ' 500'
                                }}
                                variant="body2"
                            >
                                OR
                            </Typography>
                        </Box>
                    </Box>

                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: '400',
                            marginBottom: '12px',
                            cursor: 'pointer',
                            marginTop: '10px'
                        }}
                        onClick={() => navigate('/signup')}
                    >
                        Create new account
                    </Typography>
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
                        backgroundColor: `${colors.white}`,
                        marginBottom: '10px'
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
                        Have an account?
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'myCustomTheme.myBtn',
                                fontWeight: '600',
                                marginLeft: '2px',
                                cursor: 'pointer'
                            }}
                            component="span"
                            onClick={() => navigate('/login')}
                        >
                            Log in
                        </Typography>
                    </Typography>
                </Box>
            </Container>
        </section>
    );
};

export default ForgotPasswordLayout;
