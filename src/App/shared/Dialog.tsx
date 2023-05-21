import React from 'react';
import { Box, CircularProgress, Typography, Button } from '@mui/material';
import colors from '../../styles/colors';

interface Props {
    isFetching: boolean | undefined;
    error: boolean | undefined;
    isShow: boolean;
    onHideDialog: any;
}

const Dialog: React.FC<Props> = ({ isFetching, error, isShow, onHideDialog }) => {
    return (
        <>
            <Box
                sx={
                    isShow
                        ? {
                              position: 'fixed',
                              inset: 0,
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center',
                              zIndex: 12,
                              visibility: 'visible',
                              opacity: 1
                          }
                        : {
                              position: 'fixed',
                              inset: 0,
                              display: 'flex',
                              flexDirection: 'column',

                              justifyContent: 'center',
                              alignItems: 'center',
                              zIndex: 12,
                              visibility: 'hidden',
                              opacity: 0
                          }
                }
            >
                <Box
                    sx={{
                        backgroundColor: `${colors.white}`,
                        width: {
                            xs: '80%',
                            sm: '70%',
                            md: '60%',
                            laptopMini: '50%',
                            xl: '40%'
                        },
                        borderRadius: '12px',
                        zIndex: 13
                    }}
                >
                    {isFetching ? (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '70%',
                                paddingY: '20px'
                            }}
                        >
                            <CircularProgress color="primary" />
                        </Box>
                    ) : (
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%',
                                height: '100%'
                            }}
                        >
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    marginTop: '12px',
                                    marginBottom: '16px'
                                }}
                            >
                                {error ? (
                                    <>
                                        <Typography
                                            sx={{
                                                color: 'primary.error',
                                                marginBottom: '8px'
                                            }}
                                            variant="h5"
                                        >
                                            Error
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: 'primary.error',
                                                marginTop: '6px'
                                            }}
                                            variant="subtitle1"
                                        >
                                            Error uploading file!
                                        </Typography>
                                    </>
                                ) : (
                                    <>
                                        <Typography
                                            sx={{
                                                color: 'primary.success',
                                                marginBottom: '8px'
                                            }}
                                            variant="h5"
                                        >
                                            Success
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: 'primary.success',
                                                marginTop: '6px'
                                            }}
                                            variant="subtitle1"
                                        >
                                            File uploaded successfully!
                                        </Typography>
                                    </>
                                )}
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItem: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '20px',
                                    marginTop: '12px'
                                }}
                            >
                                <Button
                                    sx={{
                                        borderRadius: '4px',
                                        borderColor: `${colors.secondaryText}`,
                                        borderWidth: '1px',
                                        borderStyle: 'solid'
                                    }}
                                    onClick={onHideDialog}
                                >
                                    Done
                                </Button>
                            </Box>
                        </Box>
                    )}
                </Box>
                {/* Overlay Background */}
                <Box
                    sx={
                        isShow
                            ? {
                                  backgroundColor: `${colors.overlayBg}`,
                                  position: 'absolute',
                                  top: 0,
                                  right: 0,
                                  left: 0,
                                  bottom: 0,
                                  zIndex: 11,
                                  cursor: 'pointer',
                                  visibility: 'visible',
                                  opacity: 1
                              }
                            : {
                                  backgroundColor: `${colors.overlayBg}`,
                                  position: 'absolute',
                                  top: 0,
                                  right: 0,
                                  left: 0,
                                  bottom: 0,
                                  zIndex: 11,
                                  cursor: 'pointer',
                                  visibility: 'hidden',
                                  opacity: 0
                              }
                    }
                    onClick={() => onHideDialog()}
                ></Box>
            </Box>
        </>
    );
};

export default Dialog;
