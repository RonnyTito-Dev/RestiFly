// 📂 backend\prisma\seed\customerProfileSeeder.ts

import prisma from '@/lib/prisma';

export async function customerProfileSeed() {
    try {
        console.log('🟢 Iniciando el seed de [customerProfileSeed]');
        console.log('📄 Creando perfiles de clientes de prueba...');

        await prisma.customerProfile.createMany({
            data: [
                {
                    customerDocument: '40812800',
                    fullName: 'Ana Martinez',
                    phoneNumber: '987654321',
                    birthDate: new Date('1990-05-15'),
                    themeName: 'Claro',
                    createdBy: '74214623',
                },
                {
                    customerDocument: '40924500',
                    fullName: 'Roberto Diaz',
                    phoneNumber: '999888777',
                    birthDate: new Date('1985-03-20'),
                    themeName: 'Oscuro',
                    createdBy: '74214623',
                },
            ],
        });

        console.log('✅ Perfiles de clientes creados exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [customerProfileSeed]:', error);
        throw error;
    }
}
