// 📂 prisma\seed\customerSeed.ts

import prisma from '@/lib/prisma';

export async function customerSeed() {
    try {
        console.log('🟢 Iniciando el seed de [customerSeed]');
        console.log('👥 Creando clientes de prueba...');

        await prisma.customer.createMany({
            data: [
                {
                    documentNumber: '40812800',
                    fullName: 'Ana Martinez',
                    documentTypeName: 'DNI',
                    accountStatusCode: 'ACTIVE',
                    createdBy: '74214623',
                },
                {
                    documentNumber: '40924500',
                    fullName: 'Roberto Diaz',
                    documentTypeName: 'DNI',
                    accountStatusCode: 'ACTIVE',
                    createdBy: '74214623',
                },
            ],
        });

        console.log('✅ Clientes creados exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [customerSeed]:', error);
        throw error;
    }
}
