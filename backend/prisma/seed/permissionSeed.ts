// 📂 prisma\seed\permissionSeed.ts

import prisma from '@/lib/prisma';

export async function permissionSeed() {
    try {
        console.log('🟢 Iniciando el seed de [permissionSeed]');
        console.log('🔐 Creando permisos...');

        await prisma.permission.createMany({
            data: [
                // ========================================================================
                // ================= GESTION DE CONFIGURACIÓN DEL SISTEMA =================
                // ========================================================================

                // === GESTIÓN DE CONFIGURACION DEL RESTAURANT ===
                {
                    code: 'view_restaurant_config',
                    name: 'Ver Configuración del Restaurante',
                    description: 'Permite visualizar los datos generales de configuración del restaurante',
                    categoryCode: 'system_settings',
                    createdBy: '74214623',
                },
                {
                    code: 'edit_restaurant_config',
                    name: 'Editar Configuración del Restaurante',
                    description: 'Permite modificar los datos generales de configuración del restaurante',
                    categoryCode: 'system_settings',
                    createdBy: '74214623',
                },

                // === GESTIÓN DE TEMAS ===
                {
                    code: 'view_all_theme',
                    name: 'Ver Todos los Temas',
                    description: 'Permite visualizar todos los temas del Sistema y Creados',
                    categoryCode: 'system_settings',
                    createdBy: '74214623',
                },
                {
                    code: 'view_public_theme',
                    name: 'Ver Temas Públicos',
                    description:
                        'Permite visualizar los temas marcados como públicos que pueden ser seleccionados por usuarios',
                    categoryCode: 'system_settings',
                    createdBy: '74214623',
                },
                {
                    code: 'create_theme',
                    name: 'Crear Tema',
                    description: 'Permite registrar un nuevo tema en el sistema',
                    categoryCode: 'system_settings',
                    createdBy: '74214623',
                },
                {
                    code: 'update_theme',
                    name: 'Editar Tema',
                    description: 'Permite modificar los datos de un tema existente',
                    categoryCode: 'system_settings',
                    createdBy: '74214623',
                },
                {
                    code: 'delete_theme',
                    name: 'Eliminar Tema',
                    description: 'Permite eliminar un tema creado por el usuario (no system)',
                    categoryCode: 'system_settings',
                    createdBy: '74214623',
                },
                {
                    code: 'restore_theme',
                    name: 'Restaurar Tema',
                    description: 'Permite restaurar temas eliminados',
                    categoryCode: 'system_settings',
                    createdBy: '74214623',
                },

                // === GESTIÓN DE TIPOS DOCUMENTOS ===
                {
                    code: 'view_document_type',
                    name: 'Ver Tipos de Documento',
                    description: 'Visualizar lista de tipos de documento',
                    categoryCode: 'system_settings',
                    createdBy: '74214623',
                },
                {
                    code: 'create_document_type',
                    name: 'Crear Tipo de Documento',
                    description: 'Registrar un nuevo tipo de documento en el sistema',
                    categoryCode: 'system_settings',
                    createdBy: '74214623',
                },
                {
                    code: 'update_document_type',
                    name: 'Editar Tipo de Documento',
                    description: 'Modificar datos de un tipo de documento existente',
                    categoryCode: 'system_settings',
                    createdBy: '74214623',
                },
                {
                    code: 'delete_document_type',
                    name: 'Eliminar Tipo de Documento',
                    description: 'Eliminar un tipo de documento del sistema',
                    categoryCode: 'system_settings',
                    createdBy: '74214623',
                },
                {
                    code: 'restore_document_type',
                    name: 'Restaurar Tipo de Documento',
                    description: 'Recuperar un tipo de documento eliminado',
                    categoryCode: 'system_settings',
                    createdBy: '74214623',
                },

                // === GESTIÓN DE ESTADOS DE CUENTA ===
                {
                    code: 'view_account_status',
                    name: 'Ver Estados de Cuenta',
                    description: 'Visualizar lista de estados de cuenta',
                    categoryCode: 'system_settings',
                    createdBy: '74214623',
                },
                {
                    code: 'update_account_status',
                    name: 'Editar Estados de Cuenta',
                    description: 'Modificar nombre o descripción de estados de cuenta',
                    categoryCode: 'system_settings',
                    createdBy: '74214623',
                },

                // === GESTIÓN DE CATEGORIA DE PERMISOS ===
                {
                    code: 'view_permission_category',
                    name: 'Ver Categorías de Permisos',
                    description: 'Visualizar categorías de permisos del sistema',
                    categoryCode: 'system_settings',
                    createdBy: '74214623',
                },
                {
                    code: 'update_permission_category',
                    name: 'Actualizar Categorías de Permisos',
                    description: 'Modificar nombre o descripción de categorías de permisos',
                    categoryCode: 'system_settings',
                    createdBy: '74214623',
                },

                // === GESTIÓN DE PERMISOS ===
                {
                    code: 'view_permission',
                    name: 'Ver Permisos',
                    description: 'Visualizar permisos configurados en el sistema',
                    categoryCode: 'system_settings',
                    createdBy: '74214623',
                },
                {
                    code: 'update_permission',
                    name: 'Actualizar Permisos',
                    description: 'Modificar nombre o descripción de permisos',
                    categoryCode: 'system_settings',
                    createdBy: '74214623',
                },

                // === GESTIÓN DE ROLES ===
                {
                    code: 'view_role',
                    name: 'Ver Roles',
                    description: 'Visualizar la lista y detalles de roles',
                    categoryCode: 'system_settings',
                    createdBy: '74214623',
                },
                {
                    code: 'create_role',
                    name: 'Crear Rol',
                    description: 'Registrar nuevos roles en el sistema',
                    categoryCode: 'system_settings',
                    createdBy: '74214623',
                },
                {
                    code: 'update_role',
                    name: 'Actualizar Rol',
                    description: 'Editar la información de un rol existente',
                    categoryCode: 'system_settings',
                    createdBy: '74214623',
                },
                {
                    code: 'delete_role',
                    name: 'Eliminar Rol',
                    description: 'Eliminar un rol',
                    categoryCode: 'system_settings',
                    createdBy: '74214623',
                },
                {
                    code: 'restore_role',
                    name: 'Restaurar Rol',
                    description: 'Recuperar un rol eliminado previamente',
                    categoryCode: 'system_settings',
                    createdBy: '74214623',
                },
                {
                    code: 'assign_permissions_to_role',
                    name: 'Asignar Permisos a Rol',
                    description: 'Asignar, quitar o modificar permisos asociados a un rol',
                    categoryCode: 'system_settings',
                    createdBy: '74214623',
                },

                // === GESTION DE SECUENCIA DE ORDENES ===
                {
                    code: 'view_order_sequence',
                    name: 'Ver Secuencia de Ordenes',
                    description: 'Permite visualizar los registros de secuencia de órdenes (auditoria)',
                    categoryCode: 'system_settings',
                    createdBy: '74214623',
                },
                {
                    code: 'edit_order_sequence',
                    name: 'Editar Secuencia de Ordenes',
                    description: 'Permite ajustar manualmente la secuencia de ordenes',
                    categoryCode: 'system_settings',
                    createdBy: '74214623',
                },

                // ========================================================================
                // ======================== GESTION DE USUARIOS =======================
                // ========================================================================

                // === GESTIÓN DE USUARIOS ===
                {
                    code: 'view_user',
                    name: 'Ver Usuarios',
                    description: 'Visualizar lista de usuarios del sistema',
                    categoryCode: 'user_management',
                    createdBy: '74214623',
                },
                {
                    code: 'create_user',
                    name: 'Crear Usuarios',
                    description: 'Crear nuevos usuarios en el sistema',
                    categoryCode: 'user_management',
                    createdBy: '74214623',
                },
                {
                    code: 'update_user',
                    name: 'Editar Usuarios',
                    description: 'Modificar datos de usuarios existentes',
                    categoryCode: 'user_management',
                    createdBy: '74214623',
                },
                {
                    code: 'delete_user',
                    name: 'Eliminar Usuarios',
                    description: 'Eliminar usuarios del sistema',
                    categoryCode: 'user_management',
                    createdBy: '74214623',
                },
                {
                    code: 'restore_user',
                    name: 'Restaurar Usuarios',
                    description: 'Restaurar usuarios eliminados',
                    categoryCode: 'user_management',
                    createdBy: '74214623',
                },
                {
                    code: 'manage_user_status',
                    name: 'Gestionar Estado de Usuario',
                    description: 'Modificar estados de usuarios',
                    categoryCode: 'user_management',
                    createdBy: '12345678',
                },
                {
                    code: 'manage_user_role',
                    name: 'Gestionar Roles de Usuario',
                    description: 'Asignar, modificar y quitar roles de usuarios',
                    categoryCode: 'user_management',
                    createdBy: '74214623',
                },
                {
                    code: 'manage_user_session',
                    name: 'Gestionar Sesiones de Usuarios',
                    description: 'Ver y cerrar sesiones de usuarios',
                    categoryCode: 'user_management',
                    createdBy: '12345678',
                },

                // ========================================================================
                // ======================== GESTION DE CLIENTES =======================
                // ========================================================================

                // === GESTIÓN DE CLIENTES ===
                {
                    code: 'view_customer',
                    name: 'Ver Clientes',
                    description: 'Visualizar lista de clientes',
                    categoryCode: 'customer_management',
                    createdBy: '12345678',
                },
                {
                    code: 'create_customer',
                    name: 'Crear Clientes',
                    description: 'Registrar nuevos clientes',
                    categoryCode: 'customer_management',
                    createdBy: '12345678',
                },
                {
                    code: 'update_customer',
                    name: 'Editar Clientes',
                    description: 'Modificar datos de clientes existentes',
                    categoryCode: 'customer_management',
                    createdBy: '12345678',
                },
                {
                    code: 'delete_customer',
                    name: 'Eliminar Clientes',
                    description: 'Eliminar clientes del sistema',
                    categoryCode: 'customer_management',
                    createdBy: '12345678',
                },
                {
                    code: 'restore_customer',
                    name: 'Restaurar Clientes',
                    description: 'Restaurar clientes eliminados',
                    categoryCode: 'customer_management',
                    createdBy: '74214623',
                },
                {
                    code: 'manage_customer_status',
                    name: 'Gestionar Estado de Clientes',
                    description: 'Modificar estado de cuentas de clientes',
                    categoryCode: 'customer_management',
                    createdBy: '12345678',
                },
                {
                    code: 'manage_customer_session',
                    name: 'Gestionar Sesiones de Clientes',
                    description: 'Ver y cerrar sesiones de clientes',
                    categoryCode: 'customer_management',
                    createdBy: '12345678',
                },
                {
                    code: 'view_customer_orders',
                    name: 'Ver Ordenes de Cliente',
                    description: 'Visualizar historial de ordenes por cliente',
                    categoryCode: 'customer_management',
                    createdBy: '12345678',
                },

                // === GESTIÓN REPORTES ===
                {
                    code: 'generate_customer_report',
                    name: 'Generar Reporte de Clientes',
                    description: 'Permite generar reportes de clientes frecuentes, historial, etc.',
                    categoryCode: 'customer_management',
                    createdBy: '74214623',
                },

                // ========================================================================
                // ======================== GESTION DE MESAS =======================
                // ========================================================================

                // === GESTIÓN DE ESTADOS DE MESAS ===
                {
                    code: 'view_table_status',
                    name: 'Ver Estados de Mesa',
                    description: 'Permite visualizar la lista de estados de las mesas',
                    categoryCode: 'table_management',
                    createdBy: '74214623',
                },
                {
                    code: 'edit_table_status',
                    name: 'Editar Estados de Mesa',
                    description: 'Permite modificar el nombre, color y descripción de los estados de las mesas',
                    categoryCode: 'table_management',
                    createdBy: '74214623',
                },

                // === GESTIÓN DE ZONAS DEL RESTAURANT ===
                {
                    code: 'view_restaurant_zone',
                    name: 'Ver Zonas de Restaurante',
                    description: 'Permite visualizar la lista de zonas del restaurante',
                    categoryCode: 'table_management',
                    createdBy: '74214623',
                },
                {
                    code: 'create_restaurant_zone',
                    name: 'Crear Zona de Restaurante',
                    description: 'Permite registrar nuevas zonas dentro del restaurante',
                    categoryCode: 'table_management',
                    createdBy: '74214623',
                },
                {
                    code: 'edit_restaurant_zone',
                    name: 'Editar Zona de Restaurante',
                    description: 'Permite modificar el nombre, color y descripción de una zona existente',
                    categoryCode: 'table_management',
                    createdBy: '74214623',
                },
                {
                    code: 'delete_restaurant_zone',
                    name: 'Eliminar Zona de Restaurante',
                    description: 'Permite eliminar una zona del restaurante',
                    categoryCode: 'table_management',
                    createdBy: '74214623',
                },
                {
                    code: 'restore_restaurant_zone',
                    name: 'Restaurar Zona de Restaurante',
                    description: 'Restaurar una zona del restaurante eliminada',
                    categoryCode: 'table_management',
                    createdBy: '74214623',
                },

                // === GESTIÓN DE MESAS ===
                {
                    code: 'view_table',
                    name: 'Ver Mesas',
                    description: 'Permite visualizar la lista de mesas del restaurante',
                    categoryCode: 'table_management',
                    createdBy: '74214623',
                },
                {
                    code: 'create_table',
                    name: 'Crear Mesa',
                    description: 'Permite registrar nuevas mesas dentro del restaurant',
                    categoryCode: 'table_management',
                    createdBy: '74214623',
                },
                {
                    code: 'edit_table',
                    name: 'Editar Mesa',
                    description: 'Permite modificar el nombre, capacidad o zona asignada de una mesa',
                    categoryCode: 'table_management',
                    createdBy: '74214623',
                },
                {
                    code: 'delete_table',
                    name: 'Eliminar Mesa',
                    description: 'Permite eliminar una mesa del restaurante',
                    categoryCode: 'table_management',
                    createdBy: '74214623',
                },
                {
                    code: 'restore_table',
                    name: 'Restaurar Mesa',
                    description: 'Permite restaurar una mesa eliminada',
                    categoryCode: 'table_management',
                    createdBy: '74214623',
                },
                {
                    code: 'assign_zone_table',
                    name: 'Asignar Mesa a Zona',
                    description: 'Permite asignar o cambiar una mesa de zona',
                    categoryCode: 'table_management',
                    createdBy: '74214623',
                },
                {
                    code: 'change_status_table',
                    name: 'Cambiar Estado de Mesa',
                    description: 'Permite cambiar el estado de una mesa (disponible, ocupada, en limpieza, etc.)',
                    categoryCode: 'table_management',
                    createdBy: '74214623',
                },

                // === GESTIÓN DE MESAS COMBINADAS ===
                {
                    code: 'view_combine_table',
                    name: 'Ver Mesas Combinadas',
                    description: 'Permite visualizar la lista de combinaciones de mesas',
                    categoryCode: 'table_management',
                    createdBy: '74214623',
                },
                {
                    code: 'create_combine_table',
                    name: 'Combinar Mesas',
                    description: 'Permite crear un grupo de mesas combinadas',
                    categoryCode: 'table_management',
                    createdBy: '74214623',
                },
                {
                    code: 'release_combine_table',
                    name: 'Liberar Mesas Combinadas',
                    description: 'Permite liberar y desarmar combinaciones de mesas',
                    categoryCode: 'table_management',
                    createdBy: '74214623',
                },
                {
                    code: 'delete_combine_table',
                    name: 'Eliminar Mesas Combinadas',
                    description: 'Permite eliminar un registro histórico de mesas combinadas',
                    categoryCode: 'table_management',
                    createdBy: '74214623',
                },
                {
                    code: 'restore_combine_table',
                    name: 'Restaurar Mesas Combinadas',
                    description: 'Permite restaurar un grupo de mesas combinadas eliminadas',
                    categoryCode: 'table_management',
                    createdBy: '74214623',
                },

                // === GESTIÓN DE SESIONES DE MESA ===
                {
                    code: 'view_table_session',
                    name: 'Ver Sesiones de Mesa',
                    description: 'Permite visualizar la lista de sesiones activas e históricas de mesas',
                    categoryCode: 'table_management',
                    createdBy: '74214623',
                },
                {
                    code: 'open_table_session',
                    name: 'Abrir Sesión de Mesa',
                    description: 'Permite abrir una sesión en una mesa o mesa combinada',
                    categoryCode: 'table_management',
                    createdBy: '74214623',
                },
                {
                    code: 'edit_table_session',
                    name: 'Editar Sesión de Mesa',
                    description: 'Permite modificar información de la sesión como número de personas',
                    categoryCode: 'table_management',
                    createdBy: '74214623',
                },
                {
                    code: 'close_table_session',
                    name: 'Cerrar Sesión de Mesa',
                    description: 'Permite cerrar una sesión de mesa o mesa combinada',
                    categoryCode: 'table_management',
                    createdBy: '74214623',
                },
                {
                    code: 'delete_table_session',
                    name: 'Eliminar Sesión de Mesa',
                    description: 'Permite eliminar un registro de sesión de mesa',
                    categoryCode: 'table_management',
                    createdBy: '74214623',
                },
                {
                    code: 'restore_table_session',
                    name: 'Restaurar Sesión de Mesa',
                    description: 'Permite restaurar una sesión eliminada',
                    categoryCode: 'table_management',
                    createdBy: '74214623',
                },

                // ========================================================================
                // ======================== GESTION DE IMAGENES =======================
                // ========================================================================

                // === GESTIÓN DE IMÁGENES ===
                {
                    code: 'view_image',
                    name: 'Ver Imágenes',
                    description: 'Permite visualizar la lista de imágenes',
                    categoryCode: 'image_management',
                    createdBy: '74214623',
                },
                {
                    code: 'delete_image',
                    name: 'Eliminar Imagen',
                    description: 'Permite eliminar una imagen del sistema',
                    categoryCode: 'image_management',
                    createdBy: '74214623',
                },
                {
                    code: 'restore_image',
                    name: 'Restaurar Imagen',
                    description: 'Permite restaurar una imagen previamente eliminada',
                    categoryCode: 'image_management',
                    createdBy: '74214623',
                },

                // ========================================================================
                // ======================== GESTION DE PRODUCTOS =======================
                // ========================================================================

                // === GESTIÓN DE MARCAS ===
                {
                    code: 'view_brand',
                    name: 'Ver Marcas',
                    description: 'Permite visualizar la lista de marcas de productos',
                    categoryCode: 'product_management',
                    createdBy: '74214623',
                },
                {
                    code: 'create_brand',
                    name: 'Crear Marca',
                    description: 'Permite registrar nuevas marcas de productos',
                    categoryCode: 'product_management',
                    createdBy: '74214623',
                },
                {
                    code: 'edit_brand',
                    name: 'Editar Marca',
                    description: 'Permite modificar nombre, color y descripción de una marca',
                    categoryCode: 'product_management',
                    createdBy: '74214623',
                },
                {
                    code: 'delete_brand',
                    name: 'Eliminar Marca',
                    description: 'Permite desactivar o eliminar una marca',
                    categoryCode: 'product_management',
                    createdBy: '74214623',
                },
                {
                    code: 'restore_brand',
                    name: 'Restaurar Marca',
                    description: 'Permite restaurar una marca eliminada',
                    categoryCode: 'product_management',
                    createdBy: '74214623',
                },

                // === GESTIÓN DE ESTADOS DE PRODUCTO ===
                {
                    code: 'view_product_status',
                    name: 'Ver Estados de Producto',
                    description: 'Permite listar los estados de los productos',
                    categoryCode: 'product_management',
                    createdBy: '74214623',
                },
                {
                    code: 'edit_product_status',
                    name: 'Editar Estado de Producto',
                    description: 'Permite modificar el nombre, descripcion y color de un estado',
                    categoryCode: 'product_management',
                    createdBy: '74214623',
                },

                // === GESTIÓN DE TIPOS DE PRODUCTO ===
                {
                    code: 'view_product_type',
                    name: 'Ver Tipos de Producto',
                    description: 'Permite listar los tipos de producto (Platos, Bebidas, etc.)',
                    categoryCode: 'product_management',
                    createdBy: '74214623',
                },
                {
                    code: 'create_product_type',
                    name: 'Crear Tipo de Producto',
                    description: 'Permite registrar un nuevo tipo de producto',
                    categoryCode: 'product_management',
                    createdBy: '74214623',
                },
                {
                    code: 'edit_product_type',
                    name: 'Editar Tipo de Producto',
                    description: 'Permite modificar nombre, descripción y color de un tipo',
                    categoryCode: 'product_management',
                    createdBy: '74214623',
                },
                {
                    code: 'delete_product_type',
                    name: 'Eliminar Tipo de Producto',
                    description: 'Permite eliminar un tipo de producto',
                    categoryCode: 'product_management',
                    createdBy: '74214623',
                },
                {
                    code: 'restore_product_type',
                    name: 'Restaurar Tipo de Producto',
                    description: 'Permite restaurar un tipo de producto eliminado',
                    categoryCode: 'product_management',
                    createdBy: '74214623',
                },

                // === GESTIÓN DE CATEGORÍAS DE PRODUCTO ===
                {
                    code: 'view_product_category',
                    name: 'Ver Categorías de Producto',
                    description: 'Permite listar las categorías de productos',
                    categoryCode: 'product_management',
                    createdBy: '74214623',
                },
                {
                    code: 'create_product_category',
                    name: 'Crear Categoría de Producto',
                    description: 'Permite registrar una nueva categoría de producto',
                    categoryCode: 'product_management',
                    createdBy: '74214623',
                },
                {
                    code: 'edit_product_category',
                    name: 'Editar Categoría de Producto',
                    description: 'Permite modificar nombre, descripción y color de una categoría',
                    categoryCode: 'product_management',
                    createdBy: '74214623',
                },
                {
                    code: 'delete_product_category',
                    name: 'Eliminar Categoría de Producto',
                    description: 'Permite eliminar una categoría de producto',
                    categoryCode: 'product_management',
                    createdBy: '74214623',
                },
                {
                    code: 'restore_product_category',
                    name: 'Restaurar Categoría de Producto',
                    description: 'Permite restaurar una categoría eliminada',
                    categoryCode: 'product_management',
                    createdBy: '74214623',
                },

                // === GESTIÓN DE PRODUCTOS ===
                {
                    code: 'view_product',
                    name: 'Ver Productos',
                    description: 'Permite listar productos registrados',
                    categoryCode: 'product_management',
                    createdBy: '74214623',
                },
                {
                    code: 'create_product',
                    name: 'Crear Producto',
                    description:
                        'Permite registrar nuevos productos (requiere permisos para seleccionar tipo, categoría, marca y estado)',
                    categoryCode: 'product_management',
                    createdBy: '74214623',
                },
                {
                    code: 'edit_product',
                    name: 'Editar Producto',
                    description: 'Permite modificar nombre, descripción, precio y asignaciones de un producto',
                    categoryCode: 'product_management',
                    createdBy: '74214623',
                },
                {
                    code: 'delete_product',
                    name: 'Eliminar Producto',
                    description: 'Permite eliminar o desactivar un producto',
                    categoryCode: 'product_management',
                    createdBy: '74214623',
                },
                {
                    code: 'restore_product',
                    name: 'Restaurar Producto',
                    description: 'Permite restaurar un producto eliminado',
                    categoryCode: 'product_management',
                    createdBy: '74214623',
                },

                // === GENERAR REPORTE ===
                {
                    code: 'generate_product_report',
                    name: 'Generar Reporte de Productos',
                    description: 'Permite generar reportes de productos más vendidos, menos vendidos, etc.',
                    categoryCode: 'product_management',
                    createdBy: '74214623',
                },

                // ========================================================================
                // ===================== GESTION DE ORDENES (PEDIDOS) =====================
                // ========================================================================

                // === GESTIÓN DE ESTADOS DE ORDEN ===
                {
                    code: 'view_order_status',
                    name: 'Ver Estados de Orden',
                    description: 'Permite visualizar los estados disponibles para las órdenes',
                    categoryCode: 'order_management',
                    createdBy: '74214623',
                },
                {
                    code: 'edit_order_status',
                    name: 'Editar Estados de Orden',
                    description: 'Permite modificar nombre, descripcion o color de un estado de orden',
                    categoryCode: 'order_management',
                    createdBy: '74214623',
                },

                // === GESTIÓN DE ESTADOS DE ITEMS DE ORDEN ===
                {
                    code: 'view_order_item_status',
                    name: 'Ver Estados de Ítems de Orden',
                    description: 'Permite visualizar los estados disponibles para los ítems de pedido',
                    categoryCode: 'order_management',
                    createdBy: '74214623',
                },
                {
                    code: 'edit_order_item_status',
                    name: 'Editar Estados de Ítems de Orden',
                    description: 'Permite modificar nombre, descripción o color de un estado de ítem',
                    categoryCode: 'order_management',
                    createdBy: '74214623',
                },

                // === GESTIÓN DE ÓRDENES ===
                {
                    code: 'view_order',
                    name: 'Ver Órdenes',
                    description: 'Permite visualizar la lista de órdenes registradas',
                    categoryCode: 'order_management',
                    createdBy: '74214623',
                },
                {
                    code: 'create_order',
                    name: 'Crear Orden',
                    description: 'Permite registrar una nueva orden en el sistema',
                    categoryCode: 'order_management',
                    createdBy: '74214623',
                },
                {
                    code: 'edit_order',
                    name: 'Editar Orden',
                    description: 'Permite modificar datos de una orden abierta',
                    categoryCode: 'order_management',
                    createdBy: '74214623',
                },
                {
                    code: 'close_order',
                    name: 'Cerrar Orden',
                    description: 'Permite cerrar una orden cuando el cliente solicita la cuenta',
                    categoryCode: 'order_management',
                    createdBy: '74214623',
                },
                {
                    code: 'cancel_order',
                    name: 'Anular Orden',
                    description: 'Permite anular una orden en caso de error o solicitud del cliente',
                    categoryCode: 'order_management',
                    createdBy: '74214623',
                },
                {
                    code: 'delete_order',
                    name: 'Eliminar Orden',
                    description: 'Permite eliminar una orden del sistema (soft delete)',
                    categoryCode: 'order_management',
                    createdBy: '74214623',
                },
                {
                    code: 'restore_order',
                    name: 'Restaurar Orden',
                    description: 'Permite restaurar una orden eliminada',
                    categoryCode: 'order_management',
                    createdBy: '74214623',
                },

                // === GESTIÓN DE ÍTEMS DE ÓRDENES ===
                {
                    code: 'view_order_item',
                    name: 'Ver Ítems de Orden',
                    description: 'Permite visualizar los ítems registrados dentro de una orden',
                    categoryCode: 'order_management',
                    createdBy: '74214623',
                },
                {
                    code: 'add_order_item',
                    name: 'Agregar Ítem a Orden',
                    description: 'Permite añadir productos a una orden abierta',
                    categoryCode: 'order_management',
                    createdBy: '74214623',
                },
                {
                    code: 'edit_order_item',
                    name: 'Editar Ítem de Orden',
                    description: 'Permite modificar cantidad, notas o descuento de un ítem',
                    categoryCode: 'order_management',
                    createdBy: '74214623',
                },
                {
                    code: 'cancel_order_item',
                    name: 'Anular Ítem de Orden',
                    description: 'Permite anular un ítem de una orden',
                    categoryCode: 'order_management',
                    createdBy: '74214623',
                },
                {
                    code: 'change_order_item_status',
                    name: 'Cambiar Estado del Ítem de Orden',
                    description: 'Permite cambiar el estado de un ítem',
                    categoryCode: 'order_management',
                    createdBy: '74214623',
                },
                {
                    code: 'delete_order_item',
                    name: 'Eliminar Ítem de Orden',
                    description: 'Permite eliminar un ítem de una orden (soft delete)',
                    categoryCode: 'order_management',
                    createdBy: '74214623',
                },
                {
                    code: 'restore_order_item',
                    name: 'Restaurar Ítem de Orden',
                    description: 'Permite restaurar un ítem eliminado dentro de una orden',
                    categoryCode: 'order_management',
                    createdBy: '74214623',
                },

                // === GENERAR REPORTE ===
                {
                    code: 'generate_order_report',
                    name: 'Generar Reporte de Órdenes',
                    description: 'Permite generar reportes de órdenes (por día, estado, producto, etc.)',
                    categoryCode: 'order_management',
                    createdBy: '74214623',
                },

                // === GESTIÓN DE IMPRESION ===
                {
                    code: 'print_order',
                    name: 'Imprimir Orden',
                    description: 'Permite imprimir la orden actual (para cocina, barra o cliente)',
                    categoryCode: 'order_management',
                    createdBy: '74214623',
                },
                {
                    code: 'print_bill',
                    name: 'Imprimir Pre-Cuenta',
                    description: 'Permite imprimir la pre-cuenta para que el cliente revise',
                    categoryCode: 'order_management',
                    createdBy: '74214623',
                },
                {
                    code: 'print_receipt',
                    name: 'Imprimir Comprobante de Pago',
                    description: 'Permite imprimir el comprobante de pago (factura, boleta, ticket)',
                    categoryCode: 'payment_management',
                    createdBy: '74214623',
                },

                // ========================================================================
                // =========================== GESTION DE CAJA ==========================
                // ========================================================================

                // === GESTIÓN DE CAJA ===
                {
                    code: 'view_cashbox',
                    name: 'Ver Caja',
                    description: 'Visualizar cajas abiertas y cerradas',
                    categoryCode: 'cashbox_management',
                    createdBy: '74214623',
                },
                {
                    code: 'open_cashbox',
                    name: 'Abrir Caja',
                    description: 'Abrir una nueva caja registradora con monto inicial',
                    categoryCode: 'cashbox_management',
                    createdBy: '74214623',
                },
                {
                    code: 'close_cashbox',
                    name: 'Cerrar Caja',
                    description: 'Cerrar caja registradora, registrando monto final y ventas',
                    categoryCode: 'cashbox_management',
                    createdBy: '74214623',
                },
                {
                    code: 'update_cashbox',
                    name: 'Editar Caja',
                    description: 'Editar datos de caja (notas etc)',
                    categoryCode: 'cashbox_management',
                    createdBy: '74214623',
                },
                {
                    code: 'delete_cashbox',
                    name: 'Eliminar Caja',
                    description: 'Eliminar registros de caja',
                    categoryCode: 'cashbox_management',
                    createdBy: '74214623',
                },
                {
                    code: 'restore_cashbox',
                    name: 'Restaurar Caja',
                    description: 'Restaurar registros de caja eliminados',
                    categoryCode: 'cashbox_management',
                    createdBy: '74214623',
                },

                // === GESTIÓN REPORTES ===
                {
                    code: 'generate_cashbox_report',
                    name: 'Generar Reporte de Caja',
                    description: 'Permite generar reportes de ingresos, egresos y cierre de caja',
                    categoryCode: 'cashbox_management',
                    createdBy: '74214623',
                },

                // ========================================================================
                // =========================== GESTION DE PAGOS ==========================
                // ========================================================================

                // === GESTIÓN DE MÉTODOS DE PAGO ===
                {
                    code: 'view_payment_method',
                    name: 'Ver Métodos de Pago',
                    description: 'Permite visualizar la lista de métodos de pago',
                    categoryCode: 'payment_management',
                    createdBy: '74214623',
                },
                {
                    code: 'create_payment_method',
                    name: 'Crear Método de Pago',
                    description: 'Permite registrar un nuevo método de pago',
                    categoryCode: 'payment_management',
                    createdBy: '74214623',
                },
                {
                    code: 'edit_payment_method',
                    name: 'Editar Método de Pago',
                    description:
                        'Permite modificar el nombre, descripcion, estado o color de un método de pago existente',
                    categoryCode: 'payment_management',
                    createdBy: '74214623',
                },
                {
                    code: 'delete_payment_method',
                    name: 'Eliminar Método de Pago',
                    description: 'Permite eliminar un método de pago',
                    categoryCode: 'payment_management',
                    createdBy: '74214623',
                },
                {
                    code: 'restore_payment_method',
                    name: 'Restaurar Método de Pago',
                    description: 'Permite restaurar un método de pago eliminado',
                    categoryCode: 'payment_management',
                    createdBy: '74214623',
                },

                // === GESTIÓN DE PAGOS ===
                {
                    code: 'view_payment',
                    name: 'Ver Pagos',
                    description: 'Permite visualizar la lista de pagos realizados',
                    categoryCode: 'payment_management',
                    createdBy: '74214623',
                },
                {
                    code: 'create_payment',
                    name: 'Registrar Pago',
                    description: 'Permite registrar un nuevo pago asociado a una orden',
                    categoryCode: 'payment_management',
                    createdBy: '74214623',
                },
                {
                    code: 'edit_payment',
                    name: 'Editar Pago',
                    description: 'Permite modificar información de un pago (monto recibido, vuelto, notas, etc.)',
                    categoryCode: 'payment_management',
                    createdBy: '74214623',
                },
                {
                    code: 'delete_payment',
                    name: 'Eliminar Pago',
                    description: 'Permite eliminar un pago registrado',
                    categoryCode: 'payment_management',
                    createdBy: '74214623',
                },
                {
                    code: 'restore_payment',
                    name: 'Restaurar Pago',
                    description: 'Permite restaurar un pago eliminado',
                    categoryCode: 'payment_management',
                    createdBy: '74214623',
                },
                {
                    code: 'view_payment_transaction',
                    name: 'Ver Transacción de Pago',
                    description: 'Permite visualizar detalles sensibles de la transacción',
                    categoryCode: 'payment_management',
                    createdBy: '74214623',
                },

                // === GESTIÓN REPORTES ===
                {
                    code: 'generate_payment_report',
                    name: 'Generar Reporte de Pagos',
                    description: 'Permite generar reportes de pagos realizados, métodos de pago, etc.',
                    categoryCode: 'payment_management',
                    createdBy: '74214623',
                },

                // ========================================================================
                // ========================= GESTION DE INVENTARIO ========================
                // ========================================================================

                // === GESTIÓN TIPOS DE MOVIMIENTO DE INVENTARIO ===
                {
                    code: 'view_inventory_movement_type',
                    name: 'Ver Tipos de Movimiento',
                    description: 'Permite visualizar los tipos de movimiento de inventario',
                    categoryCode: 'inventory_management',
                    createdBy: '74214623',
                },
                {
                    code: 'edit_inventory_movement_type',
                    name: 'Editar Tipo de Movimiento',
                    description: 'Permite actualizar nombre, descripción y color de un tipo existente',
                    categoryCode: 'inventory_management',
                    createdBy: '74214623',
                },

                // === GESTION DE INVENTARIO ===
                {
                    code: 'view_inventory',
                    name: 'Ver Inventario',
                    description: 'Permite visualizar la lista y detalle del inventario',
                    categoryCode: 'inventory_management',
                    createdBy: '74214623',
                },
                {
                    code: 'create_inventory',
                    name: 'Crear Inventario',
                    description: 'Permite registrar un nuevo inventario para un producto y ubicación',
                    categoryCode: 'inventory_management',
                    createdBy: '74214623',
                },
                {
                    code: 'edit_inventory',
                    name: 'Editar Inventario',
                    description: 'Permite actualizar cantidades, ubicación o datos del inventario',
                    categoryCode: 'inventory_management',
                    createdBy: '74214623',
                },
                {
                    code: 'delete_inventory',
                    name: 'Eliminar Inventario',
                    description: 'Permite eliminar un inventario',
                    categoryCode: 'inventory_management',
                    createdBy: '74214623',
                },
                {
                    code: 'restore_inventory',
                    name: 'Restaurar Inventario',
                    description: 'Permite restaurar un inventario eliminado',
                    categoryCode: 'inventory_management',
                    createdBy: '74214623',
                },

                // === GESTION DE MOVIMIENTOS DE INVENTARIO ===
                {
                    code: 'view_inventory_movement',
                    name: 'Ver Movimientos de Inventario',
                    description: 'Permite visualizar todos los movimientos de inventario',
                    categoryCode: 'inventory_management',
                    createdBy: '74214623',
                },
                {
                    code: 'create_inventory_movement',
                    name: 'Registrar Movimiento de Inventario',
                    description: 'Permite crear un movimiento de ingreso, salida, ajuste o devolución',
                    categoryCode: 'inventory_management',
                    createdBy: '74214623',
                },
                {
                    code: 'edit_inventory_movement',
                    name: 'Editar Movimiento de Inventario',
                    description: 'Permite modificar un movimiento de inventario registrado',
                    categoryCode: 'inventory_management',
                    createdBy: '74214623',
                },
                {
                    code: 'delete_inventory_movement',
                    name: 'Eliminar Movimiento de Inventario',
                    description: 'Permite eliminar un movimiento de inventario',
                    categoryCode: 'inventory_management',
                    createdBy: '74214623',
                },
                {
                    code: 'restore_inventory_movement',
                    name: 'Restaurar Movimiento de Inventario',
                    description: 'Permite restaurar un movimiento eliminado',
                    categoryCode: 'inventory_management',
                    createdBy: '74214623',
                },

                // === GENERAR REPORTE ===
                {
                    code: 'generate_inventory_report',
                    name: 'Generar Reporte de Inventario',
                    description: 'Permite generar reportes de stock, movimientos y niveles de inventario',
                    categoryCode: 'inventory_management',
                    createdBy: '74214623',
                },

                // ========================================================================
                // ========================= GESTION DE AUDITORIA ========================
                // ========================================================================

                // === LOGS DEL SISTEMA ===
                {
                    code: 'view_logs_general',
                    name: 'Ver Logs Generales',
                    description: 'Permite visualizar todos los registros de logs del sistema',
                    categoryCode: 'audit_log',
                    createdBy: '74214623',
                },
                {
                    code: 'view_logs_users',
                    name: 'Ver Logs de Usuarios',
                    description: 'Permite visualizar los registros de logs de usuarios',
                    categoryCode: 'audit_log',
                    createdBy: '74214623',
                },
                {
                    code: 'view_logs_customers',
                    name: 'Ver Logs de Clientes',
                    description: 'Permite visualizar los registros de logs de clientes',
                    categoryCode: 'audit_log',
                    createdBy: '74214623',
                },

                // ========================================================================
                // ========================= GESTIÓN DE SESIONES ========================
                // ========================================================================

                // === GESTIÓN DE SESIONES USUARIOS Y CLIENTES ===
                {
                    code: 'view_session',
                    name: 'Ver Sesiones',
                    description: 'Visualizar sesiones activas de usuarios y clientes',
                    categoryCode: 'session_management',
                    createdBy: '74214623',
                },
                {
                    code: 'close_session',
                    name: 'Cerrar Sesión',
                    description: 'Cerrar manualmente una sesión activa (forzar cierre de sesión)',
                    categoryCode: 'session_management',
                    createdBy: '74214623',
                },
                {
                    code: 'delete_session',
                    name: 'Eliminar Sesión',
                    description: 'Eliminar registros de sesiones antiguas',
                    categoryCode: 'session_management',
                    createdBy: '74214623',
                },
                {
                    code: 'restore_session',
                    name: 'Restaurar Sesión',
                    description: 'Restaurar registros de sesiones antiguas',
                    categoryCode: 'session_management',
                    createdBy: '74214623',
                },
            ],
        });

        console.log('✅ Permisos creados exitosamente.\n');
    } catch (error) {
        console.log('❌ Error en el seed de [permissionSeed]', error);
        throw error;
    }
}
