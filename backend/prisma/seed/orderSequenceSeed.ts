// 📂 prisma\seed\orderSequenceSeed.ts

import prisma from '@/lib/prisma';
import { DateTime } from 'luxon';

export async function orderSequenceSeed() {
    try {
        console.log('🟢 Iniciando el seed de [orderSequenceSeed]');
        console.log('🔢 Creando secuencia inicial de órdenes...');

        const today = DateTime.now().setZone('America/Lima');

        // Buscar si ya existe la secuencia para hoy
        const existingSequence = await prisma.orderSequence.findUnique({
            where: {
                sequenceYear_sequenceMonth_sequenceDay: {
                    sequenceYear: today.year,
                    sequenceMonth: today.month,
                    sequenceDay: today.day,
                },
            },
        });

        // Si no existe, crear la secuencia
        if (!existingSequence) {
            await prisma.orderSequence.create({
                data: {
                    sequenceYear: today.year,
                    sequenceMonth: today.month,
                    sequenceDay: today.day,
                    lastOrderNumber: 0,
                },
            });
            console.log('✅ Secuencia de órdenes creada exitosamente.\n');
        } else {
            console.log('ℹ️ Secuencia de órdenes para hoy ya existe.\n');
        }
    } catch (error) {
        console.error('❌ Error en el seed de [orderSequenceSeed]:', error);
        throw error;
    }
}
