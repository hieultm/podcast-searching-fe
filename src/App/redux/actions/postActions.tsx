import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../store';
import axios from '../../axios';

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

export const userFollow =
    (myId: string, otherUserId: string): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: USER_FOLLOW_REQUEST
            });
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            // fetch data from Backend
            const { data } = await axios.post(
                '/data/follow_user',
                {
                    myId,
                    otherUserId
                },
                config
            );
            dispatch({
                type: USER_FOLLOW_SUCCESS,
                payload: data
            });
        } catch (e) {
            dispatch({
                type: USER_FOLLOW_FAILED,
                payload: e
            });
        }
    };

export const userUnFollow =
    (myId: string, otherUserId: string): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: USER_UNFOLLOW_REQUEST
            });
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            // fetch data from Backend
            const { data } = await axios.post(
                '/data/unfollow_user',
                {
                    myId,
                    otherUserId
                },
                config
            );
            dispatch({
                type: USER_UNFOLLOW_SUCCESS,
                payload: data
            });
        } catch (e) {
            dispatch({
                type: USER_UNFOLLOW_FAILED,
                payload: e
            });
        }
    };

export const userRelationship =
    (myId: string, otherUserId: string): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: USER_RELATIONSHIP_REQUEST
            });
            // fetch data from Backend
            const { data } = await axios.get('/data/relationship', { params: { myId, otherUserId } });
            dispatch({
                type: USER_RELATIONSHIP_SUCCESS,
                payload: data
            });
        } catch (e) {
            dispatch({
                type: USER_RELATIONSHIP_FAILED,
                payload: e
            });
        }
    };

export const userLikePost =
    (likeId: string, idPost: string): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: USER_LIKE_POST_REQUEST
            });
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            // fetch data from Backend
            const { data } = await axios.post('/data/like_post', { likeId, idPost }, config);
            dispatch({
                type: USER_LIKE_POST_SUCCESS,
                payload: data
            });
        } catch (e) {
            dispatch({
                type: USER_LIKE_POST_FAILED,
                payload: e
            });
        }
    };

export const userUnlikePost =
    (likeId: string, idPost: string): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: USER_UNLIKE_POST_REQUEST
            });
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            // fetch data from Backend
            const { data } = await axios.post('/data/unlike_post', { likeId, idPost }, config);
            dispatch({
                type: USER_UNLIKE_POST_SUCCESS,
                payload: data
            });
        } catch (e) {
            dispatch({
                type: USER_UNLIKE_POST_FAILED,
                payload: e
            });
        }
    };
export const userStatusLike =
    (likeId: string, postOwner: string): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: USER_STATUSPOST_REQUEST
            });

            // fetch data from Backend
            const { data } = await axios.get('/data/status_like_post', { params: { likeId, postOwner } });
            dispatch({
                type: USER_STATUSPOST_SUCCESS,
                payload: data
            });
        } catch (e) {
            dispatch({
                type: USER_STATUSPOST_FAILED,
                payload: e
            });
        }
    };

export const userCommentPost =
    (postId: string, userId: string, text: string): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: USER_COMMENT_POST_REQUEST
            });
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            // fetch data from Backend
            const { data } = await axios.post('/data/comment_post', { postId, userId, text }, config);
            dispatch({
                type: USER_COMMENT_POST_SUCCESS,
                payload: data
            });
        } catch (e) {
            dispatch({
                type: USER_COMMENT_POST_FAILED,
                payload: e
            });
        }
    };

export const getUserCommentPost =
    (postId: string): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: USER_GET_COMMENT_POST_REQUEST
            });

            // fetch data from Backend
            const { data } = await axios.get('/data/comment_post', { params: { postId } });
            dispatch({
                type: USER_GET_COMMENT_POST_SUCCESS,
                payload: data
            });
        } catch (e) {
            dispatch({
                type: USER_GET_COMMENT_POST_FAILED,
                payload: e
            });
        }
    };

export const getTotalLikeCountPost =
    (idPost: string): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: GET_TOTAL_LIKECOUNT_REQUEST
            });

            // fetch data from Backend
            const { data } = await axios.get('/data/post_total_count', { params: { idPost } });
            dispatch({
                type: GET_TOTAL_LIKECOUNT_SUCCESS,
                payload: data
            });
        } catch (e) {
            dispatch({
                type: GET_TOTAL_LIKECOUNT_FAILED,
                payload: e
            });
        }
    };
