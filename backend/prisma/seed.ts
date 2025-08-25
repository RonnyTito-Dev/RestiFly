// 📂 prisma\seed.ts

import { documentTypeSeed } from './seed/documentTypeSeed';
import { accountStatusSeed } from './seed/accountStatusSeed';
import { orderStatusSeed } from './seed/orderStatusSeed';
import { orderItemStatusSeed } from './seed/orderItemStatusSeed';
import { commandStatusSeed } from './seed/commandStatusSeed';
import { tableStatusSeed } from './seed/tableStatusSeed';
import { inventoryMovementTypeSeed } from './seed/inventoryMovementTypeSeed';
import { cashBoxMovementTypeSeed } from './seed/cashBoxMovementTypeSeed';
import { productStatusSeed } from './seed/productStatusSeed';

import { permissionCategorySeed } from './seed/permissionCategorySeed';
import { permissionSeed } from './seed/permissionSeed';
import { roleSeed } from './seed/roleSeed';
import { rolePermissionSeed } from './seed/rolePermissionSeed';

import { themeSeed } from './seed/themeSeed';
import { brandSeed } from './seed/brandSeed';
import { productTypeSeed } from './seed/productTypeSeed';
import { productCategorySeed } from './seed/productCategorySeed';
import { paymentMethodSeed } from './seed/paymentMethodSeed';
import { restaurantZoneSeed } from './seed/restaurantZoneSeed';

import { imageSeed } from './seed/imageSeed';

import { restaurantConfigSeed } from './seed/restaurantConfigSeed';

import { userSeed } from './seed/userSeeder';
import { userProfileSeed } from './seed/userProfileSeed';

import { customerSeed } from './seed/customerSeed';
import { customerProfileSeed } from './seed/customerProfileSeeder';

import { productSeed } from './seed/productSeed';
import { inventorySeed } from './seed/inventorySeed';

import { tableSeed } from './seed/tableSeed';
import { combineTableSeed } from './seed/combineTableSeed';

import { orderSequenceSeed } from './seed/orderSequenceSeed';

import { cashBoxSeed } from './seed/cashBoxSeed';

import { commandSeed } from './seed/commandSeed';
import { orderSeed } from './seed/orderSeed';
import { orderItemSeed } from './seed/orderItemSeed';
import { paymentSeed } from './seed/paymentSeed';

import { inventoryMovementSeed } from './seed/inventoryMovementSeed';
import { cashBoxMovementSeed } from './seed/cashBoxMovementSeed';

import { sessionSeed } from './seed/sessionSeed';
import { logSeed } from './seed/logSeed';

async function main() {
    console.log('\n🌱 Iniciando seeding de Restifly... \n');

    // 1. DATOS BASE (CORE) - Sin dependencias
    await documentTypeSeed();
    await accountStatusSeed();
    await orderStatusSeed();
    await orderItemStatusSeed();
    await commandStatusSeed();
    await tableStatusSeed();
    await inventoryMovementTypeSeed();
    await cashBoxMovementTypeSeed();
    await productStatusSeed();

    // 2. PERMISOS Y ROLES
    await permissionCategorySeed();
    await permissionSeed();
    await roleSeed();
    await rolePermissionSeed();

    // 3. CATEGORÍAS Y CONFIGURACIÓN
    await themeSeed();
    await brandSeed();
    await productTypeSeed();
    await productCategorySeed();
    await paymentMethodSeed();
    await restaurantZoneSeed();

    // 4. IMÁGENES (ahora pueden usarse)
    await imageSeed();

    // 5. CONFIGURACIÓN PRINCIPAL
    await restaurantConfigSeed(); // Puede usar imageId

    // 6. USUARIOS Y CLIENTES
    await userSeed();
    await userProfileSeed();
    await customerSeed();
    await customerProfileSeed();

    // 7. PRODUCTOS E INVENTARIO
    await productSeed();
    await inventorySeed();

    // 8. MESAS Y ZONAS
    await tableSeed();
    await combineTableSeed();

    // 9. SECUENCIAS Y CAJA
    await orderSequenceSeed();
    await cashBoxSeed();

    // 10. COMANDAS, ÓRDENES Y PAGOS
    await commandSeed();
    await orderSeed();
    await orderItemSeed();
    await paymentSeed();

    // 11. MOVIMIENTOS (INVENTARIO Y CAJA)
    await inventoryMovementSeed();
    await cashBoxMovementSeed();

    // 12. AUDITORÍA Y SESIONES
    await sessionSeed();
    await logSeed();

    console.log('\n✅ El seeding de Restifly ha culminado exitosamente \n');
}

main();
