import { Box, ListItemText, MenuItem, MenuList } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import colors from '../../../styles/colors';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { logout } from '../../redux/actions/userActions';

import { useNavigate } from 'react-router-dom';

const ShowMoreSidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showMore, setShowMore] = useState(false);

    const onShowMore = () => {
        setShowMore(!showMore);
    };

    // const onHideMore = () => {
    //     setShowMore(false);
    // }

    // logout user
    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <>
            <MenuList
                sx={{
                    marginBottom: '20px',
                    position: 'relative'
                }}
            >
                <Box
                    sx={
                        showMore
                            ? {
                                  borderRadius: '4px',
                                  backgroundColor: `${colors.showMoreBgDark}`,
                                  position: 'absolute',
                                  zIndex: '99',
                                  width: '238px',
                                  top: '-80px',
                                  left: '10px',
                                  opacity: '1',
                                  transform: 'translateY(0)',
                                  transition: 'opacity 75ms linear, transform 38ms ease-out'
                              }
                            : {
                                  opacity: '0',
                                  transform: 'translateY(100%)'
                              }
                    }
                >
                    <MenuItem
                        sx={{
                            padding: '8px 16px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            '&:hover': {
                                backgroundColor: `${colors.sidebarBackgroundDark}`
                            }
                        }}
                    >
                        <ListItemText
                            sx={{
                                color: `${colors.darkText}`,
                                fontWeight: '400'
                            }}
                        >
                            Switch appearance
                        </ListItemText>
                        <DarkModeOutlinedIcon sx={{ color: `${colors.darkText}` }} />
                    </MenuItem>
                    <MenuItem
                        sx={{
                            padding: '8px 16px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            borderTopWidth: '6px',
                            borderTopColor: `${colors.showMoreBgDark}`,
                            borderTopStyle: 'solid',
                            '&:hover': {
                                backgroundColor: `${colors.sidebarBackgroundDark}`
                            }
                        }}
                        onClick={() => handleLogout()}
                    >
                        <ListItemText
                            sx={{
                                color: `${colors.darkText}`,
                                fontWeight: '400'
                            }}
                        >
                            Log out
                        </ListItemText>
                    </MenuItem>
                </Box>

                <MenuItem
                    sx={{
                        padding: '12px',
                        marginY: '8px',
                        '&:hover': {
                            '& .linkIcon': {
                                scale: '1.05'
                            },
                            borderRadius: '24px',
                            background: 'rgb(250,250,250)'
                        }
                    }}
                    onClick={() => onShowMore()}
                >
                    <MenuIcon
                        sx={{
                            fontSize: 30
                        }}
                        className="linkIcon"
                    />

                    <ListItemText
                        sx={{
                            paddingLeft: '16px',
                            display: {
                                xs: 'none',
                                smallSidebar: 'block'
                            }
                        }}
                    >
                        More
                    </ListItemText>
                </MenuItem>
            </MenuList>
        </>
    );
};

export default ShowMoreSidebar;
