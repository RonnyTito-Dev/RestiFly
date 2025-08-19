// 📂 prisma\seed\productSeed.ts

import prisma from '@/lib/prisma';

export async function productSeed() {
    try {
        console.log('🟢 Iniciando el seed de [productSeed]');
        console.log('🍽️  Creando productos del menú...');

        await prisma.product.createMany({
            data: [
                {
                    name: 'Lomo Saltado',
                    description: 'Plato típico peruano con carne, cebolla, tomate y papas fritas',
                    price: 28.5,
                    productTypeName: 'Plato',
                    productCategoryName: 'Principales',
                    productStatusCode: 'ACTIVE',
                    createdBy: '12345678',
                },
                {
                    name: 'Ceviche',
                    description: 'Pescado fresco marinado en limón con cebolla, camote y maíz tostado',
                    price: 32.0,
                    productTypeName: 'Plato',
                    productCategoryName: 'Entradas',
                    productStatusCode: 'ACTIVE',
                    createdBy: '12345678',
                },
                {
                    name: 'Ají de Gallina',
                    description: 'Pollo deshilachado en salsa cremosa de ají amarillo',
                    price: 26.0,
                    productTypeName: 'Plato',
                    productCategoryName: 'Principales',
                    productStatusCode: 'ACTIVE',
                    createdBy: '12345678',
                },
                {
                    name: 'Inka Cola',
                    description: 'Bebida gaseosa tradicional peruana',
                    price: 6.5,
                    productTypeName: 'Bebida',
                    productCategoryName: 'Gaseosas',
                    brandName: 'Inka Kola',
                    productStatusCode: 'ACTIVE',
                    createdBy: '12345678',
                },
                {
                    name: 'Coca Cola',
                    description: 'Bebida gaseosa internacional',
                    price: 7.0,
                    productTypeName: 'Bebida',
                    productCategoryName: 'Gaseosas',
                    brandName: 'Coca Cola',
                    productStatusCode: 'ACTIVE',
                    createdBy: '12345678',
                },
                {
                    name: 'Tiramisu',
                    description: 'Postre italiano con mascarpone, café y cacao',
                    price: 12.0,
                    productTypeName: 'Postre',
                    productCategoryName: 'Postres',
                    productStatusCode: 'ACTIVE',
                    createdBy: '12345678',
                },
                {
                    name: 'Pilsen',
                    description: 'Cerveza nacional de 355ml',
                    price: 8.0,
                    productTypeName: 'Bebida',
                    productCategoryName: 'Cervezas',
                    brandName: 'Pilsen',
                    productStatusCode: 'ACTIVE',
                    createdBy: '12345678',
                },
            ],
        });

        console.log('✅ Productos creados exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [productSeed]:', error);
        throw error;
    }
}
