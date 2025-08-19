// 📂 prisma\seed\permissionCategorySeed.ts

import prisma from '@/lib/prisma';

export async function permissionCategorySeed() {
    try {
        console.log('🟢 Iniciando el seed de [permissionCategorySeed]');
        console.log('📂 Creando categorías de permisos...');

        await prisma.permissionCategory.createMany({
            data: [
                // === Categoria para Gestion de Sistema ===
                {
                    code: 'system_settings',
                    name: 'Configuración del Sistema',
                    description:
                        'Gestión de configuración general, temas, tipos de documento, estados, roles, permisos y secuencias',
                    color: '#1f1873',
                    createdBy: '74214623',
                },

                // === Categoria para Gestion de Usuarios ===
                {
                    code: 'user_management',
                    name: 'Gestión de Usuarios',
                    description: 'Crear, editar, desactivar usuarios y asignar roles.',
                    color: '#1658ff',
                    createdBy: '74214623',
                },

                // === Categoria para Gestion de Clientes ===
                {
                    code: 'customer_management',
                    name: 'Gestión de Clientes',
                    description: 'Administrar clientes, historial, sesiones y órdenes.',
                    color: '#60a5fa',
                    createdBy: '74214623',
                },

                // === Categoria para Gestion de Sesiones ===
                {
                    code: 'session_management',
                    name: 'Gestión de Sesiones',
                    description: 'Ver, cerrar y auditar sesiones de usuarios y clientes',
                    color: '#b2c943',
                    createdBy: '74214623',
                },

                // === Categoria para Gestion de Mesas ===
                {
                    code: 'table_management',
                    name: 'Gestión de Mesas',
                    description: 'Gestionar mesas, zonas, estados, sesiones, combinación de mesas y flujos asociados',
                    color: '#4b3a0d',
                    createdBy: '74214623',
                },

                // === Categoria para Gestion de Productos ===
                {
                    code: 'product_management',
                    name: 'Gestión de Productos',
                    description: 'Administrar productos, categorías, marcas, tipos, estados y precios',
                    color: '#f97316',
                    createdBy: '74214623',
                },

                // === Categoria para Gestion de Ordenes ===
                {
                    code: 'order_management',
                    name: 'Gestión de Ordenes (Pedidos)',
                    description: 'Crear, modificar, anular órdenes, gestionar ítems y estados',
                    color: '#f87171',
                    createdBy: '74214623',
                },

                // === Categoria para Gestion de Inventario ===
                {
                    code: 'inventory_management',
                    name: 'Gestión de Inventario',
                    description: 'Controlar stock, movimientos, ajustes y tipos de movimiento',
                    color: '#6366f1',
                    createdBy: '74214623',
                },

                // === Categoria para Gestion de Caja ===
                {
                    code: 'cashbox_management',
                    name: 'Gestión de Caja',
                    description: 'Abrir, cerrar cajas, registrar fondos iniciales y auditorías',
                    color: '#4ade80',
                    createdBy: '74214623',
                },

                // === Categoria para Gestion de Pagos ===
                {
                    code: 'payment_management',
                    name: 'Gestión de Pagos',
                    description: 'Registrar pagos, métodos de pago y transacciones',
                    color: '#94a3b8',
                    createdBy: '74214623',
                },

                // === Categoria para Gestion de Logs ===
                {
                    code: 'audit_log',
                    name: 'Auditoría del Sistema',
                    description: 'Ver y exportar registros de actividad (logs) del sistema.',
                    color: '#a3e635',
                    createdBy: '74214623',
                },

                // === Categoria para Gestion de Imagenes ===
                {
                    code: 'image_management',
                    name: 'Gestión de Imágenes',
                    description: 'Subir, eliminar y restaurar imágenes del sistema.',
                    color: '#854d0e',
                    createdBy: '74214623',
                },
            ],
        });

        console.log('✅ Categorías de permisos creadas exitosamente. \n');
    } catch (error) {
        console.log('❌ Error en el seed de [permissionCategorySeed]', error);
        throw error;
    }
}
