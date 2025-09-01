// 📂 src\features\login\hooks\useLogin.ts

import * as loginService from '../services/loginService';
import type { LoginRequestType } from '../schemas/loginSchema';
import { useState } from 'react';

export function useLogin() {
    const [loading, setLoading] = useState<boolean>(false);

    const hookLogin = async (loginCredentials: LoginRequestType) => {
        try {
            setLoading(true);

            return await loginService.login(loginCredentials);
        } finally {
            setLoading(false);
        }
    };

    return { hookLogin, loading };
}
