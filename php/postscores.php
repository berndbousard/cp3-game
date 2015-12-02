<?php

require_once "database/database.php";

if(!empty($_POST) || !empty($_GET)){
	//if($_POST['action'] === 'post score'){
		$sql = "INSERT INTO `scores` (`name`, `score`, `distance`, `date`) VALUES (:name, :score, :distance, :date)";
		$stmt = $pdo->prepare($sql);
		$stmt->bindValue(':name', $_GET['name']);
		$stmt->bindValue(':score', $_GET['score']);
		$stmt->bindValue(':distance', $_GET['distance']);
		$stmt->bindValue(':date', date('Y-m-d H:i:s'));
		$stmt->execute();

		// dit werkt alleen bij frontcontroller structuur
		/*if($stmt->execute()) {
			$insertedId = $this->pdo->lastInsertId();
			return $this->selectById($insertedId);
		}*/
	//}
}

?>