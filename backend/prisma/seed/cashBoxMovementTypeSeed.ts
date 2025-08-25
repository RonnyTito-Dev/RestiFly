// 📂 backend\prisma\seed\cashBoxMovementTypeSeed.ts

import prisma from '@/lib/prisma';

export async function cashBoxMovementTypeSeed() {
    try {
        console.log('🟢 Iniciando el seed de [cashBoxMovementTypeSeed]');
        console.log('📋 Creando tipos de movimiento de caja...');

        await prisma.cashBoxMovementType.createMany({
            data: [
                {
                    code: 'SALE',
                    name: 'Venta',
                    description: 'Ingreso por venta de productos',
                    color: '#10B981',
                    createdBy: '11122233',
                },
                {
                    code: 'PURCHASE',
                    name: 'Compra',
                    description: 'Gasto por compra de insumos',
                    color: '#EF4444',
                    createdBy: '11122233',
                },
                {
                    code: 'WITHDRAWAL',
                    name: 'Retiro',
                    description: 'Retiro de efectivo por gastos',
                    color: '#F59E0B',
                    createdBy: '11122233',
                },
                {
                    code: 'DEPOSIT',
                    name: 'Deposito',
                    description: 'Ingreso de efectivo externo',
                    color: '#3B82F6',
                    createdBy: '11122233',
                },
                {
                    code: 'OPENING',
                    name: 'Apertura',
                    description: 'Apertura de caja con monto inicial',
                    color: '#059669',
                    createdBy: '11122233',
                },
                {
                    code: 'CLOSING',
                    name: 'Cierre',
                    description: 'Cierre de caja y consolidación de efectivo',
                    color: '#0891B2',
                    createdBy: '11122233',
                },
                {
                    code: 'OTHER_INPUT',
                    name: 'Otra Entrada',
                    description: 'Entrada de dinero no clasificada',
                    color: '#22D3EE',
                    createdBy: '11122233',
                },
                {
                    code: 'OTHER_OUTPUT',
                    name: 'Otra Salida',
                    description: 'Salida de dinero no clasificada',
                    color: '#F43F5E',
                    createdBy: '11122233',
                },
            ],
        });

        console.log('✅ Tipos de movimiento de caja creados exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [cashBoxMovementTypeSeed]', error);
        throw error;
    }
}
