-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2025-02-28 13:35:07
-- 服务器版本： 5.7.40-log
-- PHP 版本： 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 
--

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL COMMENT '用户ID',
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '用户名',
  `password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '密码',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户表';

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin123', '2025-02-28 05:34:51', '2025-02-28 05:34:51');

-- --------------------------------------------------------

--
-- 表的结构 `user_settings`
--

CREATE TABLE `user_settings` (
  `id` bigint(20) NOT NULL COMMENT '主键ID',
  `user_id` bigint(20) NOT NULL COMMENT '用户ID',
  `user_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '用户名',
  `user_email` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '邮箱',
  `user_tags` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '用户标签',
  `user_signatures` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '用户签名',
  `user_github` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'GitHub地址',
  `user_blog` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '博客地址',
  `user_social` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '社交账号',
  `user_music_url` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '音乐链接',
  `user_music_name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '音乐名称',
  `user_music_author` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '音乐作者',
  `user_music_cover` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '音乐封面',
  `foot_signatures` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '底部签名',
  `web_url` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '网站地址',
  `web_name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '网站名称',
  `web_beian` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '备案号',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户设置表';

--
-- 转存表中的数据 `user_settings`
--

INSERT INTO `user_settings` (`id`, `user_id`, `user_name`, `user_email`, `user_tags`, `user_signatures`, `user_github`, `user_blog`, `user_social`, `user_music_url`, `user_music_name`, `user_music_author`, `user_music_cover`, `foot_signatures`, `web_url`, `web_name`, `web_beian`, `created_at`, `updated_at`) VALUES
(1, 1, '1dreamGN', '1dreamGN@example.com', 'PHPer/前端/Go/Python/网络安全', '1dreamGN@example.com', 'http://github.com/1dreamGN', 'http://gowninng.cn', '1dreamGN@example.com', 'https://music.163.com/#/song?id=30431342', '&Z', '瑞葵(mizuki)', 'http://p1.music.126.net/ozbvqmDIUpNapYtXvStIWw==/109951167842387525.jpg?param=130y130', '在世界的边缘', 'http://index.gowninng.cn', '/1dreamGN/Index', '豫ICP备20007186号-2', '2025-02-28 05:34:51', '2025-02-28 05:34:51');

--
-- 转储表的索引
--

--
-- 表的索引 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- 表的索引 `user_settings`
--
ALTER TABLE `user_settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '用户ID', AUTO_INCREMENT=2;

--
-- 使用表AUTO_INCREMENT `user_settings`
--
ALTER TABLE `user_settings`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID', AUTO_INCREMENT=2;

--
-- 限制导出的表
--

--
-- 限制表 `user_settings`
--
ALTER TABLE `user_settings`
  ADD CONSTRAINT `user_settings_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
