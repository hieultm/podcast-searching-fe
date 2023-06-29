import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { routeClient } from './routes/routeClient';
import { routeDefault } from './routes/routeDefault';
import theme from './Theme/MyTheme';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { userState } from './redux/reducers/userReducers';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const userLogin = useSelector<RootState, userState>((state) => state.userLogin);
    const { userInfo } = userLogin;

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    {userInfo
                        ? routeClient.map((route) => <Route key={route.path} path={route.path as string} element={route.element} />)
                        : routeDefault.map((route) => <Route key={route.path} path={route.path as string} element={route.element} />)}
                </Routes>
            </Router>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="light"
            />
        </ThemeProvider>
    );
};

export default App;
