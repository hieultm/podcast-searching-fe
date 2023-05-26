import { RouteObject } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import SignInPage from '../pages/auth/sign-in/SignInPage';
import SignUpPage from '../pages/auth/sign-up/SignUpPage';
import PageNotFound from '../pages/PageNotFound';
import ForgotPassword from '../pages/auth/forgotPassword/ForgotPassword';
import ChangePassword from '../pages/auth/forgotPassword/ChangePassword';

export const routeDefault: RouteObject[] = [
    {
        element: <LandingPage />,
        path: '/'
    },
    {
        element: <SignInPage />,
        path: '/login'
    },
    {
        element: <SignUpPage />,
        path: '/signup'
    },
    {
        element: <ForgotPassword />,
        path: '/ForgotPassword'
    },
    {
        element: <ChangePassword />,
        path: '/ChangePassword'
    },
    {
        element: <PageNotFound />,
        path: '*'
    }
];
