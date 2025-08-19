// 📂 src\config\env\database.ts

import { z } from 'zod';

export const databaseSchema = z.object({
    DB_HOST: z.string().trim().nonempty('DB_HOST es requerido').min(8, 'DB_HOST debe tener al menos 8 caracteres'),
    DB_PORT: z
        .string()
        .trim()
        .nonempty('DB_PORT es requerido')
        .regex(/^\d+$/, 'DB_PORT debe ser un número')
        .min(3, 'DB_PORT debe tener al menos 3 caracteres')
        .transform(Number),

    DB_USERNAME: z
        .string()
        .trim()
        .nonempty('DB_USERNAME es requerido')
        .min(8, 'DB_USERNAME debe tener al menos 8 caracteres'),

    DB_PASSWORD: z
        .string()
        .trim()
        .nonempty('DB_PASSWORD es requerido')
        .min(8, 'DB_PASSWORD debe tener al menos 8 caracteres'),

    DB_NAME: z.string().trim().nonempty('DB_NAME es requerido').min(4, 'DB_NAME debe tener al menos 4 caracteres'),
});

export type databaseType = z.infer<typeof databaseSchema>;
