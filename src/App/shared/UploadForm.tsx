import { Box, Typography, Button, TextField, Avatar } from '@mui/material';

import Dialog from './Dialog';
import CloseIcon from '@mui/icons-material/Close';
import ImageIcon from '@mui/icons-material/Image';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadFileUser } from '../redux/actions/userActions';

import colors from '../../styles/colors';

import { AudioFileImg } from '../utils/dataImg';
import { RootState } from '../redux/store';
import { uploadFileState, userState } from '../redux/reducers/userReducers';
import { createPostStatus } from '../redux/reducers/eventListenerReducers';
import { onCreatePost } from '../redux/actions/eventListenerAction';
import DiscardPost from './DiscardPost';

const UploadForm = () => {
    const dispatch = useDispatch();

    const [nameFile, setNameFile] = useState('No file chosen!');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [selectImage, setSelectedImage] = useState<File | null>(null);
    const [textCaption, setTextCaption] = useState('');
    const [showDialogUpload, setShowDialogUpload] = useState(false);
    const [showErrCaption, setShowErrCaption] = useState(false);

    // show Discard Post dialog
    const [showDiscardDialog, setShowDiscardDialog] = useState(false);

    const userLogin = useSelector<RootState, userState>((state) => state.userLogin);
    const { userInfo } = userLogin;

    const statusCreatePost = useSelector<RootState, createPostStatus>((state) => state.onCreatePost);
    const { statusCreate } = statusCreatePost;

    const statusUploadFile = useSelector<RootState, uploadFileState>((state) => state.uploadFile);
    const { isFetching, error } = statusUploadFile;

    // set default
    const setValueDefault = () => {
        setSelectedFile(null);
        setSelectedImage(null);
        setTextCaption('');
        setNameFile('No file chosen!');
    };

    //show dialog

    const hideCreatePost = () => {
        dispatch(onCreatePost(false));
    };

    const hideDialogUpload = () => {
        setShowDialogUpload(false);
    };

    const onCloseCreatePost = () => {
        if (!selectedFile) {
            if (!textCaption) {
                dispatch(onCreatePost(false));
                setShowErrCaption(false);
            }
        } else {
            setShowDiscardDialog(true);
        }
    };

    const onDiscardPost: Function = () => {
        setShowDiscardDialog(false);
        setShowErrCaption(false);
    };

    const handleChooseFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        let file = e.target.files[0];

        setNameFile(file.name);
        setSelectedFile(file);
    };

    const handleChooseImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        let imageBg = e.target.files[0];

        setSelectedImage(imageBg);
    };

    const uploadFile = () => {
        setShowDialogUpload(true);
        dispatch(uploadFileUser(selectedFile, selectImage, textCaption, userInfo?._id));
        setValueDefault();
    };

    //discard post

    const handleDiscardPost: Function = () => {
        setValueDefault();
        setShowDiscardDialog(false);
        dispatch(onCreatePost(false));
    };

    const handleSubmitForm = (e: any) => {
        e.preventDefault();
        if (!textCaption) {
            setShowErrCaption(true);
            return;
        }
        uploadFile();
    };

    return (
        <>
            <Box
                sx={
                    statusCreate
                        ? {
                              position: 'fixed',
                              inset: 0,
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center',
                              zIndex: 8,
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
                              zIndex: 8,
                              visibility: 'hidden',
                              opacity: 0
                          }
                }
            >
                {/* Icon Exit */}

                <Box
                    sx={{
                        zIndex: 10,
                        cursor: 'pointer',
                        position: 'absolute',
                        right: 10,
                        top: 10,
                        '&:hover': {
                            '& .linkIcon': {
                                scale: '1.2'
                            }
                        }
                    }}
                    onClick={() => onCloseCreatePost()}
                >
                    <CloseIcon
                        sx={{
                            color: `${colors.white}`,
                            width: '32px',
                            height: '32px'
                        }}
                        className="linkIcon"
                    />
                </Box>

                {/* Dialog Create Post */}

                <Box
                    sx={{
                        backgroundColor: `${colors.white}`,
                        height: '70%',
                        width: {
                            xs: '80%',
                            sm: '70%',
                            md: '60%',
                            laptopMini: '50%',
                            xl: '40%'
                        },
                        borderTopLeftRadius: '12px',
                        borderBottomLeftRadius: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        zIndex: 10
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            borderBottomWidth: '1px',
                            borderBottomStyle: 'solid',
                            borderBottomColor: 'myCustomTheme.main'
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            component="h1"
                            sx={{
                                textAlign: 'center',
                                width: '100%',
                                marginTop: '4px',
                                marginBottom: '4px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                color: `${colors.normalText}`
                            }}
                        >
                            Create new post
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flex: 1,
                            width: '100%'
                        }}
                        component="form"
                        encType="multipart/form-data"
                        onSubmit={handleSubmitForm}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%'
                            }}
                        >
                            {/* Select File */}
                            {selectedFile ? (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        marginBottom: '20px',
                                        width: '100%',
                                        height: '100px'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            margin: '10px 10px 4px 10px',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Avatar src={userInfo?.avatar} />

                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                fontWeight: 600,
                                                cursor: 'pointer',
                                                color: `${colors.normalText}`,
                                                marginLeft: '10px'
                                            }}
                                            component="span"
                                        >
                                            {userInfo?.username}
                                        </Typography>
                                    </Box>

                                    <TextField
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            '& legend': { display: 'none' },
                                            '& fieldset': { top: 0 },
                                            fieldset: {
                                                border: 'none'
                                            },
                                            input: {
                                                paddingTop: 0,
                                                paddingBottom: 0,
                                                height: '100%'
                                            }
                                        }}
                                        placeholder="Write a caption ..."
                                        multiline
                                        rows={3}
                                        onChange={(e) => setTextCaption(e.target.value)}
                                        name="text"
                                    />
                                </Box>
                            ) : (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        marginTop: '40px'
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={AudioFileImg}
                                        sx={{
                                            width: '100px',
                                            height: '100px',
                                            marginBottom: '20px'
                                        }}
                                    />

                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: `${colors.normalText}`,
                                            marginBottom: '8px'
                                        }}
                                    >
                                        Drag podcast heres
                                    </Typography>
                                </Box>
                            )}
                            <Typography
                                sx={
                                    showErrCaption
                                        ? {
                                              display: 'block'
                                          }
                                        : { display: 'none' }
                                }
                                color="error"
                            >
                                Please fill in the caption
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    color: `${colors.normalText}`,
                                    marginBottom: '12px',
                                    paddingLeft: '20px',
                                    paddingRight: '20px',
                                    marginTop: '20px'
                                }}
                            >
                                {nameFile}
                            </Typography>
                            <Box>
                                <Button
                                    variant="contained"
                                    component="label"
                                    sx={{
                                        backgroundColor: `${colors.btnUpload}`,
                                        color: `${colors.white}`,
                                        fontWeight: 600,
                                        ':hover': {
                                            backgroundColor: `${colors.btnUploadHover}`
                                        }
                                    }}
                                >
                                    Select from computer
                                    <input accept="audio/*" type="file" name="file" hidden onChange={(e) => handleChooseFile(e)} />
                                </Button>
                            </Box>
                        </Box>

                        {selectedFile && (
                            <>
                                {/* Upload Image */}
                                {selectImage ? (
                                    <Box
                                        sx={{
                                            border: `2px solid ${colors.borderForm}`,
                                            width: '200px',
                                            height: '100px',
                                            borderRadius: '12px',
                                            position: 'relative'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                right: '0',
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => setSelectedImage(null)}
                                        >
                                            <CloseIcon sx={{ color: `${colors.white}` }} />
                                        </Box>
                                        <img src={URL.createObjectURL(selectImage)} alt="bg" style={{ width: '100%', height: '100%' }} />
                                    </Box>
                                ) : (
                                    <Box
                                        sx={{
                                            border: `2px solid ${colors.borderForm}`,
                                            width: '200px',
                                            height: '100px',
                                            borderRadius: '12px'
                                        }}
                                    ></Box>
                                )}

                                <Box>
                                    <Button
                                        variant="contained"
                                        component="label"
                                        sx={{
                                            paddingX: 0
                                        }}
                                    >
                                        <ImageIcon />
                                        <input
                                            accept="image/png, image/jpeg"
                                            type="file"
                                            name="background"
                                            hidden
                                            onChange={(e) => handleChooseImage(e)}
                                        />
                                    </Button>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end'
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        sx={{
                                            backgroundColor: `${colors.btnUpload}`,
                                            color: `${colors.white}`,
                                            fontWeight: 600,
                                            marginBottom: '20px',
                                            ':hover': {
                                                backgroundColor: `${colors.btnUploadHover}`
                                            }
                                        }}
                                    >
                                        Upload file
                                    </Button>
                                </Box>
                            </>
                        )}
                    </Box>
                </Box>
                {/* Overlay Background */}
                <Box
                    sx={
                        statusCreate
                            ? {
                                  backgroundColor: `${colors.overlayBg}`,
                                  position: 'absolute',
                                  top: 0,
                                  right: 0,
                                  left: 0,
                                  bottom: 0,
                                  zIndex: 9,
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
                                  zIndex: 9,
                                  cursor: 'pointer',
                                  visibility: 'hidden',
                                  opacity: 0
                              }
                    }
                    onClick={() => hideCreatePost()}
                ></Box>
            </Box>

            {/* Status Upload file */}
            <Dialog isFetching={isFetching} error={error} isShow={showDialogUpload} onHideDialog={hideDialogUpload} />

            {/* Dialog Discard */}

            <DiscardPost status={showDiscardDialog} discardPost={handleDiscardPost} cancelDiscardPost={onDiscardPost} />
        </>
    );
};

export default UploadForm;
