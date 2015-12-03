import BackgroundCity from '../objects/BackgroundCity';
import MenuBackground from '../objects/MenuBackground';
import Text from '../objects/Text';
import * as Utils from '../objects/Utils';

let confirm;
let inputField;
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

		// Images
		this.city = new BackgroundCity(this.game, 0, 0, 750, 500, 'city');
		this.game.add.existing(this.city);

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

		// create input field, prepare it for ajax
		this.createInputField();

		leaderboardNameInput = document.getElementById("text");
		leaderboardSubmit = document.getElementById("submit");
		//confirm = document.querySelector('.confirm');

		// AJAX
		this.doAjax();

		// dit dient om enters op te vangen indien de gebruiker op enter duwt in het textveld, later te implementeren
		// this.inputElement('keydown', this.keyHandler(event));

	}
	update(){
	}
	shutdown(){
		console.log('end gameover');
	}

	createInputField(){

		inputField = document.createElement('form');
		inputField.setAttribute('action', 
			'http://student.howest.be/bernd.bousard/20152016/CPIII/CITYFLIP/index.php?page=postScores');

		inputField.setAttribute('class', 'hidden');
		inputField.id = 'form';

		let inputFieldText = document.createElement('input');
		inputFieldText.setAttribute('type', 'text');
		inputFieldText.setAttribute('name', 'name');
		inputFieldText.setAttribute('placeholder', 'username');
		inputFieldText.setAttribute('maxlength', '10');
		inputFieldText.id = 'text';

		let inputFieldSubmit = document.createElement('input');
		inputFieldSubmit.setAttribute('type', 'submit');
		inputFieldSubmit.setAttribute('name', 'action');
		inputFieldSubmit.setAttribute('value', 'post score');
		inputFieldSubmit.id = 'submit';


		inputField.appendChild(inputFieldText);
		inputField.appendChild(inputFieldSubmit);

		//console.log(inputField);

		document.querySelector('body').appendChild(inputField);
		Utils.showElement(inputField);
	}

	submitInputHandler(score, distance, name){

		console.log("AJAX called");

		let req = new XMLHttpRequest();
		let url = 'http://student.howest.be/bernd.bousard/20152016/CPIII/CITYFLIP/index.php?page=postScores' + '&name=' + name + '&score=' + score + '&distance=' + distance;
		req.open("POST", url);
		req.setRequestHeader('X_REQUESTED_WITH', 'xmlhttprequest');
		req.send();

		req.open("GET", url);
		req.setRequestHeader('X_REQUESTED_WITH', 'xmlhttprequest');
		req.send();

		console.log("get done");

		this.game.state.start('Leaderboard');

		//Utils.showElement(confirm);
		Utils.hideElement(inputField);
	}

	doAjax(){
		leaderboardSubmit.addEventListener('click', e => {
			e.preventDefault();
			if(!Utils.isEmpty(leaderboardNameInput)){
				let score = this.score;
				let distance = this.distance;
				this.submitInputHandler(score, distance, leaderboardNameInput.value);
			}
		});
	}
	startClickHandler() {
		Utils.hideElement(inputField);
		this.changeState('Play');
	}
	changeState(state){
		this.game.state.start(state);
	}
}