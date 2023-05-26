import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';
import variables from '../../../../../styles/variables';
import SearchIcon from '@mui/icons-material/Search';
import colors from '../../../../../styles/colors';
import { useNavigate } from 'react-router-dom';

const SearchPost = () => {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState('');
    const onSearchPodcast = () => {
        if (searchText) {
            navigate(`/result/${searchText}`);
        }
    };

    return (
        <Box
            sx={{
                marginBottom: '40px'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <TextField
                    sx={{
                        width: {
                            xs: '40%'
                        },
                        height: `${variables.searchTextFieldHeight}`,
                        '& legend': { display: 'none' },
                        '& fieldset': { top: 0 },
                        '& .MuiOutlinedInput-root': {
                            borderTopLeftRadius: '20px',
                            borderBottomLeftRadius: '20px',
                            borderTopRightRadius: '0px',
                            borderBottomRightRadius: '0px'
                        },
                        fieldset: {
                            height: `${variables.searchTextFieldHeight}`
                        },
                        input: {
                            paddingTop: 0,
                            paddingBottom: 0,
                            height: `${variables.searchTextFieldHeight}`
                        },
                        textarea: {
                            height: `${variables.searchTextFieldHeight}`
                        },
                        MuiInputBase: {
                            padding: 0
                        },
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'primary.main',
                            borderWidth: '1px'
                        }
                    }}
                    value={searchText}
                    placeholder="Search Podcast"
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <Box
                    sx={{
                        height: '40px'
                    }}
                >
                    <Box
                        sx={{
                            borderTopRightRadius: '20px',
                            borderBottomRightRadius: '20px',
                            border: `1px solid ${colors.borderForm}`,
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingX: '20px',
                            cursor: 'pointer',
                            '&:hover': {
                                backgroundColor: `${colors.borderFormHover}`
                            }
                        }}
                        onClick={() => onSearchPodcast()}
                    >
                        <SearchIcon />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default SearchPost;
