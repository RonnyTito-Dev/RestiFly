// 📂 prisma\seed\userSeeder.ts

import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs'; // Asegúrate de tenerlo: npm install bcryptjs

export async function userSeed() {
    try {
        console.log('🟢 Iniciando el seed de [userSeed]');
        console.log('🧑‍💼 Creando usuarios iniciales...');

        const hashedPassword = await bcrypt.hash('12345678', 10);

        await prisma.user.createMany({
            data: [
                {
                    document: '74214623',
                    username: 'ronny',
                    email: 'ronny@restifly.com',
                    password: hashedPassword,
                    documentTypeName: 'DNI',
                    roleName: 'Super Admin',
                    createdBy: '74214623',
                },
                {
                    document: '12345678',
                    username: 'pepito',
                    email: 'pepito@gmail.com',
                    password: hashedPassword,
                    documentTypeName: 'DNI',
                    roleName: 'Admin',
                    createdBy: '74214623',
                },
                {
                    document: '11223344',
                    username: 'maria_chef',
                    email: 'maria@gmail.com',
                    password: hashedPassword,
                    documentTypeName: 'DNI',
                    roleName: 'Chef',
                    createdBy: '74214623',
                },
                {
                    document: '11122233',
                    username: 'carlos_mozo',
                    email: 'carlos@hotmail.com',
                    password: hashedPassword,
                    documentTypeName: 'DNI',
                    roleName: 'Mozo',
                    createdBy: '74214623',
                },
                {
                    document: '11112222',
                    username: 'luis_cajero',
                    email: 'luis@yahoo.com',
                    password: hashedPassword,
                    documentTypeName: 'DNI',
                    roleName: 'Cajero',
                    createdBy: '74214623',
                },
            ],
        });

        console.log('✅ Usuarios creados exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [userSeed]:', error);
        throw error;
    }
}
