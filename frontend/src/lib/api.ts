import axiosInstance from './axios';
import type { AxiosResponse, AxiosError } from 'axios';

interface ApiRawResponse<T> {
    status?: number;
    message: string;
    content: T;
}

export type ApiResponseType<T> = {
    data: ApiRawResponse<T> | null;
    error: { status?: number; message: string; content?: unknown } | null;
};

// Funcion typeGuard
function isAxiosError<T = unknown>(error: unknown): error is AxiosError<T> {
    return (error as AxiosError).isAxiosError === true;
}

class Api {
    private axiosInstance: typeof axiosInstance;

    constructor() {
        this.axiosInstance = axiosInstance;
    }

    private async request<T>(promise: Promise<AxiosResponse<ApiRawResponse<T>>>): Promise<ApiResponseType<T>> {
        try {
            const response = await promise;

            return {
                data: {
                    status: response.status,
                    message: response.data.message,
                    content: response.data.content,
                },
                error: null,
            };
        } catch (error: unknown) {
            if (isAxiosError<{ message: string; content?: unknown }>(error)) {
                return {
                    data: null,
                    error: {
                        status: error.response?.status,
                        message: error.response?.data.message || 'Ocurrió un error',
                        content: error.response?.data.content,
                    },
                };
            } else {
                return {
                    data: null,
                    error: {
                        status: 0,
                        message: 'Ocurrió un error inesperado',
                        content: null,
                    },
                };
            }
        }
    }

    // Metodo get
    get<T>(url: string): Promise<ApiResponseType<T>> {
        return this.request<T>(this.axiosInstance.get(url));
    }

    post<T, B = unknown>(url: string, body?: B): Promise<ApiResponseType<T>> {
        return this.request(this.axiosInstance.post(url, body));
    }

    put<T, B = unknown>(url: string, body?: B): Promise<ApiResponseType<T>> {
        return this.request(this.axiosInstance.put(url, body));
    }

    delete<T>(url: string): Promise<ApiResponseType<T>> {
        return this.request(this.axiosInstance.delete(url));
    }
    patch<T, B = unknown>(url: string, body?: B): Promise<ApiResponseType<T>> {
        return this.request(this.axiosInstance.patch(url, body));
    }
}

export default new Api();
