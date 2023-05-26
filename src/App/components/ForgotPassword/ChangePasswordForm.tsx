import React from 'react';
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import colors from '../../../styles/colors';
import AuthInput from '../../shared/AuthInput';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { confirmationUserState } from '../../redux/reducers/authReducers';
import { changePasswordUser } from '../../redux/actions/authAction';

interface IFormInputs {
    newPassword: string;
    confirmNewPassword: string;
}

const schema = yup.object({
    newPassword: yup
        .string()
        .required('This field is required')
        .matches(/^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/, 'Password should be 8 chars minimum and at least 1 number'),
    confirmNewPassword: yup
        .string()
        .required('Confirm New Password is required')
        .oneOf([yup.ref('newPassword')], 'New password must match')
});

const ChangePasswordForm = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    const verifyData = useSelector<RootState, confirmationUserState>((state) => state.getConfirmationUser);
    const { confirmationInfo } = verifyData;

    const onHandleSubmit: SubmitHandler<IFormInputs> = (data: any) => {
        const { newPassword } = data;

        dispatch(changePasswordUser(confirmationInfo.idUser, newPassword));

        reset({
            newPassword: '',
            confirmNewPassword: ''
        });
    };

    return (
        <>
            {!confirmationInfo && (
                <Box>
                    <CircularProgress color="secondary" />
                </Box>
            )}
            {confirmationInfo && (
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
                        Enter your new password and confirm new password!
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
                            <AuthInput
                                label="New Password"
                                type="password"
                                id="newPassword"
                                name="newPassword"
                                errors={errors}
                                register={register}
                            />
                            <AuthInput
                                label="Confirm New Password"
                                type="password"
                                id="confirmNewPassword"
                                name="confirmNewPassword"
                                errors={errors}
                                register={register}
                            />
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
                                Change new password
                            </Button>
                        </Box>
                    </Box>
                </>
            )}
        </>
    );
};

export default ChangePasswordForm;
