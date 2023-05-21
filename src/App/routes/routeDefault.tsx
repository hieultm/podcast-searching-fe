import { RouteObject } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import SignInPage from '../pages/auth/sign-in/SignInPage';
import SignUpPage from '../pages/auth/sign-up/SignUpPage';
import PageNotFound from '../pages/PageNotFound';

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
        element: <PageNotFound />,
        path: '*'
    }
];
