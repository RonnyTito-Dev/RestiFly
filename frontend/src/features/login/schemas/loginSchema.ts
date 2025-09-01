// 📂 src\features\login\schemas\loginSchema.ts

import { z } from 'zod';

export const loginRequestSchema = z.object({
    email: z
        .string()
        .trim()
        .nonempty('El Email es requerido')
        .min(8, 'El Email debe tener al menos 8 caracteres')
        .max(50, 'El Email no debe superar los 50 caracteres')
        .email('El Email no es valido')
        .toLowerCase(),

    password: z
        .string()
        .trim()
        .nonempty('La contraseña es requerida')
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .max(50, 'La contaseña no debe superar los 50 caracteres'),
});

export type LoginRequestType = z.infer<typeof loginRequestSchema>;
