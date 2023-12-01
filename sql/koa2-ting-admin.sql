/*
 Navicat Premium Data Transfer

 Source Server         : 本地mysql80
 Source Server Type    : MySQL
 Source Server Version : 80034
 Source Host           : localhost:3306
 Source Schema         : koa-simple-template

 Target Server Type    : MySQL
 Target Server Version : 80034
 File Encoding         : 65001

 Date: 01/12/2023 13:40:36
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_avatar
-- ----------------------------
DROP TABLE IF EXISTS `t_avatar`;
CREATE TABLE `t_avatar`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `mimetype` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `size` int(0) NULL DEFAULT NULL,
  `user_id` int(0) NULL DEFAULT NULL,
  `creatAt` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updateAt` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `filename`(`filename`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `t_avatar_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_avatar
-- ----------------------------
INSERT INTO `t_avatar` VALUES (1, 'c09439fe64556c221fb6af90a204595c', 'image/png', 3318, 2, '2023-12-01 11:07:21', '2023-12-01 11:07:21');
INSERT INTO `t_avatar` VALUES (2, '631ec98898bd901d839f6ed632a2ac21', 'image/png', 2444, 2, '2023-12-01 11:07:58', '2023-12-01 11:07:58');
INSERT INTO `t_avatar` VALUES (3, 'bdbf462e609542115f9b3505df4bccfb', 'image/png', 2444, 2, '2023-12-01 11:13:55', '2023-12-01 11:13:55');
INSERT INTO `t_avatar` VALUES (4, '194c17214f5c60d17f900fce307dd659', 'image/png', 2444, 2, '2023-12-01 12:57:41', '2023-12-01 12:57:41');
INSERT INTO `t_avatar` VALUES (5, 'a4ae5018bacc2a0f832435b82093e88e', 'image/png', 2444, 2, '2023-12-01 12:57:44', '2023-12-01 12:57:44');
INSERT INTO `t_avatar` VALUES (8, 'e2b8f95d15a98897860649c2086f0dc8', 'image/png', 10192, 2, '2023-12-01 13:28:22', '2023-12-01 13:28:22');

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `creatAt` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updateAt` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  `avatar_url` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES (1, 'user1', '111111', '2023-12-01 09:44:30', '2023-12-01 09:44:30', NULL);
INSERT INTO `t_user` VALUES (2, 'admin1', 'e10adc3949ba59abbe56e057f20f883e', '2023-12-01 09:45:31', '2023-12-01 11:07:21', 'http://localhost:8000/file/2/avatar');

SET FOREIGN_KEY_CHECKS = 1;
