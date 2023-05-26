import React from 'react';
import { Box, TextField, MenuItem, Typography } from '@mui/material';
import { listSecretQuestions } from '../utils/dataSecretQuestions';

interface IProp {
    id: string;
    name: string;
    register: any;
    errors: any;
}

const SelectFieldSignup: React.FC<IProp> = ({ id, name, register, errors }) => {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { width: '100%' },
                marginBottom: '12px'
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField id={id} select defaultValue={listSecretQuestions[0].value} label="Secret Question" {...register(name)}>
                    {listSecretQuestions.map((option) => (
                        <MenuItem key={option.label} value={option.value}>
                            {option.value}
                        </MenuItem>
                    ))}
                </TextField>
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
            </div>
        </Box>
    );
};

export default SelectFieldSignup;
