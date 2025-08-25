// 📂 src\lib\prisma.ts

import { PrismaClient } from '@/../generated/prisma';
import env from '@/config/env/index';

// Tipamos el global
declare global {
    var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (env?.NODE_ENV !== 'production') {
    global.prisma = prisma;
}

export default prisma;
