// prisma/seed/inventoryMovementSeed.ts
import prisma from '@/lib/prisma';

export async function inventoryMovementSeed() {
    try {
        console.log('🟢 Iniciando el seed de [inventoryMovementSeed]');
        console.log('📦 Creando movimientos de inventario iniciales...');

        await prisma.inventoryMovement.createMany({
            data: [
                {
                    inventoryId: 1,
                    movementTypeCode: 'INCOME',
                    quantityMovement: 10,
                    reasonDescription: 'Ingreso inicial de inventario',
                    userDocumentNumber: '74214623',
                    createdBy: '74214623',
                },
                {
                    inventoryId: 2,
                    movementTypeCode: 'INCOME',
                    quantityMovement: 15,
                    reasonDescription: 'Ingreso inicial de inventario',
                    userDocumentNumber: '74214623',
                    createdBy: '74214623',
                },
                {
                    inventoryId: 3,
                    movementTypeCode: 'INCOME',
                    quantityMovement: 8,
                    reasonDescription: 'Ingreso inicial de inventario',
                    userDocumentNumber: '74214623',
                    createdBy: '74214623',
                },
                {
                    inventoryId: 4,
                    movementTypeCode: 'INCOME',
                    quantityMovement: 20,
                    reasonDescription: 'Ingreso inicial de inventario',
                    userDocumentNumber: '74214623',
                    createdBy: '74214623',
                },
                {
                    inventoryId: 5,
                    movementTypeCode: 'INCOME',
                    quantityMovement: 25,
                    reasonDescription: 'Ingreso inicial de inventario',
                    userDocumentNumber: '74214623',
                    createdBy: '74214623',
                },
                {
                    inventoryId: 6,
                    movementTypeCode: 'INCOME',
                    quantityMovement: 12,
                    reasonDescription: 'Ingreso inicial de inventario',
                    userDocumentNumber: '74214623',
                    createdBy: '74214623',
                },
                {
                    inventoryId: 7,
                    movementTypeCode: 'INCOME',
                    quantityMovement: 30,
                    reasonDescription: 'Ingreso inicial de inventario',
                    userDocumentNumber: '74214623',
                    createdBy: '74214623',
                },
            ],
        });

        console.log('✅ Movimientos de inventario creados exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [inventoryMovementSeed]:', error);
        throw error;
    }
}
