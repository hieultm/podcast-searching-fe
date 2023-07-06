import { Box, MenuList, MenuItem, ListItemText, Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import LogoutIcon from '@mui/icons-material/Logout';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';

import { Logo } from '../../utils/dataImg';
import { useNavigate } from 'react-router-dom';

import { onCreatePost } from '../../redux/actions/eventListenerAction';
import { createPostStatus } from '../../redux/reducers/eventListenerReducers';
import { useLocalstorage } from '../../../hooks/useLocalstorage';
import { getProfile, logout } from '../../redux/actions/userActions';
import { useEffect, useState } from 'react';
import Search from '../../shared/Search';

const dataLink: any = [
    {
        icon: (
            <HomeIcon
                sx={{
                    fontSize: 30
                }}
                className="linkIcon"
            />
        ),
        name: 'Home'
    },
    {
        icon: (
            <SearchIcon
                sx={{
                    fontSize: 30
                }}
                className="linkIcon"
            />
        ),
        name: 'Search'
    },

    {
        icon: (
            <AddCircleOutlineIcon
                sx={{
                    fontSize: 30
                }}
                className="linkIcon"
            />
        ),
        name: 'Create'
    }
];

const SideBarPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const statusCreatePost = useSelector<RootState, createPostStatus>((state) => state.onCreatePost);

    const [showSearch, setShowSearch] = useState(false);

    const { statusCreate } = statusCreatePost;
    const { data } = useLocalstorage();

    const moveToProfile = () => {
        navigate(`/profile/${data?.username?.replace(/\s+/g, '').toLocaleLowerCase()}`);
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    useEffect(() => {
        dispatch(getProfile(data?._id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data?.username, data?.avatar]);

    const handleSideBar = (input: string) => {
        switch (input) {
            case 'Home':
                navigate('/home');
                break;
            case 'Search':
                setShowSearch(!showSearch);
                break;
            case 'Create':
                dispatch(onCreatePost(!statusCreate));
                break;
            default:
                break;
        }
    };

    return (
        <>
            <Box
                sx={
                    showSearch
                        ? {
                              padding: '8px 12px',
                              width: '48px',
                              height: '100vh',
                              position: 'fixed',
                              borderRightWidth: '1px',
                              borderRightColor: 'rgba(0,0,0,0.2)',
                              borderRightStyle: 'solid',
                              backgroundColor: 'white',
                              display: {
                                  xs: 'none',
                                  md: 'flex'
                              },
                              flexDirection: 'column',
                              visibility: 'visible',
                              transition: ' 0.3s',
                              transitionTimingFunction: 'ease-in-out'
                          }
                        : {
                              padding: '8px 12px',
                              width: {
                                  xs: '48px',
                                  smallSidebar: '220px'
                              },
                              height: '100vh',
                              position: 'fixed',
                              backgroundColor: 'white',
                              borderRightWidth: '1px',
                              borderRightColor: 'rgba(0,0,0,0.2)',
                              borderRightStyle: 'solid',
                              display: {
                                  xs: 'none',
                                  md: 'flex'
                              },
                              flexDirection: 'column',
                              visibility: 'visible',
                              transition: ' 0.3s',
                              transitionTimingFunction: 'ease-in-out'
                          }
                }
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer'
                    }}
                    onClick={() => navigate('/home')}
                >
                    <img
                        src={Logo}
                        alt="Logo"
                        style={{
                            width: '60px',
                            height: '60px'
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        flex: 1
                    }}
                >
                    <MenuList>
                        {dataLink.map((item: any) => (
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
                                key={item.name}
                                onClick={() => handleSideBar(item.name)}
                            >
                                {item.icon}
                                <ListItemText
                                    sx={
                                        showSearch
                                            ? {
                                                  paddingLeft: '16px',
                                                  display: 'none'
                                              }
                                            : {
                                                  paddingLeft: '16px',
                                                  display: {
                                                      xs: 'none',
                                                      smallSidebar: 'block'
                                                  }
                                              }
                                    }
                                >
                                    {item.name}
                                </ListItemText>
                            </MenuItem>
                        ))}
                        <MenuItem
                            sx={{
                                padding: '12px',
                                marginY: '8px',
                                '&:hover': {
                                    '& .avt': {
                                        scale: '1.05'
                                    },
                                    borderRadius: '24px',
                                    background: 'rgb(250,250,250)'
                                }
                            }}
                            onClick={() => moveToProfile()}
                        >
                            <Avatar
                                sx={{
                                    width: '30px',
                                    height: '30px'
                                }}
                                src={data?.avatar}
                            />
                            <ListItemText
                                sx={
                                    showSearch
                                        ? {
                                              paddingLeft: '16px',
                                              display: 'none'
                                          }
                                        : {
                                              paddingLeft: '16px',
                                              display: {
                                                  xs: 'none',
                                                  smallSidebar: 'block'
                                              }
                                          }
                                }
                            >
                                {data?.username}
                            </ListItemText>
                        </MenuItem>
                    </MenuList>

                    <MenuList onClick={handleLogout}>
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
                        >
                            <LogoutIcon />
                            <ListItemText
                                sx={
                                    showSearch
                                        ? {
                                              paddingLeft: '16px',
                                              display: 'none'
                                          }
                                        : {
                                              paddingLeft: '16px',
                                              display: {
                                                  xs: 'none',
                                                  smallSidebar: 'block'
                                              }
                                          }
                                }
                            >
                                Log out
                            </ListItemText>
                        </MenuItem>
                    </MenuList>
                </Box>
            </Box>

            <Search show={showSearch} />

            <Box
                sx={
                    showSearch
                        ? {
                              position: 'fixed',
                              zIndex: 10,
                              visibility: 'visible',
                              opacity: 1,
                              cursor: 'pointer',
                              inset: 0
                          }
                        : {
                              position: 'absolute',
                              inset: 0,
                              zIndex: 100,
                              visibility: 'hidden',
                              opacity: 0
                          }
                }
                onClick={() => setShowSearch(false)}
            ></Box>
        </>
    );
};

export default SideBarPage;
