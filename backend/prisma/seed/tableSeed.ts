// 📂 prisma\seed\tableSeed.ts

import prisma from '@/lib/prisma';

export async function tableSeed() {
    try {
        console.log('🟢 Iniciando el seed de [tableSeed]');
        console.log('🪑 Creando mesas del restaurante...');

        await prisma.table.createMany({
            data: [
                {
                    name: 'Manco Capac',
                    capacity: 4,
                    zoneName: 'Primera Planta',
                    statusCode: 'AVAILABLE',
                    createdBy: '74214623',
                },
                {
                    name: 'Atahualpa',
                    capacity: 4,
                    zoneName: 'Primera Planta',
                    statusCode: 'AVAILABLE',
                    createdBy: '74214623',
                },
                {
                    name: 'Huayna Capac',
                    capacity: 6,
                    zoneName: 'Terraza',
                    statusCode: 'AVAILABLE',
                    createdBy: '74214623',
                },
                { name: 'Túpac Amaru', capacity: 2, zoneName: 'VIP', statusCode: 'AVAILABLE', createdBy: '74214623' },
                { name: 'Bartolome', capacity: 4, zoneName: 'Barra', statusCode: 'AVAILABLE', createdBy: '74214623' },
            ],
        });

        console.log('✅ Mesas creadas exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [tableSeed]:', error);
        throw error;
    }
}
