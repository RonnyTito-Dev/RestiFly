// 📂 prisma\seed\themeSeed.ts

import prisma from '@/lib/prisma';

export async function themeSeed() {
    try {
        console.log('🟢 Iniciando el seed de [themeSeed]');
        console.log('🎨 Creando temas del sistema...');

        await prisma.theme.createMany({
            data: [
                {
                    name: 'Claro',
                    primaryColor: '#3B82F6',
                    secondaryColor: '#1D4ED8',
                    accentColor: '#F59E0B',
                    neutralColor: '#F3F4F6',
                    isSystem: true,
                    isPublic: true,
                },
                {
                    name: 'Oscuro',
                    primaryColor: '#8B5CF6',
                    secondaryColor: '#7C3AED',
                    accentColor: '#10B981',
                    neutralColor: '#1F2937',
                    isSystem: true,
                    isPublic: true,
                },
                {
                    name: 'Restaurante Moderno',
                    primaryColor: '#EF4444',
                    secondaryColor: '#DC2626',
                    accentColor: '#F59E0B',
                    neutralColor: '#F9FAFB',
                    isSystem: false,
                    isPublic: true,
                },
            ],
        });

        console.log('✅ Temas creados exitosamente.');
    } catch (error) {
        console.error('❌ Error en el seed de [themeSeed]:', error);
        throw error;
    }
}
