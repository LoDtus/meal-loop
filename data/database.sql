CREATE DATABASE IF NOT EXISTS `mealloop-db`;
USE `mealloop-db`;

CREATE TABLE `auth` (
	`id` char(31) primary key, /* user-(26 ký tự) */
    `username` varchar(100) character set latin1 not null unique,
    `email` varchar(100) character set latin1 not null unique,
    `password` varchar(100) character set latin1 not null,
    `role_id` varchar(100) not null,
    `active` tinyint(1) not null,
    foreign key (`role_id`) references `roles`(`id`) on update cascade
);

CREATE TABLE `tags` (
	`id` char(100) primary key,
    `tag` text not null,
    `created_at` text not null
);

CREATE TABLE `products` (
	`id` char(100) primary key, /* product-<ulid store>-<ulid> */
    `store_id` char(100) not null,
    `created_at` text not null,
    `published_at` text not null,
    `updated_at` text not null,
    `status` text not null,
    `total` text not null
);

CREATE TABLE `posts` (
	`id` char(100) not null,
    `title` text not null,
    `description` text not null,
    `content` text not null,
    `created_at` text not null,
    `published_at` text not null,
    `updated_at` text not null
);