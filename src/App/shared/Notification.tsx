import { FC } from 'react';
import { toast } from 'react-toastify';
import { TOAST_CONFIG } from '../utils/toastConfig';

export interface NotifyPropType {
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
}

const Notification: FC<NotifyPropType> = ({ message, type }) => {
    switch (type) {
        case 'info':
            toast.info(`${message}`, TOAST_CONFIG);
            break;
        case 'success':
            toast.success(`${message}`, TOAST_CONFIG);
            break;
        case 'warning':
            toast.warning(`${message}`, TOAST_CONFIG);
            break;
        case 'error':
            toast.error(`${message}`, TOAST_CONFIG);
            break;
        default:
            break;
    }

    return null;
};

export default Notification;
