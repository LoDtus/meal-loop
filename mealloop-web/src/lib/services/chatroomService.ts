import { apiRequest } from '../utils/apiUtils';

export const getChatRoomByUser = async() => { // get-joined, search
    const response = await apiRequest("/api/chat-rooms/get", {
        method: "post",
        body: {
            id: null,
            keyword: null,
            page: 0,
            size: 10,
        }
    });
    return response.data;
};

export const createChatRoom = async() => {
    const response = await apiRequest("/api/chat-rooms/create", {
        method: "post",
        body: {
            name: null,
            image: null,
            members: [],
        }
    });
    return response.data;
};

export const updateChatRoom = async() => {

};

export const deleteChatRoomById = async(id: string) => {
    const response = await apiRequest("/api/chat-rooms/delete", {
        method: "delete",
        params: { id: id.trim() },
    });
    return response.data;
};