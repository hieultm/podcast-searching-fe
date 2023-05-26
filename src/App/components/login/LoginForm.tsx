import { Box, Button, Divider, Typography, CircularProgress } from '@mui/material';
import colors from '../../../styles/colors';
import AuthInput from '../../shared/AuthInput';

import { GoogleLogin } from 'react-google-login';
import GoogleButton from 'react-google-button';

// form
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { login } from '../../redux/actions/userActions';

import { userState } from '../../redux/reducers/userReducers';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { useEffect } from 'react';

interface IFormInputs {
    email: string;
    password: string;
}

const schema = yup.object({
    email: yup
        .string()
        .required('This field is required')
        .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'This is not valid email format'),
    password: yup
        .string()
        .required('This field is required')
        .matches(/^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/, 'Password should be 8 chars minimum and at least 1 number')
});

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogin = useSelector<RootState, userState>((state) => state.userLogin);

    const { userInfo, isFetching, error } = userLogin;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    const onHandleSubmit: SubmitHandler<IFormInputs> = (data: any) => {
        const { email, password } = data;

        dispatch(login(email, password));

        reset({
            email: '',
            password: ''
        });
    };

    useEffect(() => {
        if (userInfo) {
            navigate('/home');
        }
    }, [userInfo, navigate]);

    // const handleLoginGG = async (googleData: any) => {
    //     console.log(googleData);
    //     // const { data } = await axios({
    //     //     method: 'POST',
    //     //     url: '/auth/google',
    //     //     data: { tokenId: googleData.tokenId },
    //     //     headers: {
    //     //         'Content-Type': 'application/json'
    //     //     }
    //     // });

    //     // localStorage.setItem('userInfo', JSON.stringify(data));
    //     // window.location.href = '/manage';
    // };

    // const handleFailureGG = (res: any) => {
    //     console.log(res);
    // };

    return (
        <form
            onSubmit={handleSubmit(onHandleSubmit)}
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            {isFetching ? (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '80%'
                        }}
                    >
                        <AuthInput label="Username, or Email" type="text" id="email" name="email" errors={errors} register={register} />
                        <AuthInput label="Password" type="password" id="password" name="password" errors={errors} register={register} />
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            width: '80%',
                            justifyContent: 'center'
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'myCustomTheme.myBtn',
                                width: '80%',
                                borderRadius: '10px',
                                textTransform: 'capitalize',
                                fontWeight: '600',
                                marginBottom: '8px',
                                marginTop: '10px',
                                color: `${colors.white}`,
                                '&:hover': {
                                    backgroundColor: 'myCustomTheme.myBtn'
                                }
                            }}
                            type="submit"
                        >
                            Log in
                        </Button>
                    </Box>
                </>
            )}

            {error && (
                <Typography
                    sx={{
                        color: 'red',
                        marginBottom: '8px'
                    }}
                    variant="caption"
                    component="span"
                >
                    Email or Password are incorrect! Please try again
                </Typography>
            )}
            {/* <Box
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
            <Box
                sx={{
                    marginTop: '6px',
                    marginBottom: '12px'
                }}
            >
                <GoogleLogin
                    clientId="435548077713-e3ucpctn2c3tes7rfg3vgi86l6lpv4sb.apps.googleusercontent.com"
                    onSuccess={handleLoginGG}
                    onFailure={handleFailureGG}
                    cookiePolicy={'single_host_origin'}
                    render={(renderProps) => <GoogleButton onClick={renderProps.onClick} />}
                />
            </Box> */}

            <Typography
                variant="body2"
                sx={{
                    fontWeight: '400',
                    marginBottom: '12px',
                    cursor: 'pointer',
                    marginTop: '30px'
                }}
                onClick={() => navigate('/ForgotPassword')}
            >
                Forgot password?
            </Typography>
        </form>
    );
};

export default LoginForm;
