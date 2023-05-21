import { TextField, styled, Typography } from '@mui/material';
import { FC } from 'react';

interface IProp {
    id: string;
    label: string;
    name: string;
    register: any;
    errors: any;
    type: string;
}

const InputTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        borderColor: theme.palette.myCustomTheme?.main,
        borderWidth: '1px',
        marginBottom: '12px',

        fieldset: {
            borderColor: theme.palette.myCustomTheme?.main,
            borderWidth: '1px'
        },
        '&:hover fieldset': {
            borderColor: theme.palette.myCustomTheme?.dark,
            borderWidth: '1px'
        },
        '&.Mui-focused fieldset': {
            color: theme.palette.myCustomTheme?.contrastText
        },
        '& input': {
            padding: '12px 14px'
        }
    },
    '& .MuiInputLabel-root': {
        color: theme.palette.myCustomTheme?.contrastText
    }
}));

const AuthInput: FC<IProp> = ({ id, label, type, name, register, errors }) => {
    return (
        <>
            <InputTextField id={id} label={label} type={type} name={name} {...register(name)} />
            <Typography
                sx={{
                    color: 'red',
                    marginBottom: '8px'
                }}
                variant="caption"
                component="span"
            >
                {errors[name]?.message}
            </Typography>
        </>
    );
};

export default AuthInput;
