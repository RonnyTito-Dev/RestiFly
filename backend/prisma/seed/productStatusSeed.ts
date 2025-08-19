// 📂 prisma\seed\productStatusSeed.ts

import prisma from '@/lib/prisma';

export async function productStatusSeed() {
    try {
        console.log('🟢 Iniciando el seed de [productStatusSeed]');
        console.log('🏷️  Creando estados de producto...');

        await prisma.productStatus.createMany({
            data: [
                {
                    code: 'ACTIVE',
                    name: 'Activo',
                    description: 'Producto disponible para la venta',
                    color: '#10B981',
                    createdBy: '74214623',
                },
                {
                    code: 'INACTIVE',
                    name: 'Inactivo',
                    description: 'Producto temporalmente no disponible',
                    color: '#6B7280',
                    createdBy: '74214623',
                },
                {
                    code: 'DISCONTINUED',
                    name: 'Descontinuado',
                    description: 'Producto retirado permanentemente del menú',
                    color: '#EF4444',
                    createdBy: '74214623',
                },
                {
                    code: 'OUT_OF_STOCK',
                    name: 'Agotado',
                    description: 'Producto sin stock disponible',
                    color: '#F59E0B',
                    createdBy: '74214623',
                },
            ],
        });

        console.log('✅ Estados de producto creados exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [productStatusSeed]:', error);
        throw error;
    }
}
