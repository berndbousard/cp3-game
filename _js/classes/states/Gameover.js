import BackgroundCity from '../objects/BackgroundCity';
import MenuBackground from '../objects/MenuBackground';
import Text from '../objects/Text';

let leaderboard;
let leaderboardNameInput;
let leaderboardSubmit;


export default class Gameover extends Phaser.State {
	preload(){
		console.log('start gameover');
	}
	create(){

		// Waarden zijn in play opgeslaan in this.game.state.score/distance
		this.score = this.game.state.score;
		this.distance = this.game.state.distance;


		// Show/hide leaderboard
		leaderboard = document.getElementById('form');
		leaderboardNameInput = document.getElementById("text");
		leaderboardSubmit = document.getElementById("submit");
		this.showElement(leaderboard);

		// Images
		this.cityBlack = new BackgroundCity(this.game, 0, 0, 750, 250, 'cityBlack');
		this.game.add.existing(this.cityBlack);

		this.cityWhite = new BackgroundCity(this.game, 0, 500, 750, 250, 'cityWhite');
		this.game.add.existing(this.cityWhite);

		this.cityWhite.scale.y *= -1; /* flip onderste stuk */

		this.menuBackground = new MenuBackground(this.game, this.game.width/2, this.game.height/2);
		this.game.add.existing(this.menuBackground);

		// Buttons
		this.startButton = this.game.add.button(
			this.game.width/2,this.game.height/2 + 150,'startButton',this.startClickHandler,this);
		this.startButton.anchor.setTo(0.5,0.5);

		// score and distance
		this.visibleScore = new Text(this.game, this.game.width/2 - 50, 200, 'gamefont', 'Your score\n' + this.score.toString(), 20, 'center');
		this.game.add.existing(this.visibleScore);
		this.visibleDistance = new Text(this.game, this.game.width/2 + 80, 200, 'gamefont', 'You ran\n' + this.distance.toString() + ' km', 20, 'center');
		this.game.add.existing(this.visibleDistance);


		// AJAX Call
		leaderboardSubmit.addEventListener('click', e => {
			e.preventDefault();
			if(!this.isEmpty(leaderboardNameInput)){
				let score = this.score;
				let distance = this.distance;
				this.submitInputHandler(score, distance, leaderboardNameInput.value);
			}
		});

			// dit dient om enters op te vangen indien de gebruiker op enter duwt in het textveld, later te implementeren
			// this.inputElement('keydown', this.keyHandler(event));

	}
	update(){
		// console.log(this.score, this.distance);
	}
	shutdown(){
		console.log('end gameover');
		this.hideElement(leaderboard)
	}

	// eigen functies
	submitInputHandler(score, distance, name){

		console.log("AJAX called");

		let req = new XMLHttpRequest();

		let url = 'php/postscores.php' + '?name=' + name + '&score=' + score + '&distance=' + distance;
		console.log(url);

		req.open("POST", url);
		req.setRequestHeader('X_REQUESTED_WITH', 'xmlhttprequest');
		req.send();

	}
	/*keyHandler(e){
		switch(e.keyCode){
			case "13": // enter
			e.preventDefault();
			this.submitInputHandler(e));
			break;
		}
	}*/
	startClickHandler() {
		// dit is nog niet optimaal (geen idee waarom, needs bugfixing)
		this.game.state.start('Play');
	}

	isEmpty(input){
		// Als de lengte gelijk is aan 0, returnt dit true;
		// Checht gewoon of het empty is of niet
		return input.value.length === 0;
	}

	hideElement(el){
		el.style.visibility = 'hidden';
	}

	showElement(el){
		el.style.visibility = 'visible';
	}
}