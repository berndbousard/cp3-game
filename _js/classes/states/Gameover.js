import BackgroundCity from '../objects/BackgroundCity';
import MenuBackground from '../objects/MenuBackground';
import Sound from '../objects/Sound';
import Text from '../objects/Text';
import * as Utils from '../objects/Utils';
import Data from '../objects/Data';

let form;
let leaderboardNameInput;
let leaderboardSubmit;
let leaderboard;

export default class Gameover extends Phaser.State {
	preload(){
		// console.log('start gameover');
	}
	
	create(){

		// sound
		this.soundSetup();

		this.createForm();
		this.initDom();

		this.initListeners();
		this.initImages();
		this.initButtons();
		this.initText();
	}

	update(){
	}

	shutdown(){
		// console.log('end gameover');
		leaderboard.remove();
		this.game.input.enabled = true;
	}

	createForm(){

		form = document.createElement('form');
		form.setAttribute('method', 'POST');
		form.setAttribute('action', 'http://student.howest.be/bernd.bousard/20152016/CPIII/CITYFLIP/index.php?page=postScores');
		form.id = 'form';

		let formNameInput = document.createElement('input');
		formNameInput.setAttribute('type', 'text');
		formNameInput.setAttribute('name', 'name');
		formNameInput.setAttribute('placeholder', 'Uw naam');
		formNameInput.setAttribute('maxlength', '10');
		formNameInput.id = 'text';

		let formScoreInput = document.createElement('input');
		formScoreInput.setAttribute('type', 'text');
		formScoreInput.setAttribute('name', 'score');
		formScoreInput.setAttribute('value', Data.coins);
		formScoreInput.id = 'scoreInput';
		formScoreInput.classList.add('hide');

		let formDistanceInput = document.createElement('input');
		formDistanceInput.setAttribute('type', 'text');
		formDistanceInput.setAttribute('name', 'distance');
		formDistanceInput.setAttribute('value', Data.distance);
		formDistanceInput.id = 'distanceInput';
		formDistanceInput.classList.add('hide');

		let formSubmit = document.createElement('input');
		formSubmit.setAttribute('type', 'submit');
		formSubmit.setAttribute('name', 'action');
		formSubmit.setAttribute('value', 'post-score');
		formSubmit.id = 'submit';

		form.appendChild(formNameInput);
		form.appendChild(formScoreInput);
		form.appendChild(formDistanceInput);
		form.appendChild(formSubmit);

		document.querySelector('body').appendChild(form);
		Utils.showElement(form);
	}

	submitInputHandler(){
		this.clickSound.play();
		let req = new XMLHttpRequest();
		req.addEventListener('load', () => {
			if(req.status === 200){
				Utils.hideElement(form);
				this.resetStats();
				Utils.changeState(this.game, 'Leaderboard');
			}else{
				alert('Er is een fout gebeurd, probeer het later nog eens.');
			}
		});
		let url = `${form.getAttribute('action')}&t=${Date.now()}`;
		req.open('post', url, true);
		req.setRequestHeader('X_REQUESTED_WITH', 'xmlhttprequest');
		req.send(new FormData(form));
	}

	leaderboardSubmitHandler(){
		if(!Utils.isEmpty(leaderboardNameInput)){
			// let name = leaderboardNameInput.value;
			this.submitInputHandler();
		}
	}

	startClickHandler() {
		this.clickSound.play();
		Utils.hideElement(form);
		this.resetStats();
		Utils.changeState(this.game, 'Play');
	}

	backClickHandler() {
		this.clickSound.play();
		this.resetStats();
		Utils.changeState(this.game, 'Menu');
	}

	resetStats(){
		Data.distance = 0;
		Data.bullets = 0;
		Data.kills = 0;
		Data.meteor = 0;
	}

	soundSetup(){
		// music
		this.clickSound = new Sound(this.game, 'click');
	}

	initListeners(){
		leaderboard.addEventListener('submit', (event) => {
			event.preventDefault();
			this.leaderboardSubmitHandler();
		});

		leaderboardSubmit.addEventListener('submit', (event) => {
			event.preventDefault();
			this.leaderboardSubmitHandler();
		});

		// om de spatie en m toets te laten werken in HTML input
		leaderboardNameInput.addEventListener('focus', () => {
			this.game.input.enabled = false;
		});

		leaderboardNameInput.addEventListener('blur', () => {
			this.game.input.enabled = true;
		});
	}

	initImages(){
		this.city = new BackgroundCity(this.game, 0, 0, 750, 500, 'city');
		this.game.add.existing(this.city);

		this.menuBackground = new MenuBackground(this.game, this.game.width/2, this.game.height/2);
		this.game.add.existing(this.menuBackground);
	}

	initButtons(){
		this.startButton = this.game.add.button(this.game.width/2,this.game.height/2 + 150,'startButton',this.startClickHandler,this);
		Utils.center(this.startButton);

		this.backButton = this.game.add.button(this.game.width/2 - 75, this.game.height/2 + 150, 'backButton', this.backClickHandler, this);
		Utils.center(this.backButton);
	}

	initText(){
		this.visibleScore = new Text(this.game, this.game.width/2 - 50, 200, 'gamefont', 'Your score\n' + Data.coins, 20, 'center');
		this.game.add.existing(this.visibleScore);
		this.visibleDistance = new Text(this.game, this.game.width/2 + 80, 200, 'gamefont', 'You ran\n' + Data.distance + ' km', 20, 'center');
		this.game.add.existing(this.visibleDistance);
	}

	initDom(){
		leaderboardNameInput = document.getElementById('text');
		leaderboardSubmit = document.getElementById('submit');
		leaderboard = document.getElementById('form');
	}
}