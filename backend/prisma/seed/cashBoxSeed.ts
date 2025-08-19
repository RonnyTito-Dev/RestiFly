// 📂 prisma\seed\cashBoxSeed.ts

import prisma from '@/lib/prisma';

export async function cashBoxSeed() {
    try {
        console.log('🟢 Iniciando el seed de [cashBoxSeed]');
        console.log('💰 Creando caja inicial...');

        await prisma.cashBox.create({
            data: {
                openerUserDocument: '11223344', // Cajero: Luis Gomez
                initialAmount: 100.0,
                notes: 'Caja inicial de prueba',
            },
        });

        console.log('✅ Caja creada exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [cashBoxSeed]:', error);
        throw error;
    }
}
