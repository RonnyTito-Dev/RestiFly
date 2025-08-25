// 📂 backend\src\features\auth\authService.ts

import { loginSchema } from './authSchema';
import type { LoginSchemaType } from './authSchema';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';

// ===================== Funcion Iniciar Sesion (Login) =====================
export async function loginUser(loginData: LoginSchemaType) {
    // Validacion de zod
    const { data, error } = loginSchema.safeParse(loginData);
    if (error) throw new Error(error.issues[0]?.message);

    // Buscar en db
    const user = await prisma.user.findUnique({
        where: {
            email: data.email,
        },
    });

    if (user) console.log('Si hay usuario, pero aun no password');
    else console.log('no existe ese usuario');
}
