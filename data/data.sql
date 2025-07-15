USE `mealloop-auth`;

-- AUTH
INSERT INTO `auth` (`user_id`, `username`, `email`, `password`, `active`, `provider`, `email_verified`)
VALUES 
('user-01HQ8KZNGP5D4Y3AMTMT8XYF85', 'alice', 'alice@example.com', 'hashedpass1', TRUE, 'LOCAL', TRUE),
('user-01HQ8KZNH1S3Q1V7ZK20PBNJVT', 'bob', 'bob@example.com', 'hashedpass2', TRUE, 'GOOGLE', TRUE),
('user-01HQ8KZNHZYZ9R6KZBDAWAP2JW', 'charlie', 'charlie@example.com', 'hashedpass3', FALSE, 'KEYCLOAK', FALSE);

-- ROLE
INSERT INTO `role` (`role_id`, `code`, `name`, `hidden`, `description`)
VALUES
('role-01HQ8KZP06Z6J3EDJGDC9MDK9G', 'ADMIN', 'Administrator', FALSE, 'Toàn quyền hệ thống'),
('role-01HQ8KZP0D28WF5AYE5AD29V0Q', 'USER', 'Người dùng cơ bản', FALSE, 'Quyền mặc định khi đăng ký'),
('role-01HQ8KZP0ZY61GM1JXZXH9B9KT', 'MOD', 'Người kiểm duyệt', FALSE, 'Kiểm tra nội dung người dùng');

-- USER_ROLE_MAPPING
INSERT INTO `user_role_mapping` (`user_id`, `role_id`)
VALUES
('user-01HQ8KZNGP5D4Y3AMTMT8XYF85', 'role-01HQ8KZP06Z6J3EDJGDC9MDK9G'), -- alice: ADMIN
('user-01HQ8KZNGP5D4Y3AMTMT8XYF85', 'role-01HQ8KZP0D28WF5AYE5AD29V0Q'), -- alice: USER
('user-01HQ8KZNH1S3Q1V7ZK20PBNJVT', 'role-01HQ8KZP0D28WF5AYE5AD29V0Q'), -- bob: USER
('user-01HQ8KZNH1S3Q1V7ZK20PBNJVT', 'role-01HQ8KZP0ZY61GM1JXZXH9B9KT'), -- bob: MOD
('user-01HQ8KZNHZYZ9R6KZBDAWAP2JW', 'role-01HQ8KZP0D28WF5AYE5AD29V0Q'), -- charlie: USER
('user-01HQ8KZNHZYZ9R6KZBDAWAP2JW', 'role-01HQ8KZP0ZY61GM1JXZXH9B9KT'), -- charlie: MOD
('user-01HQ8KZNGP5D4Y3AMTMT8XYF85', 'role-01HQ8KZP0ZY61GM1JXZXH9B9KT'), -- alice: MOD
('user-01HQ8KZNH1S3Q1V7ZK20PBNJVT', 'role-01HQ8KZP06Z6J3EDJGDC9MDK9G'), -- bob: ADMIN
('user-01HQ8KZNHZYZ9R6KZBDAWAP2JW', 'role-01HQ8KZP06Z6J3EDJGDC9MDK9G'); -- charlie: ADMIN