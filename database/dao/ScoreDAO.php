<?php
require_once WWW_ROOT . 'dao/DAO.php';

class ScoreDAO extends DAO {
	
	public function getScores() {
		$sql = "SELECT * FROM `cityflip_scores` ORDER BY `distance` DESC LIMIT 5";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}

	public function getScoreById($id) {
		$sql = "SELECT * FROM `cityflip_scores` WHERE `cityflip_scores`.`id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id', $id);
		$stmt->execute();
		//fetch and check id - might be empty on non-existent ids because of OUTER JOIN
		$result = $stmt->fetch(pdo::FETCH_ASSOC);
		if($result['id'] != $id) {
			return false;
		}
		return $result;
	}

	public function postScore($data) {
		$sql = "INSERT INTO `cityflip_scores` (`name`, `score`, `distance`, `date`) VALUES (:name, :score, :distance, :date)";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':name', $data['name']);
		$stmt->bindValue(':score', $data['score']);
		$stmt->bindValue(':distance', $data['distance']);
		$stmt->bindValue(':date', date('Y-m-d H:i:s'));
		if($stmt->execute()) {
			$insertedId = $this->pdo->lastInsertId();
			return $this->getScoreById($insertedId);
		}
	}	

}