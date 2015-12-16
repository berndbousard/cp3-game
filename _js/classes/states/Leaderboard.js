import BackgroundCity from '../objects/BackgroundCity';
import MenuBackground from '../objects/MenuBackground';
import Text from '../objects/Text';
import Sound from '../objects/Sound';
import * as Utils from '../objects/Utils';

let leaderboardTabel;

export default class Leaderboard extends Phaser.State {
	preload(){
		// console.log('start leaderboard');
	}

	create(){
		this.soundSetup();
		// Build table with results
		this.getJSON(`http://student.howest.be/bernd.bousard/20152016/CPIII/CITYFLIP/index.php?page=getScores&t=${Date.now()}`);

		// Images
		this.city = new BackgroundCity(this.game, 0, 0, 750, 500, 'city');
		this.game.add.existing(this.city);

		this.menuBackground = new MenuBackground(this.game, this.game.width/2, this.game.height/2);
		this.game.add.existing(this.menuBackground);

		// Buttons
		this.startButton = this.game.add.button(this.game.width/2 + 50,this.game.height/2 + 150,'startButton', this.startClickHandler,this);
		Utils.center(this.startButton);
		this.backButton = this.game.add.button(this.game.width/2 - 50, this.game.height/2 + 150, 'backButton', this.backClickHandler, this);
		Utils.center(this.backButton);

	}

	update(){
	}

	shutdown(){
		// console.log('end leaderboard');
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

		topRowThForScore.innerText = 'Coins';
		topRowThForName.innerText = 'Name';
		topRowThForDistance.innerText = 'Distance';

		topRowThForScore.classList.add('score');

		topRowTr.appendChild(topRowThForDistance);
		topRowTr.appendChild(topRowThForName);
		topRowTr.appendChild(topRowThForScore);
		
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

			tr.appendChild(distanceHTML);
			tr.appendChild(nameHTML);
			tr.appendChild(scoreHTML);

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
				this.giveError(error);
			});
	}

	startClickHandler() {
		this.clickSound.play();
		Utils.changeState(this.game, 'Play');
	}

	backClickHandler() {
		this.clickSound.play();
		Utils.changeState(this.game, 'Menu');
	}

	giveError(error){
		// game, x, y, font, text, size, align
		let errorText = new Text(this.game, this.game.width/2, this.game.height/2, 'gamefont', error, 15, 'center');
		this.game.add.existing(errorText);
	}

	soundSetup(){
		// music
		this.clickSound = new Sound(this.game, 'click');
	}
}