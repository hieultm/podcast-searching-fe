import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {
    userRegisterReducer,
    userLoginReducer,
    uploadFileReducer,
    getProfileReducer,
    updateProfileReducer,
    searchUserReducer,
    getOtherUserProfileReducer,
    getRelationshipReducer
} from './reducers/userReducers';
import { onCreatePostReducer, onRenderCommentPostReducer } from './reducers/eventListenerReducers';
import {
    getAllPodcastReducer,
    getContentPodcastReducer,
    getDetailPodcastReducer,
    getPostcastByUserFollowingReducer,
    getRecommendPodcastReducer
} from './reducers/podcastReducers';
import {
    getTotalLikeCountPostReducer,
    getUserCommentPostReducer,
    userFollowReducer,
    userRelationshipReducer,
    userStatusLikeReducer,
    userUnFollowReducer
} from './reducers/postReducers';
import { getConfirmationUserReducer } from './reducers/authReducers';

const reducers = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    uploadFile: uploadFileReducer,
    onCreatePost: onCreatePostReducer,
    onRenderCommentPost: onRenderCommentPostReducer,
    getAllPodcast: getAllPodcastReducer,
    getProfile: getProfileReducer,
    updateProfile: updateProfileReducer,
    searchUser: searchUserReducer,
    getOtherUserProfile: getOtherUserProfileReducer,
    getRelationship: getRelationshipReducer,
    userFollow: userFollowReducer,
    userUnFollow: userUnFollowReducer,
    userRelationship: userRelationshipReducer,
    getPodcastByUserFollowing: getPostcastByUserFollowingReducer,
    userStatusLike: userStatusLikeReducer,
    getDetailPodcast: getDetailPodcastReducer,
    getUserCommentPost: getUserCommentPostReducer,
    getContentPodcast: getContentPodcastReducer,
    getTotalLikeCountPost: getTotalLikeCountPostReducer,
    getConfirmationUser: getConfirmationUserReducer,
    getRecommendPodcast: getRecommendPodcastReducer
});

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')!) : null;

const initialState = {
    userLogin: {
        userInfo: userInfoFromStorage
    }
} as {};

const middleware = [thunk];

export const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
