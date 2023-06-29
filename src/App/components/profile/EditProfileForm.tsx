import { FC, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

import PrimaryTextField from '../../shared/PrimaryTextField';
import colors from '../../../styles/colors';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, updateProfile } from '../../redux/actions/userActions';
import { RootState } from '../../redux/store';
import { userState } from '../../redux/reducers/userReducers';
import { toast } from 'react-toastify';
import { TOAST_CONFIG } from '../../utils/toastConfig';

interface Props {
    username: string | undefined;
    email: string | undefined;
    userId: string | undefined;
}

const EditProfileForm: FC<Props> = ({ username, email, userId }) => {
    const dispatch = useDispatch();
    const [avatar, setAvatar] = useState<File | null>(null);
    const [avtName, setAvtName] = useState('No file chosen!');
    const [usernameText, setUsernameText] = useState('');

    const { error } = useSelector<RootState, userState>((state) => state.updateProfile);

    const handleChooseImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        let image = e.target.files[0];
        setAvatar(image);
        setAvtName(image.name);
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsernameText(e.target.value);
    };

    const handleUpdateProfile = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        await dispatch(updateProfile(usernameText, avatar as File));
        await dispatch(getProfile(userId));
        if (error) {
            toast.error('Username already exist', TOAST_CONFIG);
            return;
        }
        toast.success('Update Profile Success', TOAST_CONFIG);
    };

    return (
        <>
            <Box
                component="form"
                sx={{
                    flex: 1,
                    marginTop: '32px',
                    display: 'flex',
                    flexDirection: 'column'
                }}
                encType="multipart/form-data"
                onSubmit={handleUpdateProfile}
            >
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        minHeight: '30px',
                        marginBottom: '20px'
                    }}
                >
                    <Box
                        sx={{
                            paddingLeft: '32px',
                            paddingRight: '32px',
                            textAlign: 'right',
                            display: 'flex',
                            alignItems: 'center',
                            flexBasis: '120px'
                        }}
                        component="span"
                    >
                        <Typography
                            sx={{
                                width: '100%',
                                fontWeight: '600',
                                color: `${colors.normalText}`
                            }}
                        >
                            Email
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            paddingRight: '30px',
                            flex: '1'
                        }}
                    >
                        <PrimaryTextField
                            placeholder={email}
                            isDisable={true}
                            color={colors.secondaryText}
                            backgroundColor={colors.btnEditProfile}
                            handleTextChange={() => {}}
                        />
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        minHeight: '30px',
                        marginBottom: '20px'
                    }}
                >
                    <Box
                        sx={{
                            paddingLeft: '32px',
                            paddingRight: '32px',
                            textAlign: 'right',
                            display: 'flex',
                            alignItems: 'center',
                            flexBasis: '120px'
                        }}
                        component="span"
                    >
                        <Typography
                            sx={{
                                width: '100%',
                                fontWeight: '600',
                                color: `${colors.normalText}`
                            }}
                        >
                            Username
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            paddingRight: '30px',
                            flex: '1'
                        }}
                    >
                        <PrimaryTextField
                            placeholder={username}
                            isDisable={false}
                            color="#111"
                            backgroundColor={colors.white}
                            handleTextChange={handleTextChange}
                        />
                    </Box>
                </Box>

                {/* Upload avatar */}

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '30px',
                        marginBottom: '20px'
                        // paddingLeft: '60px'
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: '600',
                            color: `${colors.normalText}`,
                            marginBottom: '12px',
                            marginLeft: '60px'
                        }}
                    >
                        Avatar Image
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex'
                        }}
                    >
                        <Box
                            sx={{
                                paddingLeft: '32px',
                                paddingRight: '32px',
                                display: 'flex',
                                alignItems: 'center',
                                flexBasis: '120px',
                                justifyContent: 'flex-end'
                            }}
                        >
                            <Button
                                variant="contained"
                                component="label"
                                sx={{
                                    textTransform: 'capitalize',
                                    backgroundColor: `${colors.btnUpload}`,
                                    color: `${colors.white}`,
                                    fontWeight: 600,
                                    ':hover': {
                                        backgroundColor: `${colors.btnUploadHover}`
                                    }
                                }}
                            >
                                Upload
                                <input hidden accept="image/*" type="file" name="avatar" onChange={(e) => handleChooseImg(e)} />
                            </Button>
                        </Box>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                color: `${colors.normalText}`,
                                marginBottom: '6px',
                                paddingLeft: '20px',
                                paddingRight: '20px',
                                marginTop: '6px',
                                width: '60%'
                            }}
                        >
                            {avtName}
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '20px'
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
                            borderRadius: '10px',
                            ':hover': {
                                backgroundColor: `${colors.btnUploadHover}`
                            }
                        }}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default EditProfileForm;
