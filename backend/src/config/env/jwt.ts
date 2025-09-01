// 📂 src\config\env\jwt.ts

import { z } from 'zod';

export const jwtSchema = z.object({
    JWT_SECRET: z
        .string()
        .trim()
        .nonempty('JWT_SECRET es requerido')
        .min(32, 'JWT_SECRET debe tener al menos 32 caracteres'),

    JWT_EXPIRES_IN: z.union([
        z.string().trim().nonempty('JWT_EXPIRES_IN es requerido').min(1, 'JWT_EXPIRES_IN es requerido'),
        z.number(),
    ]),
});

export type jwtType = z.infer<typeof jwtSchema>;
