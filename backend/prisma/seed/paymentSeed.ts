// 📂 backend\prisma\seed\paymentSeed.ts

import prisma from '@/lib/prisma';

export async function paymentSeed() {
    try {
        console.log('🟢 Iniciando el seed de [paymentSeed]');
        console.log('💰 Registrando pagos de órdenes...');

        // Creamos los pagos
        await prisma.payment.createMany({
            data: [
                // Orden 1 - Efectivo
                {
                    orderCode: 'ORD-20250824-0001',
                    cashBoxId: 1,
                    paymentMethodName: 'Efectivo',
                    totalAmount: 48.97,
                    receivedAmount: 50.0,
                    changeAmount: 1.03,
                    notes: 'Pago rápido',
                    userDocumentReceive: '11122233', // Mozo que recibe
                    customerDocumentPaid: '40812800',
                    createdBy: '11122233',
                },
                // Orden 2 - Efectivo
                {
                    orderCode: 'ORD-20250824-0002',
                    cashBoxId: 1,
                    paymentMethodName: 'Efectivo',
                    totalAmount: 37.76,
                    receivedAmount: 40.0,
                    changeAmount: 2.24,
                    notes: 'Pago en efectivo',
                    userDocumentReceive: '11122233',
                    customerDocumentPaid: '40924500',
                    createdBy: '11122233',
                },
                // Orden 3 - Yape
                {
                    orderCode: 'ORD-20250824-0003',
                    cashBoxId: 1,
                    paymentMethodName: 'Yape',
                    totalAmount: 59.0,
                    transactionNumber: 'TX20250824-0003',
                    notes: 'Pago móvil',
                    userDocumentReceive: '11122233',
                    customerDocumentPaid: '40812800',
                    createdBy: '11122233',
                },
                // Orden 4 - Efectivo (orden cerrada)
                {
                    orderCode: 'ORD-20250824-0004',
                    cashBoxId: 1,
                    paymentMethodName: 'Efectivo',
                    totalAmount: 22.42,
                    receivedAmount: 25.0,
                    changeAmount: 2.58,
                    notes: 'Pago final de orden cerrada',
                    userDocumentReceive: '11122233',
                    customerDocumentPaid: '40812800',
                    createdBy: '11122233',
                },
                // Orden 5 - Tarjeta Visa
                {
                    orderCode: 'ORD-20250824-0005',
                    cashBoxId: 1,
                    paymentMethodName: 'Tarjeta Visa',
                    totalAmount: 64.9,
                    transactionNumber: 'TX20250824-0005',
                    notes: 'Pago con tarjeta',
                    userDocumentReceive: '11122233',
                    customerDocumentPaid: '40924500',
                    createdBy: '11122233',
                },
            ],
        });

        console.log('✅ Pagos creados exitosamente.');

        // Actualizamos el estado de las órdenes a PAID
        await prisma.order.update({
            where: { code: 'ORD-20250824-0001' },
            data: { orderStatusCode: 'PAID' },
        });

        await prisma.order.update({
            where: { code: 'ORD-20250824-0002' },
            data: { orderStatusCode: 'PAID' },
        });

        await prisma.order.update({
            where: { code: 'ORD-20250824-0003' },
            data: { orderStatusCode: 'PAID' },
        });

        await prisma.order.update({
            where: { code: 'ORD-20250824-0004' },
            data: { orderStatusCode: 'PAID' },
        });

        await prisma.order.update({
            where: { code: 'ORD-20250824-0005' },
            data: { orderStatusCode: 'PAID' },
        });

        console.log('✅ Todas las órdenes asociadas a pagos actualizadas a PAID.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [paymentSeed]:', error);
        throw error;
    }
}
