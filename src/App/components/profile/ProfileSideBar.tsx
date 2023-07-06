import { MenuList, MenuItem, Typography } from '@mui/material';
import { FC } from 'react';

interface Props {
    menuName: string;
}

const listNameMenu = [
    {
        nameList: 'Edit Profile'
    }
];

const ProfileSideBar: FC<Props> = ({ menuName }) => {
    return (
        <MenuList
            sx={{
                borderRightWidth: '1px',
                borderRightColor: 'myCustomTheme.main',
                borderRightStyle: 'solid',
                paddingTop: 0,
                flexBasis: '236px',
                display: {
                    xs: 'none',
                    md: 'block'
                }
            }}
        >
            {listNameMenu.map(({ nameList }) => (
                <MenuItem
                    key={nameList}
                    sx={
                        nameList.toLowerCase().includes(menuName)
                            ? {
                                  borderLeftWidth: '2px',
                                  borderLeftColor: 'black',
                                  borderLeftStyle: 'solid'
                              }
                            : {
                                  borderLeft: 'none'
                              }
                    }
                >
                    <Typography
                        sx={
                            nameList.toLowerCase().includes(menuName)
                                ? {
                                      fontWeight: '600'
                                  }
                                : {
                                      fontWeight: '500'
                                  }
                        }
                        variant="subtitle2"
                    >
                        {nameList}
                    </Typography>
                </MenuItem>
            ))}
        </MenuList>
    );
};

export default ProfileSideBar;
