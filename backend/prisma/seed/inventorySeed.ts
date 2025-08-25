// 📂 backend\prisma\seed\inventorySeed.ts

import prisma from '@/lib/prisma';

export async function inventorySeed() {
    try {
        console.log('🟢 Iniciando el seed de [inventorySeed]');
        console.log('📦 Creando inventario inicial...');

        await prisma.inventory.createMany({
            data: [
                {
                    productId: 1, // Lomo Saltado
                    currentQuantity: 50,
                    minimumStock: 5,
                    storageLocation: 'Almacen',
                    createdBy: '74214623',
                },
                {
                    productId: 2, // Ceviche
                    currentQuantity: 40,
                    minimumStock: 5,
                    storageLocation: 'Almacen',
                    createdBy: '74214623',
                },
                {
                    productId: 3, // Ají de Gallina
                    currentQuantity: 45,
                    minimumStock: 5,
                    storageLocation: 'Almacen',
                    createdBy: '74214623',
                },
                {
                    productId: 4, // Inka Cola
                    currentQuantity: 100,
                    minimumStock: 10,
                    storageLocation: 'Barra',
                    createdBy: '74214623',
                },
                {
                    productId: 5, // Coca Cola
                    currentQuantity: 90,
                    minimumStock: 10,
                    storageLocation: 'Barra',
                    createdBy: '74214623',
                },
                {
                    productId: 6, // Tiramisu
                    currentQuantity: 30,
                    minimumStock: 5,
                    storageLocation: 'Refrigerador',
                    createdBy: '74214623',
                },
                {
                    productId: 7, // Pilsen
                    currentQuantity: 80,
                    minimumStock: 10,
                    storageLocation: 'Barra',
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
