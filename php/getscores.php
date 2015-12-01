<?php

require_once "database/database.php";

$sql = 
		"SELECT * FROM `scores` ORDER by `score` DESC LIMIT 5";
$stmt = $pdo->prepare($sql);
$stmt->execute();
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>