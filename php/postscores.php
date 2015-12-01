<?php

require_once "database/database.php";

if(!empty($_POST)){
	if($_POST['action'] === 'post score'){
		$sql =
			"INSERT INTO `scores`
					(`name`,`score`,`distance`,`date`)
			VALUES 	(:name, :score, :distance, :date)";

		$stmt = $pdo->prepare($sql);
		$stmt->bindValue(':name', $_POST['name']);
		$stmt->bindValue(':score', $_GET['score']);
		$stmt->bindValue(':distance', $_GET['distance']);
		$stmt->bindValue(':date', date('Y-m-d H:i:s'));
		$stmt->execute();
		if($stmt->execute()){
			header('Location: ../index.php');
		}
	}
}

?>