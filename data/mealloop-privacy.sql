DROP DATABASE IF EXISTS `mealloop-privacy`;
CREATE DATABASE IF NOT EXISTS `mealloop-privacy`;
USE `mealloop-privacy`;

CREATE TABLE privacy_policies (
    `policy_id` CHAR(31) PRIMARY KEY,
    `entity_id` CHAR(31) NOT NULL,
    `entity_type` VARCHAR(50) NOT NULL,
    `user_id` CHAR(31) NOT NULL,
    `privacy_level` ENUM(
        'PRIVATE',
        'FOLLOWERS_ONLY',
        'FOLLOWING_ONLY',
        'MUTUAL_ONLY',
        'CUSTOM',
        'PUBLIC'
    ) NOT NULL DEFAULT 'PUBLIC',
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE custom_access (
    `access_id` CHAR(31) PRIMARY KEY,
    `policy_id` CHAR(31) NOT NULL,
    `allowed_user_id` CHAR(31) NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);