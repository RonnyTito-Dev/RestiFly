// 📂 prisma\seed\brandSeed.ts

import prisma from '@/lib/prisma';

export async function brandSeed() {
    try {
        console.log('🟢 Iniciando el seed de [brandSeed]');
        console.log('🏷️  Creando marcas de productos...');

        await prisma.brand.createMany({
            data: [
                {
                    name: 'Coca Cola',
                    description: 'Refrescos y bebidas gaseosas',
                    color: '#EF4444',
                    isActive: true,
                    createdBy: '74214623',
                },
                {
                    name: 'Inka Kola',
                    description: 'Bebida tradicional peruana',
                    color: '#F59E0B',
                    isActive: true,
                    createdBy: '74214623',
                },
                {
                    name: 'Pilsen',
                    description: 'Cerveza nacional',
                    color: '#059669',
                    isActive: true,
                    createdBy: '74214623',
                },
                {
                    name: 'Backus',
                    description: 'Cervezas y bebidas Backus',
                    color: '#3B82F6',
                    isActive: true,
                    createdBy: '74214623',
                },
                {
                    name: 'Nestle',
                    description: 'Productos lacteos y postres',
                    color: '#8B5CF6',
                    isActive: true,
                    createdBy: '74214623',
                },
            ],
            skipDuplicates: true,
        });

        console.log('✅ Marcas creadas exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [brandSeed]:', error);
        throw error;
    }
}
