// 📂 prisma\seed\orderSeed.ts

import prisma from '@/lib/prisma';

export async function orderSeed() {
    try {
        console.log('🟢 Iniciando el seed de [orderSeed]');
        console.log('📝 Creando órdenes de ejemplo...');

        await prisma.order.create({
            data: {
                code: 'ORD-20250813-0001',
                tableSessionId: 1, // Sesión de Mesa 1
                creatorUserDocument: '11122233', // Mozo: Carlos Pérez
                customerDocumentNumber: '40812800', // Cliente: Ana Martinez
                subtotalAmount: 0,
                taxAmount: 0,
                totalAmount: 0,
                statusCode: 'OPEN',
            },
        });

        console.log(`✅ Orden ORD-20250816-0001 creada exitosamente.\n`);
    } catch (error) {
        console.error('❌ Error en el seed de [orderSeed]:', error);
        throw error;
    }
}
