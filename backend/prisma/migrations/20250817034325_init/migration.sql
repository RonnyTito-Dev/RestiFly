-- CreateTable
CREATE TABLE `restaurant_config` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `active_logo_id` INTEGER NULL,
    `currency` CHAR(3) NOT NULL DEFAULT 'PEN',
    `address` VARCHAR(255) NULL,
    `phone` VARCHAR(15) NULL,
    `email` VARCHAR(50) NULL,
    `tax_name` VARCHAR(20) NULL DEFAULT 'IGV',
    `tax_incluided` BOOLEAN NOT NULL DEFAULT true,
    `taxType` VARCHAR(10) NULL DEFAULT 'INCLUIDO',
    `tax_rate` DECIMAL(5, 4) NULL DEFAULT 0.18,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `themes` (
    `name` CHAR(20) NOT NULL,
    `primaryColor` CHAR(7) NOT NULL,
    `secondaryColor` CHAR(7) NOT NULL,
    `accentColor` CHAR(7) NOT NULL,
    `neutralColor` CHAR(7) NOT NULL,
    `is_system` BOOLEAN NOT NULL DEFAULT false,
    `is_public` BOOLEAN NOT NULL DEFAULT true,
    `user_document_number` CHAR(12) NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `deleted_by` CHAR(12) NULL,

    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `document_types` (
    `name` CHAR(10) NOT NULL,
    `description` VARCHAR(255) NULL,
    `digit_lenght` INTEGER NOT NULL,
    `color` CHAR(7) NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `deleted_by` CHAR(12) NULL,

    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `account_statuses` (
    `code` CHAR(10) NOT NULL,
    `name` VARCHAR(20) NOT NULL,
    `description` VARCHAR(255) NULL,
    `color` CHAR(7) NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,

    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permission_categories` (
    `code` CHAR(40) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(255) NULL,
    `color` CHAR(7) NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,

    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permissions` (
    `code` CHAR(40) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(255) NULL,
    `category_code` CHAR(25) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,

    UNIQUE INDEX `permissions_name_key`(`name`),
    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `name` CHAR(20) NOT NULL,
    `description` VARCHAR(255) NULL,
    `color` CHAR(7) NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `deleted_by` CHAR(12) NULL,

    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `role_permissions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `role_name` CHAR(20) NOT NULL,
    `permission_code` CHAR(40) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,

    UNIQUE INDEX `role_permissions_role_name_permission_code_key`(`role_name`, `permission_code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `document_number` CHAR(12) NOT NULL,
    `username` VARCHAR(30) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` TEXT NOT NULL,
    `pin` VARCHAR(6) NULL,
    `full_name` VARCHAR(150) NOT NULL,
    `phone_number` VARCHAR(15) NULL,
    `birth_date` DATE NULL,
    `hire_date` DATE NULL,
    `salary` DECIMAL(10, 2) NULL,
    `emergency_contact_name` VARCHAR(100) NULL,
    `emergency_contact_phone` VARCHAR(15) NULL,
    `document_type_name` CHAR(10) NOT NULL,
    `role_name` CHAR(20) NOT NULL,
    `account_status_code` CHAR(10) NOT NULL DEFAULT 'ACTIVE',
    `theme_name` CHAR(20) NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `deleted_by` CHAR(12) NULL,

    UNIQUE INDEX `users_username_key`(`username`),
    UNIQUE INDEX `users_email_key`(`email`),
    UNIQUE INDEX `users_phone_number_key`(`phone_number`),
    INDEX `users_username_idx`(`username`),
    INDEX `users_document_number_idx`(`document_number`),
    INDEX `users_email_idx`(`email`),
    INDEX `users_account_status_code_idx`(`account_status_code`),
    INDEX `users_email_account_status_code_idx`(`email`, `account_status_code`),
    PRIMARY KEY (`document_number`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sessions` (
    `id` VARCHAR(191) NOT NULL,
    `user_document_number` CHAR(12) NULL,
    `customer_number` CHAR(12) NULL,
    `token` VARCHAR(255) NOT NULL,
    `device_info` VARCHAR(255) NULL,
    `ip_address` VARCHAR(50) NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `expires_at` DATETIME(3) NOT NULL,
    `closed_at` TIMESTAMP(0) NULL,
    `closed_by` CHAR(12) NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `deleted_by` CHAR(12) NULL,

    UNIQUE INDEX `sessions_token_key`(`token`),
    INDEX `sessions_user_document_number_idx`(`user_document_number`),
    INDEX `sessions_customer_number_idx`(`customer_number`),
    INDEX `sessions_token_idx`(`token`),
    INDEX `sessions_is_active_idx`(`is_active`),
    INDEX `sessions_user_document_number_is_active_idx`(`user_document_number`, `is_active`),
    INDEX `sessions_customer_number_is_active_idx`(`customer_number`, `is_active`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customers` (
    `document_number` CHAR(12) NOT NULL,
    `username` VARCHAR(30) NULL,
    `email` VARCHAR(100) NULL,
    `password` TEXT NULL,
    `full_name` VARCHAR(150) NOT NULL,
    `phone_number` VARCHAR(15) NULL,
    `document_type_name` CHAR(10) NOT NULL,
    `account_status_code` CHAR(10) NOT NULL DEFAULT 'ACTIVE',
    `theme_name` CHAR(20) NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `deleted_by` CHAR(12) NULL,

    UNIQUE INDEX `customers_username_key`(`username`),
    UNIQUE INDEX `customers_email_key`(`email`),
    UNIQUE INDEX `customers_phone_number_key`(`phone_number`),
    INDEX `customers_document_number_idx`(`document_number`),
    INDEX `customers_email_idx`(`email`),
    INDEX `customers_account_status_code_idx`(`account_status_code`),
    INDEX `customers_full_name_idx`(`full_name`),
    PRIMARY KEY (`document_number`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cash_boxes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `opener_user_document` CHAR(12) NOT NULL,
    `opened_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `initial_amount` DECIMAL(10, 2) NOT NULL,
    `closer_user_document` CHAR(12) NULL,
    `closed_at` DATETIME(3) NULL,
    `final_amount` DECIMAL(10, 2) NULL,
    `total_sales` DECIMAL(10, 2) NULL,
    `notes` VARCHAR(255) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `deleted_by` CHAR(12) NULL,

    INDEX `cash_boxes_opener_user_document_idx`(`opener_user_document`),
    INDEX `cash_boxes_closer_user_document_idx`(`closer_user_document`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `table_statuses` (
    `code` CHAR(20) NOT NULL,
    `name` CHAR(20) NOT NULL,
    `description` VARCHAR(255) NULL,
    `color` CHAR(7) NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,

    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `restaurant_zones` (
    `name` CHAR(20) NOT NULL,
    `description` VARCHAR(255) NULL,
    `color` CHAR(7) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `deleted_by` CHAR(12) NULL,

    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tables` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `capacity` INTEGER NOT NULL DEFAULT 4,
    `zone_name` CHAR(20) NULL,
    `status_code` CHAR(20) NOT NULL DEFAULT 'AVAILABLE',
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `deleted_by` CHAR(12) NULL,

    UNIQUE INDEX `tables_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `combine_tables` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `combiner_user_document` CHAR(12) NOT NULL,
    `combined_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `releaser_user_document` CHAR(12) NULL,
    `released_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `deleted_by` CHAR(12) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `combine_table_items` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `combine_table_id` INTEGER NOT NULL,
    `table_id` INTEGER NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `deleted_by` CHAR(12) NULL,

    UNIQUE INDEX `combine_table_items_combine_table_id_table_id_key`(`combine_table_id`, `table_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `table_sessions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `table_id` INTEGER NULL,
    `combine_table_id` INTEGER NULL,
    `opener_user_document` CHAR(12) NOT NULL,
    `opened_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `number_people` INTEGER NOT NULL DEFAULT 1,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `closer_user_document` CHAR(12) NULL,
    `closed_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `deleted_by` CHAR(12) NULL,

    INDEX `table_sessions_table_id_idx`(`table_id`),
    INDEX `table_sessions_combine_table_id_idx`(`combine_table_id`),
    INDEX `table_sessions_is_active_idx`(`is_active`),
    INDEX `table_sessions_opener_user_document_idx`(`opener_user_document`),
    UNIQUE INDEX `table_sessions_table_id_combine_table_id_is_active_key`(`table_id`, `combine_table_id`, `is_active`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `images` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `alt_text` VARCHAR(50) NOT NULL,
    `url` TEXT NOT NULL,
    `imageable_id` INTEGER NOT NULL,
    `imageable_type` VARCHAR(50) NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `deleted_by` CHAR(12) NULL,

    INDEX `images_imageable_id_imageable_type_idx`(`imageable_id`, `imageable_type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `brands` (
    `name` CHAR(20) NOT NULL,
    `description` VARCHAR(255) NULL,
    `color` CHAR(7) NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `deleted_by` CHAR(12) NULL,

    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_statuses` (
    `code` CHAR(20) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(255) NULL,
    `color` CHAR(7) NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,

    UNIQUE INDEX `product_statuses_name_key`(`name`),
    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_types` (
    `name` CHAR(20) NOT NULL,
    `description` VARCHAR(255) NULL,
    `color` CHAR(7) NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `deleted_by` CHAR(12) NULL,

    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_categories` (
    `name` CHAR(20) NOT NULL,
    `description` VARCHAR(255) NULL,
    `color` CHAR(7) NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `deleted_by` CHAR(12) NULL,

    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `description` TEXT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `offer_price` DECIMAL(10, 2) NULL,
    `product_type_name` CHAR(20) NOT NULL,
    `product_category_name` CHAR(20) NOT NULL,
    `brand_name` CHAR(20) NULL,
    `product_status_code` CHAR(20) NOT NULL DEFAULT 'ACTIVE',
    `main_image_id` INTEGER NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `deleted_by` CHAR(12) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_statuses` (
    `code` CHAR(20) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(255) NULL,
    `color` CHAR(7) NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,

    UNIQUE INDEX `order_statuses_name_key`(`name`),
    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_item_statuses` (
    `code` CHAR(20) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(255) NULL,
    `color` CHAR(7) NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,

    UNIQUE INDEX `order_item_statuses_name_key`(`name`),
    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `code` CHAR(20) NOT NULL,
    `table_session_id` INTEGER NULL,
    `creator_user_document` CHAR(12) NOT NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `customer_document_number` CHAR(12) NOT NULL,
    `subtotal_amount` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `tax_amount` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `total_amount` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `status_code` CHAR(20) NOT NULL,
    `closed_user_document` CHAR(12) NULL,
    `closed_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `deleted_by` CHAR(12) NULL,

    INDEX `orders_code_idx`(`code`),
    INDEX `orders_status_code_idx`(`status_code`),
    INDEX `orders_table_session_id_idx`(`table_session_id`),
    INDEX `orders_creator_user_document_idx`(`creator_user_document`),
    INDEX `orders_closed_user_document_idx`(`closed_user_document`),
    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_items` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_code` CHAR(20) NOT NULL,
    `product_id` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `unit_price` DECIMAL(10, 2) NOT NULL,
    `sub_total` DECIMAL(10, 2) NOT NULL,
    `discount` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `status_code` CHAR(20) NOT NULL DEFAULT 'PENDIENTE',
    `special_instructions` VARCHAR(255) NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `deleted_by` CHAR(12) NULL,

    INDEX `order_items_order_code_idx`(`order_code`),
    INDEX `order_items_product_id_idx`(`product_id`),
    INDEX `order_items_status_code_idx`(`status_code`),
    INDEX `order_items_order_code_status_code_idx`(`order_code`, `status_code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment_methods` (
    `name` CHAR(25) NOT NULL,
    `description` VARCHAR(255) NULL,
    `color` CHAR(7) NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `deleted_by` CHAR(12) NULL,

    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_code` CHAR(20) NOT NULL,
    `cash_box_id` INTEGER NOT NULL,
    `total_amount` DECIMAL(10, 2) NOT NULL,
    `payment_method_name` CHAR(25) NOT NULL,
    `received_amount` DECIMAL(10, 2) NULL,
    `change_amount` DECIMAL(10, 2) NULL,
    `transaction_number` VARCHAR(100) NULL,
    `notes` VARCHAR(255) NULL,
    `receive_user_document` CHAR(12) NOT NULL,
    `paid_customer_document` CHAR(12) NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `deleted_by` CHAR(12) NULL,

    UNIQUE INDEX `payments_order_code_key`(`order_code`),
    INDEX `payments_order_code_idx`(`order_code`),
    INDEX `payments_cash_box_id_idx`(`cash_box_id`),
    INDEX `payments_created_at_idx`(`created_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventory_movement_types` (
    `code` CHAR(20) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(255) NULL,
    `color` CHAR(7) NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,

    UNIQUE INDEX `inventory_movement_types_name_key`(`name`),
    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `current_quantity` INTEGER NOT NULL DEFAULT 0,
    `minimum_stock` INTEGER NOT NULL DEFAULT 5,
    `storage_location` VARCHAR(50) NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `deleted_by` CHAR(12) NULL,

    INDEX `inventories_product_id_idx`(`product_id`),
    INDEX `inventories_storage_location_idx`(`storage_location`),
    INDEX `inventories_product_id_storage_location_idx`(`product_id`, `storage_location`),
    UNIQUE INDEX `inventories_product_id_storage_location_key`(`product_id`, `storage_location`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventory_movements` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `inventory_id` INTEGER NOT NULL,
    `movement_type_code` CHAR(20) NOT NULL,
    `quantity_movement` INTEGER NOT NULL,
    `reason_description` TEXT NOT NULL,
    `user_document_number` CHAR(12) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `deleted_by` CHAR(12) NULL,

    INDEX `inventory_movements_inventory_id_idx`(`inventory_id`),
    INDEX `inventory_movements_movement_type_code_idx`(`movement_type_code`),
    INDEX `inventory_movements_user_document_number_idx`(`user_document_number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_sequences` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sequence_year` INTEGER NOT NULL,
    `sequence_month` INTEGER NOT NULL,
    `sequence_day` INTEGER NOT NULL,
    `last_order_number` INTEGER NOT NULL DEFAULT 0,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `order_sequences_sequence_year_sequence_month_sequence_day_key`(`sequence_year`, `sequence_month`, `sequence_day`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `logs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `entity_name` VARCHAR(50) NOT NULL,
    `entity_id` VARCHAR(191) NULL,
    `action` VARCHAR(50) NOT NULL,
    `message` VARCHAR(255) NULL,
    `user_document_number` CHAR(12) NULL,
    `customer_document_number` CHAR(12) NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `logs_entity_name_idx`(`entity_name`),
    INDEX `logs_user_document_number_idx`(`user_document_number`),
    INDEX `logs_customer_document_number_idx`(`customer_document_number`),
    INDEX `logs_action_idx`(`action`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `themes` ADD CONSTRAINT `themes_user_document_number_fkey` FOREIGN KEY (`user_document_number`) REFERENCES `users`(`document_number`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `permissions` ADD CONSTRAINT `permissions_category_code_fkey` FOREIGN KEY (`category_code`) REFERENCES `permission_categories`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `role_permissions` ADD CONSTRAINT `role_permissions_role_name_fkey` FOREIGN KEY (`role_name`) REFERENCES `roles`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `role_permissions` ADD CONSTRAINT `role_permissions_permission_code_fkey` FOREIGN KEY (`permission_code`) REFERENCES `permissions`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_document_type_name_fkey` FOREIGN KEY (`document_type_name`) REFERENCES `document_types`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_role_name_fkey` FOREIGN KEY (`role_name`) REFERENCES `roles`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_account_status_code_fkey` FOREIGN KEY (`account_status_code`) REFERENCES `account_statuses`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_theme_name_fkey` FOREIGN KEY (`theme_name`) REFERENCES `themes`(`name`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sessions` ADD CONSTRAINT `sessions_user_document_number_fkey` FOREIGN KEY (`user_document_number`) REFERENCES `users`(`document_number`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sessions` ADD CONSTRAINT `sessions_customer_number_fkey` FOREIGN KEY (`customer_number`) REFERENCES `customers`(`document_number`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customers` ADD CONSTRAINT `customers_document_type_name_fkey` FOREIGN KEY (`document_type_name`) REFERENCES `document_types`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customers` ADD CONSTRAINT `customers_account_status_code_fkey` FOREIGN KEY (`account_status_code`) REFERENCES `account_statuses`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customers` ADD CONSTRAINT `customers_theme_name_fkey` FOREIGN KEY (`theme_name`) REFERENCES `themes`(`name`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cash_boxes` ADD CONSTRAINT `cash_boxes_opener_user_document_fkey` FOREIGN KEY (`opener_user_document`) REFERENCES `users`(`document_number`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cash_boxes` ADD CONSTRAINT `cash_boxes_closer_user_document_fkey` FOREIGN KEY (`closer_user_document`) REFERENCES `users`(`document_number`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tables` ADD CONSTRAINT `tables_zone_name_fkey` FOREIGN KEY (`zone_name`) REFERENCES `restaurant_zones`(`name`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tables` ADD CONSTRAINT `tables_status_code_fkey` FOREIGN KEY (`status_code`) REFERENCES `table_statuses`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `combine_tables` ADD CONSTRAINT `combine_tables_combiner_user_document_fkey` FOREIGN KEY (`combiner_user_document`) REFERENCES `users`(`document_number`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `combine_tables` ADD CONSTRAINT `combine_tables_releaser_user_document_fkey` FOREIGN KEY (`releaser_user_document`) REFERENCES `users`(`document_number`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `combine_table_items` ADD CONSTRAINT `combine_table_items_combine_table_id_fkey` FOREIGN KEY (`combine_table_id`) REFERENCES `combine_tables`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `combine_table_items` ADD CONSTRAINT `combine_table_items_table_id_fkey` FOREIGN KEY (`table_id`) REFERENCES `tables`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `table_sessions` ADD CONSTRAINT `table_sessions_table_id_fkey` FOREIGN KEY (`table_id`) REFERENCES `tables`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `table_sessions` ADD CONSTRAINT `table_sessions_combine_table_id_fkey` FOREIGN KEY (`combine_table_id`) REFERENCES `combine_tables`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `table_sessions` ADD CONSTRAINT `table_sessions_opener_user_document_fkey` FOREIGN KEY (`opener_user_document`) REFERENCES `users`(`document_number`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `table_sessions` ADD CONSTRAINT `table_sessions_closer_user_document_fkey` FOREIGN KEY (`closer_user_document`) REFERENCES `users`(`document_number`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_product_type_name_fkey` FOREIGN KEY (`product_type_name`) REFERENCES `product_types`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_product_category_name_fkey` FOREIGN KEY (`product_category_name`) REFERENCES `product_categories`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_brand_name_fkey` FOREIGN KEY (`brand_name`) REFERENCES `brands`(`name`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_product_status_code_fkey` FOREIGN KEY (`product_status_code`) REFERENCES `product_statuses`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_table_session_id_fkey` FOREIGN KEY (`table_session_id`) REFERENCES `table_sessions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_creator_user_document_fkey` FOREIGN KEY (`creator_user_document`) REFERENCES `users`(`document_number`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_customer_document_number_fkey` FOREIGN KEY (`customer_document_number`) REFERENCES `customers`(`document_number`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_status_code_fkey` FOREIGN KEY (`status_code`) REFERENCES `order_statuses`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_closed_user_document_fkey` FOREIGN KEY (`closed_user_document`) REFERENCES `users`(`document_number`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order_items` ADD CONSTRAINT `order_items_order_code_fkey` FOREIGN KEY (`order_code`) REFERENCES `orders`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order_items` ADD CONSTRAINT `order_items_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order_items` ADD CONSTRAINT `order_items_status_code_fkey` FOREIGN KEY (`status_code`) REFERENCES `order_item_statuses`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payments` ADD CONSTRAINT `payments_order_code_fkey` FOREIGN KEY (`order_code`) REFERENCES `orders`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payments` ADD CONSTRAINT `payments_cash_box_id_fkey` FOREIGN KEY (`cash_box_id`) REFERENCES `cash_boxes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payments` ADD CONSTRAINT `payments_payment_method_name_fkey` FOREIGN KEY (`payment_method_name`) REFERENCES `payment_methods`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payments` ADD CONSTRAINT `payments_receive_user_document_fkey` FOREIGN KEY (`receive_user_document`) REFERENCES `users`(`document_number`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payments` ADD CONSTRAINT `payments_paid_customer_document_fkey` FOREIGN KEY (`paid_customer_document`) REFERENCES `customers`(`document_number`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventories` ADD CONSTRAINT `inventories_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventory_movements` ADD CONSTRAINT `inventory_movements_inventory_id_fkey` FOREIGN KEY (`inventory_id`) REFERENCES `inventories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventory_movements` ADD CONSTRAINT `inventory_movements_movement_type_code_fkey` FOREIGN KEY (`movement_type_code`) REFERENCES `inventory_movement_types`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventory_movements` ADD CONSTRAINT `inventory_movements_user_document_number_fkey` FOREIGN KEY (`user_document_number`) REFERENCES `users`(`document_number`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `logs` ADD CONSTRAINT `logs_user_document_number_fkey` FOREIGN KEY (`user_document_number`) REFERENCES `users`(`document_number`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `logs` ADD CONSTRAINT `logs_customer_document_number_fkey` FOREIGN KEY (`customer_document_number`) REFERENCES `customers`(`document_number`) ON DELETE SET NULL ON UPDATE CASCADE;
