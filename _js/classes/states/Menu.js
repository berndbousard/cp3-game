import Button from '../objects/Button';
// import BackgroundCity from '../objects/BackgroundCity';

export default class Menu extends Phaser.State {
	preload(){
		console.log("start menu");
	}
	create(){
		
		// Images
		this.backgroundBlack = this.game.add.tileSprite(0, 0, 750, 250, 'cityBlack');
		this.backgroundBlack.autoScroll(-50, 0);

		this.backgroundWhite = this.game.add.tileSprite(0, 500, 750, 250, 'cityWhite');
		this.backgroundWhite.autoScroll(-50, 0);
		this.backgroundWhite.scale.y *= -1; /* flip onderste stuk */

		this.menuBackground = this.game.add.sprite(this.game.width/2, this.game.height/2, 'menuBackground');
		this.menuBackground.anchor.setTo(.5, .5);

		// Buttons
		this.startButton = this.game.add.button(
			this.game.width/2, this.game.height/2 + 150, 'startButton', this.startClickHandler, this
		);
		this.startButton.anchor.setTo(0.5,0.5);
		this.leaderboardButton = this.game.add.button(
			this.game.width/2 - 100, this.game.height/2 + 150, 'leaderboardbutton', this.leaderboardClickHandler, this
		);
		this.leaderboardButton.anchor.setTo(0.5,0.5);
		this.infoButton = this.game.add.button(
			this.game.width/2 + 100, this.game.height/2 + 150, 'infoButton', this.infoClickHandler, this
		);
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