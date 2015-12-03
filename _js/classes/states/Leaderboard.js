import BackgroundCity from '../objects/BackgroundCity';
import MenuBackground from '../objects/MenuBackground';
import * as Utils from '../objects/Utils';

let leaderboardTabel;

export default class Leaderboard extends Phaser.State {
	preload(){
		console.log('start leaderboard');
	}
	create(){

		// Show/hide DOM elements
		// leaderboardTabel = document.getElementById("table");
		// confirm = document.querySelector('.confirm');
		// leaderboardTabel.style.visibility = "visible";
		this.getJSON('http://student.howest.be/bernd.bousard/20152016/CPIII/CITYFLIP/index.php?page=getScores');

		// Images
		this.city = new BackgroundCity(this.game, 0, 0, 750, 500, 'city');
		this.game.add.existing(this.city);

		this.menuBackground = new MenuBackground(this.game, this.game.width/2, this.game.height/2);
		this.game.add.existing(this.menuBackground);

		// Buttons
		this.startButton = this.game.add.button(
			this.game.width/2,this.game.height/2 + 150,'startButton', this.startClickHandler,this);
		this.startButton.anchor.setTo(0.5,0.5);
	}
	update(){
	}
	shutdown(){
		console.log('end leaderboard');
		Utils.hideElement(leaderboardTabel);

		// this.hideElement(confirm);
	}
	buildLeaderboard(scores){
		let userScores = scores;
		leaderboardTabel = document.createElement('table');
		leaderboardTabel.id = 'table';
		
		userScores.forEach((data) => {
			let tr = document.createElement('tr');
			

			let nameHTML = document.createElement('td');
			let scoreHTML = document.createElement('td');
			let distanceHTML = document.createElement('td');

			nameHTML.innerText = data.name;
			scoreHTML.innerText = data.score;
			scoreHTML.classList.add('score');
			distanceHTML.innerText = data.distance;


			tr.appendChild(nameHTML);
			tr.appendChild(scoreHTML);
			tr.appendChild(distanceHTML);
			leaderboardTabel.appendChild(tr);
		});
		console.log(leaderboardTabel);
		document.querySelector('body').appendChild(leaderboardTabel);
		Utils.showElement(leaderboardTabel);
		// let data;
		// let req = new XMLHttpRequest();
		// 	req.addEventListener('load', function(){
		// 		let data = req.response;

		// 		let leaderboardTabel = document.createElement('table');
		// 		leaderboardTabel.id = 'table';

		// 		console.log(req.response);
		// 	});
		// 	req.open('GET', 'http://student.howest.be/bernd.bousard/20152016/CPIII/CITYFLIP/index.php?page=getScores');
		// 	req.setRequestHeader('X_REQUESTED_WITH', 'xmlhttprequest');
		// 	req.send();


	}

	getJSON(url){
		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((response) => {
				this.buildLeaderboard(response);
			})
	}

	// buildLeaderboard(data){
	// 	console.log(data);
	// }

	startClickHandler() {
		this.game.state.start('Play');
	}
}