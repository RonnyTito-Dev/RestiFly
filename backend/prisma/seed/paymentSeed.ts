// 📂 prisma\seed\paymentSeed.ts

import prisma from '@/lib/prisma';

export async function paymentSeed() {
    try {
        console.log('🟢 Iniciando el seed de [paymentSeed]');
        console.log('💸 Registrando pago...');

        const order = await prisma.order.findUnique({
            where: { code: 'ORD-20250813-0001' },
        });

        if (!order) {
            throw new Error('Orden no encontrada');
        }

        await prisma.payment.create({
            data: {
                orderCode: 'ORD-20250813-0001',
                cashBoxId: 1,
                totalAmount: order.totalAmount,
                paymentMethodName: 'Efectivo',
                receivedAmount: Math.ceil(Number(order.totalAmount)),
                changeAmount: Math.ceil(Number(order.totalAmount)) - Number(order.totalAmount),
                notes: 'Pago en efectivo',

                receiveUserDocument: '11223344',
                paidCustomerDocument: '40812800',
                createdBy: '11223344',
            },
        });

        // Cerrar orden
        await prisma.order.update({
            where: { code: 'ORD-20250813-0001' },
            data: {
                statusCode: 'PAID',
                closerUserDocument: '11223344',
                closedAt: new Date(),
                updatedBy: '11223344',
            },
        });

        // Cerrar caja
        await prisma.cashBox.update({
            where: { id: 1 },
            data: {
                closerUserDocument: '11223344',
                closedAt: new Date(),
                finalAmount: order.totalAmount,
                totalSales: order.totalAmount,
                updatedBy: '11223344',
            },
        });

        console.log('✅ Pago registrado, orden y caja cerradas.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [paymentSeed]:', error);
        throw error;
    }
}
