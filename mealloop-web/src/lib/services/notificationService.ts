import { apiRequest } from '../utils/apiUtils';

export const getNotification = async() => {
    const response = await apiRequest(`/api/notification/get`, {
        method: "post",
        body: {
            page: 0,
            size: 10,
            type: "",
        }
    });
    return response.data;
};

export const deleteNotification = async() => {
    const response = await apiRequest(`/api/notification/delete`, {
        method: "delete",
        body: {
            notificationList: [],
        }
    });
    return response.data;
};