import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../store';
import axios from '../../axios';

import {
    GET_CONFIRMATION_USER_REQUEST,
    GET_CONFIRMATION_USER_SUCCESS,
    GET_CONFIRMATION_USER_FAILED,
    CHANGE_PASSWORD_USER_REQUEST,
    CHANGE_PASSWORD_USER_SUCCESS,
    CHANGE_PASSWORD_USER_FAILED
} from '../constants/authConstants';

export const getConfirmationUser =
    (email: string, secretQuestion: string, secretAnswer: string): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: GET_CONFIRMATION_USER_REQUEST
            });

            // fetch data from Backend
            const { data } = await axios.get('/auth/get_confirmation_user', { params: { email, secretQuestion, secretAnswer } });
            dispatch({
                type: GET_CONFIRMATION_USER_SUCCESS,
                payload: data
            });
        } catch (e) {
            dispatch({
                type: GET_CONFIRMATION_USER_FAILED,
                payload: e
            });
        }
    };

export const changePasswordUser =
    (idUser: string, newPassword: string): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: CHANGE_PASSWORD_USER_REQUEST
            });
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            // fetch data from Backend
            const { data } = await axios.post(
                '/auth/change_password_user',
                {
                    idUser,
                    newPassword
                },
                config
            );
            dispatch({
                type: CHANGE_PASSWORD_USER_SUCCESS,
                payload: data
            });
        } catch (e) {
            dispatch({
                type: CHANGE_PASSWORD_USER_FAILED,
                payload: e
            });
        }
    };
