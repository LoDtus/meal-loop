DROP DATABASE IF EXISTS `mealloop-auth`;
CREATE DATABASE IF NOT EXISTS `mealloop-auth`;
USE `mealloop-auth`;

CREATE TABLE `role` (
    `role_id` CHAR(31) PRIMARY KEY,
    `code` VARCHAR(100) NOT NULL,
    `role` VARCHAR(100) NOT NULL,
    `hidden` BOOLEAN NOT NULL,
    `description` VARCHAR(200) NOT NULL
);

CREATE TABLE `auth` (
    `auth_id` CHAR(31) PRIMARY KEY,
    `role_id` CHAR(31) NOT NULL,
    `username` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `active` BOOLEAN NOT NULL,
    `provider` ENUM('LOCAL', 'KEYCLOAK', 'GOOGLE', 'GITHUB') NOT NULL,
    `email_verified` BOOLEAN NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (`role_id`) REFERENCES `role`(`role_id`) ON UPDATE CASCADE
);