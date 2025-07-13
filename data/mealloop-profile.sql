DROP DATABASE IF EXISTS `mealloop-profile`;
CREATE DATABASE IF NOT EXISTS `mealloop-profile`;
USE `mealloop-profile`;

CREATE TABLE `profile_field` (
    `field_id` CHAR(31) PRIMARY KEY,
    `user_id` CHAR(31) NOT NULL,
    `field_name` VARCHAR(100) NOT NULL,
    `field_type` ENUM('string', 'date', 'number', 'boolean') NOT NULL,
    `is_required` BOOLEAN DEFAULT FALSE,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- lưu cả email trong này
CREATE TABLE `profile_data` (
    `data_id` CHAR(31) PRIMARY KEY,
    `user_id` CHAR(31) NOT NULL,
    `field_id` CHAR(31) NOT NULL,
    `value` TEXT NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_user_id (`user_id`),
    INDEX idx_field_id (`field_id`)
);