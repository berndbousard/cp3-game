import BackgroundCity from '../objects/BackgroundCity';
import MenuBackground from '../objects/MenuBackground';
import * as Utils from '../objects/Utils';

let leaderboardTabel;

export default class Leaderboard extends Phaser.State {
	preload(){
		console.log('start leaderboard');
	}
	create(){

		// Build table with results
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
		if(leaderboardTabel){
			Utils.hideElement(leaderboardTabel);
		}
	}

	// eigen functies
	buildLeaderboard(scores){

		let userScores = scores;
		leaderboardTabel = document.createElement('table');
		leaderboardTabel.id = 'table';

		let topRowTr = document.createElement('tr');
		let topRowThForScore = document.createElement('th');
		let topRowThForDistance = document.createElement('th');
		let topRowThForName = document.createElement('th');

		topRowThForScore.innerText = "score";
		topRowThForName.innerText = "name";
		topRowThForDistance.innerText = "distance";

		topRowThForScore.classList.add('score');

		topRowTr.appendChild(topRowThForScore);
		topRowTr.appendChild(topRowThForName);
		topRowTr.appendChild(topRowThForDistance);

		leaderboardTabel.appendChild(topRowTr);
		
		userScores.forEach((data) => {
			let tr = document.createElement('tr');

			let nameHTML = document.createElement('td');
			let scoreHTML = document.createElement('td');
			let distanceHTML = document.createElement('td');

			nameHTML.innerText = data.name;
			scoreHTML.innerText = data.score;
			scoreHTML.classList.add('score');
			distanceHTML.innerText = data.distance;

			tr.appendChild(scoreHTML);
			tr.appendChild(nameHTML);
			tr.appendChild(distanceHTML);
			leaderboardTabel.appendChild(tr);
		});

		document.querySelector('body').appendChild(leaderboardTabel);
		Utils.showElement(leaderboardTabel);

	}

	getJSON(url){
		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((response) => {
				this.buildLeaderboard(response);
			})
			.catch((error) => {
				console.log('no scores yet');
			});
	}

	startClickHandler() {
		Utils.changeState(this.game, 'Play');
	}
}