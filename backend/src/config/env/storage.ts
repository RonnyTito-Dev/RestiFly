// 📂 src\config\env\storage.ts

import { z } from 'zod';

export const storageSchema = z.object({
    MINIO_ROOT_USER: z
        .string()
        .trim()
        .nonempty('MINIO_ROOT_USER es requerido')
        .min(8, 'MINIO_ROOT_USER debe tener al menos 8 caracteres'),

    MINIO_ROOT_PASSWORD: z
        .string()
        .trim()
        .nonempty('MINIO_ROOT_PASSWORD es requerido')
        .min(8, 'MINIO_ROOT_PASSWORD debe tener al menos 8 caracteres'),

    MINIO_PORT_S3: z
        .string()
        .trim()
        .nonempty('MINIO_PORT_S3 es requerido')
        .regex(/^\d+$/, 'MINIO_PORT_S3 debe ser un número')
        .min(3, 'MINIO_PORT_S3 debe tener al menos 3 caracteres')
        .transform(Number),

    MINIO_PORT_WEB: z
        .string()
        .trim()
        .regex(/^\d+$/, 'MINIO_PORT_WEB debe ser un número')
        .nonempty('MINIO_PORT_WEB es requerido')
        .min(3, 'MINIO_PORT_WEB debe tener al menos 3 caracteres')
        .transform(Number),
});

export type storageType = z.infer<typeof storageSchema>;
