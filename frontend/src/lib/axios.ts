// 📂 src\lib\axios.ts

import axios from 'axios';
import type { AxiosResponse, AxiosError } from 'axios';

// Crear axios
const axiosIntance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

// Configurar el interceptor
axiosIntance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => Promise.reject(error)
);

// Exportamos api
export default axiosIntance;
