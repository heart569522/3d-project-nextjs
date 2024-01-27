INSERT INTO `bps-db`.api1 (datetime, OUT1, record_at) VALUES
('2024-01-28 00:01:00', 1, '2024-01-27 17:01:10'),
('2024-01-28 01:01:00', 0, '2024-01-27 18:01:10'),
('2024-01-28 02:01:00', 1, '2024-01-27 19:01:10'),
('2024-01-28 03:01:00', 1, '2024-01-27 20:01:10'),
('2024-01-28 04:01:00', 0, '2024-01-27 21:01:10'),
('2024-01-28 05:01:00', 1, '2024-01-27 22:01:10'),
('2024-01-28 06:01:00', 1, '2024-01-27 23:01:10'),
('2024-01-28 07:01:00', 0, '2024-01-28 00:01:10'),
('2024-01-28 08:11:00', 0, '2024-01-28 01:11:01'),
('2024-01-28 09:11:00', 1, '2024-01-28 02:11:01'),
('2024-01-28 10:11:00', 1, '2024-01-28 03:11:01'),
('2024-01-28 11:11:00', 0, '2024-01-28 04:11:01'),
('2024-01-28 12:11:00', 0, '2024-01-28 05:11:01'),
('2024-01-28 13:11:00', 1, '2024-01-28 06:11:01'),
('2024-01-28 14:11:00', 0, '2024-01-28 07:11:01'),
('2024-01-28 15:11:00', 1, '2024-01-28 08:11:01'),
('2024-01-28 16:11:00', 0, '2024-01-28 09:11:01'),
('2024-01-28 17:11:00', 0, '2024-01-28 10:11:01'),
('2024-01-28 18:11:00', 1, '2024-01-28 11:11:01'),
('2024-01-28 19:11:00', 1, '2024-01-28 12:11:01'),
('2024-01-28 20:11:00', 1, '2024-01-28 13:11:01'),
('2024-01-28 21:11:00', 0, '2024-01-28 14:11:01'),
('2024-01-28 22:11:00', 0, '2024-01-28 15:11:01'),
('2024-01-28 23:11:00', 1, '2024-01-28 16:11:01');

INSERT INTO `bps-db`.api2 (datetime, IN1, IN2, IN3, IN4, record_at) VALUES
('2024-01-28 00:01:00', 1, 1, 1, 0, '2024-01-27 17:01:10'),
('2024-01-28 01:01:00', 0, 0, 0, 1, '2024-01-27 18:01:10'),
('2024-01-28 02:01:00', 1, 1, 0, 0, '2024-01-27 19:01:10'),
('2024-01-28 03:01:00', 0, 1, 1, 1, '2024-01-27 20:01:10'),
('2024-01-28 04:01:00', 1, 0, 0, 1, '2024-01-27 21:01:10'),
('2024-01-28 05:01:00', 0, 1, 1, 0, '2024-01-27 22:01:10'),
('2024-01-28 06:01:00', 1, 1, 1, 1, '2024-01-27 23:01:10'),
('2024-01-28 07:01:00', 0, 0, 0, 0, '2024-01-28 00:01:10'),
('2024-01-28 08:01:00', 1, 0, 1, 0, '2024-01-28 01:01:10'),
('2024-01-28 09:01:00', 0, 1, 0, 1, '2024-01-28 02:01:10'),
('2024-01-28 10:01:00', 1, 1, 0, 0, '2024-01-28 03:01:10'),
('2024-01-28 11:01:00', 0, 0, 1, 1, '2024-01-28 04:01:10'),
('2024-01-28 12:01:00', 1, 0, 0, 1, '2024-01-28 05:01:10'),
('2024-01-28 13:01:00', 0, 1, 1, 0, '2024-01-28 06:01:10'),
('2024-01-28 14:01:00', 1, 0, 1, 1, '2024-01-28 07:01:10'),
('2024-01-28 15:01:00', 0, 1, 0, 0, '2024-01-28 08:01:10'),
('2024-01-28 16:01:00', 1, 0, 1, 0, '2024-01-28 09:01:10'),
('2024-01-28 17:01:00', 0, 0, 0, 1, '2024-01-28 10:01:10'),
('2024-01-28 18:01:00', 1, 1, 0, 0, '2024-01-28 11:01:10'),
('2024-01-28 19:01:00', 0, 1, 1, 1, '2024-01-28 12:01:10'),
('2024-01-28 20:01:00', 1, 1, 0, 1, '2024-01-28 13:01:10'),
('2024-01-28 21:01:00', 0, 0, 1, 0, '2024-01-28 14:01:10'),
('2024-01-28 22:01:00', 1, 0, 1, 1, '2024-01-28 15:01:10'),
('2024-01-28 23:01:00', 0, 1, 1, 0, '2024-01-28 16:01:10');

INSERT INTO `bps-db`.api3 (datetime, IN1, IN2, IN3, IN4, OUT4, record_at) VALUES
('2024-01-28 00:01:00', 1, 0, 1, 1, 1, '2024-01-27 17:01:10'),
('2024-01-28 01:01:00', 0, 1, 0, 0, 0, '2024-01-27 18:01:10'),
('2024-01-28 02:01:00', 1, 1, 0, 1, 1, '2024-01-27 19:01:10'),
('2024-01-28 03:01:00', 1, 0, 1, 1, 0, '2024-01-27 20:01:10'),
('2024-01-28 04:01:00', 0, 0, 0, 0, 1, '2024-01-27 21:01:10'),
('2024-01-28 05:01:00', 1, 1, 1, 1, 0, '2024-01-27 22:01:10'),
('2024-01-28 06:01:00', 1, 1, 1, 1, 1, '2024-01-27 23:01:10'),
('2024-01-28 07:01:00', 0, 0, 0, 0, 0, '2024-01-28 00:01:10'),
('2024-01-28 08:01:00', 0, 0, 1, 0, 1, '2024-01-28 01:01:10'),
('2024-01-28 09:01:00', 1, 1, 0, 1, 0, '2024-01-28 02:01:10'),
('2024-01-28 10:01:00', 1, 1, 0, 1, 1, '2024-01-28 03:01:10'),
('2024-01-28 11:01:00', 0, 0, 1, 0, 0, '2024-01-28 04:01:10'),
('2024-01-28 12:01:00', 0, 0, 0, 0, 1, '2024-01-28 05:01:10'),
('2024-01-28 13:01:00', 1, 1, 1, 1, 0, '2024-01-28 06:01:10'),
('2024-01-28 14:01:00', 0, 1, 1, 0, 1, '2024-01-28 07:01:10'),
('2024-01-28 15:01:00', 1, 0, 0, 1, 0, '2024-01-28 08:01:10'),
('2024-01-28 16:01:00', 0, 0, 1, 0, 1, '2024-01-28 09:01:10'),
('2024-01-28 17:01:00', 0, 1, 0, 0, 0, '2024-01-28 10:01:10'),
('2024-01-28 18:01:00', 1, 1, 0, 1, 1, '2024-01-28 11:01:10'),
('2024-01-28 19:01:00', 1, 0, 1, 1, 0, '2024-01-28 12:01:10'),
('2024-01-28 20:01:00', 1, 0, 0, 1, 1, '2024-01-28 13:01:10'),
('2024-01-28 21:01:00', 0, 1, 1, 0, 0, '2024-01-28 14:01:10'),
('2024-01-28 22:01:00', 0, 0, 1, 0, 1, '2024-01-28 15:01:10'),
('2024-01-28 23:01:00', 1, 0, 1, 1, 1, '2024-01-28 16:01:10');

INSERT INTO `bps-db`.api4 (datetime, IN1, IN2, IN3, IN4, p221, p222, record_at) VALUES
('2024-01-28 00:01:00', 1, 0, 1, 0, 30.11, 47.68, '2024-01-27 17:01:11'),
('2024-01-28 01:01:00', 0, 1, 0, 1, 31.53, 46.12, '2024-01-27 18:01:11'),
('2024-01-28 02:01:00', 1, 1, 0, 0, 32.78, 48.24, '2024-01-27 19:01:11'),
('2024-01-28 03:01:00', 1, 0, 1, 1, 33.27, 46.63, '2024-01-27 20:01:11'),
('2024-01-28 04:01:00', 0, 0, 0, 1, 31.08, 45.74, '2024-01-27 21:01:11'),
('2024-01-28 05:01:00', 1, 1, 1, 0, 31.95, 48.22, '2024-01-27 22:01:11'),
('2024-01-28 06:01:00', 1, 1, 1, 1, 32.94, 46.87, '2024-01-27 23:01:11'),
('2024-01-28 07:01:00', 0, 0, 0, 0, 30.89, 45.37, '2024-01-28 00:01:11'),
('2024-01-28 08:01:00', 0, 0, 1, 0, 31.76, 45.89, '2024-01-28 01:01:11'),
('2024-01-28 09:01:00', 1, 1, 0, 1, 33.23, 46.73, '2024-01-28 02:01:11'),
('2024-01-28 10:01:00', 1, 1, 0, 0, 33.52, 46.01, '2024-01-28 03:01:11'),
('2024-01-28 11:01:00', 0, 0, 1, 1, 31.94, 48.09, '2024-01-28 04:01:11'),
('2024-01-28 12:01:00', 0, 0, 0, 1, 31.15, 46.18, '2024-01-28 05:01:11'),
('2024-01-28 13:01:00', 1, 1, 1, 0, 32.45, 47.21, '2024-01-28 06:01:11'),
('2024-01-28 14:01:00', 0, 1, 1, 1, 33.33, 46.49, '2024-01-28 07:01:11'),
('2024-01-28 15:01:00', 1, 0, 0, 0, 30.71, 45.68, '2024-01-28 08:01:11'),
('2024-01-28 16:01:00', 0, 0, 1, 0, 31.89, 47.91, '2024-01-28 09:01:11'),
('2024-01-28 17:01:00', 0, 1, 0, 1, 32.44, 47.06, '2024-01-28 10:01:11'),
('2024-01-28 18:01:00', 1, 1, 0, 0, 33.45, 46.42, '2024-01-28 11:01:11'),
('2024-01-28 19:01:00', 1, 0, 1, 1, 31.04, 47.16, '2024-01-28 12:01:11'),
('2024-01-28 20:01:00', 1, 0, 0, 1, 31.94, 46.19, '2024-01-28 13:01:11'),
('2024-01-28 21:01:00', 0, 1, 1, 0, 32.68, 47.05, '2024-01-28 14:01:11'),
('2024-01-28 22:01:00', 0, 1, 1, 1, 33.14, 46.88, '2024-01-28 15:01:11'),
('2024-01-28 23:01:00', 1, 0, 1, 0, 30.54, 45.54, '2024-01-28 16:01:11');

INSERT INTO `bps-db`.api5 (datetime, p001, p002, p003, p004, p005, p006, p007, p008, p009, p010, p011, p012, p013, p014, p015, p016, p017, p018, p019, p020, record_at) VALUES
('2024-01-28 00:01:00', 408.2, 407.7, 407.8, 235.1, 234.1, 238.3, 5.6, 6.0, 6.1, 0.8, 1.3, 1.0, 3.1, -1.1, -0.6, -1.1, -2.7, 1.3, 1.4, 1.5, '2024-01-27 17:01:54'),
('2024-01-28 01:01:00', 407.9, 407.6, 407.7, 234.9, 234.2, 238.2, 5.7, 6.1, 6.2, 0.9, 1.2, 1.1, 3.0, -1.2, -0.7, -1.0, -2.8, 1.4, 1.5, 1.4, '2024-01-27 18:01:54'),
('2024-01-28 02:01:00', 408.0, 407.8, 407.9, 235.0, 234.0, 238.4, 5.8, 6.2, 6.3, 1.0, 1.3, 1.0, 3.1, -1.1, -0.6, -1.1, -2.7, 1.3, 1.4, 1.5, '2024-01-27 19:01:54'),
('2024-01-28 03:01:00', 407.7, 407.9, 407.8, 234.8, 234.3, 238.3, 5.6, 6.0, 6.1, 0.8, 1.4, 1.1, 3.0, -1.0, -0.5, -1.2, -2.9, 1.4, 1.6, 1.4, '2024-01-27 20:01:54'),
('2024-01-28 04:01:00', 408.1, 407.7, 407.6, 235.1, 234.2, 238.5, 5.7, 6.1, 6.2, 0.9, 1.3, 1.2, 3.1, -1.1, -0.7, -1.0, -2.8, 1.3, 1.5, 1.6, '2024-01-27 21:01:54'),
('2024-01-28 05:01:00', 407.8, 407.6, 407.7, 234.9, 234.1, 238.2, 5.8, 6.2, 6.3, 1.0, 1.2, 1.0, 3.1, -1.0, -0.6, -1.1, -2.7, 1.3, 1.4, 1.5, '2024-01-27 22:01:54'),
('2024-01-28 06:01:00', 407.9, 407.8, 407.9, 235.0, 234.0, 238.4, 5.9, 6.3, 6.0, 0.8, 1.3, 1.1, 3.0, -1.1, -0.5, -1.2, -2.9, 1.4, 1.6, 1.4, '2024-01-27 23:01:54'),
('2024-01-28 07:01:00', 407.7, 407.9, 407.8, 234.8, 234.3, 238.3, 5.6, 6.0, 6.1, 0.8, 1.4, 1.2, 3.1, -1.1, -0.7, -1.0, -2.8, 1.3, 1.5, 1.6, '2024-01-28 00:01:54'),
('2024-01-28 08:01:00', 408.1, 407.7, 407.6, 235.1, 234.2, 238.5, 5.7, 6.1, 6.2, 0.9, 1.3, 1.0, 3.1, -1.0, -0.6, -1.1, -2.7, 1.3, 1.4, 1.5, '2024-01-28 01:01:54'),
('2024-01-28 09:01:00', 407.8, 407.6, 407.7, 234.9, 234.1, 238.2, 5.8, 6.2, 6.3, 1.0, 1.2, 1.1, 3.0, -1.1, -0.5, -1.2, -2.9, 1.4, 1.6, 1.4, '2024-01-28 02:01:54'),
('2024-01-28 10:01:00', 408.0, 407.8, 407.9, 235.0, 234.0, 238.4, 5.9, 6.3, 6.0, 0.8, 1.3, 1.0, 3.1, -1.1, -0.7, -1.0, -2.8, 1.3, 1.5, 1.6, '2024-01-28 03:01:54'),
('2024-01-28 11:01:00', 407.7, 407.9, 407.8, 234.8, 234.3, 238.3, 5.6, 6.0, 6.1, 0.8, 1.4, 1.2, 3.0, -1.0, -0.6, -1.1, -2.9, 1.4, 1.5, 1.6, '2024-01-28 04:01:54'),
('2024-01-28 12:01:00', 408.1, 407.7, 407.6, 235.1, 234.2, 238.5, 5.7, 6.1, 6.2, 0.9, 1.3, 1.1, 3.1, -1.1, -0.7, -1.0, -2.8, 1.3, 1.4, 1.5, '2024-01-28 05:01:54'),
('2024-01-28 13:01:00', 407.8, 407.6, 407.7, 234.9, 234.1, 238.2, 5.8, 6.2, 6.3, 1.0, 1.2, 1.0, 3.1, -1.0, -0.6, -1.1, -2.7, 1.3, 1.4, 1.5, '2024-01-28 06:01:54'),
('2024-01-28 14:01:00', 407.9, 407.8, 407.9, 235.0, 234.0, 238.4, 5.9, 6.3, 6.0, 0.8, 1.3, 1.1, 3.0, -1.1, -0.5, -1.2, -2.9, 1.4, 1.6, 1.4, '2024-01-28 07:01:54'),
('2024-01-28 15:01:00', 407.7, 407.9, 407.8, 234.8, 234.3, 238.3, 5.6, 6.0, 6.1, 0.8, 1.4, 1.2, 3.0, -1.0, -0.6, -1.1, -2.9, 1.4, 1.5, 1.6, '2024-01-28 08:01:54'),
('2024-01-28 16:01:00', 408.1, 407.7, 407.6, 235.1, 234.2, 238.5, 5.7, 6.1, 6.2, 0.9, 1.3, 1.0, 3.1, -1.0, -0.6, -1.1, -2.7, 1.3, 1.4, 1.5, '2024-01-28 09:01:54'),
('2024-01-28 17:01:00', 407.8, 407.6, 407.7, 234.9, 234.1, 238.2, 5.8, 6.2, 6.3, 1.0, 1.2, 1.1, 3.0, -1.1, -0.5, -1.2, -2.9, 1.4, 1.6, 1.4, '2024-01-28 10:01:54'),
('2024-01-28 18:01:00', 408.0, 407.8, 407.9, 235.0, 234.0, 238.4, 5.9, 6.3, 6.0, 0.8, 1.3, 1.0, 3.1, -1.1, -0.7, -1.0, -2.8, 1.3, 1.5, 1.6, '2024-01-28 11:01:54'),
('2024-01-28 19:01:00', 407.7, 407.9, 407.8, 234.8, 234.3, 238.3, 5.6, 6.0, 6.1, 0.8, 1.4, 1.2, 3.0, -1.0, -0.6, -1.1, -2.9, 1.4, 1.5, 1.6, '2024-01-28 12:01:54'),
('2024-01-28 20:01:00', 408.1, 407.7, 407.6, 235.1, 234.2, 238.5, 5.7, 6.1, 6.2, 0.9, 1.3, 1.1, 3.1, -1.1, -0.7, -1.0, -2.8, 1.3, 1.4, 1.5, '2024-01-28 13:01:54'),
('2024-01-28 21:01:00', 407.8, 407.6, 407.7, 234.9, 234.1, 238.2, 5.8, 6.2, 6.3, 1.0, 1.2, 1.0, 3.1, -1.0, -0.6, -1.1, -2.7, 1.3, 1.4, 1.5, '2024-01-28 14:01:54'),
('2024-01-28 22:01:00', 407.9, 407.8, 407.9, 235.0, 234.0, 238.4, 5.9, 6.3, 6.0, 0.8, 1.3, 1.1, 3.0, -1.1, -0.5, -1.2, -2.9, 1.4, 1.6, 1.4, '2024-01-28 15:01:54');

INSERT INTO `bps-db`.api6 (datetime, s201, s202, s203, s204, s205, s206, s207, s208, s209, s210, record_at) VALUES
('2024-01-28 00:01:00', 49.4, 57075.5, 9.7, 11.1, 0.8, 0, 2.8, 227.4, 1, 0, '2024-01-27 17:01:17'),
('2024-01-28 01:01:00', 50.0, 57100.0, 9.9, 11.3, 0.7, 1, 2.7, 227.3, 0, 1, '2024-01-27 18:01:17'),
('2024-01-28 02:01:00', 49.8, 57082.0, 9.6, 11.0, 0.9, 0, 2.9, 227.2, 1, 1, '2024-01-27 19:01:17'),
('2024-01-28 03:01:00', 50.1, 57091.1, 9.8, 11.4, 0.8, 1, 2.8, 227.3, 1, 1, '2024-01-27 20:01:17'),
('2024-01-28 04:01:00', 49.7, 57079.4, 9.5, 10.9, 0.9, 0, 2.9, 227.2, 0, 0, '2024-01-27 21:01:17'),
('2024-01-28 05:01:00', 50.2, 57089.2, 9.9, 11.5, 0.7, 1, 2.7, 227.4, 0, 0, '2024-01-27 22:01:17'),
('2024-01-28 06:01:00', 49.9, 57072.3, 9.6, 11.0, 0.9, 0, 2.9, 227.3, 1, 1, '2024-01-27 23:01:17'),
('2024-01-28 07:01:00', 50.3, 57091.6, 10.0, 11.4, 0.8, 1, 2.8, 227.1, 1, 1, '2024-01-28 00:01:17'),
('2024-01-28 08:01:00', 50.0, 57074.5, 9.7, 11.2, 0.8, 0, 2.9, 227.3, 0, 0, '2024-01-28 01:01:17'),
('2024-01-28 09:01:00', 49.8, 57090.5, 9.6, 11.3, 0.7, 1, 2.8, 227.1, 1, 0, '2024-01-28 02:01:17'),
('2024-01-28 10:01:00', 50.1, 57082.3, 9.8, 11.4, 0.8, 0, 2.9, 227.3, 0, 1, '2024-01-28 03:01:17'),
('2024-01-28 11:01:00', 49.7, 57079.5, 9.5, 10.9, 0.9, 0, 2.9, 227.4, 0, 1, '2024-01-28 04:01:17'),
('2024-01-28 12:01:00', 50.2, 57089.0, 9.9, 11.4, 0.8, 1, 2.7, 227.3, 0, 0, '2024-01-28 05:01:17'),
('2024-01-28 13:01:00', 49.9, 57072.0, 9.6, 11.0, 0.9, 0, 2.9, 227.2, 1, 0, '2024-01-28 06:01:17'),
('2024-01-28 14:01:00', 50.3, 57090.9, 10.1, 11.5, 0.7, 1, 2.8, 227.4, 1, 1, '2024-01-28 07:01:17'),
('2024-01-28 15:01:00', 50.0, 57074.6, 9.7, 11.2, 0.8, 0, 2.9, 227.2, 0, 0, '2024-01-28 08:01:17'),
('2024-01-28 16:01:00', 49.4, 57075.6, 9.5, 11.0, 0.9, 0, 2.8, 227.4, 1, 1, '2024-01-28 09:01:17'),
('2024-01-28 17:01:00', 50.0, 57100.1, 9.9, 11.3, 0.7, 1, 2.7, 227.3, 0, 1, '2024-01-28 10:01:17'),
('2024-01-28 18:01:00', 49.8, 57082.1, 9.6, 11.0, 0.9, 0, 2.9, 227.2, 1, 0, '2024-01-28 11:01:17'),
('2024-01-28 19:01:00', 50.1, 57091.2, 9.8, 11.4, 0.8, 1, 2.8, 227.3, 1, 0, '2024-01-28 12:01:17'),
('2024-01-28 20:01:00', 49.7, 57079.5, 9.5, 10.9, 0.9, 0, 2.9, 227.2, 0, 1, '2024-01-28 13:01:17'),
('2024-01-28 21:01:00', 50.2, 57089.3, 9.9, 11.5, 0.7, 1, 2.7, 227.4, 0, 1, '2024-01-28 14:01:17'),
('2024-01-28 22:01:00', 49.9, 57072.1, 9.6, 11.0, 0.9, 0, 2.9, 227.3, 1, 1, '2024-01-28 15:01:17'),
('2024-01-28 23:01:00', 50.3, 57091.7, 10.0, 11.4, 0.8, 1, 2.8, 227.1, 1, 0, '2024-01-28 16:01:17');
