import { AnyAction } from 'redux';

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
import { userInfo } from './userReducers';
import { followCount } from './postReducers';

export interface dataPodcast {
    _id: string;
    audio: any;
    caption: string;
    uploadDate: Date;
    user: userInfo;
    background: string;
    content: string;
    likes: followCount[] | [];
}

export interface podcastInfo {
    [x: string]: any;
    _id: string;
    audio: any;
    caption: string;
    uploadDate: Date;
    user: userInfo;
    likes: followCount[] | [];
}

export interface podcastState {
    podcastInfo: podcastInfo;
    isFetching?: boolean;
    error?: boolean;
}
export interface DetailPodcastState {
    dataPodcast: dataPodcast;
    isFetching?: boolean;
    error?: boolean;
}
export interface PodcastDatas {
    podcastData: dataPodcast[];
}

export interface dataRecommendPodcast {
    [x: string]: any;
    _id: string;
    audio: any;
    caption: string;
    uploadDate: Date;
    user: userInfo;
    background: string;
    content: string;
    likes: number;
}
export interface RecommendPodcastDatas {
    podcastData: dataRecommendPodcast;
}

export interface RecommendPodcatState {
    podcastDatas: RecommendPodcastDatas;
    isFetching?: boolean;
    error?: boolean;
}
export interface ContentPodcastState {
    podcastDatas: PodcastDatas;
    isFetching?: boolean;
    error?: boolean;
}

export const getAllPodcastReducer = (state: podcastState, action: AnyAction) => {
    switch (action.type) {
        case GET_ALL_PODCAST_REQUEST:
            return {
                isFetching: true,
                error: false
            };
        case GET_ALL_PODCAST_SUCCESS:
            return {
                podcastInfo: action.payload,
                isFetching: false,
                error: false
            };
        case GET_ALL_PODCAST_FAILED:
            return {
                isFetching: false,
                error: true
            };
        default:
            return { ...state };
    }
};

export const getPostcastByUserFollowingReducer = (state: podcastState, action: AnyAction) => {
    switch (action.type) {
        case GET_PODCAST_BY_USER_FOLLOWING_REQUEST:
            return {
                isFetching: true,
                error: false
            };
        case GET_PODCAST_BY_USER_FOLLOWING_SUCCESS:
            return {
                podcastInfo: action.payload,
                isFetching: false,
                error: false
            };
        case GET_PODCAST_BY_USER_FOLLOWING_FAILED:
            return {
                isFetching: false,
                error: true
            };
        default:
            return { ...state };
    }
};

export const getDetailPodcastReducer = (state: DetailPodcastState, action: AnyAction) => {
    switch (action.type) {
        case GET_DETAIL_PODCAST_REQUEST:
            return {
                isFetching: true,
                error: false
            };
        case GET_DETAIL_PODCAST_SUCCESS:
            return {
                dataPodcast: action.payload,
                isFetching: false,
                error: false
            };
        case GET_DETAIL_PODCAST_FAILED:
            return {
                isFetching: false,
                error: true
            };
        default:
            return { ...state };
    }
};

export const getRecommendPodcastReducer = (state: RecommendPodcatState, action: AnyAction) => {
    switch (action.type) {
        case GET_RECOMMEND_PODCAST_REQUEST:
            return {
                isFetching: true,
                error: false
            };
        case GET_RECOMMEND_PODCAST_SUCCESS:
            return {
                podcastDatas: action.payload,
                isFetching: false,
                error: false
            };
        case GET_RECOMMEND_PODCAST_FAILED:
            return {
                isFetching: false,
                error: true
            };
        default:
            return { ...state };
    }
};

export const getContentPodcastReducer = (state: ContentPodcastState, action: AnyAction) => {
    switch (action.type) {
        case GET_CONTENT_PODCAST_REQUEST:
            return {
                isFetching: true,
                error: false
            };
        case GET_CONTENT_PODCAST_SUCCESS:
            return {
                podcastDatas: action.payload,
                isFetching: false,
                error: false
            };
        case GET_CONTENT_PODCAST_FAILED:
            return {
                isFetching: false,
                error: true
            };
        default:
            return { ...state };
    }
};

export const deletePodcastReducer = (state: dataPodcast, action: AnyAction) => {
    switch (action.type) {
        case DELETE_PODCAST_REQUEST:
            return {
                isFetching: true,
                error: false
            };
        case DELETE_PODCAST_SUCCESS:
            return {
                data: action.payload,
                isFetching: false,
                error: false
            };
        case DELETE_PODCAST_FAILED:
            return {
                isFetching: false,
                error: true
            };
        default:
            return { ...state };
    }
};
