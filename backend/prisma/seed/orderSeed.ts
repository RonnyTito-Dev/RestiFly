// 📂 prisma\seed\orderSeed.ts

import prisma from '@/lib/prisma';

export async function orderSeed() {
    try {
        console.log('🟢 Iniciando el seed de [orderSeed]');
        console.log('📝 Creando órdenes...');

        await prisma.order.createMany({
            data: [
                // Orden 1 - Mesa 1 (Manco Capac - Comanda 1)
                {
                    code: 'ORD-20250824-0001',
                    commandId: 1,
                    userDocumentCreator: '11122233', // Mozo
                    customerDocument: '40812800',
                    subtotal: 41.5, // 28.5 + (6.5 x 2)
                    discount: 0.0,
                    taxAmount: 7.47, // IGV 18%
                    totalAmount: 48.97,
                    orderStatusCode: 'OPEN',
                },
                // Orden 2 - Otra orden en la misma mesa
                {
                    code: 'ORD-20250824-0002',
                    commandId: 1,
                    userDocumentCreator: '11122233',
                    customerDocument: '40924500',
                    subtotal: 32.0, // Ceviche
                    discount: 0.0,
                    taxAmount: 5.76,
                    totalAmount: 37.76,
                    orderStatusCode: 'OPEN',
                },
                // Orden 3 - Mesa 2 (Atahualpa - Comanda 2)
                {
                    code: 'ORD-20250824-0003',
                    commandId: 2,
                    userDocumentCreator: '11122233',
                    customerDocument: '40812800',
                    subtotal: 52.0, // 2 x Ají de Gallina
                    discount: 2.0,
                    taxAmount: 9.0,
                    totalAmount: 59.0,
                    orderStatusCode: 'OPEN',
                },
                // Orden 4 - Mesa 3 (Huayna Capac - Comanda 3 cerrada)
                {
                    code: 'ORD-20250824-0004',
                    commandId: 3,
                    userDocumentCreator: '11122233',
                    customerDocument: '40812800',
                    subtotal: 19.0, // 2 Pilsen + Tiramisu
                    discount: 0.0,
                    taxAmount: 3.42,
                    totalAmount: 22.42,
                    orderStatusCode: 'PAID',
                },
                // Orden 5 - VIP (Mesa combinada - Comanda 4)
                {
                    code: 'ORD-20250824-0005',
                    commandId: 4,
                    userDocumentCreator: '11122233',
                    customerDocument: '40924500',
                    subtotal: 60.5, // Lomo + Ceviche
                    discount: 5.5,
                    taxAmount: 9.9,
                    totalAmount: 64.9,
                    orderStatusCode: 'OPEN',
                },
            ],
        });

        console.log(`✅ Ordenes creadas exitosamente.\n`);
    } catch (error) {
        console.error('❌ Error en el seed de [orderSeed]:', error);
        throw error;
    }
}
