import { Avatar, Box, MenuItem, MenuList } from '@mui/material';
import React, { useEffect } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useLocalstorage } from '../../../hooks/useLocalstorage';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../redux/actions/userActions';
import { onCreatePost } from '../../redux/actions/eventListenerAction';
import { RootState } from '../../redux/store';
import { createPostStatus } from '../../redux/reducers/eventListenerReducers';

const dataLink: any = [
    {
        icon: (
            <HomeIcon
                sx={{
                    fontSize: 26
                }}
                className="linkIcon"
            />
        ),
        name: 'Home'
    },
    {
        icon: (
            <AddCircleOutlineIcon
                sx={{
                    fontSize: 26
                }}
                className="linkIcon"
            />
        ),
        name: 'Create'
    }
];

const SideBarMobile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const statusCreatePost = useSelector<RootState, createPostStatus>((state) => state.onCreatePost);
    const { statusCreate } = statusCreatePost;

    const { data } = useLocalstorage();
    const moveToProfile = () => {
        navigate(`/profile/${data?.username?.replace(/\s+/g, '').toLocaleLowerCase()}`);
    };

    const handleSideBar = (input: string) => {
        switch (input) {
            case 'Home':
                navigate('/home');
                break;
            case 'Create':
                dispatch(onCreatePost(!statusCreate));
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        dispatch(getProfile(data?._id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data?.username, data?.avatar]);

    return (
        <>
            <Box
                sx={{
                    padding: '8px 12px',
                    width: '100%',
                    position: 'fixed',
                    borderRightWidth: '1px',
                    borderRightColor: 'rgba(0,0,0,0.2)',
                    borderRightStyle: 'solid',
                    display: {
                        xs: 'flex',
                        md: 'none'
                    },
                    bottom: '0',
                    backgroundColor: 'white'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flex: 1
                    }}
                >
                    <MenuList
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'space-around'
                        }}
                    >
                        {dataLink.map((item: any) => (
                            <MenuItem
                                sx={{
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
                            </MenuItem>
                        ))}
                        <MenuItem
                            sx={{
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
                                    width: '26px',
                                    height: '26px'
                                }}
                                src={data?.avatar}
                            />
                        </MenuItem>
                    </MenuList>
                </Box>
            </Box>
        </>
    );
};

export default SideBarMobile;
