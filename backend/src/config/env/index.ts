// 📂 src\config\env\index.ts

import dotenv from 'dotenv';
import { z } from 'zod';
import { serverSchema } from './server';
import { jwtSchema } from './jwt';
import { databaseSchema } from './database';
import { storageSchema } from './storage';

// Configuracion por defecto para dotenv
dotenv.config();

// Esquema unificado
const envSchema = serverSchema.extend(jwtSchema.shape).extend(databaseSchema.shape).extend(storageSchema.shape);

const { data, error } = envSchema.safeParse(process.env);
if (error) {
    console.error('❌ Error en variables de entorno... =>', error.issues[0]?.message);
    process.exit(1);
}

// console.log(data);

export default data;
