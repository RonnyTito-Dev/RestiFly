// 📂 prisma\seed\combineTableSeed.ts

import prisma from '@/lib/prisma';

export async function combineTableSeed() {
    try {
        console.log('🟢 Iniciando el seed de [combineTableSeed]');
        console.log('🔗 Creando combinaciones de mesas iniciales...');

        await prisma.combineTable.createMany({
            data: {
                name: 'Grupo VIP 1',
                userDocumentCombiner: '11122233',
                isActive: true,
            },
        });

        await prisma.combineTableItem.createMany({
            data: [
                { combineTableId: 1, tableId: 4, createdBy: '11122233' }, // Túpac Amaru
                { combineTableId: 1, tableId: 5, createdBy: '11122233' }, // Bartolome
            ],
        });

        console.log('✅ Combinaciones de mesas creadas exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [combineTableSeed]:', error);
        throw error;
    }
}
