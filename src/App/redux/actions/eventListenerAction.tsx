import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../store';

import { ON_CREATE_POST, ON_RENDER_COMMENT_POST } from '../constants/eventListenerConstants';

export const onCreatePost =
    (status: boolean): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        dispatch({
            type: ON_CREATE_POST,
            payload: status
        });
    };

export const onRenderCommentPost =
    (status: boolean): any =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        dispatch({
            type: ON_RENDER_COMMENT_POST,
            payload: status
        });
    };
