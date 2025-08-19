// 📂 prisma\seed\inventoryMovementTypeSeed.ts

import prisma from '@/lib/prisma';

export async function inventoryMovementTypeSeed() {
    try {
        console.log('🟢 Iniciando el seed de [inventoryMovementTypeSeed]');
        console.log('📦 Creando tipos de movimiento de inventario...');

        await prisma.inventoryMovementType.createMany({
            data: [
                {
                    code: 'INCOME',
                    name: 'Ingreso',
                    description: 'Entrada de productos al inventario (compra, devolución, etc.)',
                    color: '#10B981',
                    createdBy: '74214623',
                },
                {
                    code: 'OUTCOME',
                    name: 'Salida',
                    description: 'Salida de productos del inventario (venta, pérdida, etc.)',
                    color: '#EF4444',
                    createdBy: '74214623',
                },
                {
                    code: 'ADJUSTMENT',
                    name: 'Ajuste',
                    description: 'Ajuste manual de inventario (por conteo físico)',
                    color: '#F59E0B',
                    createdBy: '74214623',
                },
                {
                    code: 'RETURN',
                    name: 'Devolución',
                    description: 'Devolución de productos a proveedor o desde cliente',
                    color: '#8B5CF6',
                    createdBy: '74214623',
                },
            ],
        });

        console.log('✅ Tipos de movimiento de inventario creados exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [inventoryMovementTypeSeed]:', error);
        throw error;
    }
}
