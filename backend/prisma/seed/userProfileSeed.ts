// 📂 backend\prisma\seed\userProfileSeed.ts

import prisma from '@/lib/prisma';

export async function userProfileSeed() {
    try {
        console.log('🟢 Iniciando el seed de [userProfileSeed]');
        console.log('📄 Creando perfiles de usuarios iniciales...');

        await prisma.userProfile.createMany({
            data: [
                {
                    userDocument: '74214623',
                    fullName: 'Ronny Tito',
                    phoneNumber: '928001030',
                    birthDate: new Date('2004-01-01'),
                    hireDate: new Date('2023-01-01'),
                    salary: 5000.0,
                    emergencyContactName: 'Ana Perez',
                    emergencyContactPhone: '999888777',
                    themeName: 'Claro',
                    createdBy: '',
                },
                {
                    userDocument: '12345678',
                    fullName: 'Pepito Peres',
                    phoneNumber: '999777666',
                    birthDate: new Date('1985-03-15'),
                    hireDate: new Date('2020-02-01'),
                    salary: 4500.0,
                    emergencyContactName: 'Luis Gomez',
                    emergencyContactPhone: '999888666',
                    themeName: 'Oscuro',
                    createdBy: '74214623',
                },
                {
                    userDocument: '11223344',
                    fullName: 'Maria Lopez',
                    phoneNumber: '999777660',
                    birthDate: new Date('1992-07-20'),
                    hireDate: new Date('2021-05-10'),
                    salary: 3800.0,
                    emergencyContactName: 'Carlos Diaz',
                    emergencyContactPhone: '999888555',
                    themeName: 'Claro',
                    createdBy: '74214623',
                },
                {
                    userDocument: '11122233',
                    fullName: 'Carlos Pérez',
                    phoneNumber: '999666555',
                    birthDate: new Date('1995-11-05'),
                    hireDate: new Date('2022-03-15'),
                    salary: 2500.0,
                    emergencyContactName: 'Laura Mendoza',
                    emergencyContactPhone: '999888444',
                    themeName: 'Oscuro',
                    createdBy: '74214623',
                },
                {
                    userDocument: '11112222',
                    fullName: 'Luis Gomez',
                    phoneNumber: '999555444',
                    birthDate: new Date('1993-09-12'),
                    hireDate: new Date('2021-01-05'),
                    salary: 2800.0,
                    emergencyContactName: 'Marta Ruiz',
                    emergencyContactPhone: '999888333',
                    themeName: 'Oscuro',
                    createdBy: '74214623',
                },
            ],
        });

        console.log('✅ Perfiles de usuarios creados exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [userProfileSeed]:', error);
        throw error;
    }
}
