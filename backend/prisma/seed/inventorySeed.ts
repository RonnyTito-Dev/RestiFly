// 📂 prisma\seed\inventorySeed.ts

import prisma from '@/lib/prisma';

export async function inventorySeed() {
    try {
        console.log('🟢 Iniciando el seed de [inventorySeed]');
        console.log('📦 Creando inventario inicial de productos...');

        await prisma.inventory.createMany({
            data: [
                {
                    productId: 1,
                    currentQuantity: 10,
                    minimumStock: 5,
                    storageLocation: 'Almacén',
                    createdBy: '74214623',
                },
                {
                    productId: 2,
                    currentQuantity: 15,
                    minimumStock: 5,
                    storageLocation: 'Almacén',
                    createdBy: '74214623',
                },
                {
                    productId: 3,
                    currentQuantity: 8,
                    minimumStock: 5,
                    storageLocation: 'Almacén',
                    createdBy: '74214623',
                },
                {
                    productId: 4,
                    currentQuantity: 20,
                    minimumStock: 5,
                    storageLocation: 'Almacén',
                    createdBy: '74214623',
                },
                {
                    productId: 5,
                    currentQuantity: 25,
                    minimumStock: 5,
                    storageLocation: 'Almacén',
                    createdBy: '74214623',
                },
                {
                    productId: 6,
                    currentQuantity: 12,
                    minimumStock: 5,
                    storageLocation: 'Almacén',
                    createdBy: '74214623',
                },
                {
                    productId: 7,
                    currentQuantity: 30,
                    minimumStock: 5,
                    storageLocation: 'Almacén',
                    createdBy: '74214623',
                },
            ],
        });

        console.log('✅ Inventario inicial creado exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [inventorySeed]:', error);
        throw error;
    }
}
