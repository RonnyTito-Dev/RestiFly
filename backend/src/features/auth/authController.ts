// 📂 backend\src\features\auth\authController.ts

import type { Request, Response, NextFunction } from 'express';
import { successResponse } from '@/helpers/response';

export async function login(req: Request, res: Response, next: NextFunction) {
    try {
        return successResponse(res, 'success', 'Hola amigo desde auth controller');
    } catch (err) {
        next(err);
    }
}
