-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Host: 172.21.1.87
-- Generation Time: Dec 16, 2015 at 07:24 PM
-- Server version: 5.5.46-0ubuntu0.14.04.2
-- PHP Version: 5.5.9-1ubuntu4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `berndbousaquoo4i`
--

-- --------------------------------------------------------

--
-- Table structure for table `cityflip_scores`
--

CREATE TABLE IF NOT EXISTS `cityflip_scores` (
`id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `score` int(11) NOT NULL,
  `distance` int(11) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cityflip_scores`
--

INSERT INTO `cityflip_scores` (`id`, `name`, `score`, `distance`, `date`) VALUES
(1, 'Bernd', 100, 100, '2015-12-13 23:59:59'),
(2, 'stijn100', 12, 88, '2015-12-13 17:07:49'),
(3, 'lel', 19, 129, '2015-12-13 17:12:39'),
(4, 'lel', 15, 127, '2015-12-13 17:15:30'),
(5, 'pro', 36, 147, '2015-12-13 17:17:53'),
(6, 'praat', 28, 147, '2015-12-13 17:21:55'),
(7, 'woutpet', 8, 72, '2015-12-13 19:25:01'),
(8, 'kaka', 13, 42, '2015-12-13 19:27:07'),
(9, 'woutpet', 22, 73, '2015-12-13 19:28:25'),
(10, 'woutpet', 38, 139, '2015-12-13 19:30:29'),
(11, 'woutpet', 15, 57, '2015-12-13 19:32:59'),
(12, 'woutpet', 35, 149, '2015-12-13 19:35:12'),
(13, 'Nevs', 10, 86, '2015-12-13 19:36:14'),
(14, 'woutpet', 40, 148, '2015-12-13 19:38:37'),
(15, 'woutpet', 51, 181, '2015-12-13 19:42:12'),
(16, 'Bernd', 25, 167, '2015-12-13 20:26:28'),
(17, 'HamsterPri', 7, 32, '2015-12-13 21:12:40'),
(18, 'random', 15, 114, '2015-12-14 10:26:37'),
(19, 'whatever', 1, 15, '2015-12-14 10:27:41'),
(20, 'the one', 21, 135, '2015-12-14 19:21:19'),
(21, 'Nevs', 16, 135, '2015-12-14 19:26:25'),
(22, 'Lennert123', 20, 138, '2015-12-14 21:51:13'),
(23, 'Berndm', 0, 6, '2015-12-15 12:59:24'),
(24, 'Sven', 19, 144, '2015-12-16 11:39:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cityflip_scores`
--
ALTER TABLE `cityflip_scores`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cityflip_scores`
--
ALTER TABLE `cityflip_scores`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=25;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
