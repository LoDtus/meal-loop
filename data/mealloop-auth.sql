DROP DATABASE IF EXISTS `mealloop-auth`;
CREATE DATABASE IF NOT EXISTS `mealloop-auth`;
USE `mealloop-auth`;

CREATE TABLE `auth` (
    `user_id` CHAR(31) PRIMARY KEY, -- user-(26 ký tự)
    `username` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `active` BOOLEAN NOT NULL,
    `provider` ENUM('LOCAL', 'KEYCLOAK', 'GOOGLE', 'GITHUB') NOT NULL,
    `email_verified` BOOLEAN NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE (`username`, `email`)
);

CREATE TABLE `role` (
    `role_id` CHAR(31) PRIMARY KEY, -- role-(26 ký tự)
    `code` VARCHAR(100) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `hidden` BOOLEAN NOT NULL,
    `description` VARCHAR(200) NOT NULL
);

CREATE TABLE `user_role_mapping` (
	`user_id` CHAR(31) NOT NULL,
    `role_id` CHAR(31) NOT NULL,
    PRIMARY KEY (`user_id`, `role_id`),
    FOREIGN KEY (`user_id`) REFERENCES `auth`(`user_id`) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (`role_id`) REFERENCES `role`(`role_id`) ON UPDATE CASCADE ON DELETE CASCADE
);