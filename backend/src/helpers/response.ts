// 📂 backend\src\helpers\response.ts

import type { Response } from 'express';

// Respuesta Exitosa
export function successResponse(res: Response, message: string, content: any = null) {
    return res.json({
        message,
        content,
    });
}

// Respuesta Error
export function errorResponse(res: Response, statusCode: number, message: string, content: any = null) {
    return res.status(statusCode).json({
        message,
        content,
    });
}
