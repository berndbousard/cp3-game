import BackgroundCity from '../objects/BackgroundCity';
import MenuBackground from '../objects/MenuBackground';
import Sound from '../objects/Sound';
import Text from '../objects/Text';
import * as Utils from '../objects/Utils';
import Data from '../objects/Data';

let confirm;
let inputField;
let leaderboardNameInput;
let leaderboardSubmit;
let leaderboard;


export default class Gameover extends Phaser.State {
	preload(){
		console.log('start gameover');
	}
	create(){
		// music
		this.clickSound = new Sound(this.game, 'click');

		this.createForm();
		leaderboardNameInput = document.getElementById("text");
		leaderboardSubmit = document.getElementById("submit");
		leaderboard = document.getElementById("form");
		leaderboard.addEventListener('submit', (event) => {
			event.preventDefault();
			this.leaderboardSubmitHandler();
		});
		// not sure about this
		leaderboardSubmit.addEventListener('submit', (event) => {
			event.preventDefault();
			this.leaderboardSubmitHandler();
		});

		// Images
		this.city = new BackgroundCity(this.game, 0, 0, 750, 500, 'city');
		this.game.add.existing(this.city);

		this.menuBackground = new MenuBackground(this.game, this.game.width/2, this.game.height/2);
		this.game.add.existing(this.menuBackground);

		// Buttons
		this.startButton = this.game.add.button(
			this.game.width/2,this.game.height/2 + 150,'startButton',this.startClickHandler,this);
		Utils.center(this.startButton);

		// score and distance
		this.visibleScore = new Text(this.game, this.game.width/2 - 50, 200, 'gamefont', 'Your score\n' + Data.score, 20, 'center');
		this.game.add.existing(this.visibleScore);
		this.visibleDistance = new Text(this.game, this.game.width/2 + 80, 200, 'gamefont', 'You ran\n' + Data.distance + ' km', 20, 'center');
		this.game.add.existing(this.visibleDistance);
	}
	update(){
	}
	shutdown(){
		console.log('end gameover');
		leaderboard.remove();
	}

	createForm(){

		inputField = document.createElement('form');
		inputField.id = 'form';

		let formNameInput = document.createElement('input');
		formNameInput.setAttribute('type', 'text');
		formNameInput.setAttribute('name', 'name');
		formNameInput.setAttribute('placeholder', 'username');
		formNameInput.setAttribute('maxlength', '10');
		formNameInput.id = 'text';

		let formSubmit = document.createElement('input');
		formSubmit.setAttribute('type', 'submit');
		formSubmit.setAttribute('name', 'action');
		formSubmit.setAttribute('value', 'post score');
		formSubmit.id = 'submit';


		inputField.appendChild(formNameInput);
		inputField.appendChild(formSubmit);

		document.querySelector('body').appendChild(inputField);
		Utils.showElement(inputField);
	}

	submitInputHandler(name){
		this.clickSound.play();
		let req = new XMLHttpRequest();
		let url = 'http://student.howest.be/bernd.bousard/20152016/CPIII/CITYFLIP/index.php?page=postScores&name=' + name + '' + '&score=' + Data.score + '' + '&distance=' +  Data.distance;
		req.open("POST", url);
		req.setRequestHeader('X_REQUESTED_WITH', 'xmlhttprequest');
		req.send();
		// Het lijkt dat hij 2x pusht naar de DDB maar als ik een event listener eraan
		// Koppen dan zien we het maar 1 keer maar zit wel 2x id DDB
		req.addEventListener('load', () => {
			Utils.hideElement(inputField);
			Utils.changeState(this.game, 'Leaderboard');
		});
	}

	leaderboardSubmitHandler(){
		if(!Utils.isEmpty(leaderboardNameInput)){
			let name = leaderboardNameInput.value;
			this.submitInputHandler(name);
		}
	}
	startClickHandler() {
		this.clickSound.play();
		Utils.hideElement(inputField);
		Utils.changeState(this.game, 'Play');
	}
}