-- CreateTable
CREATE TABLE `restaurant_config_restc_` (
    `restc_id` INTEGER NOT NULL AUTO_INCREMENT,
    `restc_name` VARCHAR(100) NOT NULL,
    `restc_active_logo_id` INTEGER NULL,
    `restc_currency` CHAR(3) NOT NULL DEFAULT 'PEN',
    `restc_address` VARCHAR(255) NULL,
    `restc_phone` VARCHAR(15) NULL,
    `restc_email` VARCHAR(50) NULL,
    `restc_tax_name` VARCHAR(20) NULL DEFAULT 'IGV',
    `restc_tax_included` BOOLEAN NOT NULL DEFAULT true,
    `restc_tax_type` VARCHAR(10) NULL DEFAULT 'INCLUIDO',
    `restc_tax_rate` DECIMAL(5, 4) NULL DEFAULT 0.18,
    `restc_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `restc_created_by` CHAR(12) NOT NULL,
    `restc_updated_at` TIMESTAMP(0) NULL,
    `restc_updated_by` CHAR(12) NULL,

    PRIMARY KEY (`restc_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `themes_them` (
    `them_name` CHAR(20) NOT NULL,
    `them_primary_color` CHAR(7) NOT NULL,
    `them_secondary_color` CHAR(7) NOT NULL,
    `them_accent_color` CHAR(7) NOT NULL,
    `them_neutral_color` CHAR(7) NOT NULL,
    `them_is_system` BOOLEAN NOT NULL DEFAULT false,
    `them_is_public` BOOLEAN NOT NULL DEFAULT true,
    `user_document_creator` CHAR(12) NULL,
    `them_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `them_updated_at` TIMESTAMP(0) NULL,
    `them_updated_by` CHAR(12) NULL,
    `them_deleted_at` TIMESTAMP(0) NULL,
    `them_deleted_by` CHAR(12) NULL,

    PRIMARY KEY (`them_name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `restaurant_zones_restz` (
    `restz_name` CHAR(20) NOT NULL,
    `restz_description` VARCHAR(255) NULL,
    `restz_color` CHAR(7) NULL,
    `restz_is_active` BOOLEAN NOT NULL DEFAULT true,
    `restz_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `restz_created_by` CHAR(12) NOT NULL,
    `restz_updated_at` TIMESTAMP(0) NULL,
    `restz_updated_by` CHAR(12) NULL,
    `restz_deleted_at` TIMESTAMP(0) NULL,
    `restz_deleted_by` CHAR(12) NULL,

    PRIMARY KEY (`restz_name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `table_statuses_tabls` (
    `tabls_code` CHAR(20) NOT NULL,
    `tabls_name` CHAR(20) NOT NULL,
    `tabls_description` VARCHAR(255) NULL,
    `tabls_color` CHAR(7) NULL,
    `tabls_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `tabls_created_by` CHAR(12) NOT NULL,
    `tabls_updated_at` TIMESTAMP(0) NULL,
    `tabls_updated_by` CHAR(12) NULL,

    UNIQUE INDEX `table_statuses_tabls_tabls_name_key`(`tabls_name`),
    PRIMARY KEY (`tabls_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tables_table` (
    `table_id` INTEGER NOT NULL AUTO_INCREMENT,
    `table_name` VARCHAR(50) NOT NULL,
    `table_capacity` INTEGER NOT NULL DEFAULT 4,
    `restz_name` CHAR(20) NULL,
    `tabls_code` CHAR(20) NOT NULL DEFAULT 'AVAILABLE',
    `table_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `table_created_by` CHAR(12) NOT NULL,
    `table_updated_at` TIMESTAMP(0) NULL,
    `table_updated_by` CHAR(12) NULL,
    `table_deleted_at` TIMESTAMP(0) NULL,
    `table_deleted_by` CHAR(12) NULL,

    UNIQUE INDEX `tables_table_table_name_key`(`table_name`),
    PRIMARY KEY (`table_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `combine_tables_combt` (
    `combt_id` INTEGER NOT NULL AUTO_INCREMENT,
    `combt_name` VARCHAR(50) NOT NULL,
    `user_document_combiner` CHAR(12) NOT NULL,
    `combt_combiner_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `combt_is_active` BOOLEAN NOT NULL DEFAULT true,
    `user_document_releaser` CHAR(12) NULL,
    `combt_releaser_at` TIMESTAMP(0) NULL,
    `combt_updated_at` TIMESTAMP(0) NULL,
    `combt_updated_by` CHAR(12) NULL,
    `combt_deleted_at` TIMESTAMP(0) NULL,
    `combt_deleted_by` CHAR(12) NULL,

    PRIMARY KEY (`combt_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `combine_table_items_combti` (
    `combti_id` INTEGER NOT NULL AUTO_INCREMENT,
    `combt_id` INTEGER NOT NULL,
    `table_id` INTEGER NOT NULL,
    `combti_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `combti_created_by` CHAR(12) NOT NULL,
    `combti_updated_at` TIMESTAMP(0) NULL,
    `combti_updated_by` CHAR(12) NULL,
    `combti_deleted_at` TIMESTAMP(0) NULL,
    `combti_deleted_by` CHAR(12) NULL,

    UNIQUE INDEX `combine_table_items_combti_combt_id_table_id_key`(`combt_id`, `table_id`),
    PRIMARY KEY (`combti_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `brands_bran` (
    `bran_name` CHAR(20) NOT NULL,
    `bran_description` VARCHAR(255) NULL,
    `bran_color` CHAR(7) NULL,
    `bran_is_active` BOOLEAN NOT NULL DEFAULT true,
    `bran_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `bran_created_by` CHAR(12) NOT NULL,
    `bran_updated_at` TIMESTAMP(0) NULL,
    `bran_updated_by` CHAR(12) NULL,
    `bran_deleted_at` TIMESTAMP(0) NULL,
    `bran_deleted_by` CHAR(12) NULL,

    PRIMARY KEY (`bran_name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_types_prodt` (
    `prodt_name` CHAR(20) NOT NULL,
    `prodt_description` VARCHAR(255) NULL,
    `prodt_color` CHAR(7) NULL,
    `prodt_is_active` BOOLEAN NOT NULL DEFAULT true,
    `prodt_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `prodt_created_by` CHAR(12) NOT NULL,
    `prodt_updated_at` TIMESTAMP(0) NULL,
    `prodt_updated_by` CHAR(12) NULL,
    `prodt_deleted_at` TIMESTAMP(0) NULL,
    `prodt_deleted_by` CHAR(12) NULL,

    PRIMARY KEY (`prodt_name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_categories_prodc` (
    `prodc_name` CHAR(20) NOT NULL,
    `prodc_description` VARCHAR(255) NULL,
    `prodc_color` CHAR(7) NULL,
    `prodc_is_active` BOOLEAN NOT NULL DEFAULT true,
    `prodc_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `prodc_created_by` CHAR(12) NOT NULL,
    `prodc_updated_at` TIMESTAMP(0) NULL,
    `prodc_updated_by` CHAR(12) NULL,
    `prodc_deleted_at` TIMESTAMP(0) NULL,
    `prodc_deleted_by` CHAR(12) NULL,

    PRIMARY KEY (`prodc_name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_statuses_prost` (
    `prost_code` CHAR(20) NOT NULL,
    `prost_name` VARCHAR(50) NOT NULL,
    `prost_description` VARCHAR(255) NULL,
    `prost_color` CHAR(7) NULL,
    `prost_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `prost_created_by` CHAR(12) NOT NULL,
    `prost_updated_at` TIMESTAMP(0) NULL,
    `prost_updated_by` CHAR(12) NULL,

    UNIQUE INDEX `product_statuses_prost_prost_name_key`(`prost_name`),
    PRIMARY KEY (`prost_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products_prod` (
    `prod_id` INTEGER NOT NULL AUTO_INCREMENT,
    `prod_name` VARCHAR(100) NOT NULL,
    `prod_description` VARCHAR(255) NULL,
    `prod_price` DECIMAL(10, 2) NOT NULL,
    `prod_offer_price` DECIMAL(10, 2) NULL,
    `prodt_name` CHAR(20) NOT NULL,
    `prodc_name` CHAR(20) NOT NULL,
    `bran_name` CHAR(20) NULL,
    `prost_code` CHAR(20) NOT NULL DEFAULT 'ACTIVE',
    `img_imageable_id` INTEGER NULL,
    `prod_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `prod_created_by` CHAR(12) NOT NULL,
    `prod_updated_at` TIMESTAMP(0) NULL,
    `prod_updated_by` CHAR(12) NULL,
    `prod_deleted_at` TIMESTAMP(0) NULL,
    `prod_deleted_by` CHAR(12) NULL,

    PRIMARY KEY (`prod_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `document_types_doct` (
    `doct_name` CHAR(10) NOT NULL,
    `doct_description` VARCHAR(255) NULL,
    `doct_digit_length` INTEGER NOT NULL,
    `doct_color` CHAR(7) NULL,
    `doct_is_active` BOOLEAN NOT NULL DEFAULT true,
    `doct_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `doct_created_by` CHAR(12) NOT NULL,
    `doct_updated_at` TIMESTAMP(0) NULL,
    `doct_updated_by` CHAR(12) NULL,
    `doct_deleted_at` TIMESTAMP(0) NULL,
    `doct_deleted_by` CHAR(12) NULL,

    PRIMARY KEY (`doct_name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `account_statuses_accs` (
    `accs_code` CHAR(10) NOT NULL,
    `accs_name` VARCHAR(20) NOT NULL,
    `accs_description` VARCHAR(255) NULL,
    `accs_color` CHAR(7) NULL,
    `accs_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `accs_created_by` CHAR(12) NOT NULL,
    `accs_updated_at` TIMESTAMP(0) NULL,
    `accs_updated_by` CHAR(12) NULL,

    PRIMARY KEY (`accs_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permission_categories_perc` (
    `perc_code` CHAR(40) NOT NULL,
    `perc_name` VARCHAR(50) NOT NULL,
    `perc_description` VARCHAR(255) NULL,
    `perc_color` CHAR(7) NULL,
    `perc_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `perc_created_by` CHAR(12) NOT NULL,
    `perc_updated_at` TIMESTAMP(0) NULL,
    `perc_updated_by` CHAR(12) NULL,

    PRIMARY KEY (`perc_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permissions_perm` (
    `perm_code` CHAR(40) NOT NULL,
    `perm_name` VARCHAR(50) NOT NULL,
    `perm_description` VARCHAR(255) NULL,
    `perc_code` CHAR(25) NOT NULL,
    `perm_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `perm_created_by` CHAR(12) NOT NULL,

    UNIQUE INDEX `permissions_perm_perm_name_key`(`perm_name`),
    PRIMARY KEY (`perm_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles_rol` (
    `rol_name` CHAR(20) NOT NULL,
    `rol_description` VARCHAR(255) NULL,
    `rol_color` CHAR(7) NULL,
    `rol_is_active` BOOLEAN NOT NULL DEFAULT true,
    `rol_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `rol_created_by` CHAR(12) NOT NULL,
    `rol_updated_at` TIMESTAMP(0) NULL,
    `rol_updated_by` CHAR(12) NULL,
    `rol_deleted_at` TIMESTAMP(0) NULL,
    `rol_deleted_by` CHAR(12) NULL,

    PRIMARY KEY (`rol_name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `role_permissions_rolp` (
    `rolp_id` INTEGER NOT NULL AUTO_INCREMENT,
    `rol_name` CHAR(20) NOT NULL,
    `perm_code` CHAR(40) NOT NULL,
    `rolp_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `rolp_created_by` CHAR(12) NOT NULL,

    UNIQUE INDEX `role_permissions_rolp_rol_name_perm_code_key`(`rol_name`, `perm_code`),
    PRIMARY KEY (`rolp_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users_user` (
    `user_document` CHAR(12) NOT NULL,
    `user_username` VARCHAR(30) NOT NULL,
    `user_email` VARCHAR(50) NOT NULL,
    `user_password` VARCHAR(255) NOT NULL,
    `user_pin` VARCHAR(255) NULL,
    `doct_name` CHAR(10) NOT NULL,
    `rol_name` CHAR(20) NOT NULL,
    `accs_code` CHAR(10) NOT NULL DEFAULT 'ACTIVE',
    `user_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `user_created_by` CHAR(12) NOT NULL,
    `user_updated_at` TIMESTAMP(0) NULL,
    `user_updated_by` CHAR(12) NULL,
    `user_deleted_at` TIMESTAMP(0) NULL,
    `user_deleted_by` CHAR(12) NULL,

    UNIQUE INDEX `users_user_user_username_key`(`user_username`),
    UNIQUE INDEX `users_user_user_email_key`(`user_email`),
    INDEX `users_user_user_username_idx`(`user_username`),
    INDEX `users_user_user_document_idx`(`user_document`),
    INDEX `users_user_user_email_idx`(`user_email`),
    INDEX `users_user_accs_code_idx`(`accs_code`),
    INDEX `users_user_user_email_accs_code_idx`(`user_email`, `accs_code`),
    PRIMARY KEY (`user_document`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_profile_userp` (
    `userp_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_document` CHAR(12) NOT NULL,
    `userp_full_name` VARCHAR(100) NOT NULL,
    `userp_phone_number` VARCHAR(15) NULL,
    `userp_birth_date` DATETIME(3) NULL,
    `userp_hire_date` DATETIME(3) NULL,
    `userp_salary` DECIMAL(10, 2) NULL,
    `userp_emergency_contact_name` VARCHAR(25) NULL,
    `userp_emergency_contact_phone` VARCHAR(15) NULL,
    `them_name` CHAR(20) NULL,
    `userp_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `userp_created_by` CHAR(12) NOT NULL,
    `userp_updated_at` TIMESTAMP(0) NULL,
    `userp_updated_by` CHAR(12) NULL,
    `userp_deleted_at` TIMESTAMP(0) NULL,
    `userp_deleted_by` CHAR(12) NULL,

    UNIQUE INDEX `user_profile_userp_user_document_key`(`user_document`),
    UNIQUE INDEX `user_profile_userp_userp_phone_number_key`(`userp_phone_number`),
    PRIMARY KEY (`userp_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customers_cust` (
    `cust_document` CHAR(12) NOT NULL,
    `cust_username` VARCHAR(30) NULL,
    `cust_email` VARCHAR(50) NULL,
    `cust_password` VARCHAR(255) NULL,
    `doct_name` CHAR(10) NOT NULL,
    `accs_code` CHAR(10) NOT NULL DEFAULT 'ACTIVE',
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` CHAR(12) NOT NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `updated_by` CHAR(12) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `deleted_by` CHAR(12) NULL,

    UNIQUE INDEX `customers_cust_cust_username_key`(`cust_username`),
    UNIQUE INDEX `customers_cust_cust_email_key`(`cust_email`),
    INDEX `customers_cust_cust_document_idx`(`cust_document`),
    INDEX `customers_cust_cust_email_idx`(`cust_email`),
    INDEX `customers_cust_accs_code_idx`(`accs_code`),
    INDEX `customers_cust_cust_username_idx`(`cust_username`),
    PRIMARY KEY (`cust_document`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customer_profile_custp` (
    `custp_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cust_document` CHAR(12) NOT NULL,
    `custp_full_name` VARCHAR(100) NOT NULL,
    `custp_phone_number` VARCHAR(15) NULL,
    `custp_birth_date` DATETIME(3) NULL,
    `them_name` CHAR(20) NULL,
    `custp_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `custp_created_by` CHAR(12) NOT NULL,
    `custp_updated_at` TIMESTAMP(0) NULL,
    `custp_updated_by` CHAR(12) NULL,
    `custp_deleted_at` TIMESTAMP(0) NULL,
    `custp_deleted_by` CHAR(12) NULL,

    UNIQUE INDEX `customer_profile_custp_cust_document_key`(`cust_document`),
    UNIQUE INDEX `customer_profile_custp_custp_phone_number_key`(`custp_phone_number`),
    PRIMARY KEY (`custp_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `command_statuses_comms` (
    `comms_code` CHAR(12) NOT NULL,
    `comms_name` VARCHAR(20) NOT NULL,
    `comms_description` VARCHAR(255) NULL,
    `comms_color` CHAR(7) NULL,
    `comms_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `comms_created_by` CHAR(12) NOT NULL,
    `comms_updated_at` TIMESTAMP(0) NULL,
    `comms_updated_by` CHAR(12) NULL,

    UNIQUE INDEX `command_statuses_comms_comms_name_key`(`comms_name`),
    PRIMARY KEY (`comms_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `commands_comm` (
    `comm_id` INTEGER NOT NULL AUTO_INCREMENT,
    `table_id` INTEGER NULL,
    `combt_id` INTEGER NULL,
    `user_document_opener` CHAR(12) NOT NULL,
    `comm_opened_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `comms_code` CHAR(12) NOT NULL,
    `comms_notes` VARCHAR(255) NULL,
    `user_document_closer` CHAR(12) NULL,
    `comm_closed_at` TIMESTAMP(0) NULL,
    `comm_updated_at` TIMESTAMP(0) NULL,
    `comm_updated_by` CHAR(12) NULL,
    `comm_deleted_at` TIMESTAMP(0) NULL,
    `comm_deleted_by` CHAR(12) NULL,

    PRIMARY KEY (`comm_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_statuses_ords` (
    `ords_code` CHAR(20) NOT NULL,
    `ords_name` VARCHAR(50) NOT NULL,
    `ords_description` VARCHAR(255) NULL,
    `ords_color` CHAR(7) NULL,
    `ords_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `ords_created_by` CHAR(12) NOT NULL,
    `ords_updated_at` TIMESTAMP(0) NULL,
    `ords_updated_by` CHAR(12) NULL,

    UNIQUE INDEX `order_statuses_ords_ords_name_key`(`ords_name`),
    PRIMARY KEY (`ords_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_item_statuses_ordis` (
    `ordis_code` CHAR(20) NOT NULL,
    `ordis_name` VARCHAR(50) NOT NULL,
    `ordis_description` VARCHAR(255) NULL,
    `ordis_color` CHAR(7) NULL,
    `ordis_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `ordis_created_by` CHAR(12) NOT NULL,
    `ordis_updated_at` TIMESTAMP(0) NULL,
    `ordis_updated_by` CHAR(12) NULL,

    UNIQUE INDEX `order_item_statuses_ordis_ordis_name_key`(`ordis_name`),
    PRIMARY KEY (`ordis_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders_ord` (
    `ord_code` CHAR(20) NOT NULL,
    `comm_id` INTEGER NOT NULL,
    `user_document_creator` CHAR(12) NOT NULL,
    `ord_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `cust_document` CHAR(12) NOT NULL,
    `ord_subtotal` DECIMAL(10, 2) NOT NULL,
    `ord_discount` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `ord_tax_amount` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `ord_total_amount` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `ords_code` CHAR(20) NOT NULL,
    `user_document_closer` CHAR(12) NULL,
    `ord_closed_at` TIMESTAMP(0) NULL,
    `ord_updated_at` TIMESTAMP(0) NULL,
    `ord_updated_by` CHAR(12) NULL,
    `ord_deleted_at` TIMESTAMP(0) NULL,
    `ord_deleted_by` CHAR(12) NULL,

    INDEX `orders_ord_ord_code_idx`(`ord_code`),
    INDEX `orders_ord_ords_code_idx`(`ords_code`),
    INDEX `orders_ord_user_document_creator_idx`(`user_document_creator`),
    INDEX `orders_ord_user_document_closer_idx`(`user_document_closer`),
    PRIMARY KEY (`ord_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_items_ordit` (
    `ordit_id` INTEGER NOT NULL AUTO_INCREMENT,
    `comm_id` INTEGER NOT NULL,
    `ord_code` CHAR(20) NULL,
    `prod_id` INTEGER NOT NULL,
    `ordis_code` CHAR(20) NOT NULL DEFAULT 'PENDIENTE',
    `ordit_quantity` INTEGER NOT NULL DEFAULT 1,
    `ordit_special_instructions` VARCHAR(255) NULL,
    `ordit_unit_price` DECIMAL(10, 2) NOT NULL,
    `ordit_discount` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `ordit_total_price` DECIMAL(10, 2) NOT NULL,
    `ordit_notes` VARCHAR(255) NULL,
    `ordit_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `ordit_created_by` CHAR(12) NOT NULL,
    `ordit_updated_at` TIMESTAMP(0) NULL,
    `ordit_updated_by` CHAR(12) NULL,
    `ordit_deleted_at` TIMESTAMP(0) NULL,
    `ordit_deleted_by` CHAR(12) NULL,

    INDEX `order_items_ordit_ord_code_idx`(`ord_code`),
    INDEX `order_items_ordit_prod_id_idx`(`prod_id`),
    INDEX `order_items_ordit_ordis_code_idx`(`ordis_code`),
    PRIMARY KEY (`ordit_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cash_boxes_cashb` (
    `cashb_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_document_opened` CHAR(12) NOT NULL,
    `cashb_opened_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `cashb_initial_amount` DECIMAL(10, 2) NOT NULL,
    `user_document_closed` CHAR(12) NULL,
    `cashb_closed_at` TIMESTAMP(0) NULL,
    `cashb_final_amount` DECIMAL(10, 2) NULL,
    `cashb_total_sales` DECIMAL(10, 2) NULL,
    `cashb_notes` VARCHAR(255) NULL,
    `cashb_updated_at` TIMESTAMP(0) NULL,
    `cashb_updated_by` CHAR(12) NULL,

    INDEX `cash_boxes_cashb_user_document_opened_idx`(`user_document_opened`),
    INDEX `cash_boxes_cashb_user_document_closed_idx`(`user_document_closed`),
    PRIMARY KEY (`cashb_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cashbox_movement_types_cashmt` (
    `cashmt_code` CHAR(20) NOT NULL,
    `cashmt_name` CHAR(20) NOT NULL,
    `cashmt_description` VARCHAR(255) NULL,
    `cashmt_color` CHAR(7) NULL,
    `cashmt_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `cashmt_created_by` CHAR(12) NOT NULL,
    `cashmt_updated_at` TIMESTAMP(0) NULL,
    `cashmt_updated_by` CHAR(12) NULL,

    UNIQUE INDEX `cashbox_movement_types_cashmt_cashmt_name_key`(`cashmt_name`),
    PRIMARY KEY (`cashmt_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cashbox_movement_cashm` (
    `cashm_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cashb_id` INTEGER NOT NULL,
    `user_document` CHAR(12) NOT NULL,
    `cashmt_code` CHAR(20) NOT NULL,
    `cashbm_amount` DECIMAL(10, 2) NOT NULL,
    `cashm_concept` VARCHAR(255) NULL,
    `cashm_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `cashm_created_by` CHAR(12) NOT NULL,
    `cashm_updated_at` TIMESTAMP(0) NULL,
    `cashm_updated_by` CHAR(12) NULL,

    PRIMARY KEY (`cashm_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment_methods_paymet` (
    `paymet_name` CHAR(25) NOT NULL,
    `paymet_description` VARCHAR(255) NULL,
    `paymet_color` CHAR(7) NULL,
    `paymet_is_active` BOOLEAN NOT NULL DEFAULT true,
    `paymet_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `paymet_created_by` CHAR(12) NOT NULL,
    `paymet_updated_at` TIMESTAMP(0) NULL,
    `paymet_updated_by` CHAR(12) NULL,
    `paymet_deleted_at` TIMESTAMP(0) NULL,
    `paymet_deleted_by` CHAR(12) NULL,

    PRIMARY KEY (`paymet_name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payments_pay` (
    `pay_id` INTEGER NOT NULL AUTO_INCREMENT,
    `ord_code` CHAR(20) NOT NULL,
    `cashb_id` INTEGER NOT NULL,
    `paymet_name` CHAR(25) NOT NULL,
    `pay_total_amount` DECIMAL(10, 2) NOT NULL,
    `pay_received_amount` DECIMAL(10, 2) NULL,
    `pay_change_amount` DECIMAL(10, 2) NULL,
    `pay_transaction_number` VARCHAR(100) NULL,
    `pay_notes` VARCHAR(255) NULL,
    `user_document_receive` CHAR(12) NOT NULL,
    `cust_document_paid` CHAR(12) NULL,
    `pay_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `pay_created_by` CHAR(12) NOT NULL,
    `pay_updated_at` TIMESTAMP(0) NULL,
    `pay_updated_by` CHAR(12) NULL,

    UNIQUE INDEX `payments_pay_ord_code_key`(`ord_code`),
    INDEX `payments_pay_ord_code_idx`(`ord_code`),
    INDEX `payments_pay_cashb_id_idx`(`cashb_id`),
    INDEX `payments_pay_pay_created_at_idx`(`pay_created_at`),
    PRIMARY KEY (`pay_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventory_movement_types_inmoty` (
    `inmoty_code` CHAR(20) NOT NULL,
    `inmoty_name` VARCHAR(50) NOT NULL,
    `inmoty_description` VARCHAR(255) NULL,
    `inmoty_color` CHAR(7) NULL,
    `inmoty_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `inmoty_created_by` CHAR(12) NOT NULL,
    `inmoty_updated_at` TIMESTAMP(0) NULL,
    `inmoty_updated_by` CHAR(12) NULL,

    UNIQUE INDEX `inventory_movement_types_inmoty_inmoty_name_key`(`inmoty_name`),
    PRIMARY KEY (`inmoty_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventories_inv` (
    `inv_id` INTEGER NOT NULL AUTO_INCREMENT,
    `prod_id` INTEGER NOT NULL,
    `inv_current_quantity` INTEGER NOT NULL DEFAULT 0,
    `inv_minimum_stock` INTEGER NOT NULL DEFAULT 5,
    `inv_storage_location` VARCHAR(50) NULL,
    `inv_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `inv_created_by` CHAR(12) NOT NULL,
    `inv_updated_at` TIMESTAMP(0) NULL,
    `inv_updated_by` CHAR(12) NULL,
    `inv_deleted_at` TIMESTAMP(0) NULL,
    `inv_deleted_by` CHAR(12) NULL,

    UNIQUE INDEX `inventories_inv_prod_id_key`(`prod_id`),
    INDEX `inventories_inv_prod_id_idx`(`prod_id`),
    INDEX `inventories_inv_inv_storage_location_idx`(`inv_storage_location`),
    INDEX `inventories_inv_prod_id_inv_storage_location_idx`(`prod_id`, `inv_storage_location`),
    UNIQUE INDEX `inventories_inv_prod_id_inv_storage_location_key`(`prod_id`, `inv_storage_location`),
    PRIMARY KEY (`inv_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventory_movements_invmo` (
    `invmo_id` INTEGER NOT NULL AUTO_INCREMENT,
    `inv_id` INTEGER NOT NULL,
    `inmoty_code` CHAR(20) NOT NULL,
    `invmo_quantity_movement` INTEGER NOT NULL,
    `invmo_reason_description` TEXT NOT NULL,
    `user_document` CHAR(12) NOT NULL,
    `invmo_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `invmo_created_by` CHAR(12) NOT NULL,
    `invmo_updated_at` TIMESTAMP(0) NULL,
    `invmo_updated_by` CHAR(12) NULL,
    `invmo_deleted_at` TIMESTAMP(0) NULL,
    `invmo_deleted_by` CHAR(12) NULL,

    INDEX `inventory_movements_invmo_inv_id_idx`(`inv_id`),
    INDEX `inventory_movements_invmo_user_document_idx`(`user_document`),
    PRIMARY KEY (`invmo_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_sequences_ordse` (
    `ordse_id` INTEGER NOT NULL AUTO_INCREMENT,
    `ordse_sequence_year` INTEGER NOT NULL,
    `ordse_sequence_month` INTEGER NOT NULL,
    `ordse_sequence_day` INTEGER NOT NULL,
    `ordse_last_order_number` INTEGER NOT NULL DEFAULT 0,
    `ordse_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `ordse_updated_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `order_sequences_ordse_ordse_sequence_year_ordse_sequence_mon_key`(`ordse_sequence_year`, `ordse_sequence_month`, `ordse_sequence_day`),
    PRIMARY KEY (`ordse_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sessions_sess` (
    `sess_id` VARCHAR(191) NOT NULL,
    `user_document` CHAR(12) NULL,
    `cust_document` CHAR(12) NULL,
    `token` VARCHAR(255) NOT NULL,
    `sess_device_info` VARCHAR(255) NULL,
    `sess_ip_address` VARCHAR(50) NULL,
    `sess_is_active` BOOLEAN NOT NULL DEFAULT true,
    `sess_expires_at` DATETIME(3) NOT NULL,
    `sess_closed_at` TIMESTAMP(0) NULL,
    `sess_closed_by` CHAR(12) NULL,
    `sess_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `sess_created_by` CHAR(12) NOT NULL,
    `sess_updated_at` TIMESTAMP(0) NULL,
    `sess_updated_by` CHAR(12) NULL,
    `sess_deleted_at` TIMESTAMP(0) NULL,
    `sess_deleted_by` CHAR(12) NULL,

    UNIQUE INDEX `sessions_sess_token_key`(`token`),
    INDEX `sessions_sess_user_document_idx`(`user_document`),
    INDEX `sessions_sess_cust_document_idx`(`cust_document`),
    INDEX `sessions_sess_token_idx`(`token`),
    INDEX `sessions_sess_sess_is_active_idx`(`sess_is_active`),
    INDEX `sessions_sess_cust_document_sess_is_active_idx`(`cust_document`, `sess_is_active`),
    PRIMARY KEY (`sess_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `logs_log` (
    `log_id` INTEGER NOT NULL AUTO_INCREMENT,
    `log_entity_name` VARCHAR(50) NOT NULL,
    `log_entity_id` VARCHAR(191) NULL,
    `action` VARCHAR(50) NOT NULL,
    `message` VARCHAR(255) NULL,
    `user_document` CHAR(12) NULL,
    `customer_document` CHAR(12) NULL,
    `log_device_info` VARCHAR(255) NULL,
    `log_ip_address` VARCHAR(50) NULL,
    `log_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `logs_log_log_entity_name_idx`(`log_entity_name`),
    INDEX `logs_log_user_document_idx`(`user_document`),
    INDEX `logs_log_customer_document_idx`(`customer_document`),
    INDEX `logs_log_action_idx`(`action`),
    PRIMARY KEY (`log_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `images_img` (
    `img_id` INTEGER NOT NULL AUTO_INCREMENT,
    `img_name` VARCHAR(50) NOT NULL,
    `img_alt_text` VARCHAR(50) NOT NULL,
    `img_url` TEXT NOT NULL,
    `img_imageable_id` INTEGER NOT NULL,
    `img_imageable_type` VARCHAR(50) NOT NULL,
    `img_is_active` BOOLEAN NOT NULL DEFAULT true,
    `img_created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `img_created_by` CHAR(12) NOT NULL,
    `img_updated_at` TIMESTAMP(0) NULL,
    `img_updated_by` CHAR(12) NULL,
    `img_deleted_at` TIMESTAMP(0) NULL,
    `img_deleted_by` CHAR(12) NULL,

    INDEX `images_img_img_imageable_id_img_imageable_type_idx`(`img_imageable_id`, `img_imageable_type`),
    PRIMARY KEY (`img_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `themes_them` ADD CONSTRAINT `themes_them_user_document_creator_fkey` FOREIGN KEY (`user_document_creator`) REFERENCES `users_user`(`user_document`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tables_table` ADD CONSTRAINT `tables_table_restz_name_fkey` FOREIGN KEY (`restz_name`) REFERENCES `restaurant_zones_restz`(`restz_name`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tables_table` ADD CONSTRAINT `tables_table_tabls_code_fkey` FOREIGN KEY (`tabls_code`) REFERENCES `table_statuses_tabls`(`tabls_code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `combine_tables_combt` ADD CONSTRAINT `combine_tables_combt_user_document_combiner_fkey` FOREIGN KEY (`user_document_combiner`) REFERENCES `users_user`(`user_document`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `combine_tables_combt` ADD CONSTRAINT `combine_tables_combt_user_document_releaser_fkey` FOREIGN KEY (`user_document_releaser`) REFERENCES `users_user`(`user_document`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `combine_table_items_combti` ADD CONSTRAINT `combine_table_items_combti_combt_id_fkey` FOREIGN KEY (`combt_id`) REFERENCES `combine_tables_combt`(`combt_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `combine_table_items_combti` ADD CONSTRAINT `combine_table_items_combti_table_id_fkey` FOREIGN KEY (`table_id`) REFERENCES `tables_table`(`table_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products_prod` ADD CONSTRAINT `products_prod_prodt_name_fkey` FOREIGN KEY (`prodt_name`) REFERENCES `product_types_prodt`(`prodt_name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products_prod` ADD CONSTRAINT `products_prod_prodc_name_fkey` FOREIGN KEY (`prodc_name`) REFERENCES `product_categories_prodc`(`prodc_name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products_prod` ADD CONSTRAINT `products_prod_bran_name_fkey` FOREIGN KEY (`bran_name`) REFERENCES `brands_bran`(`bran_name`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products_prod` ADD CONSTRAINT `products_prod_prost_code_fkey` FOREIGN KEY (`prost_code`) REFERENCES `product_statuses_prost`(`prost_code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `permissions_perm` ADD CONSTRAINT `permissions_perm_perc_code_fkey` FOREIGN KEY (`perc_code`) REFERENCES `permission_categories_perc`(`perc_code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `role_permissions_rolp` ADD CONSTRAINT `role_permissions_rolp_rol_name_fkey` FOREIGN KEY (`rol_name`) REFERENCES `roles_rol`(`rol_name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `role_permissions_rolp` ADD CONSTRAINT `role_permissions_rolp_perm_code_fkey` FOREIGN KEY (`perm_code`) REFERENCES `permissions_perm`(`perm_code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users_user` ADD CONSTRAINT `users_user_doct_name_fkey` FOREIGN KEY (`doct_name`) REFERENCES `document_types_doct`(`doct_name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users_user` ADD CONSTRAINT `users_user_rol_name_fkey` FOREIGN KEY (`rol_name`) REFERENCES `roles_rol`(`rol_name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users_user` ADD CONSTRAINT `users_user_accs_code_fkey` FOREIGN KEY (`accs_code`) REFERENCES `account_statuses_accs`(`accs_code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_profile_userp` ADD CONSTRAINT `user_profile_userp_user_document_fkey` FOREIGN KEY (`user_document`) REFERENCES `users_user`(`user_document`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_profile_userp` ADD CONSTRAINT `user_profile_userp_them_name_fkey` FOREIGN KEY (`them_name`) REFERENCES `themes_them`(`them_name`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customers_cust` ADD CONSTRAINT `customers_cust_doct_name_fkey` FOREIGN KEY (`doct_name`) REFERENCES `document_types_doct`(`doct_name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customers_cust` ADD CONSTRAINT `customers_cust_accs_code_fkey` FOREIGN KEY (`accs_code`) REFERENCES `account_statuses_accs`(`accs_code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customer_profile_custp` ADD CONSTRAINT `customer_profile_custp_cust_document_fkey` FOREIGN KEY (`cust_document`) REFERENCES `customers_cust`(`cust_document`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customer_profile_custp` ADD CONSTRAINT `customer_profile_custp_them_name_fkey` FOREIGN KEY (`them_name`) REFERENCES `themes_them`(`them_name`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commands_comm` ADD CONSTRAINT `commands_comm_table_id_fkey` FOREIGN KEY (`table_id`) REFERENCES `tables_table`(`table_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commands_comm` ADD CONSTRAINT `commands_comm_combt_id_fkey` FOREIGN KEY (`combt_id`) REFERENCES `combine_tables_combt`(`combt_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commands_comm` ADD CONSTRAINT `commands_comm_user_document_opener_fkey` FOREIGN KEY (`user_document_opener`) REFERENCES `users_user`(`user_document`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commands_comm` ADD CONSTRAINT `commands_comm_comms_code_fkey` FOREIGN KEY (`comms_code`) REFERENCES `command_statuses_comms`(`comms_code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commands_comm` ADD CONSTRAINT `commands_comm_user_document_closer_fkey` FOREIGN KEY (`user_document_closer`) REFERENCES `users_user`(`user_document`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders_ord` ADD CONSTRAINT `orders_ord_comm_id_fkey` FOREIGN KEY (`comm_id`) REFERENCES `commands_comm`(`comm_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders_ord` ADD CONSTRAINT `orders_ord_user_document_creator_fkey` FOREIGN KEY (`user_document_creator`) REFERENCES `users_user`(`user_document`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders_ord` ADD CONSTRAINT `orders_ord_cust_document_fkey` FOREIGN KEY (`cust_document`) REFERENCES `customers_cust`(`cust_document`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders_ord` ADD CONSTRAINT `orders_ord_ords_code_fkey` FOREIGN KEY (`ords_code`) REFERENCES `order_statuses_ords`(`ords_code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders_ord` ADD CONSTRAINT `orders_ord_user_document_closer_fkey` FOREIGN KEY (`user_document_closer`) REFERENCES `users_user`(`user_document`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order_items_ordit` ADD CONSTRAINT `order_items_ordit_comm_id_fkey` FOREIGN KEY (`comm_id`) REFERENCES `commands_comm`(`comm_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order_items_ordit` ADD CONSTRAINT `order_items_ordit_ord_code_fkey` FOREIGN KEY (`ord_code`) REFERENCES `orders_ord`(`ord_code`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order_items_ordit` ADD CONSTRAINT `order_items_ordit_prod_id_fkey` FOREIGN KEY (`prod_id`) REFERENCES `products_prod`(`prod_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order_items_ordit` ADD CONSTRAINT `order_items_ordit_ordis_code_fkey` FOREIGN KEY (`ordis_code`) REFERENCES `order_item_statuses_ordis`(`ordis_code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cash_boxes_cashb` ADD CONSTRAINT `cash_boxes_cashb_user_document_opened_fkey` FOREIGN KEY (`user_document_opened`) REFERENCES `users_user`(`user_document`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cash_boxes_cashb` ADD CONSTRAINT `cash_boxes_cashb_user_document_closed_fkey` FOREIGN KEY (`user_document_closed`) REFERENCES `users_user`(`user_document`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cashbox_movement_cashm` ADD CONSTRAINT `cashbox_movement_cashm_cashb_id_fkey` FOREIGN KEY (`cashb_id`) REFERENCES `cash_boxes_cashb`(`cashb_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cashbox_movement_cashm` ADD CONSTRAINT `cashbox_movement_cashm_user_document_fkey` FOREIGN KEY (`user_document`) REFERENCES `users_user`(`user_document`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cashbox_movement_cashm` ADD CONSTRAINT `cashbox_movement_cashm_cashmt_code_fkey` FOREIGN KEY (`cashmt_code`) REFERENCES `cashbox_movement_types_cashmt`(`cashmt_code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payments_pay` ADD CONSTRAINT `payments_pay_ord_code_fkey` FOREIGN KEY (`ord_code`) REFERENCES `orders_ord`(`ord_code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payments_pay` ADD CONSTRAINT `payments_pay_cashb_id_fkey` FOREIGN KEY (`cashb_id`) REFERENCES `cash_boxes_cashb`(`cashb_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payments_pay` ADD CONSTRAINT `payments_pay_paymet_name_fkey` FOREIGN KEY (`paymet_name`) REFERENCES `payment_methods_paymet`(`paymet_name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payments_pay` ADD CONSTRAINT `payments_pay_user_document_receive_fkey` FOREIGN KEY (`user_document_receive`) REFERENCES `users_user`(`user_document`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payments_pay` ADD CONSTRAINT `payments_pay_cust_document_paid_fkey` FOREIGN KEY (`cust_document_paid`) REFERENCES `customers_cust`(`cust_document`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventories_inv` ADD CONSTRAINT `inventories_inv_prod_id_fkey` FOREIGN KEY (`prod_id`) REFERENCES `products_prod`(`prod_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventory_movements_invmo` ADD CONSTRAINT `inventory_movements_invmo_inv_id_fkey` FOREIGN KEY (`inv_id`) REFERENCES `inventories_inv`(`inv_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventory_movements_invmo` ADD CONSTRAINT `inventory_movements_invmo_inmoty_code_fkey` FOREIGN KEY (`inmoty_code`) REFERENCES `inventory_movement_types_inmoty`(`inmoty_code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventory_movements_invmo` ADD CONSTRAINT `inventory_movements_invmo_user_document_fkey` FOREIGN KEY (`user_document`) REFERENCES `users_user`(`user_document`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sessions_sess` ADD CONSTRAINT `sessions_sess_user_document_fkey` FOREIGN KEY (`user_document`) REFERENCES `users_user`(`user_document`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sessions_sess` ADD CONSTRAINT `sessions_sess_cust_document_fkey` FOREIGN KEY (`cust_document`) REFERENCES `customers_cust`(`cust_document`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `logs_log` ADD CONSTRAINT `logs_log_user_document_fkey` FOREIGN KEY (`user_document`) REFERENCES `users_user`(`user_document`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `logs_log` ADD CONSTRAINT `logs_log_customer_document_fkey` FOREIGN KEY (`customer_document`) REFERENCES `customers_cust`(`cust_document`) ON DELETE SET NULL ON UPDATE CASCADE;
