<?php

require_once WWW_ROOT . 'controller' . DS . 'Controller.php';
require_once WWW_ROOT . 'dao' . DS . 'ScoreDAO.php';

class PagesController extends Controller {

	private $scoreDAO;

	function __construct() {
		$this->scoreDAO = new ScoreDAO();
	}

	public function index() {

			echo "<pre>";
			echo var_dump("index");
			echo "</pre>";		
	}

	public function postScores() {
		// post
		if(!empty($_POST['action']) && $_POST['action'] == 'post-score'){
			$data = array();
			$data['score'] = $_POST['score'];
			$data['distance'] = $_POST['distance'];
			$data['name'] = $_POST['name'];
			$insertedData = $this->scoreDAO->postScore($data);
			if($insertedData){
				if($this->isAjax){
					header('Content-Type: application/json');
					echo json_encode(array('result' => 'ok', 'inserted_id' => $insertedData));
					exit();
				}
			}
		}
	}

	public function getScores() {
		// get
		$scores = $this->scoreDAO->getScores();

		if($this->isAjax) {
      		header('Content-Type: application/json');
      		echo json_encode($scores);
      		exit();
    	}
    	$this->set('scores', $scores);
    }
}