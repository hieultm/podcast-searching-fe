import { Box, Avatar, Typography } from '@mui/material';
import { useLocalstorage } from '../../hooks/useLocalstorage';
import colors from '../../styles/colors';

const CardUser = () => {
    const { data } = useLocalstorage();

    return (
        <Box
            sx={{
                margin: '8px 5px',
                alignItems: 'center',
                justifyContent: 'center',
                display: {
                    xs: 'none',
                    laptopMini: 'flex'
                }
            }}
        >
            <Box>
                <Avatar sx={{ width: 56, height: 56 }} src={data?.avatar} />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '12px'
                }}
            >
                <Typography
                    variant="subtitle2"
                    sx={{
                        fontWeight: 600,
                        cursor: 'pointer',
                        color: `${colors.normalText}`
                    }}
                >
                    {data?.username}
                </Typography>
                <Typography
                    variant="subtitle2"
                    sx={{
                        color: `${colors.secondaryText}`
                    }}
                >
                    {data?.email}
                </Typography>
            </Box>
        </Box>
    );
};

export default CardUser;
