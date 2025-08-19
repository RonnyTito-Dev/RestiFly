// 📂 prisma\seed\documentTypeSeed.ts

import prisma from '@/lib/prisma';

export async function documentTypeSeed() {
    try {
        console.log('🟢 Iniciando el seed de [documentTypeSeed]');
        console.log('📄 Creando tipos de documento...');

        await prisma.documentType.createMany({
            data: [
                {
                    name: 'DNI',
                    description: 'Documento Nacional de Identidad',
                    digitLength: 8,
                    color: '#3b82f6',
                    createdBy: '74214623',
                },
                {
                    name: 'PASSPORT',
                    description: 'Pasaporte',
                    digitLength: 8,
                    color: '#a855f7',
                    createdBy: '74214623',
                },
                {
                    name: 'CE',
                    description: 'Carnet de Extranjería',
                    digitLength: 8,
                    color: '#e879f9',
                    createdBy: '74214623',
                },
                {
                    name: 'RUC',
                    description: 'Registro Unico de Contribuyente',
                    digitLength: 11,
                    color: '#fb923c',
                    createdBy: '74214623',
                },
            ],
        });

        console.log('✅ Tipos de documentos creadas exitosamente. \n');
    } catch (error) {
        console.log('❌ Error en el seed de [documentTypeSeed]', error);
        throw error;
    }
}
