import { Box, Container, Typography } from '@mui/material';
import colors from '../../../../styles/colors';
import { Logo } from '../../../utils/dataImg';

import SignUpForm from '../../../components/signup/SignUpForm';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { userState } from '../../../redux/reducers/userReducers';
import Notification from '../../../shared/Notification';

const SignUpPage = () => {
    const navigate = useNavigate();
    const { userInfo, error } = useSelector<RootState, userState>((state) => state.userRegister);

    return (
        <section style={{ backgroundColor: `${colors.backgroundLogin}`, paddingTop: '20px' }}>
            <Container
                sx={{
                    width: 'fit-content'
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
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: '600',
                            margin: '0 40px 16px',
                            color: `${colors.secondaryText}`
                        }}
                    >
                        Sign up to listen to Podcast from everyone.
                    </Typography>

                    <SignUpForm />
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
                            onClick={() => {
                                navigate('/login');
                            }}
                        >
                            Log in
                        </Typography>
                    </Typography>
                </Box>
            </Container>
            {error && <Notification message="Account registration failed" type="error" />}
            {userInfo && <Notification message="Successful account registration" type="success" />}
        </section>
    );
};

export default SignUpPage;
