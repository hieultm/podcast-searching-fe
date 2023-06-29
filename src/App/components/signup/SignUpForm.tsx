import AuthInput from '../../shared/AuthInput';
import PasswordInput from '../../shared/PasswordInput';
import { Box, Button, TextField, Typography } from '@mui/material';

// form
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';
import colors from '../../../styles/colors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userState } from '../../redux/reducers/userReducers';
import { RootState } from '../../redux/store';

import { registerUser } from '../../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';
import SelectFieldSignup from '../../shared/SelectFieldSignup';

interface IFormInputs {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    secretQuestion: string;
    secretAnswer: string;
}

const schema = yup.object({
    username: yup.string().required('This field is required'),
    email: yup
        .string()
        .required('This field is required')
        .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'This is not valid email format'),
    password: yup
        .string()
        .required('This field is required')
        .matches(/^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/, 'Password should be 8 chars minimum and at least 1 number'),
    confirmPassword: yup
        .string()
        .required('Confirm Password is required')
        .oneOf([yup.ref('password')], 'Passwords must match'),
    secretQuestion: yup.string().required('This field is required'),
    secretAnswer: yup.string().required('This field is required')
});

const SignUpForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userLogin = useSelector<RootState, userState>((state) => state.userLogin);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    const onHandleSubmit: SubmitHandler<IFormInputs> = async (data: any) => {
        const { username, email, password, secretQuestion, secretAnswer } = data;

        await dispatch(registerUser(username, email, password, secretQuestion, secretAnswer));

        reset({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            secretQuestion: '',
            secretAnswer: ''
        });
    };

    useEffect(() => {
        if (userLogin.userInfo) {
            navigate('/home');
        }
    }, [userLogin.userInfo, navigate]);

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onHandleSubmit)}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '80%'
                }}
            >
                <AuthInput label="Email" type="text" id="email" name="email" errors={errors} register={register} />
                <AuthInput label="Username" type="text" id="username" name="username" errors={errors} register={register} />
                <PasswordInput label="Password" id="password" name="password" errors={errors} register={register} />
                <PasswordInput label="Confirm Password" id="confirmPassword" name="confirmPassword" errors={errors} register={register} />
                <SelectFieldSignup id="secretQuestion" name="secretQuestion" errors={errors} register={register} />

                <Box sx={{ marginBottom: '8px' }}>
                    <TextField
                        label="Secret Answer"
                        variant="outlined"
                        id="secretAnswer"
                        {...register('secretAnswer')}
                        sx={{
                            width: ' 100%'
                        }}
                    />
                    <Typography
                        sx={{
                            color: 'red',
                            marginBottom: '8px'
                        }}
                        variant="caption"
                        component="span"
                    >
                        {errors['secretAnswer']?.message}
                    </Typography>
                </Box>
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
                    Sign up
                </Button>
            </Box>
        </Box>
    );
};

export default SignUpForm;
