import { AnyAction } from 'redux';

import { ON_CREATE_POST, ON_RENDER_COMMENT_POST } from '../constants/eventListenerConstants';

// export interface statusCreate {
//     status: false;
// }

export interface createPostStatus {
    statusCreate: false;
}
export interface statusRenderComment {
    statusRender: false;
}
export const onCreatePostReducer = (state: createPostStatus, action: AnyAction) => {
    switch (action.type) {
        case ON_CREATE_POST:
            return {
                statusCreate: action.payload
            };
        default:
            return { ...state };
    }
};

export const onRenderCommentPostReducer = (state: statusRenderComment, action: AnyAction) => {
    switch (action.type) {
        case ON_RENDER_COMMENT_POST:
            return {
                statusRender: action.payload
            };
        default:
            return { ...state };
    }
};
