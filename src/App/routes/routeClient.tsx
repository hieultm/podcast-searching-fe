import { RouteObject } from 'react-router-dom';

import SignInPage from '../pages/auth/sign-in/SignInPage';
import SignUpPage from '../pages/auth/sign-up/SignUpPage';
import HomePage from '../pages/Home/HomePage';
import UserProfile from '../pages/profile';
import EditProfile from '../pages/profile/EditProfile';
import UserProfiles from '../pages/UserProfiles';
import DetailPodcast from '../pages/DetailPodcast';
import ResultPodcast from '../pages/ResultPodcast';

export const routeClient: RouteObject[] = [
    // {
    //   element: <MenuLayout />,
    //   children: [
    //     {
    //       path: "corp-list",
    //       element: <CorpList />
    //     },
    //     {
    //       path: "corp-list/:id",
    //       element: <DetailCorp />
    //     }
    //   ]
    // },

    {
        element: <HomePage />,
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
        element: <HomePage />,
        path: '/home'
    },
    {
        element: <UserProfile />,
        path: '/:id/'
    },
    {
        element: <EditProfile />,
        path: '/accounts/edit/'
    },
    {
        element: <UserProfiles />,
        path: '/user/:id/'
    },
    {
        element: <DetailPodcast />,
        path: '/podcast/:id/'
    },
    {
        element: <ResultPodcast />,
        path: '/result/:id'
    }
];
