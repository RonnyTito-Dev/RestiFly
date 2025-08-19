// 📂 prisma\seed\tableSessionSeed.ts

import prisma from '@/lib/prisma';

export async function tableSessionSeed() {
    try {
        console.log('🟢 Iniciando el seed de [tableSessionSeed]');
        console.log('🪑 Creando sesiones de mesas iniciales...');

        await prisma.tableSession.createMany({
            data: [
                {
                    tableId: 1, // Manco Capac
                    openerUserDocument: '74214623',
                    numberPeople: 3,
                    isActive: true,
                },
                {
                    combineTableId: 1, // Grupo VIP 1
                    openerUserDocument: '74214623',
                    numberPeople: 5,
                    isActive: true,
                },
            ],
        });

        console.log('✅ Sesiones de mesas creadas exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [tableSessionSeed]:', error);
        throw error;
    }
}
