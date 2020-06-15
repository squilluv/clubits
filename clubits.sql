-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: clubits
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add user',7,'add_user'),(26,'Can change user',7,'change_user'),(27,'Can delete user',7,'delete_user'),(28,'Can view user',7,'view_user'),(29,'Can add students',8,'add_students'),(30,'Can change students',8,'change_students'),(31,'Can delete students',8,'delete_students'),(32,'Can view students',8,'view_students'),(33,'Can add auth token',9,'add_authtoken'),(34,'Can change auth token',9,'change_authtoken'),(35,'Can delete auth token',9,'delete_authtoken'),(36,'Can view auth token',9,'view_authtoken'),(37,'Can add place',10,'add_place'),(38,'Can change place',10,'change_place'),(39,'Can delete place',10,'delete_place'),(40,'Can view place',10,'view_place'),(41,'Can add persons',11,'add_persons'),(42,'Can change persons',11,'change_persons'),(43,'Can delete persons',11,'delete_persons'),(44,'Can view persons',11,'view_persons'),(45,'Can add employee',12,'add_employee'),(46,'Can change employee',12,'change_employee'),(47,'Can delete employee',12,'delete_employee'),(48,'Can view employee',12,'view_employee'),(49,'Can add course',13,'add_course'),(50,'Can change course',13,'change_course'),(51,'Can delete course',13,'delete_course'),(52,'Can view course',13,'view_course'),(53,'Can add course group',14,'add_coursegroup'),(54,'Can change course group',14,'change_coursegroup'),(55,'Can delete course group',14,'delete_coursegroup'),(56,'Can view course group',14,'view_coursegroup'),(57,'Can add course item',15,'add_courseitem'),(58,'Can change course item',15,'change_courseitem'),(59,'Can delete course item',15,'delete_courseitem'),(60,'Can view course item',15,'view_courseitem'),(61,'Can add course liter',16,'add_courseliter'),(62,'Can change course liter',16,'change_courseliter'),(63,'Can delete course liter',16,'delete_courseliter'),(64,'Can view course liter',16,'view_courseliter'),(65,'Can add course po',17,'add_coursepo'),(66,'Can change course po',17,'change_coursepo'),(67,'Can delete course po',17,'delete_coursepo'),(68,'Can view course po',17,'view_coursepo'),(69,'Can add teach group',18,'add_teachgroup'),(70,'Can change teach group',18,'change_teachgroup'),(71,'Can delete teach group',18,'delete_teachgroup'),(72,'Can view teach group',18,'view_teachgroup'),(73,'Can add teach group student',19,'add_teachgroupstudent'),(74,'Can change teach group student',19,'change_teachgroupstudent'),(75,'Can delete teach group student',19,'delete_teachgroupstudent'),(76,'Can view teach group student',19,'view_teachgroupstudent'),(77,'Can add sections',20,'add_sections'),(78,'Can change sections',20,'change_sections'),(79,'Can delete sections',20,'delete_sections'),(80,'Can view sections',20,'view_sections'),(81,'Can add teach plan',21,'add_teachplan'),(82,'Can change teach plan',21,'change_teachplan'),(83,'Can delete teach plan',21,'delete_teachplan'),(84,'Can view teach plan',21,'view_teachplan'),(85,'Can add visited students',22,'add_visitedstudents'),(86,'Can change visited students',22,'change_visitedstudents'),(87,'Can delete visited students',22,'delete_visitedstudents'),(88,'Can view visited students',22,'view_visitedstudents'),(89,'Can add visited',23,'add_visited'),(90,'Can change visited',23,'change_visited'),(91,'Can delete visited',23,'delete_visited'),(92,'Can view visited',23,'view_visited'),(93,'Can add contract',24,'add_contract'),(94,'Can change contract',24,'change_contract'),(95,'Can delete contract',24,'delete_contract'),(96,'Can view contract',24,'view_contract'),(97,'Can add messages',25,'add_messages'),(98,'Can change messages',25,'change_messages'),(99,'Can delete messages',25,'delete_messages'),(100,'Can view messages',25,'view_messages');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$180000$4Jj9wII4WWtV$7uwBxjTrK4ALJHDVPNxn5M8w/MSA2Ik23b3eY2p+dr4=',NULL,0,'lolicom','','','lolicom@loli.com',1,1,'2020-03-17 09:21:45.833574'),(6,'pbkdf2_sha256$180000$BCFFCNI5C9Tv$zeNgczEOgDjFhvuR744Ya/evJzWM5HokFU2iEBmNquY=',NULL,0,'test','','','test@mail.ru',0,1,'2020-04-27 07:50:40.030748'),(7,'pbkdf2_sha256$180000$4Hf7yKihx9Jk$wiFS3HTQTd0lPcie8yx+Ar3VrRPASz7VoRf9zyAbQUE=',NULL,0,'testin','','','testin@mail.ru',0,1,'2020-04-29 15:50:24.671044'),(8,'pbkdf2_sha256$180000$rJ722FDkS5eG$f+2OQNu8BJcc6YVHCylHlv4GuLbqMaf0iJa9PeE+C2k=',NULL,0,'AdTeMaI','','','AdTeMaI@mail.ru',1,1,'2020-05-07 06:05:42.377245'),(9,'pbkdf2_sha256$180000$vX2we1DjxFKS$y4tYS9tLG9VepeRch4RNfdvzB3zoNfGyxamAvKyrnIw=',NULL,0,'AdTeMaII','','','AdTeMaII@mail.ru',1,1,'2020-05-07 06:09:57.740814'),(10,'pbkdf2_sha256$180000$8FyzvPWHkAuT$+/hUjCJ5DKj0jArcoJfC5BHZphnRNAPhh4t8qTDpghY=',NULL,0,'AdTeMaIII','','','AdTeMaIII@mail.ru',1,1,'2020-05-07 06:12:03.397690'),(11,'pbkdf2_sha256$180000$aIP3e2zKLnxb$9nDv7RvpNG+j+/4pscPxtDkQVFlFFLymA00YaxMjWYM=',NULL,0,'AdTeMaIV','','','AdTeMaIV@mail.ru',1,1,'2020-05-07 06:16:18.002895'),(16,'pbkdf2_sha256$180000$mAJY3trEcVR6$vixOnJNkL8ggwWwZhvd/AKAK85sWrnGXPt1O47k5img=',NULL,0,'AdTeMaV','','','AdTeMaV@mail.ru',0,1,'2020-05-26 07:26:50.384001'),(21,'pbkdf2_sha256$180000$2J4vpgPZoML2$0lWmvRFhfyXIxfILfD1skjMzRe2JiHSEsTP2UGeO434=',NULL,0,'Ivan1960','','','Ivan1960@mail.ru',0,1,'2020-06-11 10:53:29.652851'),(22,'pbkdf2_sha256$180000$P6wQcHQrxsmk$R7A5xwdL9Q+z4LxoSKPhS1+JIjjZ2ZaovL3l9hzeYhE=',NULL,0,'Vadim1970','','','Vadim1970@mail.ru',0,1,'2020-06-11 10:54:11.332590'),(23,'pbkdf2_sha256$180000$ZnI6sVs6McE0$mqV9ghoEXDf3NikXjVpRkY5lM57d2E27vHLk1KH8oks=',NULL,0,'Sergey','','','Sereys@mail.ru',0,1,'2020-06-11 10:54:34.725782'),(24,'pbkdf2_sha256$180000$4KoZ8SfeWSCQ$G+msN6/ZmXnleXYIjr65p+QbYLZK0LB9mdMUiTsnrVo=',NULL,0,'Vlad','','','VladOk@ok.ru',0,1,'2020-06-11 10:54:48.778840'),(25,'pbkdf2_sha256$180000$fcXitqiG4QVO$xWeXNx42rkhULlK3Mrkk0c8jzOm8A0ecxXcO2evEH3U=',NULL,0,'Ivan1950','','','Ivan1950@yandex.ru',0,1,'2020-06-11 13:14:50.411685'),(26,'pbkdf2_sha256$180000$5MzNXSIt6S11$Ms5G8ySMYdpWmiWyaNz6qvx2VUq1G1YpE/CFWWJ9uQo=',NULL,0,'Test1','','','test1@yandex.ru',0,1,'2020-06-14 07:12:24.672558');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contract`
--

DROP TABLE IF EXISTS `contract`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contract` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `student_id` int DEFAULT NULL,
  `person_id` int DEFAULT NULL,
  `teach_group_id` int DEFAULT NULL,
  `start` date DEFAULT NULL,
  `end` date DEFAULT NULL,
  `price` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contract`
--

LOCK TABLES `contract` WRITE;
/*!40000 ALTER TABLE `contract` DISABLE KEYS */;
/*!40000 ALTER TABLE `contract` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) DEFAULT NULL,
  `short_name` varchar(45) DEFAULT NULL,
  `yo_from` int DEFAULT NULL,
  `yo_to` int DEFAULT NULL,
  `min_students` int DEFAULT NULL,
  `max_students` int DEFAULT NULL,
  `teacher` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES (22,'Изучение Arduino','Arduino',8,18,3,10,'7'),(23,'Программирование на языке программирования Python 3','Обучение ЯП Python3',7,18,1,10,'7');
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_group`
--

DROP TABLE IF EXISTS `course_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `course_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_group`
--

LOCK TABLES `course_group` WRITE;
/*!40000 ALTER TABLE `course_group` DISABLE KEYS */;
INSERT INTO `course_group` VALUES (22,'Вводный урок','22'),(23,'Основные панятия в микросхемах','22'),(24,'Изучение основ ООП','23'),(25,'Практические занятия','23'),(26,'Обучение по интеграции на домашние ПК','23');
/*!40000 ALTER TABLE `course_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_item`
--

DROP TABLE IF EXISTS `course_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) DEFAULT NULL,
  `count` int DEFAULT NULL,
  `ei` varchar(45) DEFAULT NULL,
  `course_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_item`
--

LOCK TABLES `course_item` WRITE;
/*!40000 ALTER TABLE `course_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `course_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_liter`
--

DROP TABLE IF EXISTS `course_liter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_liter` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `author` varchar(100) DEFAULT NULL,
  `publisher` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `pages` int DEFAULT NULL,
  `course_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_liter`
--

LOCK TABLES `course_liter` WRITE;
/*!40000 ALTER TABLE `course_liter` DISABLE KEYS */;
/*!40000 ALTER TABLE `course_liter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_po`
--

DROP TABLE IF EXISTS `course_po`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_po` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) DEFAULT NULL,
  `developer` varchar(150) DEFAULT NULL,
  `licence` varchar(150) DEFAULT NULL,
  `course_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_po`
--

LOCK TABLES `course_po` WRITE;
/*!40000 ALTER TABLE `course_po` DISABLE KEYS */;
/*!40000 ALTER TABLE `course_po` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(24,'dlc','contract'),(13,'dlc','course'),(14,'dlc','coursegroup'),(15,'dlc','courseitem'),(16,'dlc','courseliter'),(17,'dlc','coursepo'),(25,'dlc','messages'),(20,'dlc','sections'),(18,'dlc','teachgroup'),(19,'dlc','teachgroupstudent'),(21,'dlc','teachplan'),(23,'dlc','visited'),(22,'dlc','visitedstudents'),(9,'knox','authtoken'),(6,'sessions','session'),(12,'users','employee'),(11,'users','persons'),(10,'users','place'),(8,'users','students'),(7,'users','user');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2020-03-17 09:19:06.219995'),(2,'auth','0001_initial','2020-03-17 09:19:06.644152'),(3,'admin','0001_initial','2020-03-17 09:19:07.863605'),(4,'admin','0002_logentry_remove_auto_add','2020-03-17 09:19:08.168398'),(5,'admin','0003_logentry_add_action_flag_choices','2020-03-17 09:19:08.194760'),(6,'contenttypes','0002_remove_content_type_name','2020-03-17 09:19:08.459811'),(7,'auth','0002_alter_permission_name_max_length','2020-03-17 09:19:08.631345'),(8,'auth','0003_alter_user_email_max_length','2020-03-17 09:19:08.712379'),(9,'auth','0004_alter_user_username_opts','2020-03-17 09:19:08.736188'),(10,'auth','0005_alter_user_last_login_null','2020-03-17 09:19:08.888492'),(11,'auth','0006_require_contenttypes_0002','2020-03-17 09:19:08.902810'),(12,'auth','0007_alter_validators_add_error_messages','2020-03-17 09:19:08.936856'),(13,'auth','0008_alter_user_username_max_length','2020-03-17 09:19:09.091266'),(14,'auth','0009_alter_user_last_name_max_length','2020-03-17 09:19:09.259946'),(15,'auth','0010_alter_group_name_max_length','2020-03-17 09:19:09.316219'),(16,'auth','0011_update_proxy_permissions','2020-03-17 09:19:09.346568'),(17,'knox','0001_initial','2020-03-17 09:19:09.409741'),(18,'knox','0002_auto_20150916_1425','2020-03-17 09:19:09.574270'),(19,'knox','0003_auto_20150916_1526','2020-03-17 09:19:09.685631'),(20,'knox','0004_authtoken_expires','2020-03-17 09:19:09.726922'),(21,'knox','0005_authtoken_token_key','2020-03-17 09:19:09.769046'),(22,'knox','0006_auto_20160818_0932','2020-03-17 09:19:09.910380'),(23,'knox','0007_auto_20190111_0542','2020-03-17 09:19:09.944070'),(24,'sessions','0001_initial','2020-03-17 09:19:09.984574'),(25,'users','0001_initial','2020-03-17 09:19:10.009821'),(26,'users','0002_students','2020-03-17 09:19:10.018902'),(27,'users','0003_auto_20200313_2021','2020-03-17 09:19:10.027674'),(28,'users','0004_place','2020-03-18 04:01:52.642982'),(29,'users','0005_persons','2020-03-18 10:17:52.032853'),(30,'users','0006_auto_20200323_1119','2020-03-23 06:19:13.758222'),(31,'dlc','0001_initial','2020-03-25 11:18:26.962143'),(32,'users','0007_auto_20200325_1618','2020-03-25 11:18:26.966960'),(33,'dlc','0002_coursegroup_courseitem_courseliter_coursepo','2020-03-25 11:53:23.961869'),(34,'dlc','0003_teachgroup_teachgroupstudent','2020-04-16 16:06:03.449838'),(35,'dlc','0004_auto_20200416_2136','2020-04-16 16:36:34.687376'),(36,'dlc','0005_sections_teachplan','2020-04-23 14:35:00.237811'),(37,'dlc','0006_visited_visitedstudents','2020-04-24 07:42:58.278289'),(38,'dlc','0007_contract','2020-04-25 18:17:51.778593'),(39,'dlc','0008_auto_20200502_1644','2020-05-02 11:44:09.980513'),(40,'dlc','0009_auto_20200502_2306','2020-05-02 18:06:05.906733'),(41,'dlc','0010_auto_20200505_1743','2020-05-05 12:43:23.094125');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dlc_contract`
--

DROP TABLE IF EXISTS `dlc_contract`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dlc_contract` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `status` varchar(45) NOT NULL,
  `start` date NOT NULL,
  `end` date NOT NULL,
  `price` int NOT NULL,
  `person_id` int NOT NULL,
  `student_id` int NOT NULL,
  `teach_group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `dlc_contract_person_id_05772c2f_fk_persons_id` (`person_id`),
  KEY `dlc_contract_student_id_599a4b3f_fk_students_id` (`student_id`),
  KEY `dlc_contract_teach_group_id_97d53afb_fk_dlc_teachgroup_id` (`teach_group_id`),
  CONSTRAINT `dlc_contract_person_id_05772c2f_fk_persons_id` FOREIGN KEY (`person_id`) REFERENCES `persons` (`id`),
  CONSTRAINT `dlc_contract_student_id_599a4b3f_fk_students_id` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`),
  CONSTRAINT `dlc_contract_teach_group_id_97d53afb_fk_dlc_teachgroup_id` FOREIGN KEY (`teach_group_id`) REFERENCES `dlc_teachgroup` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dlc_contract`
--

LOCK TABLES `dlc_contract` WRITE;
/*!40000 ALTER TABLE `dlc_contract` DISABLE KEYS */;
INSERT INTO `dlc_contract` VALUES (6,'2020-01-01','Оплачен','2010-01-01','2020-01-01',9000,8,12,20),(7,'2020-06-11','Оплачен','2020-01-01','2021-01-01',13000,9,14,21),(8,'2020-06-11','Оплачен','2019-01-01','2021-01-01',15000,11,15,20),(9,'2020-06-14','Не оплачен','2019-01-01','2021-01-01',0,12,16,20);
/*!40000 ALTER TABLE `dlc_contract` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dlc_messages`
--

DROP TABLE IF EXISTS `dlc_messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dlc_messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `message` varchar(255) NOT NULL,
  `user_id` int NOT NULL,
  `teach_group_id` int DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `dlc_messages_user_id_31d2aa9e_fk_auth_user_id` (`user_id`),
  CONSTRAINT `dlc_messages_user_id_31d2aa9e_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dlc_messages`
--

LOCK TABLES `dlc_messages` WRITE;
/*!40000 ALTER TABLE `dlc_messages` DISABLE KEYS */;
INSERT INTO `dlc_messages` VALUES (15,'Всем привет',9,20,'2020-05-07 12:26:00'),(16,'Здравствуйте. Завтра занятия с 1: 30',1,20,'2020-04-04 12:28:00'),(17,'Понятненько??',1,20,'2020-04-04 20:18:00'),(18,'Да',6,20,'2020-04-04 20:23:00'),(19,'Не забывайте',1,20,'2020-04-04 20:23:00'),(20,'Конечно',6,20,'2020-04-04 20:26:00'),(21,'ок',1,20,'2020-04-04 20:27:00'),(22,'ага',6,20,'2020-04-04 20:32:00'),(23,'кмн',1,20,'2020-04-04 20:32:00'),(24,'jz',1,20,'2020-04-04 20:33:00'),(25,'df',6,20,'2020-04-04 20:41:00'),(26,'as',1,20,'2020-04-04 20:42:00'),(27,'n',6,20,'2020-04-04 20:44:00'),(28,'df',1,20,'2020-04-04 20:47:00'),(29,'dsf',6,20,'2020-04-04 20:50:00'),(30,'df',1,20,'2020-04-04 20:51:00'),(31,'dfdsf',1,20,'2020-04-04 20:52:00'),(32,'df',1,20,'2020-04-04 20:52:00'),(33,'123',1,20,'2020-04-04 20:53:00'),(34,'df',1,20,'2020-04-05 12:09:00'),(35,'2334',6,20,'2020-04-05 12:11:00'),(36,'dsf',1,20,'2020-04-05 12:14:00'),(37,'8978',1,20,'2020-04-05 12:15:00'),(38,'fg',6,20,'2020-04-05 12:24:00'),(39,'1',1,20,'2020-04-05 12:25:00'),(40,'hj',1,20,'2020-04-05 12:25:00'),(41,'df',6,20,'2020-04-05 12:50:00'),(42,'dfgw21',1,20,'2020-04-05 12:52:00'),(43,'75',6,20,'2020-04-05 12:52:00'),(44,'gdfgfg',1,20,'2020-04-05 12:54:00'),(45,'dfsdf23',6,20,'2020-04-05 13:11:00'),(46,'123',6,20,'2020-04-05 13:55:00'),(47,'ljk',6,20,'2020-04-05 13:56:00'),(48,'sdf',1,20,'2020-04-05 13:57:00'),(49,'12',6,20,'2020-04-05 13:58:00'),(50,'fg',1,20,'2020-04-17 14:09:00'),(51,'vbvb',1,20,'2020-05-17 14:20:00');
/*!40000 ALTER TABLE `dlc_messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dlc_sections`
--

DROP TABLE IF EXISTS `dlc_sections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dlc_sections` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dlc_sections`
--

LOCK TABLES `dlc_sections` WRITE;
/*!40000 ALTER TABLE `dlc_sections` DISABLE KEYS */;
INSERT INTO `dlc_sections` VALUES (5,'Итоговое тестирование'),(6,'Конструирование'),(7,'Контрольные занятия'),(8,'Механника, шестереночные передачи'),(9,'Общие понятия'),(10,'Программирование'),(12,'Управление роботизированными механизмами'),(14,'Проектные работы');
/*!40000 ALTER TABLE `dlc_sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dlc_teachgroup`
--

DROP TABLE IF EXISTS `dlc_teachgroup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dlc_teachgroup` (
  `id` int NOT NULL AUTO_INCREMENT,
  `start` date NOT NULL,
  `end` date NOT NULL,
  `work` int NOT NULL,
  `course_id` int NOT NULL,
  `teacher_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `dlc_teachgroup_course_id_a5b99301_fk_course_id` (`course_id`),
  CONSTRAINT `dlc_teachgroup_course_id_a5b99301_fk_course_id` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dlc_teachgroup`
--

LOCK TABLES `dlc_teachgroup` WRITE;
/*!40000 ALTER TABLE `dlc_teachgroup` DISABLE KEYS */;
INSERT INTO `dlc_teachgroup` VALUES (20,'2020-04-01','2020-06-30',1,22,7),(21,'2018-01-01','2021-01-01',1,23,7);
/*!40000 ALTER TABLE `dlc_teachgroup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dlc_teachgroupstudent`
--

DROP TABLE IF EXISTS `dlc_teachgroupstudent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dlc_teachgroupstudent` (
  `id` int NOT NULL AUTO_INCREMENT,
  `student_id` int NOT NULL,
  `teach_groop_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `dlc_teachgroupstudent_student_id_8bd54102_fk_students_id` (`student_id`),
  KEY `dlc_teachgroupstuden_teach_groop_id_c866ff39_fk_dlc_teach` (`teach_groop_id`),
  CONSTRAINT `dlc_teachgroupstuden_teach_groop_id_c866ff39_fk_dlc_teach` FOREIGN KEY (`teach_groop_id`) REFERENCES `dlc_teachgroup` (`id`),
  CONSTRAINT `dlc_teachgroupstudent_student_id_8bd54102_fk_students_id` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dlc_teachgroupstudent`
--

LOCK TABLES `dlc_teachgroupstudent` WRITE;
/*!40000 ALTER TABLE `dlc_teachgroupstudent` DISABLE KEYS */;
INSERT INTO `dlc_teachgroupstudent` VALUES (16,12,20),(19,14,21),(20,15,20),(22,16,20);
/*!40000 ALTER TABLE `dlc_teachgroupstudent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dlc_teachplan`
--

DROP TABLE IF EXISTS `dlc_teachplan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dlc_teachplan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `theme` varchar(150) NOT NULL,
  `time1` varchar(10) NOT NULL,
  `time2` varchar(10) NOT NULL,
  `descrip` varchar(150) NOT NULL,
  `section_id` int NOT NULL,
  `teach_group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `dlc_teachplan_section_id_8b23b185_fk_dlc_sections_id` (`section_id`),
  KEY `dlc_teachplan_teach_group_id_88b183e3_fk_dlc_teachgroup_id` (`teach_group_id`),
  CONSTRAINT `dlc_teachplan_section_id_8b23b185_fk_dlc_sections_id` FOREIGN KEY (`section_id`) REFERENCES `dlc_sections` (`id`),
  CONSTRAINT `dlc_teachplan_teach_group_id_88b183e3_fk_dlc_teachgroup_id` FOREIGN KEY (`teach_group_id`) REFERENCES `dlc_teachgroup` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dlc_teachplan`
--

LOCK TABLES `dlc_teachplan` WRITE;
/*!40000 ALTER TABLE `dlc_teachplan` DISABLE KEYS */;
INSERT INTO `dlc_teachplan` VALUES (7,'Введение по Arduino','Общие понятия: Введение по Arduino','00:45','1','Вводный урок',9,20),(9,'Основы Arduino','Изучение основ Arduino','01:00','1','Изучение основ и начало программирования',10,20),(10,'Введение в Python','Введение в Python','00:50','1','Общие понятия по ЯП Python',9,21);
/*!40000 ALTER TABLE `dlc_teachplan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dlc_visited`
--

DROP TABLE IF EXISTS `dlc_visited`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dlc_visited` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `start` time(6) NOT NULL,
  `end` time(6) NOT NULL,
  `teach_group_id` int NOT NULL,
  `teach_plan_id` int NOT NULL,
  `teacher_id` int NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `dlc_visited_teach_group_id_76755506_fk_dlc_teachgroup_id` (`teach_group_id`),
  KEY `dlc_visited_teach_plan_id_7525a8b8_fk_dlc_teachplan_id` (`teach_plan_id`),
  KEY `dlc_visited_teacher_id_632c7d51_fk_employee_id` (`teacher_id`),
  CONSTRAINT `dlc_visited_teach_group_id_76755506_fk_dlc_teachgroup_id` FOREIGN KEY (`teach_group_id`) REFERENCES `dlc_teachgroup` (`id`),
  CONSTRAINT `dlc_visited_teach_plan_id_7525a8b8_fk_dlc_teachplan_id` FOREIGN KEY (`teach_plan_id`) REFERENCES `dlc_teachplan` (`id`),
  CONSTRAINT `dlc_visited_teacher_id_632c7d51_fk_employee_id` FOREIGN KEY (`teacher_id`) REFERENCES `employee` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dlc_visited`
--

LOCK TABLES `dlc_visited` WRITE;
/*!40000 ALTER TABLE `dlc_visited` DISABLE KEYS */;
INSERT INTO `dlc_visited` VALUES (5,'2020-05-29','20:25:00.000000','22:25:00.000000',20,7,7,'Изучение Arduino'),(9,'2020-06-11','12:00:00.000000','12:50:00.000000',21,10,7,'Программирование на языке программирования Python 3 2020-06-11'),(10,'2020-06-15','09:00:00.000000','10:00:00.000000',20,9,7,'Изучение Arduino 2020-06-15');
/*!40000 ALTER TABLE `dlc_visited` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dlc_visitedstudents`
--

DROP TABLE IF EXISTS `dlc_visitedstudents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dlc_visitedstudents` (
  `id` int NOT NULL AUTO_INCREMENT,
  `have` int NOT NULL,
  `student_id` int NOT NULL,
  `visited_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `dlc_visitedstudents_student_id_24054f4a_fk_students_id` (`student_id`),
  KEY `dlc_visitedstudents_visited_id_5df5cbcc_fk_dlc_visited_id` (`visited_id`),
  CONSTRAINT `dlc_visitedstudents_student_id_24054f4a_fk_students_id` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`),
  CONSTRAINT `dlc_visitedstudents_visited_id_5df5cbcc_fk_dlc_visited_id` FOREIGN KEY (`visited_id`) REFERENCES `dlc_visited` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dlc_visitedstudents`
--

LOCK TABLES `dlc_visitedstudents` WRITE;
/*!40000 ALTER TABLE `dlc_visitedstudents` DISABLE KEYS */;
INSERT INTO `dlc_visitedstudents` VALUES (12,1,14,9),(13,1,12,5),(14,1,15,5),(15,1,12,10);
/*!40000 ALTER TABLE `dlc_visitedstudents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `second_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `position` varchar(45) DEFAULT NULL,
  `work` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (5,'Андрей','Урванцев','Владимирович','Администратор',1,1),(6,'Анна','Кателина','Сергеевна','Преподаватель',1,8),(7,'Виктор','Верзаков','Анатольевич','Методист',1,9),(8,'Любовь','Евдокимова','Дмитриевна','Преподаватель',1,10);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knox_authtoken`
--

DROP TABLE IF EXISTS `knox_authtoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `knox_authtoken` (
  `digest` varchar(128) NOT NULL,
  `salt` varchar(16) NOT NULL,
  `created` datetime(6) NOT NULL,
  `user_id` int NOT NULL,
  `expiry` datetime(6) DEFAULT NULL,
  `token_key` varchar(8) NOT NULL,
  PRIMARY KEY (`digest`),
  UNIQUE KEY `salt` (`salt`),
  KEY `knox_authtoken_user_id_e5a5d899_fk_auth_user_id` (`user_id`),
  KEY `knox_authtoken_token_key_8f4f7d47` (`token_key`),
  CONSTRAINT `knox_authtoken_user_id_e5a5d899_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knox_authtoken`
--

LOCK TABLES `knox_authtoken` WRITE;
/*!40000 ALTER TABLE `knox_authtoken` DISABLE KEYS */;
INSERT INTO `knox_authtoken` VALUES ('016ad75faf7ef68f36b00a1614b09709a12707c30f3b3bcbed1b90192c993030f1c8db1d539bbe3d3e52a5d69d44371285a68f8b750e53df1cef3c3677bcd86e','db995a33fefb6b53','2020-05-07 06:16:18.174895',11,'2020-05-07 16:16:18.174895','70fcbcb0'),('0d320ab814efa418b9874b96ff6cd24a4aaa2851349e343a9d36558b2f3c33b3c93c78f603b23bc75535be55f3bd7821dea1b1a90c52bb9a90ddb51847226995','dfeb3b1c2678772f','2020-06-11 13:15:00.704328',25,'2020-06-11 23:15:00.704328','995b9105'),('12b37354e5fcfbfdcf1212699dabb757161830fd7dc5b119fb8e12a8524b1df500d90127eca8db0e6e4b1265d09c79ef8bf8dcd5101f7a8e410c169e783bf20c','832d5961be50c7f4','2020-06-14 07:11:33.074856',6,'2020-06-14 17:11:33.073871','5fc55a5f'),('1808f608d820de1f6367c7c6e3249459bc6b723f8f876b8a496ffe0725c436a82f1af2d4b51def48ad60757a7a13906711b7af382b5b19721c6a28bd3cd4a263','ab2d84744940a063','2020-06-11 13:14:50.615290',25,'2020-06-11 23:14:50.615290','e9c8d72d'),('70c51ca3f0fc4c21cd3334a3e9e79b5962239f76eb44f5be2ab91b2848433c8f01b944dbb74cfc47ede804b55a08bc1afbfc7695a266eb74c88eb49ce4b0d591','05029b2c9d456a3c','2020-06-15 04:27:34.116721',1,'2020-06-15 14:27:34.115723','8b46a9b9'),('78efbbed14b2ebdfa6779e71700d4fc50342d7eea2714d364c56ec268c94e70ce5a39a0d04bf279d3602529b0b8dfbc76ba543f5f76c1ddcc9892c4245ca9a47','4e02ac547fc5bf3a','2020-05-07 06:09:57.929070',9,'2020-05-07 16:09:57.929070','4328db08'),('9b056dddf717fad5f8727af393cfc27d1be3fce773ffc068426292432c5edb51e8da7ee19f47054b3ac252b227ed0db1e1d7ff933bacf187c28dde6f3e80c492','c3eabae321290bd2','2020-06-11 10:54:34.914479',23,'2020-06-11 20:54:34.913482','7a05b821'),('9c0157a882c1943031744a3843144f00a2486fc114d37219d56b8e56dd5569cc416fb3880a3517e81585613c0efeee8ac81fea1722bbdeef5d6838c3a3530e3f','03ae9e615d052509','2020-05-07 06:12:03.577938',10,'2020-05-07 16:12:03.577938','651723b0'),('be2303a93bb5608fd5bdbc9aa870c547e0549273b0c6853db88a5aba46eea3f836782d32d31487dca0c6550c8008a5cc3d2f15dae0862dc965f065d042b4a3ce','ebb304f4fb933d2a','2020-06-11 10:54:11.521589',22,'2020-06-11 20:54:11.521589','ba18733a'),('c48b71f309fae96159dcb0a1faae4c415615aa2eb993cd9318e033b452bed4048c672b9a143a6e890785e5a378bd382cc23e8432aafc60b0512b0a43695be37f','96508636099149fd','2020-06-15 04:30:33.646419',1,'2020-06-15 14:30:33.646419','a583062b'),('c712c2977b2d4259695cd32338ba9a17d2444aea9ed3a35285182e1197ef3298b3e72706be8a0ee67a317e8718d8e5f39bde4e0445b9b5e1a7dd6e169097c82e','f7ea32fb12e14552','2020-05-07 06:16:38.804365',11,'2020-05-07 16:16:38.804365','4d468f5b'),('ccd0fad179d0257361d0c97c5aa8c3b2f7115f8d509c766927950a4527c2dcbf7b5080be65f27a88710ab378e6519309fbdeec29d2a7475b49dceeccc4557994','9803ce975cd1e5f0','2020-05-07 06:05:42.560410',8,'2020-05-07 16:05:42.560410','6ce8cad1'),('da4cdc64a010c3b5475573489047c210b847f02df88fb5f8bce594a7861fec5603c79d68977ec65546971d6de5549ab6f702ab85373a6614134a429675057f77','bcd9e2ea45efe4c1','2020-06-15 04:06:46.591698',26,'2020-06-15 14:06:46.591698','ea5a4e06'),('e56fa08491cfe48766acc4e3fd6b525731cc113e9eff61f2f9f7a029e6edffbb5e058e30e911341c0d683582288ee190efa185ce576c4c739dc5b440a27e70a4','281a40178720efc5','2020-06-11 10:54:48.960669',24,'2020-06-11 20:54:48.960669','c2f33079'),('e71c67f627d5d96546542c7ec2486303365808c8bd234c18f769a95bcc5a4524470af85a1ce50361b8cd89a83e2cef1b4f7606ca02f4817c44b01a7d288ee962','a6f8f63ac2f06ebc','2020-06-11 10:53:29.838356',21,'2020-06-11 20:53:29.837362','b3c76418'),('e82709f521a4e69bd03e398f23c7b3abe75da74f2a4cf58c3358e1faa88880f6f7214c96bd7389c69905948511f295cf7cba67394b4e3e992445fa3471c47630','4f33fa3cc8decbc1','2020-06-10 05:42:16.319708',7,'2020-06-10 15:42:16.318715','84ed5360'),('efdd4848c0213095f9853b53cb36de72a94f6ae4353ff692ea026e92266abcef0c326e85646c847ca2bcbf60af7e155ac7cbd7f3cf347364f7a22e3d93ded6e1','2419f720493db693','2020-05-26 07:26:50.572900',16,'2020-05-26 17:26:50.572900','5ce95a2c');
/*!40000 ALTER TABLE `knox_authtoken` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persons`
--

DROP TABLE IF EXISTS `persons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `persons` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `second_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `date_birth` date DEFAULT NULL,
  `adress` varchar(150) DEFAULT NULL,
  `document_type` varchar(50) DEFAULT NULL,
  `gender` varchar(100) DEFAULT NULL,
  `data_documentp` varchar(45) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `inn` varchar(22) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `seria` varchar(5) DEFAULT NULL,
  `numberp` varchar(7) DEFAULT NULL,
  `given` varchar(150) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persons`
--

LOCK TABLES `persons` WRITE;
/*!40000 ALTER TABLE `persons` DISABLE KEYS */;
INSERT INTO `persons` VALUES (8,'Анатолий','Сергеев','Иванович','2000-01-01','Ул Победа д.45 кв. 78','Паспорт','Мужской',NULL,'+7 (905) 435-34-53','4356465465','Родитель','43 54','435 345','УФМС Челябинской Области Города Миасс',6),(9,'Надежда','Иванова','Ивановна','1960-11-23','Ул Уральская д 39 кв 12','Паспорт','Женский',NULL,'+7 (787) 876-75-64','1489863497','Родитель','45 24','452 452','УФМС Челябинской Области Города Миасс',7),(11,'Иван','Владов','Владимирович','1960-02-01','Ул Победа д.34 кв. 71','Паспорт','Мужской',NULL,'+7 (979) 878-65-43','8787879890','Родитель','78 67','454 656','УФМС Челябинская Область города Миасс',21),(12,'Олег','Ким','Вадимович','1972-12-04','Ул. Гоголя д. 116','Паспорт','Мужской',NULL,'+7 (899) 789-78-78','9899898989','Родитель','87 63','767 575','УФМС Челябинской области города Миасс',26);
/*!40000 ALTER TABLE `persons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `place`
--

DROP TABLE IF EXISTS `place`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `place` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `index` varchar(20) DEFAULT NULL,
  `adress` varchar(200) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `director` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `place`
--

LOCK TABLES `place` WRITE;
/*!40000 ALTER TABLE `place` DISABLE KEYS */;
INSERT INTO `place` VALUES (4,'Гимназия№19','456 318','Россия, Челябинская область, Миасс г., Октября проспект, 71','+7 (735) 135-36-59','Каменкова Н.В.');
/*!40000 ALTER TABLE `place` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sections`
--

DROP TABLE IF EXISTS `sections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sections` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sections`
--

LOCK TABLES `sections` WRITE;
/*!40000 ALTER TABLE `sections` DISABLE KEYS */;
/*!40000 ALTER TABLE `sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) DEFAULT NULL,
  `user_id` varchar(45) DEFAULT NULL,
  `second_name` varchar(150) DEFAULT NULL,
  `last_name` varchar(150) DEFAULT NULL,
  `date_bitrh` date DEFAULT NULL,
  `place_id` int DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `place_life` varchar(200) DEFAULT NULL,
  `documentp` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (12,'Иван','6','Сергеев','Анатольевич','2000-01-01',4,'+7 (456) 456-45-64','Школьник','аываывмсч','345435'),(14,'Иван','7','Иванов','Андреевич','2002-04-03',4,'+7 (878) 675-46-53','Школьник','Ул Уральская д 38 кв 12','Нет'),(15,'Сергей','21','Владов','Иванович','2003-01-04',4,'+7 (867) 654-54-33','Школьник','Ул Победа д.34 кв. 71','Нет'),(16,'Настя','26','Ким','Олеговна','2003-03-01',4,'+7 (988) 978-78-78','Школьник','Ул. Гоголя д. 116','Нет');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teach_group`
--

DROP TABLE IF EXISTS `teach_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teach_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `course_id` int DEFAULT NULL,
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL,
  `work` int DEFAULT NULL,
  `teacher_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teach_group`
--

LOCK TABLES `teach_group` WRITE;
/*!40000 ALTER TABLE `teach_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `teach_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teach_group_student`
--

DROP TABLE IF EXISTS `teach_group_student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teach_group_student` (
  `id` int NOT NULL AUTO_INCREMENT,
  `teach_group_id` int DEFAULT NULL,
  `student_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teach_group_student`
--

LOCK TABLES `teach_group_student` WRITE;
/*!40000 ALTER TABLE `teach_group_student` DISABLE KEYS */;
/*!40000 ALTER TABLE `teach_group_student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teach_plan`
--

DROP TABLE IF EXISTS `teach_plan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teach_plan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) DEFAULT NULL,
  `theme` varchar(150) DEFAULT NULL,
  `teach_group_id` int DEFAULT NULL,
  `time1` varchar(10) DEFAULT NULL,
  `time2` varchar(10) DEFAULT NULL,
  `section_id` int DEFAULT NULL,
  `descrip` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teach_plan`
--

LOCK TABLES `teach_plan` WRITE;
/*!40000 ALTER TABLE `teach_plan` DISABLE KEYS */;
/*!40000 ALTER TABLE `teach_plan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visited`
--

DROP TABLE IF EXISTS `visited`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `visited` (
  `id` int NOT NULL AUTO_INCREMENT,
  `teach_group_id` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  `start` time DEFAULT NULL,
  `end` time DEFAULT NULL,
  `teach_plan_id` int DEFAULT NULL,
  `teacher_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visited`
--

LOCK TABLES `visited` WRITE;
/*!40000 ALTER TABLE `visited` DISABLE KEYS */;
/*!40000 ALTER TABLE `visited` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visited_students`
--

DROP TABLE IF EXISTS `visited_students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `visited_students` (
  `id` int NOT NULL AUTO_INCREMENT,
  `visited_id` int DEFAULT NULL,
  `student_id` int DEFAULT NULL,
  `have` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visited_students`
--

LOCK TABLES `visited_students` WRITE;
/*!40000 ALTER TABLE `visited_students` DISABLE KEYS */;
/*!40000 ALTER TABLE `visited_students` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-15 18:42:10
