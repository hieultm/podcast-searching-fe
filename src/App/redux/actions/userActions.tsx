import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../store';
import axios from '../../axios';

import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILED,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,
    USER_LOGOUT,
    USER_UPLOADFILE_REQUEST,
    USER_UPLOADFILE_SUCCESS,
    USER_UPLOADFILE_FAILED,
    USER_GETPROFILE_REQUEST,
    USER_GETPROFILE_SUCCESS,
    USER_GETPROFILE_FAILED,
    USER_UPDATEPROFILE_REQUEST,
    USER_UPDATEPROFILE_SUCCESS,
    USER_UPDATEPROFILE_FAILED,
    USER_SEARCH_USERNAME_REQUEST,
    USER_SEARCH_USERNAME_SUCCESS,
    USER_SEARCH_USERNAME_FAILED,
    USER_GET_OTHER_PROFILE_REQUEST,
    USER_GET_OTHER_PROFILE_SUCCESS,
    USER_GET_OTHER_PROFILE_FAILED,
    USER_GET_RELATIONSHIP_REQUEST,
    USER_GET_RELATIONSHIP_SUCCESS,
    USER_GET_RELATIONSHIP_FAILED
} from '../constants/userConstants';

export const registerUser =
    (username: string, email: string, password: string, secretQuestion: string, secretAnswer: string): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: USER_REGISTER_REQUEST
            });

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            // fetch data from Backend
            const { data } = await axios.post(
                '/auth/register',
                {
                    username,
                    email,
                    password,
                    secretQuestion,
                    secretAnswer
                },
                config
            );

            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: data
            });
            localStorage.setItem('userInfo', JSON.stringify(data));
        } catch (e) {
            dispatch({
                type: USER_REGISTER_FAILED,
                payload: e
            });
        }
    };

export const login =
    (email: string, password: string): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: USER_LOGIN_REQUEST
            });

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            // fetch data from Backend
            const { data } = await axios.post(
                '/auth/login',
                {
                    email,
                    password
                },
                config
            );

            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data
            });
            localStorage.setItem('userInfo', JSON.stringify(data));
        } catch (e) {
            dispatch({
                type: USER_LOGIN_FAILED,
                payload: e
            });
        }
    };

export const logout =
    (): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        dispatch({
            type: USER_LOGOUT
        });
        localStorage.removeItem('userInfo');
    };

export const uploadFileUser =
    (file: any, background: any, caption: String, userId: any): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: USER_UPLOADFILE_REQUEST
            });

            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            };
            // fetch data from Backend
            // const { data } = await axios.post(
            //     '/data/uploadSingleFile',
            //     {
            //         file,
            //         background,
            //         caption,
            //         userId
            //     },
            //     config
            // );
            const { data } = await axios.post(
                '/data/uploadFileToPythonFile',
                {
                    file,
                    background,
                    caption,
                    userId
                },
                config
            );
            dispatch({
                type: USER_UPLOADFILE_SUCCESS,
                payload: data
            });
        } catch (e) {
            dispatch({
                type: USER_UPLOADFILE_FAILED,
                payload: e
            });
        }
    };

export const getProfile =
    (userId: String | undefined): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: USER_GETPROFILE_REQUEST
            });
            // fetch data from Backend
            const { data } = await axios.get(`/auth/profile/${userId}`);
            dispatch({
                type: USER_GETPROFILE_SUCCESS,
                payload: data
            });
        } catch (e) {
            dispatch({
                type: USER_GETPROFILE_FAILED,
                payload: e
            });
        }
    };

export const updateProfile =
    (username: string, avatar: File): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: USER_UPDATEPROFILE_REQUEST
            });
            // fetch data from Backend
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            };
            // fetch data from Backend
            const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')!) : null;
            const updateProfile = await axios.put(`/auth/profile/${userInfo?._id}`, { username, avatar }, config);
            dispatch({
                type: USER_UPDATEPROFILE_SUCCESS,
                payload: updateProfile.data
            });
            localStorage.setItem('userInfo', JSON.stringify(updateProfile.data));
        } catch (e) {
            dispatch({
                type: USER_UPDATEPROFILE_FAILED,
                payload: e
            });
        }
    };

export const searchUser =
    (username: string): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: USER_SEARCH_USERNAME_REQUEST
            });
            const { data } = await axios.get('/auth/recent_searches', { params: { username } });
            dispatch({
                type: USER_SEARCH_USERNAME_SUCCESS,
                payload: data
            });
        } catch (e) {
            dispatch({
                type: USER_SEARCH_USERNAME_FAILED,
                payload: e
            });
        }
    };

export const getOtherUserProfile =
    (myId: string, otherUserId: string): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: USER_GET_OTHER_PROFILE_REQUEST
            });
            const { data } = await axios.get('/auth/other_profile', { params: { myId, otherUserId } });
            dispatch({
                type: USER_GET_OTHER_PROFILE_SUCCESS,
                payload: data
            });
        } catch (e) {
            dispatch({
                type: USER_GET_OTHER_PROFILE_FAILED,
                payload: e
            });
        }
    };

export const getRelationship =
    (myId: string, otherUserId: string): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: USER_GET_RELATIONSHIP_REQUEST
            });
            const { data } = await axios.get('/data/relationship', { params: { myId, otherUserId } });
            dispatch({
                type: USER_GET_RELATIONSHIP_SUCCESS,
                payload: data
            });
        } catch (e) {
            dispatch({
                type: USER_GET_RELATIONSHIP_FAILED,
                payload: e
            });
        }
    };
