// 📂 prisma\seed\logSeed.ts

import prisma from '@/lib/prisma';

export async function logSeed() {
    try {
        console.log('🟢 Iniciando el seed de [logSeed]');
        console.log('📝 Creando registros de auditoría...');

        await prisma.log.createMany({
            data: [
                {
                    entityName: 'users',
                    entityId: '74214623',
                    action: 'login',
                    message: 'Inicio de sesión exitoso',
                    userDocument: '74214623',
                },
                {
                    entityName: 'users',
                    entityId: '11122233',
                    action: 'login',
                    message: 'Inicio de sesión exitoso',
                    userDocument: '11122233',
                },
                {
                    entityName: 'customers',
                    entityId: '40812800',
                    action: 'login',
                    message: 'Cliente inició sesión desde web',
                    customerDocument: '40812800',
                },
                {
                    entityName: 'orders',
                    entityId: 'ORD-20250813-0001',
                    action: 'create',
                    message: 'Orden creada en mesa 1',
                    userDocument: '11122233',
                },
                {
                    entityName: 'payments',
                    entityId: '1',
                    action: 'create',
                    message: 'Pago registrado en efectivo',
                    userDocument: '11223344',
                },
            ],
        });

        console.log('✅ Registros de auditoría creados exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [logSeed]:', error);
        throw error;
    }
}
