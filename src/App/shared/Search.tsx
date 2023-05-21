import { Avatar, Box, FormControl, Input, InputAdornment, Typography } from '@mui/material';
import colors from '../../styles/colors';
import SearchIcon from '@mui/icons-material/Search';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchUser } from '../redux/actions/userActions';
import { RootState } from '../redux/store';
import { listUserByFilter } from '../redux/reducers/userReducers';
import { useNavigate } from 'react-router-dom';

interface Props {
    show: boolean;
}

const Search: FC<Props> = ({ show }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const listUserByFilter = useSelector<RootState, listUserByFilter>((state) => state.searchUser);

    const { userList } = listUserByFilter;

    const handleSetSearchText = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        let keyword = e.target.value;
        dispatch(searchUser(keyword));
    };

    const handleSelectUser = (userId: string, username: string) => {
        navigate(`/user/${userId}`);
    };

    return (
        <Box
            sx={
                show
                    ? {
                          left: '73px',
                          position: 'fixed',
                          height: '100vh',
                          transform: 'translateX(0%)',
                          opacity: 1,
                          visibility: 'visible',
                          zIndex: 11,
                          transition: ' 0.3s',
                          transitionTimingFunction: 'ease-in-out',
                          background: `${colors.backgroundLogin}`
                      }
                    : {
                          transform: 'translateX(-50%)',
                          opacity: 0,
                          visibility: 'hidden',
                          transitionTimingFunction: 'ease-out',
                          transition: ' 0.1s'
                      }
            }
        >
            <Box
                sx={{
                    paddingTop: '8px',
                    width: '397px',
                    boxShadow: `4px 0 24px ${colors.boxshadowForm}`,
                    height: '100%',
                    borderRightWidth: '1px',
                    borderRightStyle: 'solid',
                    borderRightColor: 'myCustomTheme.main',
                    borderTopRightRadius: '16px'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Typography
                            variant="h5"
                            component="h2"
                            sx={{
                                padding: '12px 24px 36px 14px',
                                color: `${colors.normalText}`,
                                fontWeight: 'bold'
                            }}
                        >
                            Search
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            height: '100%'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%'
                            }}
                        >
                            <FormControl
                                sx={{
                                    marginBottom: '24px',
                                    backgroundColor: `${colors.btnEditProfile}`,
                                    borderRadius: '8px',
                                    marginLeft: '16px',
                                    marginRight: '16px',
                                    width: '90%'
                                }}
                                variant="standard"
                            >
                                <Input
                                    placeholder="Search"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    }
                                    disableUnderline={true}
                                    sx={{
                                        paddingTop: '4px',
                                        paddingBottom: '4px',
                                        paddingLeft: '8px'
                                    }}
                                    onChange={(e) => handleSetSearchText(e)}
                                />
                            </FormControl>

                            {/* result after filter user */}
                            <Box
                                sx={{
                                    borderTopWidth: '1px',
                                    borderTopStyle: 'solid',
                                    borderTopColor: 'rgba(0,0,0,0.2)',
                                    width: '100%',
                                    height: '100%'
                                }}
                            >
                                {!userList && (
                                    <Box
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Typography>No recent searches.</Typography>
                                    </Box>
                                )}
                                {userList && userList.length < 1 && (
                                    <Box
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Typography>User not found!</Typography>
                                    </Box>
                                )}
                                {userList &&
                                    userList.map((item) => (
                                        <Box
                                            sx={{
                                                marginTop: '30px',
                                                paddingLeft: '16px',
                                                display: 'flex',
                                                flexDirection: 'column'
                                            }}
                                            key={item._id}
                                        >
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    marginBottom: '16px',
                                                    cursor: 'pointer'
                                                }}
                                                component="div"
                                                onClick={() => handleSelectUser(item._id, item.username)}
                                            >
                                                <Box
                                                    sx={{
                                                        marginLeft: '12px'
                                                    }}
                                                >
                                                    <Avatar src={item.avatar} />
                                                </Box>

                                                <Typography
                                                    sx={{
                                                        marginLeft: '10px',
                                                        flex: 1
                                                    }}
                                                >
                                                    {item.username}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Search;
