import axios from '../../axios';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../store';
import {
    GET_ALL_PODCAST_REQUEST,
    GET_ALL_PODCAST_SUCCESS,
    GET_ALL_PODCAST_FAILED,
    GET_PODCAST_BY_USER_FOLLOWING_REQUEST,
    GET_PODCAST_BY_USER_FOLLOWING_SUCCESS,
    GET_PODCAST_BY_USER_FOLLOWING_FAILED,
    GET_DETAIL_PODCAST_REQUEST,
    GET_DETAIL_PODCAST_SUCCESS,
    GET_DETAIL_PODCAST_FAILED,
    GET_CONTENT_PODCAST_REQUEST,
    GET_CONTENT_PODCAST_SUCCESS,
    GET_CONTENT_PODCAST_FAILED,
    DELETE_PODCAST_REQUEST,
    DELETE_PODCAST_SUCCESS,
    DELETE_PODCAST_FAILED,
    GET_RECOMMEND_PODCAST_REQUEST,
    GET_RECOMMEND_PODCAST_SUCCESS,
    GET_RECOMMEND_PODCAST_FAILED
} from '../constants/podcastConstants';

export const getAllPodcast =
    (userId: string): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: GET_ALL_PODCAST_REQUEST
            });
            const { data } = await axios.get(`/data/user/${userId}`);
            dispatch({
                type: GET_ALL_PODCAST_SUCCESS,
                payload: data
            });
        } catch (e) {
            dispatch({
                type: GET_ALL_PODCAST_FAILED,
                payload: e
            });
        }
    };

export const getPodcastByUserFollowing =
    (): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: GET_PODCAST_BY_USER_FOLLOWING_REQUEST
            });

            const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')!) : null;
            const { data } = await axios.get(`/data/new_feed/${userInfo?._id}`);
            dispatch({
                type: GET_PODCAST_BY_USER_FOLLOWING_SUCCESS,
                payload: data
            });
        } catch (e) {
            dispatch({
                type: GET_PODCAST_BY_USER_FOLLOWING_FAILED,
                payload: e
            });
        }
    };

export const getDetailPodcast =
    (idPodcast: string): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: GET_DETAIL_PODCAST_REQUEST
            });
            const { data } = await axios.get(`/data/podcast/${idPodcast}`);
            dispatch({
                type: GET_DETAIL_PODCAST_SUCCESS,
                payload: data
            });
        } catch (e) {
            dispatch({
                type: GET_DETAIL_PODCAST_FAILED,
                payload: e
            });
        }
    };

export const getContentPodcast =
    (content: string): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: GET_CONTENT_PODCAST_REQUEST
            });
            const { data } = await axios.get(`/data/search_podcast`, { params: { content } });
            dispatch({
                type: GET_CONTENT_PODCAST_SUCCESS,
                payload: data
            });
        } catch (e) {
            dispatch({
                type: GET_CONTENT_PODCAST_FAILED,
                payload: e
            });
        }
    };

export const getRecommendPodcast =
    (): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: GET_RECOMMEND_PODCAST_REQUEST
            });
            const { data } = await axios.get(`/data/recommend_podcast`);
            dispatch({
                type: GET_RECOMMEND_PODCAST_SUCCESS,
                payload: data
            });
        } catch (e) {
            dispatch({
                type: GET_RECOMMEND_PODCAST_FAILED,
                payload: e
            });
        }
    };

export const deletePodcast =
    (idPodcast: string, idUser: string): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: DELETE_PODCAST_REQUEST
            });
            const { data } = await axios.delete(`/data/podcast/${idPodcast}`, { params: { idPodcast, idUser } });
            dispatch({
                type: DELETE_PODCAST_SUCCESS,
                payload: data
            });
        } catch (e) {
            dispatch({
                type: DELETE_PODCAST_FAILED,
                payload: e
            });
        }
    };
