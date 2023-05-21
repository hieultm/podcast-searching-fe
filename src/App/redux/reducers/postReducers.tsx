import { AnyAction } from 'redux';

import {
    USER_FOLLOW_REQUEST,
    USER_FOLLOW_SUCCESS,
    USER_FOLLOW_FAILED,
    USER_UNFOLLOW_REQUEST,
    USER_UNFOLLOW_SUCCESS,
    USER_UNFOLLOW_FAILED,
    USER_RELATIONSHIP_REQUEST,
    USER_RELATIONSHIP_SUCCESS,
    USER_RELATIONSHIP_FAILED,
    USER_LIKE_POST_REQUEST,
    USER_LIKE_POST_SUCCESS,
    USER_LIKE_POST_FAILED,
    USER_UNLIKE_POST_REQUEST,
    USER_UNLIKE_POST_SUCCESS,
    USER_UNLIKE_POST_FAILED,
    USER_STATUSPOST_REQUEST,
    USER_STATUSPOST_SUCCESS,
    USER_STATUSPOST_FAILED,
    USER_COMMENT_POST_REQUEST,
    USER_COMMENT_POST_SUCCESS,
    USER_COMMENT_POST_FAILED,
    USER_GET_COMMENT_POST_REQUEST,
    USER_GET_COMMENT_POST_SUCCESS,
    USER_GET_COMMENT_POST_FAILED,
    GET_TOTAL_LIKECOUNT_REQUEST,
    GET_TOTAL_LIKECOUNT_SUCCESS,
    GET_TOTAL_LIKECOUNT_FAILED
} from '../constants/postConstants';

export interface typeUserFollow {
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

export interface typeFetchingFollow {
    user: typeUserFollow;
    followFetching: boolean;
    error: boolean;
}

export interface typeFetchingUnfollow {
    user: typeUserFollow;
    unFollowFetching: boolean;
    error: boolean;
}

export interface followCount {
    userId: string;
}

export interface detailRelationship {
    following: boolean;
    followed_by: boolean;
}

export interface relationship {
    detailRelationship: detailRelationship;
    isFetching: boolean;
    error: boolean;
}

export interface typeUserLikePost {
    likeFetching: boolean;
    error: boolean;
}
export interface typeUserUnlikePost {
    unlikeFetching: boolean;
    error: boolean;
}

export interface statusUserLikePost {
    isLike: boolean;
    postOwner: string;
}

export interface typeStatusLikePost {
    statusLike: statusUserLikePost;
    statusLikeFetching: boolean;
    error: boolean;
}
export interface commentState {
    massage: string;
}
export interface UserComment {
    user: typeUserFollow;
    text: string;
    date: Date;
}
export interface UserComments {
    userComments: UserComment[];
}

export interface userCommentState {
    userCommentData: UserComments;
}

export interface totalLikeState {
    likes: followCount[] | [];
}

export interface totalLikeCountState {
    totalLikeCount: totalLikeState;
    likeCountFetching: boolean;
    error: boolean;
}

export const userFollowReducer = (state: typeFetchingFollow, action: AnyAction) => {
    switch (action.type) {
        case USER_FOLLOW_REQUEST:
            return {
                followFetching: true,
                error: false
            };
        case USER_FOLLOW_SUCCESS:
            return {
                userProfile: action.payload,
                followFetching: false,
                error: false
            };
        case USER_FOLLOW_FAILED:
            return {
                followFetching: false,
                error: true
            };
        default:
            return { ...state };
    }
};

export const userUnFollowReducer = (state: typeFetchingUnfollow, action: AnyAction) => {
    switch (action.type) {
        case USER_UNFOLLOW_REQUEST:
            return {
                unFollowFetching: true,
                error: false
            };
        case USER_UNFOLLOW_SUCCESS:
            return {
                userProfile: action.payload,
                unFollowFetching: false,
                error: false
            };
        case USER_UNFOLLOW_FAILED:
            return {
                unFollowFetching: false,
                error: true
            };
        default:
            return { ...state };
    }
};

export const userRelationshipReducer = (state: relationship, action: AnyAction) => {
    switch (action.type) {
        case USER_RELATIONSHIP_REQUEST:
            return {
                isFetching: true,
                error: false
            };
        case USER_RELATIONSHIP_SUCCESS:
            return {
                detailRelationship: action.payload,
                isFetching: false,
                error: false
            };
        case USER_RELATIONSHIP_FAILED:
            return {
                isFetching: false,
                error: true
            };
        default:
            return { ...state };
    }
};

export const userLikePostReducer = (state: typeUserLikePost, action: AnyAction) => {
    switch (action.type) {
        case USER_LIKE_POST_REQUEST:
            return {
                likeFetching: true,
                error: false
            };
        case USER_LIKE_POST_SUCCESS:
            return {
                dataUserLikePost: action.payload,
                likeFetching: false,
                error: false
            };
        case USER_LIKE_POST_FAILED:
            return {
                likeFetching: false,
                error: true
            };
        default:
            return { ...state };
    }
};

export const userUnlikePostReducer = (state: typeUserUnlikePost, action: AnyAction) => {
    switch (action.type) {
        case USER_UNLIKE_POST_REQUEST:
            return {
                unlikeFetching: true,
                error: false
            };
        case USER_UNLIKE_POST_SUCCESS:
            return {
                dataUserUnlikePost: action.payload,
                unlikeFetching: false,
                error: false
            };
        case USER_UNLIKE_POST_FAILED:
            return {
                unlikeFetching: false,
                error: true
            };
        default:
            return { ...state };
    }
};

export const userStatusLikeReducer = (state: typeStatusLikePost, action: AnyAction) => {
    switch (action.type) {
        case USER_STATUSPOST_REQUEST:
            return {
                statusLikeFetching: true,
                error: false
            };
        case USER_STATUSPOST_SUCCESS:
            return {
                statusLike: action.payload,
                statusLikeFetching: false,
                error: false
            };
        case USER_STATUSPOST_FAILED:
            return {
                statusLikeFetching: false,
                error: true
            };
        default:
            return { ...state };
    }
};

export const userCommentPostReducer = (state: commentState, action: AnyAction) => {
    switch (action.type) {
        case USER_COMMENT_POST_REQUEST:
            return {
                isFetching: true,
                error: false
            };
        case USER_COMMENT_POST_SUCCESS:
            return {
                commentMessage: action.payload,
                isFetching: false,
                error: false
            };
        case USER_COMMENT_POST_FAILED:
            return {
                isFetching: false,
                error: true
            };
        default:
            return { ...state };
    }
};
export const getUserCommentPostReducer = (state: userCommentState, action: AnyAction) => {
    switch (action.type) {
        case USER_GET_COMMENT_POST_REQUEST:
            return {
                isFetching: true,
                error: false
            };
        case USER_GET_COMMENT_POST_SUCCESS:
            return {
                userCommentData: action.payload,
                isFetching: false,
                error: false
            };
        case USER_GET_COMMENT_POST_FAILED:
            return {
                isFetching: false,
                error: true
            };
        default:
            return { ...state };
    }
};

export const getTotalLikeCountPostReducer = (state: totalLikeCountState, action: AnyAction) => {
    switch (action.type) {
        case GET_TOTAL_LIKECOUNT_REQUEST:
            return {
                likeCountFetching: true,
                error: false
            };
        case GET_TOTAL_LIKECOUNT_SUCCESS:
            return {
                totalLikeCount: action.payload,
                likeCountFetching: false,
                error: false
            };
        case GET_TOTAL_LIKECOUNT_FAILED:
            return {
                likeCountFetching: false,
                error: true
            };
        default:
            return { ...state };
    }
};
