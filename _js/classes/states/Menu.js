import Button from '../objects/Button';
import BackgroundCity from '../objects/BackgroundCity';
import MenuBackground from '../objects/MenuBackground';
import Sound from '../objects/Sound';
import Text from '../objects/Text';
import * as Utils from '../objects/Utils';


export default class Menu extends Phaser.State {
	preload(){
		console.log("start menu");
	}
	create(){
		// music
		this.clickSound = new Sound(this.game, 'click');

		// Images
		this.city = new BackgroundCity(this.game, 0, 0, 750, 500, 'city');
		this.game.add.existing(this.city);

		this.menuBackground = new MenuBackground(this.game, this.game.width/2, this.game.height/2);
		this.game.add.existing(this.menuBackground);

		this.playerImg = this.game.add.sprite(this.game.width/2, this.game.height/2-90, 'player_menu');
		Utils.center(this.playerImg);

		let title = "CITYFLIP";
		this.titleBox = new Text(this.game, this.game.width/2+5, this.game.height/2-22, 'gamefont', title, 60);
		Utils.center(this.titleBox);
		this.game.add.existing(this.titleBox);

		// Buttons
		this.startButton = this.game.add.button(
			this.game.width/2, this.game.height/2 + 150, 'startButton', this.startClickHandler, this
		);
		Utils.center(this.startButton);

		this.leaderboardButton = this.game.add.button(
			this.game.width/2 - 100, this.game.height/2 + 150, 'leaderboardButton', this.leaderboardClickHandler, this
		);
		Utils.center(this.leaderboardButton);

		this.infoButton = this.game.add.button(
			this.game.width/2 + 100, this.game.height/2 + 150, 'infoButton', this.infoClickHandler, this
		);
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
		this.clickSound.play();
		Utils.changeState(this.game, 'Play');
	}
	leaderboardClickHandler() {
		this.clickSound.play();
		Utils.changeState(this.game, 'Leaderboard');
	}
	infoClickHandler() {
		this.clickSound.play();
		Utils.changeState(this.game, 'Info');
	}
}