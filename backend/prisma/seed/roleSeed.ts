// 📂 prisma\seed\roleSeed.ts

import prisma from '@/lib/prisma';

export async function roleSeed() {
    try {
        console.log('🟢 Iniciando el seed de [roleSeed]');
        console.log('🛡️ Creando roles...');

        await prisma.role.createMany({
            data: [
                {
                    name: 'Super Admin',
                    description: 'Acceso total al sistema (Dev)',
                    color: '#6d27fa',
                    createdBy: '74214623',
                },
                {
                    name: 'Admin',
                    description: 'Acceso total al sistema: configuración, usuarios, caja, reportes',
                    color: '#0ce362',
                    createdBy: '74214623',
                },
                {
                    name: 'Chef',
                    description: 'Ve órdenes y marca ítems como listos. No puede editar ni eliminar',
                    color: '#ffcc34',
                    createdBy: '74214623',
                },
                {
                    name: 'Mozo',
                    description: 'Gestiona mesas, crea órdenes, agrega ítems...',
                    color: '#10b981',
                    createdBy: '74214623',
                },
                {
                    name: 'Barra',
                    description: 'Ve órdenes de bebidas y marca como listas. No puede editar',
                    color: '#8b5cf6',
                    createdBy: '74214623',
                },
                {
                    name: 'Cajero',
                    description: 'Gestiona caja, pagos y emite comprobantes',
                    color: '#f59e0b',
                    createdBy: '74214623',
                },
                {
                    name: 'Supervisor',
                    description: 'Supervisa operaciones, ve reportes, pero no elimina datos',
                    color: '#6b7280',
                    createdBy: '74214623',
                },
            ],
        });

        console.log('✅ Roles creados exitosamente.\n');
    } catch (error) {
        console.log('❌ Error en el seed de [roleSeed]', error);
        throw error;
    }
}
