// 📂 prisma\seed\restaurantConfig.ts

import prisma from '@/lib/prisma';

export async function restaurantConfigSeed() {
    try {
        console.log('🟢 Iniciando el seed de [restaurantConfigSeed]');
        console.log('⚙️ Creando configuracion del restaurant...');

        await prisma.restaurantConfig.create({
            data: {
                name: 'RestiFly',
                currency: 'PEN',
                address: 'Av Cayma 432',
                phone: '987654321',
                email: 'admin@restifly.com',
                taxName: 'IGV',
                taxIncluded: true,
                taxType: 'INCLUIDO',
                taxRate: 0.18,
                createdBy: '74214623',
            },
        });

        console.log('✅ Configuracion del restaurant creadas exitosamente. \n');
    } catch (error) {
        console.log('❌ Error en el seed de [restaurantConfigSeed]', error);
        throw error;
    }
}
