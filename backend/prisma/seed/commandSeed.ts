// 📂 backend\prisma\seed\commandSeed.ts

import prisma from '@/lib/prisma';

export async function commandSeed() {
    try {
        console.log('🟢 Iniciando el seed de [commandSeed]');
        console.log('📋 Creando comandas iniciales...');

        await prisma.command.createMany({
            data: [
                {
                    tableId: 1, // Manco Capac
                    combineTableId: null,
                    userDocumentOpener: '11122233', // Mozo
                    commandStatusCode: 'OPEN',
                },
                {
                    tableId: 2, // Atahualpa
                    combineTableId: null,
                    userDocumentOpener: '11122233', // Mozo
                    commandStatusCode: 'OPEN',
                },
                {
                    tableId: 3, // Huayna Capac
                    combineTableId: null,
                    userDocumentOpener: '11122233', // Mozo
                    commandStatusCode: 'CLOSED',
                    notes: 'Comanda cerrada por el cajero',
                    userDocumentCloser: '11112222', // Cajero
                    closedAt: new Date(),
                },
                {
                    tableId: null, // porque está en grupo
                    combineTableId: 1, // Grupo VIP 1
                    userDocumentOpener: '11122233', // Mozo
                    commandStatusCode: 'OPEN',
                    notes: 'Mesa combinada (VIP)',
                },
                {
                    tableId: 5, // Bartolome
                    combineTableId: null,
                    userDocumentOpener: '11223344',
                    commandStatusCode: 'ANNULLED',
                    notes: 'Comanda anulada por error de registro',
                    userDocumentCloser: '74214623',
                    closedAt: new Date(),
                },
            ],
        });

        console.log('✅ Comandas creadas exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [commandSeed]', error);
        throw error;
    }
}
