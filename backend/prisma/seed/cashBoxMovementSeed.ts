import prisma from '@/lib/prisma';

export async function cashBoxMovementSeed() {
    try {
        console.log('🟢 Iniciando el seed de [cashBoxMovementSeed]');
        console.log('💸 Registrando movimientos de caja basados en pagos en efectivo...');

        await prisma.cashBoxMovement.createMany({
            data: [
                // Orden 1 - Mesa 1
                {
                    cashboxId: 1,
                    userDocument: '11122233', // Mozo que recibe
                    cashboxMovementTypeCode: 'SALE',
                    amount: 48.97,
                    concept: 'Pago en efectivo de la orden ORD-20250824-0001',
                    createdBy: '11122233',
                },
                // Orden 2 - Mesa 1
                {
                    cashboxId: 1,
                    userDocument: '11122233',
                    cashboxMovementTypeCode: 'SALE',
                    amount: 37.76,
                    concept: 'Pago en efectivo de la orden ORD-20250824-0002',
                    createdBy: '11122233',
                },
                // Orden 3 - Mesa 2
                {
                    cashboxId: 1,
                    userDocument: '11122233',
                    cashboxMovementTypeCode: 'SALE',
                    amount: 59.0,
                    concept: 'Pago en efectivo de la orden ORD-20250824-0003',
                    createdBy: '11122233',
                },
                // Orden 4 - Mesa 3 cerrada
                {
                    cashboxId: 1,
                    userDocument: '11122233',
                    cashboxMovementTypeCode: 'SALE',
                    amount: 22.42,
                    concept: 'Pago en efectivo de la orden ORD-20250824-0004',
                    createdBy: '11122233',
                },
                // Orden 5 - VIP
                {
                    cashboxId: 1,
                    userDocument: '11122233',
                    cashboxMovementTypeCode: 'SALE',
                    amount: 64.9,
                    concept: 'Pago en efectivo de la orden ORD-20250824-0005',
                    createdBy: '11122233',
                },
            ],
        });

        console.log('✅ Movimientos de caja registrados exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [cashBoxMovementSeed]:', error);
        throw error;
    }
}
