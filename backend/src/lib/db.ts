// 📂 backend\src\lib\db.ts

import mysql, { Pool, RowDataPacket } from 'mysql2/promise';
import data from '@/config/env';

class Mysql {
    pool: Pool;

    constructor() {
        this.pool = mysql.createPool({
            host: data.DB_HOST,
            user: data.DB_USERNAME,
            password: data.DB_PASSWORD,
            database: data.DB_NAME,
            connectionLimit: 10,
        });
    }

    // Metodos para consultar
    async query<T = any>(sql: string, params?: any[]): Promise<T | T[] | null> {
        const [rows] = await this.pool.query<RowDataPacket[]>(sql, params);
        const plainRows = JSON.parse(JSON.stringify(rows));

        return plainRows.length === 0 ? null : plainRows.length === 1 ? (plainRows[0] as T) : (plainRows as T[]);
    }

    // Metodo test a la conexion
    async testConnexion() {
        const test = await this.query('SELECT NOW()');
        console.log('🟩 Conexion exitosa con la DB =>', test);
    }
}

export default new Mysql();
