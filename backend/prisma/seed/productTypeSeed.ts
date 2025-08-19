// 📂 prisma\seed\productTypeSeed.ts

import prisma from '@/lib/prisma';

export async function productTypeSeed() {
    try {
        console.log('🟢 Iniciando el seed de [productTypeSeed]');
        console.log('🍽️  Creando tipos de producto...');

        await prisma.productType.createMany({
            data: [
                {
                    name: 'Plato',
                    description: 'Platos principales, entradas, segundos',
                    color: '#EC4899',
                    isActive: true,
                    createdBy: '74214623',
                },
                {
                    name: 'Bebida',
                    description: 'Bebidas alcohólicas y no alcohólicas',
                    color: '#8B5CF6',
                    isActive: true,
                    createdBy: '74214623',
                },
                {
                    name: 'Postre',
                    description: 'Postres y dulces',
                    color: '#F97316',
                    isActive: true,
                    createdBy: '74214623',
                },
                {
                    name: 'Entrada',
                    description: 'Aperitivos y entradas ligeras',
                    color: '#06B6D4',
                    isActive: true,
                    createdBy: '74214623',
                },
                {
                    name: 'Combo',
                    description: 'Combinaciones de productos',
                    color: '#84CC16',
                    isActive: true,
                    createdBy: '74214623',
                },
            ],
        });

        console.log('✅ Tipos de producto creados exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [productTypeSeed]:', error);
        throw error;
    }
}
