/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : heros

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2018-11-04 17:02:26
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for hero
-- ----------------------------
DROP TABLE IF EXISTS `hero`;
CREATE TABLE `hero` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(6) NOT NULL,
  `gender` varchar(2) NOT NULL,
  `say` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `isdel` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hero
-- ----------------------------
INSERT INTO `hero` VALUES ('1', '妲己', '女', '请尽请吩咐妲己，主人~', '2011-11-11  11:11:11', '1');
INSERT INTO `hero` VALUES ('2', '亚索 ', '男', '吾之荣耀，离别已久', '2011-11-11  11:11:11', '1');
INSERT INTO `hero` VALUES ('3', '女警', '女', '想要再来一发吗，我可不会留下任何悬念', '2011-11-11  11:11:11', '0');
INSERT INTO `hero` VALUES ('4', '小乔11', '女1', '花会枯萎，爱永不凋零，恋爱和战斗，都要勇往直前', '2018-11-03 20:35:29', '1');
