// 📂 prisma\seed.ts

import { restaurantConfigSeed } from './seed/restaurantConfigSeed';
import { permissionCategorySeed } from './seed/permissionCategorySeed';
import { permissionSeed } from './seed/permissionSeed';
import { roleSeed } from './seed/roleSeed';
import { rolePermissionSeed } from './seed/rolePermissionSeed';
import { accounStatusSeed } from './seed/accountStatusSeed';
import { documentTypeSeed } from './seed/documentTypeSeed';
import { tableStatusSeed } from './seed/tableStatusSeed';
import { restaurantZoneSeed } from './seed/restaurantZoneSeed';
import { productStatusSeed } from './seed/productStatusSeed';
import { productTypeSeed } from './seed/productTypeSeed';
import { productCategorySeed } from './seed/productCategorySeed';
import { brandSeed } from './seed/brandSeed';
import { paymentMethodSeed } from './seed/paymentMethodSeed';
import { inventoryMovementTypeSeed } from './seed/inventoryMovementTypeSeed';
import { themeSeed } from './seed/themeSeed';

import { userSeed } from './seed/userSeeder';
import { customerSeed } from './seed/customerSeed';

import { productSeed } from './seed/productSeed';
import { inventorySeed } from './seed/inventorySeed';

import { tableSeed } from './seed/tableSeed';
import { combineTableSeed } from './seed/combineTableSeed';
import { tableSessionSeed } from './seed/tableSessionSeed';

import { orderStatusSeed } from './seed/orderStatusSeed';
import { orderItemStatusSeed } from './seed/orderItemStatusSeed';
import { orderSequenceSeed } from './seed/orderSequenceSeed';

import { cashBoxSeed } from './seed/cashBoxSeed';

import { orderSeed } from './seed/orderSeed';
import { orderItemSeed } from './seed/orderItemSeed';
import { paymentSeed } from './seed/paymentSeed';

import { imageSeed } from './seed/imageSeed';
import { sessionSeed } from './seed/sessionSeed';
import { logSeed } from './seed/logSeed';

async function main() {
    console.log('\n🌱 Iniciando seeding de Restifly... \n');

    // 1. Configuracion del sistema
    await restaurantConfigSeed();

    // 2. Permisos y roles
    await permissionCategorySeed();
    await permissionSeed();
    await roleSeed();
    await rolePermissionSeed();

    // 3. Caracteristicas base
    await accounStatusSeed();
    await documentTypeSeed();
    await tableStatusSeed();
    await restaurantZoneSeed();
    await productStatusSeed();
    await productTypeSeed();
    await productCategorySeed();
    await brandSeed();
    await paymentMethodSeed();
    await inventoryMovementTypeSeed();
    await themeSeed();

    // 4. Usuarios y clientes
    await userSeed();
    await customerSeed();

    // 5. Productos e inventario
    await productSeed();
    await inventorySeed();

    // 6. Mesas
    await tableSeed();
    await combineTableSeed();
    await tableSessionSeed();

    // 7. Estados de órdenes
    await orderStatusSeed();
    await orderItemStatusSeed();
    await orderSequenceSeed();

    // 8. Caja
    await cashBoxSeed();

    // 9. Órdenes y pagos
    await orderSeed();
    await orderItemSeed();
    await paymentSeed();

    // 10. Auditoría
    await imageSeed();
    await sessionSeed();
    await logSeed();

    console.log('\n✅ El seeding de Restifly a culminado exitosamente \n');
}

main();
