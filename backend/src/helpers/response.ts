// 📂 backend\src\helpers\response.ts

import type { Response } from 'express';

// Respuesta Exitosa
export function successResponse(res: Response, type: 'success' | 'info', message: string, data: any = null) {
    return res.json({
        success: true,
        status_code: 200,
        type: type,
        message: message,
        data: data,
    });
}

// Respuesta Error
export function errorResponse(
    res: Response,
    statusCode: number,
    type: 'error' | 'warning',
    message: string,
    data: any = null
) {
    return res.status(statusCode).json({
        success: false,
        status_code: statusCode,
        type: type,
        message: message,
        data: data,
    });
}
