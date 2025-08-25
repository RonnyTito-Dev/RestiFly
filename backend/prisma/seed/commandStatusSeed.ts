// 📂 backend\prisma\seed\commandStatusSeed.ts

import prisma from '@/lib/prisma';

export async function commandStatusSeed() {
    try {
        console.log('🟢 Iniciando el seed de [commandStatusSeed]');
        console.log('📦 Creando estados de comanda...');

        await prisma.commandStatus.createMany({
            data: [
                {
                    code: 'OPEN',
                    name: 'Abierta',
                    description: 'Comanda en uso',
                    color: '#3B82F6',
                    createdBy: '74214623',
                },
                {
                    code: 'CLOSED',
                    name: 'Cerrada',
                    description: 'Comanda finalizada y facturada',
                    color: '#10B981',
                    createdBy: '74214623',
                },
                {
                    code: 'ANNULLED',
                    name: 'Anulada',
                    description: 'Comanda cancelada por error o solicitud',
                    color: '#EF4444',
                    createdBy: '74214623',
                },
            ],
        });

        console.log('✅ Estados de comanda creados exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [commandStatusSeed]', error);
        throw error;
    }
}
