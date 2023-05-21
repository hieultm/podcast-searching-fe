import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as React from 'react';

interface IProp {
    id: string;
    label: string;
    name: string;
    register: any;
    errors: any;
}

const PasswordInput: React.FC<IProp> = ({ id, label, name, register, errors }) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <>
            <FormControl
                sx={{
                    marginBottom: '8px'
                }}
                variant="outlined"
            >
                <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
                <OutlinedInput
                    id={id}
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label={label}
                    {...register(name)}
                    sx={{
                        '& .Mui-focused fieldset': {
                            borderColor: 'myCustomTheme.dark',
                            borderWidth: '1px'
                        },
                        '&:hover fieldset': {
                            borderColor: 'myCustomTheme.myBtn',
                            borderWidth: '1px'
                        }
                    }}
                />
            </FormControl>

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

export default PasswordInput;
