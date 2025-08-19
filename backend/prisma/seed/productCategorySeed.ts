// 📂 prisma\seed\productCategorySeed.ts

import prisma from '@/lib/prisma';

export async function productCategorySeed() {
    try {
        console.log('🟢 Iniciando el seed de [productCategorySeed]');
        console.log('🗂️  Creando categorías de producto...');

        await prisma.productCategory.createMany({
            data: [
                {
                    name: 'Entradas',
                    description: 'Aperitivos y entradas frías o calientes',
                    color: '#06B6D4',
                    isActive: true,
                    createdBy: '74214623',
                },
                {
                    name: 'Principales',
                    description: 'Platos fuertes y principales',
                    color: '#F97316',
                    isActive: true,
                    createdBy: '74214623',
                },
                {
                    name: 'Postres',
                    description: 'Dulces, helados, frutas',
                    color: '#EC4899',
                    isActive: true,
                    createdBy: '74214623',
                },
                {
                    name: 'Gaseosas',
                    description: 'Bebidas gaseosas y refrescantes',
                    color: '#8B5CF6',
                    isActive: true,
                    createdBy: '74214623',
                },
                {
                    name: 'Cervezas',
                    description: 'Cervezas nacionales e importadas',
                    color: '#10B981',
                    isActive: true,
                    createdBy: '74214623',
                },
                {
                    name: 'Licor',
                    description: 'Whisky, vino, pisco, cócteles',
                    color: '#EF4444',
                    isActive: true,
                    createdBy: '74214623',
                },
                {
                    name: 'Agua',
                    description: 'Agua mineral, con gas, sin gas',
                    color: '#3B82F6',
                    isActive: true,
                    createdBy: '74214623',
                },
            ],
        });

        console.log('✅ Categorías de producto creadas exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [productCategorySeed]:', error);
        throw error;
    }
}
