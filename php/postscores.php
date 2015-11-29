<?php

require_once "database/database.php";

if(isset($_POST['action'])){
	if($_POST['action'] === 'post score'){
		$sql =
			"INSERT INTO `scores`
					(`name`,`score`,`distance`,`date`)
			VALUES 	(:name, :score, :distance, :date)";

		$stmt = $pdo->prepare($sql);
		$stmt->bindValue(':name', $_POST['name']);
		$stmt->bindValue(':name', $_POST['name']);
		$stmt->bindValue(':name', $_POST['name']);
		$stmt->bindValue(':date', date('Y-m-d H:i:s'));
		$stmt->execute();
	}
}

?>