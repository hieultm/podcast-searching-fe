import Box from '@mui/material/Box';
import { FC } from 'react';
import SideBarPage from '../App/components/home/SideBarPage';
import UploadForm from '../App/shared/UploadForm';
import SideBarMobile from '../App/components/home/SideBarMobile';

interface Props {
    children: React.ReactNode;
}

const ClientLayout: FC<Props> = ({ children }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                height: '100%',
                flexDirection: 'row',
                position: 'relative'
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: {
                        xs: '72px',
                        smallSidebar: '244px'
                    },
                    height: '100vh',
                    zIndex: 8,
                    display: {
                        xs: 'none',
                        md: 'block'
                    }
                }}
            >
                <SideBarPage />
            </Box>
            <Box
                sx={{
                    flex: '1',
                    display: 'flex'
                }}
                component="section"
            >
                {children}
            </Box>
            <UploadForm />
            <SideBarMobile />
        </Box>
    );
};

export default ClientLayout;
