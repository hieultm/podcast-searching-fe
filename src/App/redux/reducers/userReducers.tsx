import { AnyAction } from 'redux';

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

export interface userInfo {
    _id: string;
    username: string;
    email?: string;
    password?: string;
    avatar?: string;
    role?: string;
    googleID?: string;
    following: followCount[] | [];
    followers: followCount[] | [];
}

export interface followCount {
    userId: string;
}

export interface userState {
    userInfo?: userInfo | null;
    isFetching?: boolean;
    error?: boolean;
}
export interface userProfileState {
    userProfile?: userInfo | null;
    isFetching?: boolean;
    error?: boolean;
}

export interface uploadFileState {
    file: any;
    isFetching?: boolean;
    error?: boolean;
}

export interface listUserByFilter {
    userList: userInfo[];
    isFetching?: boolean;
    error?: boolean;
}

export interface listUserByFilter {
    userList: userInfo[];
    isFetching?: boolean;
    error?: boolean;
}

export interface relationshipUser {
    user: userInfo;
    following: boolean;
    followed_by: boolean;
}

export interface otherUser {
    infoUser: relationshipUser[];
}

export interface otherUserProfile {
    userProfile: otherUser;
    isFetching?: boolean;
    error?: boolean;
}
export interface statusFollowing {
    status: boolean;
}
export interface RelationshipState {
    statusRelationship: statusFollowing;
    isFetching?: boolean;
    error?: boolean;
}

export const userRegisterReducer = (state: userState, action: AnyAction) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {
                isFetching: true,
                error: false
            };
        case USER_REGISTER_SUCCESS:
            return {
                userInfo: action.payload,
                isFetching: false,
                error: false
            };
        case USER_REGISTER_FAILED:
            return {
                isFetching: false,
                error: true
            };
        case USER_LOGOUT: {
            return {
                userInfo: null,
                isFetching: false,
                error: false
            };
        }
        default:
            return { ...state };
    }
};

export const userLoginReducer = (state: userState, action: AnyAction) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                isFetching: true,
                error: false
            };
        case USER_LOGIN_SUCCESS:
            return {
                userInfo: action.payload,
                isFetching: false,
                error: false
            };
        case USER_LOGIN_FAILED:
            return {
                isFetching: false,
                error: true
            };
        case USER_LOGOUT: {
            return {
                userInfo: null,
                isFetching: false,
                error: false
            };
        }
        default:
            return { ...state };
    }
};

export const uploadFileReducer = (state: uploadFileState, action: AnyAction) => {
    switch (action.type) {
        case USER_UPLOADFILE_REQUEST:
            return {
                isFetching: true,
                error: false
            };
        case USER_UPLOADFILE_SUCCESS:
            return {
                file: action.payload,
                isFetching: false,
                error: false
            };
        case USER_UPLOADFILE_FAILED:
            return {
                isFetching: false,
                error: true
            };
        default:
            return { ...state };
    }
};

export const getProfileReducer = (state: userProfileState, action: AnyAction) => {
    switch (action.type) {
        case USER_GETPROFILE_REQUEST:
            return {
                isFetching: true,
                error: false
            };
        case USER_GETPROFILE_SUCCESS:
            return {
                userProfile: action.payload,
                isFetching: false,
                error: false
            };
        case USER_GETPROFILE_FAILED:
            return {
                isFetching: false,
                error: true
            };
        default:
            return { ...state };
    }
};

export const updateProfileReducer = (state: userState, action: AnyAction) => {
    switch (action.type) {
        case USER_UPDATEPROFILE_REQUEST:
            return {
                isFetching: true,
                error: false
            };
        case USER_UPDATEPROFILE_SUCCESS:
            return {
                userInfo: action.payload,
                isFetching: false,
                error: false
            };
        case USER_UPDATEPROFILE_FAILED:
            return {
                isFetching: false,
                error: true
            };
        default:
            return { ...state };
    }
};

export const searchUserReducer = (state: listUserByFilter, action: AnyAction) => {
    switch (action.type) {
        case USER_SEARCH_USERNAME_REQUEST:
            return {
                isFetching: true,
                error: false
            };
        case USER_SEARCH_USERNAME_SUCCESS:
            return {
                userList: action.payload,
                isFetching: false,
                error: false
            };
        case USER_SEARCH_USERNAME_FAILED:
            return {
                isFetching: false,
                error: true
            };
        default:
            return { ...state };
    }
};

export const getOtherUserProfileReducer = (state: otherUserProfile, action: AnyAction) => {
    switch (action.type) {
        case USER_GET_OTHER_PROFILE_REQUEST:
            return {
                isFetching: true,
                error: false
            };
        case USER_GET_OTHER_PROFILE_SUCCESS:
            return {
                userProfile: action.payload,
                isFetching: false,
                error: false
            };
        case USER_GET_OTHER_PROFILE_FAILED:
            return {
                isFetching: false,
                error: true
            };
        default:
            return { ...state };
    }
};

export const getRelationshipReducer = (state: RelationshipState, action: AnyAction) => {
    switch (action.type) {
        case USER_GET_RELATIONSHIP_REQUEST:
            return {
                isFetching: true,
                error: false
            };
        case USER_GET_RELATIONSHIP_SUCCESS:
            return {
                statusRelationship: action.payload,
                isFetching: false,
                error: false
            };
        case USER_GET_RELATIONSHIP_FAILED:
            return {
                isFetching: false,
                error: true
            };
        default:
            return { ...state };
    }
};
