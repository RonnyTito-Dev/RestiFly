// 📂 prisma\seed\imageSeed.ts

import prisma from '@/lib/prisma';

export async function imageSeed() {
    try {
        console.log('🟢 Iniciando el seed de [imageSeed]');
        console.log('🖼️  Creando imágenes de ejemplo...');

        await prisma.image.createMany({
            data: [
                {
                    name: 'Lomo Saltado',
                    altText: 'Plato de Lomo Saltado servido',
                    url: 'https://example.com/images/lomo-saltado.jpg',
                    imageableId: 1,
                    imageableType: 'products',
                    isActive: true,
                    createdBy: '74214623',
                },
                {
                    name: 'Inka Cola',
                    altText: 'Botella de Inka Cola 355ml',
                    url: 'https://example.com/images/inka-cola.jpg',
                    imageableId: 4,
                    imageableType: 'products',
                    isActive: true,
                    createdBy: '74214623',
                },
                {
                    name: 'Logo Principal',
                    altText: 'Logo del restaurante',
                    url: 'https://example.com/images/logo.png',
                    imageableId: 1,
                    imageableType: 'restaurant_config',
                    isActive: true,
                    createdBy: '74214623',
                },
            ],
        });

        console.log('✅ Imágenes creadas exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [imageSeed]:', error);
        throw error;
    }
}
