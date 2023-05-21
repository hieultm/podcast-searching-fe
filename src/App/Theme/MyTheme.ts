import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            // works
            // main: '#f8f8f8',
            // contrastText: '#fff'
            main: '#0971f1',
            dark: '#949494',
            contrastText: '#262626',
            like: '#ff3040',
            success: '#28a745',
            error: '#dc3545',
            warning: '#ffc107'
        },
        secondary: {
            // works
            main: '#69BE28',
            contrastText: '#fff'
        },
        myCustomTheme: {
            main: '#dbdbdb',
            dark: '#949494',
            contrastText: '#8e8e8e',
            myBtn: '#4db6fa'
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 768,
            lg: 1200,
            xl: 1536,
            smallSidebar: 1264,
            laptopMini: 1024,
            mdField: 900
        }
    }
});

export default theme;
