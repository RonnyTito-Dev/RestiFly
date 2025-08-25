// 📂 backend\src\middlewares\errorHandler.ts

import MyError from '@/utils/MyError';
import type { Request, Response, NextFunction } from 'express';
import { errorResponse } from '@/helpers/response';

export default function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    // Error a proposito
    if (err instanceof MyError) {
        console.log('🔗 Tenemos un error controlado...');

        const { message, statusCode, type, data } = err;
        return errorResponse(res, statusCode, type, message, data);
    }

    // Error desconocido
    console.log('🧲 Atrapamos un error desconocido...');
    console.log('👀 => ', err);

    return errorResponse(res, 500, 'error', 'Ocurrio un error interno en el servidor', null);
}
