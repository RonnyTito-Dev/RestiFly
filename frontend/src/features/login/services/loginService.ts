// 📂 src\features\login\services\loginService.ts

import type { LoginRequestType } from '../schemas/loginSchema';
import api from '@/lib/api';

export async function login(loginCredentials: LoginRequestType) {
    return api.post('/auth/login', loginCredentials);
}
