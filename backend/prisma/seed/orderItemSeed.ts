// 📂 prisma\seed\orderItemSeed.ts

import prisma from '@/lib/prisma';

export async function orderItemSeed() {
    try {
        console.log('🟢 Iniciando el seed de [orderItemSeed]');
        console.log('🧩 Creando ítems de orden...');

        await prisma.orderItem.createMany({
            data: [
                {
                    orderCode: 'ORD-20250813-0001',
                    productId: 1, // Lomo Saltado
                    quantity: 2,
                    unitPrice: 28.5,
                    subTotal: 57.0,
                    statusCode: 'PENDING',
                    specialInstructions: 'Menos sal, por favor',
                    createdBy: '11122233',
                },
                {
                    orderCode: 'ORD-20250813-0001',
                    productId: 4, // Inka Cola
                    quantity: 1,
                    unitPrice: 6.5,
                    subTotal: 6.5,
                    statusCode: 'PENDING',
                    createdBy: '11122233',
                },
            ],
        });

        // Actualizar totales de la orden
        const subtotal = 57.0 + 6.5;
        const taxAmount = subtotal * 0.18;
        const totalAmount = subtotal + taxAmount;

        await prisma.order.update({
            where: { code: 'ORD-20250813-0001' },
            data: {
                subtotalAmount: subtotal,
                taxAmount,
                totalAmount,
            },
        });

        console.log('✅ Ítems creados y totales actualizados.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [orderItemSeed]:', error);
        throw error;
    }
}
