import { apiRequest } from '../utils/apiUtils';

export const checkUsernameOrEmail = async(usernameOrEmail: string) => {
    const response = await apiRequest(`/api/auth/check-exists`, {
        method: "get",
        params: {
            usernameOrEmail: usernameOrEmail.trim(),
        }
    });
    return response.data;
};

export const signUp = async(usernameOrEmail: string, password: string, rememberMe = false) => {
    const response = await apiRequest("/api/auth/sign-up", {
        method: "post",
        body: {
            usernameOrEmail: usernameOrEmail.trim(),
            password: password.trim(),
            rememberMe: rememberMe,
        }
    });
    return response.data;
};

export const signIn = async(usernameOrEmail: string, password: string, rememberMe = false) => {
    const response = await apiRequest("/api/auth/sign-in", {
        method: "post",
        body: {
            usernameOrEmail: usernameOrEmail.trim(),
            password: password.trim(),
            rememberMe: rememberMe,
        }
    });
    return response.data;
};

export const signOut = async() => {
    const response = await apiRequest("/api/auth/sign-out", { method: "get" });
    return response.data;
};

export const forgotPassword = async(usernameOrEmail: string) => {
    const response = await apiRequest("/api/auth/forgot-password", {
        method: "get",
        params: {
            usernameOrEmail: usernameOrEmail.trim(),
        }
    });
    return response.data;
};

export const checkResetPasswordToken = async(token: string) => {
    const response = await apiRequest("/api/auth/check-reset-password-token", {
        method: "post",
        body: {
            token: token.trim(),
        }
    });
    return response.data;
};

export const resetPassword = async(token: string, newPassword: string) => {
    const response = await apiRequest("/api/auth/check-reset-password-token", {
        method: "post",
        body: {
            token: token.trim(),
            newPassword: newPassword.trim(),
        }
    });
    return response.data;
};