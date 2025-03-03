-- 创建数据库
CREATE DATABASE IF NOT EXISTS gowninng CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE gowninng;

-- 创建用户表
CREATE TABLE IF NOT EXISTS users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT COMMENT '用户ID',
    username VARCHAR(50) UNIQUE NOT NULL COMMENT '用户名',
    password VARCHAR(100) NOT NULL COMMENT '密码',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户表';

-- 创建用户设置表
CREATE TABLE IF NOT EXISTS user_settings (
    id BIGINT PRIMARY KEY AUTO_INCREMENT COMMENT '主键ID',
    user_id BIGINT UNIQUE NOT NULL COMMENT '用户ID',
    user_name VARCHAR(50) COMMENT '用户名',
    user_email VARCHAR(100) COMMENT '邮箱',
    user_tags VARCHAR(200) COMMENT '用户标签',
    user_signatures VARCHAR(200) COMMENT '用户签名',
    user_github VARCHAR(200) COMMENT 'GitHub地址',
    user_blog VARCHAR(200) COMMENT '博客地址',
    user_social VARCHAR(200) COMMENT '社交账号',
    user_music_url VARCHAR(500) COMMENT '音乐链接',
    user_music_name VARCHAR(100) COMMENT '音乐名称',
    user_music_author VARCHAR(100) COMMENT '音乐作者',
    user_music_cover VARCHAR(500) COMMENT '音乐封面',
    foot_signatures VARCHAR(200) COMMENT '底部签名',
    web_url VARCHAR(200) COMMENT '网站地址',
    web_name VARCHAR(100) COMMENT '网站名称',
    web_beian VARCHAR(50) COMMENT '备案号',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户设置表';

-- 插入测试用户数据
INSERT INTO users (username, password) VALUES ('admin', 'admin123');

-- 插入测试用户设置数据
INSERT INTO user_settings (user_id, user_name, user_email, user_tags, user_signatures, user_github, user_blog, user_social, user_music_url, user_music_name, user_music_author, user_music_cover, foot_signatures, web_url, web_name, web_beian) 
SELECT 
    id,
    '1dreamGN',
    '1dreamGN@example.com',
    'PHPer/前端/Go/Python/网络安全',
    '1dreamGN@example.com',
    'http://github.com/1dreamGN',
    'http://gowninng.cn',
    '1dreamGN@example.com',
    'https://music.163.com/#/song?id=30431342',
    '&Z',
    '瑞葵(mizuki)',
    'http://p1.music.126.net/ozbvqmDIUpNapYtXvStIWw==/109951167842387525.jpg?param=130y130',
    '在世界的边缘',
    'http://index.gowninng.cn',
    '/1dreamGN/Index',
    '豫ICP备20007186号-2'
FROM users WHERE username = 'admin';