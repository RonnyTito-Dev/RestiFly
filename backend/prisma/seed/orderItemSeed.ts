// 📂 prisma\seed\orderItemSeed.ts

import prisma from '@/lib/prisma';

export async function orderItemSeed() {
    try {
        console.log('🟢 Iniciando el seed de [orderItemSeed]');
        console.log('🧩 Creando ítems de orden...');

        await prisma.orderItem.createMany({
            data: [
                // Orden 1
                {
                    commandId: 1,
                    orderCode: 'ORD-20250824-0001',
                    productId: 1, // Lomo Saltado
                    orderItemStatusCode: 'PENDING',
                    quantity: 1,
                    unitPrice: 28.5,
                    discount: 0,
                    totalPrice: 28.5,
                    createdBy: '11122233',
                },
                {
                    commandId: 1,
                    orderCode: 'ORD-20250824-0001',
                    productId: 4, // Inka Cola
                    orderItemStatusCode: 'PENDING',
                    quantity: 2,
                    unitPrice: 6.5,
                    discount: 0,
                    totalPrice: 13.0,
                    createdBy: '11122233',
                },

                // Orden 2
                {
                    commandId: 1,
                    orderCode: 'ORD-20250824-0002',
                    productId: 2, // Ceviche
                    orderItemStatusCode: 'PENDING',
                    quantity: 1,
                    unitPrice: 32.0,
                    discount: 0,
                    totalPrice: 32.0,
                    createdBy: '11122233',
                },

                // Orden 3
                {
                    commandId: 2,
                    orderCode: 'ORD-20250824-0003',
                    productId: 3, // Ají de Gallina
                    orderItemStatusCode: 'PENDING',
                    quantity: 2,
                    unitPrice: 26.0,
                    discount: 2.0,
                    totalPrice: 50.0,
                    createdBy: '11122233',
                },

                // Orden 4 (cerrada)
                {
                    commandId: 3,
                    orderCode: 'ORD-20250824-0004',
                    productId: 7, // Pilsen
                    orderItemStatusCode: 'DELIVERED',
                    quantity: 2,
                    unitPrice: 8.0,
                    discount: 0,
                    totalPrice: 16.0,
                    createdBy: '11122233',
                },
                {
                    commandId: 3,
                    orderCode: 'ORD-20250824-0004',
                    productId: 6, // Tiramisu
                    orderItemStatusCode: 'DELIVERED',
                    quantity: 1,
                    unitPrice: 12.0,
                    discount: 0,
                    totalPrice: 12.0,
                    createdBy: '11122233',
                },

                // Orden 5 (VIP)
                {
                    commandId: 4,
                    orderCode: 'ORD-20250824-0005',
                    productId: 1, // Lomo Saltado
                    orderItemStatusCode: 'PENDING',
                    quantity: 1,
                    unitPrice: 28.5,
                    discount: 2.5,
                    totalPrice: 26.0,
                    createdBy: '11122233',
                },
                {
                    commandId: 4,
                    orderCode: 'ORD-20250824-0005',
                    productId: 2, // Ceviche
                    orderItemStatusCode: 'PENDING',
                    quantity: 1,
                    unitPrice: 32.0,
                    discount: 3.0,
                    totalPrice: 29.0,
                    createdBy: '11122233',
                },
            ],
        });

        console.log('✅ Ítems creados y totales actualizados.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [orderItemSeed]:', error);
        throw error;
    }
}
