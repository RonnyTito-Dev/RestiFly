// 📂 backend\src\features\auth\authController.ts

import type { Request, Response, NextFunction } from 'express';
import { loginSchema } from './authSchema';
import MyError from '@/utils/MyError';
import * as authService from './authService';
import env from '@/config/env/index';
import { successResponse } from '@/helpers/response';

export async function loginController(req: Request, res: Response, next: NextFunction) {
    try {
        // Validacion y formatter de zod
        const { data, error } = loginSchema.safeParse(req.body);
        if (error) throw MyError.validation(`${error.issues[0]?.message}`);

        const { user, token } = await authService.loginService(data);

        // Enviar cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 1000 * 60 * 60,
        });

        // Respuesta
        return successResponse(res, 'Inicio de sesion exitoso');
    } catch (err) {
        next(err);
    }
}
