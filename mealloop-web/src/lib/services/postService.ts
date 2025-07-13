import { apiRequest } from '../utils/apiUtils';

export const getPosts = async() => {
    const response = await apiRequest(`/api/post/get`, {
        method: "post",
        body: {
            page: 0,
            size: 10,
            keyword: "",
        }
    });
    return response.data;
};

export const createPost = async() => {
    const formData = new FormData();
    formData.append("content", "");
    formData.append("description", "");

    const response = await apiRequest(`/api/post/create`, {
        method: "post",
        body: formData,
    });
    return response.data;
};

export const updatePost = async() => {
    const formData = new FormData();
    formData.append("content", "");
    formData.append("description", "");

    const response = await apiRequest(`/api/post/update`, {
        method: "put",
        body: formData,
    });
    return response.data;
};

export const deletePost = async() => {
    const response = await apiRequest(`/api/post/delete`, {
        method: "delete",
        body: {
            postList: [],
        }
    });
    return response.data;
};