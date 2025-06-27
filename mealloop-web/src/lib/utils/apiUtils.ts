import axios from 'axios';
import { pushNotify } from './globalNotificationUtils';
import { BASE_URL } from '../configs/contants';

type HttpMethod = "get" | "post" | "put" | "delete" | "patch";
interface RequestOptions {
    method?: HttpMethod;
    body?: any;
    params?: Record<string, any>;
    headers?: Record<string, string>;
}

const setupRequestInterceptor = (instance) => {
    instance.interceptors.request.use(
        async function (config) {
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );
}

const setupResponseInterceptor = (instance) => {
    instance.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            if (axios.isAxiosError(error)) {
                if (error.code === "ECONNABORTED" && error.message.includes("timeout")) {
                    pushNotify("warning", "Timeout: Kết nối quá thời gian!");
                }
                if (error.response) {
                    switch (error.response.status) {
                        case 401:
                            pushNotify("error", "401: Xác thực người dùng không hợp lệ!");
                            break;
                        case 403:
                            pushNotify("error", "403: Người dùng không có quyền truy cập!");
                            break;
                        case 404:
                            pushNotify("error", "404: Không thể xử lý yêu cầu!");
                            break;
                        case 500:
                            pushNotify("error", "500: Lỗi máy chủ!");
                            break;
                        default:
                            pushNotify("error", "Lỗi không xác định!");
                    }
                }
            } else {
                pushNotify("error", "Không thể kết nối đến máy chủ!");
            }
            // return { data: error.response.data };
            console.log("apiUtils - Error: ", error);
            return Promise.reject(error);
        }
    );
}

const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

export const apiRequest = async(url: string, options: RequestOptions = {}) => {
    const { method = "get", body, params, headers = {} } = options;

    const isFormData = typeof FormData !== "undefined" && body instanceof FormData;
    const finalHeaders: Record<string, string> = { ...headers };

    // Nếu là POST/PUT/PATCH có body, tự set Content-Type nếu chưa có
    if (body && !isFormData && !finalHeaders["Content-Type"]) {
        finalHeaders["Content-Type"] = "application/json";
    }

    if (isFormData) { // Để Axios tự set boundary cho multipart
        delete finalHeaders["Content-Type"];
    }

    const config = {
        method,
        url,
        params,
        headers: finalHeaders,
        ...(method !== "get" && method !== "delete"
            ? { data: body } : body
            ? { data: body } : {}
        ),
    };

    const response = await instance(config);
    return response.data;
};

setupRequestInterceptor(instance);
setupResponseInterceptor(instance);
export default instance;