import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import colors from '../../../styles/colors';

interface Props {
    open: boolean;
    handleClose: any;
}

export const AlertDialog: React.FC<Props> = ({ open, handleClose }) => {
    return (
        <div>
            <Dialog open={open} onClose={handleClose} maxWidth="xs">
                <DialogTitle id="alert-dialog-title">{'Update Profile!'}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">Update Profile Success</DialogContentText>
                </DialogContent>
                <DialogActions
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Button
                        onClick={handleClose}
                        sx={{
                            backgroundColor: `${colors.btnUpload}`,
                            color: `${colors.white}`,
                            fontWeight: 600,
                            marginBottom: '20px',
                            borderRadius: '10px',
                            textTransform: 'capitalize',
                            ':hover': {
                                backgroundColor: `${colors.btnUploadHover}`
                            }
                        }}
                    >
                        Done
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
