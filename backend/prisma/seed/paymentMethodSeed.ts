// 📂 prisma\seed\paymentMethodSeed.ts

import prisma from '@/lib/prisma';

export async function paymentMethodSeed() {
    try {
        console.log('🟢 Iniciando el seed de [paymentMethodSeed]');
        console.log('💳 Creando métodos de pago...');

        await prisma.paymentMethod.createMany({
            data: [
                {
                    name: 'Efectivo',
                    description: 'Pago en moneda local',
                    color: '#10B981',
                    isActive: true,
                    createdBy: '74214623',
                },
                {
                    name: 'Yape',
                    description: 'Transferencia móvil',
                    color: '#9a18b8',
                    isActive: true,
                    createdBy: '74214623',
                },
                {
                    name: 'Plin',
                    description: 'Transferencia móvil',
                    color: '#0891B2',
                    isActive: true,
                    createdBy: '74214623',
                },
                {
                    name: 'Tarjeta Visa',
                    description: 'Pago con tarjeta de crédito/débito',
                    color: '#1F2937',
                    isActive: true,
                    createdBy: '74214623',
                },
                {
                    name: 'Transferencia Bancaria',
                    description: 'Depósito o transferencia interbancaria',
                    color: '#7C3AED',
                    isActive: true,
                    createdBy: '74214623',
                },
            ],
        });

        console.log('✅ Métodos de pago creados exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [paymentMethodSeed]:', error);
        throw error;
    }
}
