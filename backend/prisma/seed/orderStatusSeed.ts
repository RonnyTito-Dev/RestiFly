// 📂 prisma\seed\orderStatusSeed.ts

import prisma from '@/lib/prisma';

export async function orderStatusSeed() {
    try {
        console.log('🟢 Iniciando el seed de [orderStatusSeed]');
        console.log('📋 Creando estados de orden...');

        await prisma.orderStatus.createMany({
            data: [
                {
                    code: 'OPEN',
                    name: 'Abierta',
                    description: 'Orden creada, en proceso de agregado de ítems',
                    color: '#3B82F6',
                    createdBy: '74214623',
                },
                {
                    code: 'PREPARATION',
                    name: 'En Preparación',
                    description: 'La orden ha sido enviada a cocina o barra para su preparación',
                    color: '#059669',
                    createdBy: '74214623',
                },
                {
                    code: 'SERVED',
                    name: 'Servida',
                    description: 'Todos los ítems han sido entregados al cliente',
                    color: '#0891B2',
                    createdBy: '74214623',
                },
                {
                    code: 'ACCOUNT_REQUESTED',
                    name: 'Cuenta Solicitada',
                    description: 'El cliente ha solicitado la cuenta',
                    color: '#F59E0B',
                    createdBy: '74214623',
                },
                {
                    code: 'PAID',
                    name: 'Pagada',
                    description: 'La orden ha sido pagada y cerrada',
                    color: '#10B981',
                    createdBy: '74214623',
                },
                {
                    code: 'ANNULLED',
                    name: 'Anulada',
                    description: 'La orden fue cancelada por el usuario autorizado',
                    color: '#EF4444',
                    createdBy: '74214623',
                },
            ],
            skipDuplicates: true,
        });

        console.log('✅ Estados de orden creados exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [orderStatusSeed]:', error);
        throw error;
    }
}
