// 📂 backend\src\features\auth\authService.ts

import { findUserByEmail } from './authModel';
import MyError from '@/utils/MyError';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import env from '@/config/env/index';
import type { LoginSchemaType } from './authSchema';

// ===================== Funcion Iniciar Sesion (Login) =====================
export async function loginService({ email, password }: LoginSchemaType) {
    // Buscar en db

    const user = await findUserByEmail(email);
    if (!user) throw MyError.unauthorized('Las credenciales ingresadas con incorrectas');

    const validPassword = await bcrypt.compare(password, user.user_password);
    if (!validPassword) throw MyError.unauthorized('Las credenciales ingresadas con incorrectas');

    const token = jwt.sign(
        {
            id: user.user_document,
            email: user.user_email,
            rol: user.role_name,
        },
        env.JWT_SECRET as jwt.Secret,
        { expiresIn: env.JWT_EXPIRES_IN as any }
    );

    return { user, token };
}
