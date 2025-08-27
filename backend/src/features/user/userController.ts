// 📂 backend\src\features\user\userController.ts

import type { Request, Response, NextFunction } from 'express';
import * as userService from './userService';
import { successResponse } from '@/helpers/response';

// ======================================================================
// ============================ Metodos GET =============================
// ======================================================================

// ====================== Obtner todos los usuarios ======================

export async function getAllUser(req: Request, res: Response, next: NextFunction) {
    try {
        const users = await userService.getAll();
        return successResponse(res, 'Lista de usuarios obtenida', users);
    } catch (err) {
        next(err);
    }
}
