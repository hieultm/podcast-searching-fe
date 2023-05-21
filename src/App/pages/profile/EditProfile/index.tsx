import { Container, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ClientLayout from '../../../../Layouts/ClientLayout';
import EditProfileForm from '../../../components/profile/EditProfileForm';
import ProfileSideBar from '../../../components/profile/ProfileSideBar';
import { RootState } from '../../../redux/store';
import { userProfileState } from '../../../redux/reducers/userReducers';

const EditProfile = () => {
    const path = useLocation();
    const getProfileUser = useSelector<RootState, userProfileState>((state) => state.getProfile);

    const { userProfile } = getProfileUser;

    const params = path.pathname.replace('/accounts/', '').trim();
    const listname = params.replace('/', '').trim();

    return (
        <ClientLayout>
            <Container component="main" maxWidth="mdField">
                <Box
                    sx={{
                        display: 'flex',
                        borderWidth: '1px',
                        borderColor: 'myCustomTheme.main',
                        borderStyle: 'solid',
                        marginTop: '30px',
                        borderRadius: '4px'
                    }}
                >
                    <ProfileSideBar menuName={listname} />
                    <EditProfileForm username={userProfile?.username} email={userProfile?.email} userId={userProfile?._id} />
                </Box>
            </Container>
        </ClientLayout>
    );
};

export default EditProfile;
