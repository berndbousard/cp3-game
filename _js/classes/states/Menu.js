import Button from '../objects/Button';
import BackgroundCity from '../objects/BackgroundCity';
import MenuBackground from '../objects/MenuBackground';
import * as Utils from '../objects/Utils';


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
		Utils.center(this.startButton);

		this.leaderboardButton = this.game.add.button(	this.game.width/2 - 100,
														this.game.height/2 + 150,
														'leaderboardbutton',
														this.leaderboardClickHandler,
														this);
		Utils.center(this.leaderboardButton);

		this.infoButton = this.game.add.button(	this.game.width/2 + 100,
												this.game.height/2 + 150,
												'infoButton',
												this.infoClickHandler,
												this);
		Utils.center(this.infoButton);

		// game, x, y, font, text, size, align
		//this.logo = new Text(this.game, this.game.width/2, this.game.height/2, 'gamefont', 'CityFlip', 50, 'center');;
		//this.game.add.existing(this.logo);

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
		Utils.changeState(this.game, 'Play');
	}
	leaderboardClickHandler() {
		Utils.changeState(this.game, 'Leaderboard');
	}
	infoClickHandler() {
		Utils.changeState(this.game, 'Info');
	}
}