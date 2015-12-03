import BackgroundCity from '../objects/BackgroundCity';
import MenuBackground from '../objects/MenuBackground';

let leaderboardTabel;
let confirm;

export default class Leaderboard extends Phaser.State {
	preload(){
		console.log('start leaderboard');
	}
	create(){

		// Show/hide DOM elements
		leaderboardTabel = document.getElementById("table");
		confirm = document.querySelector('.confirm');
		leaderboardTabel.style.visibility = "visible";

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
			this.game.width/2,this.game.height/2 + 150,'startButton', this.startClickHandler,this);
		this.startButton.anchor.setTo(0.5,0.5);
	}
	update(){
	}
	shutdown(){
		console.log('end leaderboard');
		leaderboardTabel.style.visibility = "hidden";
		this.hideElement(confirm);
	}
	startClickHandler() {
		this.game.state.start('Play');
	}
	hideElement(el){
		el.style.visibility = 'hidden';
	}
}