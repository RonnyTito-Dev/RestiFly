import prisma from './src/lib/prisma';

(async () => {
    const result = await prisma.user.findMany();
    console.log(result);
})();
