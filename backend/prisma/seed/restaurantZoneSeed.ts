// 📂 prisma\seed\restaurantZoneSeed.ts

import prisma from '@/lib/prisma';

export async function restaurantZoneSeed() {
    try {
        console.log('🟢 Iniciando el seed de [restaurantZoneSeed]');
        console.log('📍 Creando zonas del restaurante...');

        await prisma.restaurantZone.createMany({
            data: [
                {
                    name: 'Primera Planta',
                    description: 'Área principal del restaurante',
                    color: '#3B82F6',
                    isActive: true,
                    createdBy: '74214623',
                },
                {
                    name: 'Terraza',
                    description: 'Área al aire libre con vista',
                    color: '#059669',
                    isActive: true,
                    createdBy: '74214623',
                },
                {
                    name: 'VIP',
                    description: 'Area exclusiva para clientes especiales',
                    color: '#7C3AED',
                    isActive: true,
                    createdBy: '74214623',
                },
                {
                    name: 'Barra',
                    description: 'Zona junto a la barra de bebidas',
                    color: '#C2410C',
                    isActive: true,
                    createdBy: '74214623',
                },
            ],
        });

        console.log('✅ Zonas del restaurante creadas exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [restaurantZoneSeed]:', error);
        throw error;
    }
}
