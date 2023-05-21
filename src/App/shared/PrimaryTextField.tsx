import { FC } from 'react';
import { TextField } from '@mui/material';

interface Props {
    placeholder: string | undefined;
    isDisable: boolean;
    color: string;
    backgroundColor: string;
    handleTextChange: any;
}

const PrimaryTextField: FC<Props> = ({ placeholder, isDisable, color, backgroundColor, handleTextChange }) => {
    return (
        <>
            <TextField
                sx={{
                    width: '100%',
                    height: '100%',
                    color: `${color}`,
                    backgroundColor: { backgroundColor },
                    borderWidth: '1px',
                    borderColor: 'myCustomTheme.main',
                    borderStyle: 'solid',
                    borderRadius: '4px',
                    '& legend': { display: 'none' },
                    fieldset: {
                        border: 'none',
                        height: '100%'
                    },
                    input: {
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        height: '100%',
                        color: `${color}`
                    },
                    '.MuiFormControl-root': {
                        height: '100%'
                    },
                    '.MuiButtonBase-root:disabled': {
                        cursor: 'not-allowed',
                        pointerEvents: 'auto'
                    }
                }}
                placeholder={placeholder}
                disabled={isDisable}
                onChange={handleTextChange}
            />
        </>
    );
};

export default PrimaryTextField;
