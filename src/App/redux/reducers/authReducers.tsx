import { AnyAction } from 'redux';

import {
    GET_CONFIRMATION_USER_REQUEST,
    GET_CONFIRMATION_USER_SUCCESS,
    GET_CONFIRMATION_USER_FAILED,
    CHANGE_PASSWORD_USER_REQUEST,
    CHANGE_PASSWORD_USER_SUCCESS,
    CHANGE_PASSWORD_USER_FAILED
} from '../constants/authConstants';

export interface confirmationInfoState {
    message: string;
    idUser: string;
}
export interface confirmationUserState {
    confirmationInfo: confirmationInfoState;
    isFetching: boolean;
    error: boolean;
}
export interface changePasswordState {
    changePasswordInfo: string;
    isFetching: boolean;
    error: boolean;
}

export const getConfirmationUserReducer = (state: confirmationUserState, action: AnyAction) => {
    switch (action.type) {
        case GET_CONFIRMATION_USER_REQUEST:
            return {
                isFetching: true,
                error: false
            };
        case GET_CONFIRMATION_USER_SUCCESS:
            return {
                confirmationInfo: action.payload,
                isFetching: false,
                error: false
            };
        case GET_CONFIRMATION_USER_FAILED:
            return {
                isFetching: false,
                error: true
            };
        default:
            return { ...state };
    }
};

export const changePasswordUserReducer = (state: changePasswordState, action: AnyAction) => {
    switch (action.type) {
        case CHANGE_PASSWORD_USER_REQUEST:
            return {
                isFetching: true,
                error: false
            };
        case CHANGE_PASSWORD_USER_SUCCESS:
            return {
                changePasswordInfo: action.payload,
                isFetching: false,
                error: false
            };
        case CHANGE_PASSWORD_USER_FAILED:
            return {
                isFetching: false,
                error: true
            };
        default:
            return { ...state };
    }
};
