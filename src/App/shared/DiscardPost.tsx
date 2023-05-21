import { Box, Typography, Button } from '@mui/material';
import { FC } from 'react';
import colors from '../../styles/colors';

interface props {
    status: boolean;
    discardPost: Function;
    cancelDiscardPost: Function;
}

const DiscardPost: FC<props> = ({ status, discardPost, cancelDiscardPost }) => {
    return (
        <>
            <Box
                sx={
                    status
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
                    sx={
                        status
                            ? {
                                  backgroundColor: `${colors.white}`,
                                  borderRadius: '12px',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  zIndex: 12,
                                  visibility: 'visible',
                                  opacity: 1
                              }
                            : {
                                  backgroundColor: `${colors.white}`,
                                  borderRadius: '12px',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  zIndex: 12,
                                  visibility: 'hidden',
                                  opacity: 0
                              }
                    }
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            margin: '32px 32px 16px 32px',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography sx={{ margin: '-4px 0 -6px', color: `${colors.normalText}` }} variant="h6" component="h3">
                            Discard post?
                        </Typography>
                        <Typography sx={{ paddingTop: '16px', color: `${colors.secondaryText}` }} variant="subtitle2" component="div">
                            If you leave, your edits won't be saved.
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            marginTop: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%'
                        }}
                    >
                        <Button
                            variant="text"
                            sx={{
                                color: `${colors.discardText}`,
                                textTransform: 'capitalize',
                                fontWeight: 700,
                                borderTopWidth: '1px',
                                borderTopStyle: 'solid',
                                borderTopColor: 'myCustomTheme.main'
                            }}
                            onClick={() => discardPost()}
                        >
                            Discard
                        </Button>

                        <Button
                            variant="text"
                            sx={{
                                color: `${colors.normalText}`,
                                textTransform: 'capitalize',
                                borderTopWidth: '1px',
                                borderTopStyle: 'solid',
                                borderTopColor: 'myCustomTheme.main'
                            }}
                            onClick={() => cancelDiscardPost()}
                        >
                            Cancel
                        </Button>
                    </Box>
                </Box>

                <Box
                    sx={
                        status
                            ? {
                                  backgroundColor: `${colors.overlayBg2}`,
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
                                  backgroundColor: `${colors.overlayBg2}`,
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
                    onClick={() => cancelDiscardPost()}
                ></Box>
            </Box>
        </>
    );
};

export default DiscardPost;
