// 📂 backend\src\features\auth\authSchema.ts
import { z } from 'zod';

export const loginSchema = z.object({
    email: z
        .string()
        .trim()
        .nonempty('El email es requerido')
        .min(8, 'El email debe tener al menos 8 caracteres')
        .max(50, 'El email no debe superar los 50 caracteres')
        .email('El email no es valido')
        .toLowerCase(),

    password: z
        .string()
        .trim()
        .nonempty('La contraseña es requerida')
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .max(50, 'La contaseña no debe superar los 50 caracteres'),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
