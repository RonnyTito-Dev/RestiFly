// 📂 prisma\seed\tableStatusSeed.ts

import prisma from '@/lib/prisma';

export async function tableStatusSeed() {
    try {
        console.log('🟢 Iniciando el seed de [tableStatusSeed]');
        console.log('🪑 Creando estados de mesa...');

        await prisma.tableStatus.createMany({
            data: [
                {
                    code: 'AVAILABLE',
                    name: 'Disponible',
                    description: 'Mesa libre para ser asignada',
                    color: '#10B981',
                    createdBy: '74214623',
                },
                {
                    code: 'BUSY',
                    name: 'Ocupada',
                    description: 'Mesa en uso por un cliente',
                    color: '#EF4444',
                    createdBy: '74214623',
                },
                {
                    code: 'CLEANING',
                    name: 'En Limpieza',
                    description: 'Mesa siendo limpiada después de uso',
                    color: '#F59E0B',
                    createdBy: '74214623',
                },
                {
                    code: 'MAINTENANCE',
                    name: 'Mantenimiento',
                    description: 'Mesa no disponible por mantenimiento',
                    color: '#6B7280',
                    createdBy: '74214623',
                },
            ],
        });

        console.log('✅ Estados de mesa creados exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [tableStatusSeed]:', error);
        throw error;
    }
}
