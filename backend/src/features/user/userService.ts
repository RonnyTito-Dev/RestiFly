// 📂 backend\src\features\user\userService.ts

import prisma from '@/lib/prisma';

// ============================ Metodos GET =============================

// ====================== Obtner todos los usuarios ======================
export async function getAll() {
    return await prisma.user.findMany();
}
