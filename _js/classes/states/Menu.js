import Button from '../objects/Button';
import BackgroundCity from '../objects/BackgroundCity';
import MenuBackground from '../objects/MenuBackground';


export default class Menu extends Phaser.State {
	preload(){
		console.log("start menu");
	}
	create(){
		
		// Images
		this.city = new BackgroundCity(this.game, 0, 0, 750, 500, 'city');
		this.game.add.existing(this.city);

		this.menuBackground = new MenuBackground(this.game, this.game.width/2, this.game.height/2);
		this.game.add.existing(this.menuBackground);
		

		// Buttons
		this.startButton = this.game.add.button(this.game.width/2,
												this.game.height/2 + 150,
												'startButton',
												this.startClickHandler,
												this);
		this.startButton.anchor.setTo(0.5,0.5);

		this.leaderboardButton = this.game.add.button(	this.game.width/2 - 100,
														this.game.height/2 + 150,
														'leaderboardbutton',
														this.leaderboardClickHandler,
														this);
		this.leaderboardButton.anchor.setTo(0.5,0.5);

		this.infoButton = this.game.add.button(	this.game.width/2 + 100,
												this.game.height/2 + 150,
												'infoButton',
												this.infoClickHandler,
												this);
		this.infoButton.anchor.setTo(0.5,0.5);

		// new Button(game, x, y, key, callback, callbackContext)
		// this.startButtonTest = new Button(this.game, this.game.width/2 + 100, this.game.height/2 + 150, 'startButton', Button.startClickHandler, Button);
		// this.game.add.existing(this.startButtonTest);
	}
	update(){
		
	}
	shutdown(){
		console.log("end menu");
	}
	startClickHandler() {
		this.game.state.start('Play');
	}
	leaderboardClickHandler() {
		this.game.state.start('Leaderboard');
	}
	infoClickHandler() {
		this.game.state.start('Info');
	}
}