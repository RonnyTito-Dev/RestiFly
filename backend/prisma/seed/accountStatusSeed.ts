// 📂 prisma\seed\accountStatusSeed.ts

import prisma from '@/lib/prisma';

export async function accounStatusSeed() {
    try {
        console.log('🟢 Iniciando el seed de [accountStatusSeed]');
        console.log('📋 Creando estados de cuenta...');

        await prisma.accountStatus.createMany({
            data: [
                {
                    code: 'ACTIVE',
                    name: 'Activa',
                    description: 'Cuenta activa y funcional',
                    color: '#84cc16',
                    createdBy: '74214623',
                },
                {
                    code: 'INACTIVE',
                    name: 'Inactiva',
                    description: 'Cuenta temporalmente desactivada',
                    color: '#94a3b8',
                    createdBy: '74214623',
                },
                {
                    code: 'SUSPENDED',
                    name: 'Suspendida',
                    description: 'Cuenta suspendida por violación de políticas',
                    color: '#f43f5e',
                    createdBy: '74214623',
                },
            ],
        });

        console.log('✅ Estados de cuenta creadas exitosamente. \n');
    } catch (error) {
        console.log('❌ Error en el seed de [accountStatusSeed]', error);
        throw error;
    }
}
