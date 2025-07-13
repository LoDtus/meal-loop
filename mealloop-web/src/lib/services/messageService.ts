import { apiRequest } from '../utils/apiUtils';

// text, image, video, file, shared, location, sound
export const sendMessage = async() => {
    const formData = new FormData();
    formData.append("content", "");
    formData.append("type", "");
    formData.append("chatRoomId", "");
    // không cần senderId, be sẽ lấy từ token

    const response = await apiRequest(`/api/message/send`, {
        method: "post",
        body: formData,
    });
    return response.data;
};

export const updateMessage = async() => {

};

export const deleteMessage = async() => {

};