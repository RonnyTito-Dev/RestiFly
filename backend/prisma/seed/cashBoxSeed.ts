// 📂 backend\prisma\seed\cashBoxSeed.ts

import prisma from '@/lib/prisma';

export async function cashBoxSeed() {
    try {
        console.log('🟢 Iniciando el seed de [cashBoxSeed]');
        console.log('💵 Creando caja inicial...');

        await prisma.cashBox.create({
            data: {
                userDocumentOpened: '11112222', // Cajero
                initialAmount: 200.0,
                notes: 'Caja abierta para el turno del día',
            },
        });

        console.log('✅ Caja creada exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [cashBoxSeed]:', error);
        throw error;
    }
}
