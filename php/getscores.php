<?php

require_once "database/database.php";

$sql = "SELECT * FROM `scores`
		WHERE `id` = :id";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':id','id');
$stmt->execute();
$scores = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach($scores as $score){
}

?>