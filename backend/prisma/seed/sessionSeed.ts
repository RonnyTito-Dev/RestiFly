// 📂 prisma\seed\sessionSeed.ts

import prisma from '@/lib/prisma';
import { v4 as uuidv4 } from 'uuid';

export async function sessionSeed() {
    try {
        console.log('🟢 Iniciando el seed de [sessionSeed]');
        console.log('🔐 Creando sesiones de usuario y cliente...');

        await prisma.session.createMany({
            data: [
                {
                    id: uuidv4(),
                    userDocumentNumber: '11122233',
                    token: 'token_mozo_123',
                    deviceInfo: 'Chrome 128 / Windows 11',
                    ipAddress: '192.168.1.100',
                    isActive: true,
                    expiresAt: new Date(Date.now() + 45 * 60 * 1000), // 45 minutos
                    createdBy: '74214623',
                },
                {
                    id: uuidv4(),
                    userDocumentNumber: '11223344',
                    token: 'token_cajero_456',
                    deviceInfo: 'Firefox 128 / Linux',
                    ipAddress: '192.168.1.101',
                    isActive: true,
                    expiresAt: new Date(Date.now() + 15 * 60 * 1000), // 15 minutos
                    createdBy: '74214623',
                },
                {
                    id: uuidv4(),
                    customerDocumentNumber: '40812800',
                    token: 'token_cliente_789',
                    deviceInfo: 'iPhone 15 / Safari',
                    ipAddress: '200.123.45.67',
                    isActive: true,
                    expiresAt: new Date(Date.now() + 20 * 60 * 1000), // 20 minutos
                    createdBy: '74214623',
                },
            ],
        });

        console.log('✅ Sesiones creadas exitosamente.\n');
    } catch (error) {
        console.error('❌ Error en el seed de [sessionSeed]:', error);
        throw error;
    }
}
