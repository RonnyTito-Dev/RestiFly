// 📂 backend\src\features\auth\authController.ts

import type { Request, Response, NextFunction } from 'express';
import { successResponse, errorResponse } from '@/helpers/response';
import MyError from '@/utils/MyError';

export async function login(req: Request, res: Response, next: NextFunction) {
    try {
        throw MyError.unauthorized('No estas autenticado');
    } catch (err) {
        next(err);
    }
}
