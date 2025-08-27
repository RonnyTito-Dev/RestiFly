// 📂 src\config\env\index.ts

import dotenv from 'dotenv';
import { serverSchema } from './server';
import { jwtSchema } from './jwt';
import { databaseSchema } from './database';
import { storageSchema } from './storage';

// Configuracion por defecto para dotenv
dotenv.config();

// Esquema unificado
const envSchema = serverSchema.extend(jwtSchema.shape).extend(databaseSchema.shape).extend(storageSchema.shape);

const validationEnv = envSchema.safeParse(process.env);
if (validationEnv.error) {
    console.error('❌ Error en variables de entorno... =>', validationEnv.error.issues[0]?.message);
    process.exit(1);
}

// console.log(data);

const data = validationEnv.data;

export default data;
