// 📂 src\config\env\server.ts

import { z } from 'zod';

export const serverSchema = z.object({
    PORT: z
        .string()
        .trim()
        .nonempty('PORT del server es requerido')
        .min(3, 'PORT del server debe tener al menos 3 caracteres')
        .regex(/^\d+$/, 'PORT del server debe ser un número')
        .transform(Number),

    NODE_ENV: z.enum(
        ['development', 'production', 'test'],
        'NODE_ENV solo puede contener (development, production o test)'
    ),
});

export type serverType = z.infer<typeof serverSchema>;
