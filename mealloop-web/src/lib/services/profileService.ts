import { apiRequest } from '../utils/apiUtils';

export const getProfile = async(id: string) => {
    const response = await apiRequest("/api/profile/get", {
        method: "post",
        body: {
            id: id.trim(),
        }
    });
    return response.data;
};

export const updateProfileInfor = async(profile) => {
    const response = await apiRequest("/api/profile/update", {
        method: "put",
        body: {
            profile: profile,
        }
    });
    return response.data;
};

export const updateProfileVisibility = async(profileVisibility) => {
    const response = await apiRequest("/api/profile/update", {
        method: "put",
        body: {
            profileVisibility: profileVisibility,
        }
    });
    return response.data;
};

export const deleteAccount = async() => {
    const response = await apiRequest("/api/profile/delete", { method: "get" });
    return response.data;
};