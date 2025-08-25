// 📂 prisma\seed\orderItemStatusSeed.ts

import prisma from '@/lib/prisma';

export async function orderItemStatusSeed() {
    try {
        console.log('🟢 Iniciando el seed de [orderItemStatusSeed]');
        console.log('🧩 Creando estados de ítems de pedido...');

        await prisma.orderItemStatus.createMany({
            data: [
                {
                    code: 'PENDING',
                    name: 'Pendiente',
                    description: 'Ítem agregado, esperando ser preparado',
                    color: '#3B82F6',
                    createdBy: '74214623',
                },
                {
                    code: 'IN_PREPARATION',
                    name: 'En Preparación',
                    description: 'El ítem está siendo preparado en cocina o barra',
                    color: '#059669',
                    createdBy: '74214623',
                },
                {
                    code: 'READY',
                    name: 'Listo',
                    description: 'El ítem está listo para ser servido',
                    color: '#F59E0B',
                    createdBy: '74214623',
                },
                {
                    code: 'DELIVERED',
                    name: 'Entregado',
                    description: 'El ítem ha sido entregado al cliente',
                    color: '#10B981',
                    createdBy: '74214623',
                },
                {
                    code: 'ANNULLED',
                    name: 'Anulado',
                    description: 'El ítem fue cancelado por el usuario autorizado',
                    color: '#EF4444',
                    createdBy: '74214623',
                },
            ],
            skipDuplicates: true,
        });

        console.log('✅ Estados de ítems de pedido creados exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [orderItemStatusSeed]:', error);
        throw error;
    }
}
