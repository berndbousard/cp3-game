<?php

$dbHost = "localhost";		
$dbName = "cityflip";
$dbUser = "cityflipuser";
$dbPass = "cityflippass";

$pdo = new PDO("mysql:host={$dbHost};dbname={$dbName}",$dbUser,$dbPass);

$pdo->exec("SET CHARACTER SET utf8");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // zet de errors aan
$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES,false);