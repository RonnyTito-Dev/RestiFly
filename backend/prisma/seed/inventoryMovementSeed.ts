// 📂 prisma\seed\inventoryMovementSeed.ts

import prisma from '@/lib/prisma';

export async function inventoryMovementSeed() {
    try {
        console.log('🟢 Iniciando el seed de [inventoryMovementSeed]');
        console.log('📦 Registrando movimientos de inventario iniciales y por ventas...');

        await prisma.inventoryMovement.createMany({
            data: [
                // ====== INGRESOS INICIALES ======
                {
                    inventoryId: 1, // Lomo Saltado
                    inventoryMovementTypeCode: 'INCOME',
                    quantityMovement: 50,
                    reasonDescription: 'Ingreso inicial de inventario',
                    userDocument: '74214623',
                    createdBy: '74214623',
                },
                {
                    inventoryId: 2, // Ceviche
                    inventoryMovementTypeCode: 'INCOME',
                    quantityMovement: 40,
                    reasonDescription: 'Ingreso inicial de inventario',
                    userDocument: '74214623',
                    createdBy: '74214623',
                },
                {
                    inventoryId: 3, // Ají de Gallina
                    inventoryMovementTypeCode: 'INCOME',
                    quantityMovement: 45,
                    reasonDescription: 'Ingreso inicial de inventario',
                    userDocument: '74214623',
                    createdBy: '74214623',
                },
                {
                    inventoryId: 4, // Inka Cola
                    inventoryMovementTypeCode: 'INCOME',
                    quantityMovement: 100,
                    reasonDescription: 'Ingreso inicial de inventario',
                    userDocument: '74214623',
                    createdBy: '74214623',
                },
                {
                    inventoryId: 5, // Coca Cola
                    inventoryMovementTypeCode: 'INCOME',
                    quantityMovement: 90,
                    reasonDescription: 'Ingreso inicial de inventario',
                    userDocument: '74214623',
                    createdBy: '74214623',
                },
                {
                    inventoryId: 6, // Tiramisu
                    inventoryMovementTypeCode: 'INCOME',
                    quantityMovement: 30,
                    reasonDescription: 'Ingreso inicial de inventario',
                    userDocument: '74214623',
                    createdBy: '74214623',
                },
                {
                    inventoryId: 7, // Pilsen
                    inventoryMovementTypeCode: 'INCOME',
                    quantityMovement: 80,
                    reasonDescription: 'Ingreso inicial de inventario',
                    userDocument: '74214623',
                    createdBy: '74214623',
                },

                // ====== SALIDAS POR ÓRDENES ======
                // Orden 1 - Lomo Saltado y Inka Cola
                {
                    inventoryId: 1, // Lomo Saltado
                    inventoryMovementTypeCode: 'OUTCOME',
                    quantityMovement: 1,
                    reasonDescription: 'Venta - Orden ORD-20250824-0001',
                    userDocument: '11122233',
                    createdBy: '11122233',
                },
                {
                    inventoryId: 4, // Inka Cola
                    inventoryMovementTypeCode: 'OUTCOME',
                    quantityMovement: 2,
                    reasonDescription: 'Venta - Orden ORD-20250824-0001',
                    userDocument: '11122233',
                    createdBy: '11122233',
                },

                // Orden 2 - Ceviche
                {
                    inventoryId: 2,
                    inventoryMovementTypeCode: 'OUTCOME',
                    quantityMovement: 1,
                    reasonDescription: 'Venta - Orden ORD-20250824-0002',
                    userDocument: '11122233',
                    createdBy: '11122233',
                },

                // Orden 3 - Ají de Gallina (2 unidades)
                {
                    inventoryId: 3,
                    inventoryMovementTypeCode: 'OUTCOME',
                    quantityMovement: 2,
                    reasonDescription: 'Venta - Orden ORD-20250824-0003',
                    userDocument: '11122233',
                    createdBy: '11122233',
                },

                // Orden 4 - Pilsen y Tiramisu
                {
                    inventoryId: 7, // Pilsen
                    inventoryMovementTypeCode: 'OUTCOME',
                    quantityMovement: 2,
                    reasonDescription: 'Venta - Orden ORD-20250824-0004',
                    userDocument: '11122233',
                    createdBy: '11122233',
                },
                {
                    inventoryId: 6, // Tiramisu
                    inventoryMovementTypeCode: 'OUTCOME',
                    quantityMovement: 1,
                    reasonDescription: 'Venta - Orden ORD-20250824-0004',
                    userDocument: '11122233',
                    createdBy: '11122233',
                },

                // Orden 5 - Lomo Saltado y Ceviche
                {
                    inventoryId: 1, // Lomo Saltado
                    inventoryMovementTypeCode: 'OUTCOME',
                    quantityMovement: 1,
                    reasonDescription: 'Venta - Orden ORD-20250824-0005',
                    userDocument: '11122233',
                    createdBy: '11122233',
                },
                {
                    inventoryId: 2, // Ceviche
                    inventoryMovementTypeCode: 'OUTCOME',
                    quantityMovement: 1,
                    reasonDescription: 'Venta - Orden ORD-20250824-0005',
                    userDocument: '11122233',
                    createdBy: '11122233',
                },
            ],
        });

        console.log('✅ Movimientos de inventario creados exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [inventoryMovementSeed]:', error);
        throw error;
    }
}
