import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

// form
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthInput from '../../shared/AuthInput';
import SelectFieldSignup from '../../shared/SelectFieldSignup';

import * as yup from 'yup';
import colors from '../../../styles/colors';
import { useDispatch, useSelector } from 'react-redux';
import { getConfirmationUser } from '../../redux/actions/authAction';
import { RootState } from '../../redux/store';
import { confirmationUserState } from '../../redux/reducers/authReducers';
import { useNavigate } from 'react-router-dom';

interface IFormInputs {
    email: string;
    secretQuestion: string;
    secretAnswer: string;
}

const schema = yup.object({
    email: yup
        .string()
        .required('This field is required')
        .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'This is not valid email format'),
    secretQuestion: yup.string().required('This field is required'),
    secretAnswer: yup.string().required('This field is required')
});

const ConfirmInformationForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    const verifyData = useSelector<RootState, confirmationUserState>((state) => state.getConfirmationUser);

    const { error } = verifyData;

    const onHandleSubmit: SubmitHandler<IFormInputs> = (data: any) => {
        const { email, secretQuestion, secretAnswer } = data;

        dispatch(getConfirmationUser(email, secretQuestion, secretAnswer));

        reset({
            email: '',
            secretQuestion: '',
            secretAnswer: ''
        });

        if (!error) {
            navigate('/ChangePassword');
        }
    };

    return (
        <>
            <Typography
                variant="body2"
                sx={{
                    fontWeight: '600',
                    margin: '0 40px 16px',
                    color: `${colors.secondaryText}`,
                    maxWidth: '300px',
                    textAlign: 'center'
                }}
            >
                Enter your email, secret question and secret answer!
            </Typography>
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
                        alignItems: 'center',
                        flexDirection: 'column'
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
                            marginBottom: '20px',
                            marginTop: '10px',
                            color: `${colors.white}`,
                            '&:hover': {
                                backgroundColor: 'myCustomTheme.myBtn'
                            }
                        }}
                        type="submit"
                    >
                        Confirm Information
                    </Button>

                    {error && (
                        <Typography
                            sx={{
                                color: 'red',
                                marginBottom: '8px'
                            }}
                            variant="caption"
                            component="span"
                        >
                            The information you entered is incorrect!
                        </Typography>
                    )}
                </Box>
            </Box>
        </>
    );
};

export default ConfirmInformationForm;
