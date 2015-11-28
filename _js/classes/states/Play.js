import Player from '../objects/Player';
import BackgroundCity from '../objects/BackgroundCity';

export default class Play extends Phaser.State {
	preload(){
		console.log('start play');
	}
	create(){

		// Declarations
		this.keyArray = [];


		// Images
		this.cityBlack = new BackgroundCity(this.game, 0, 0, 750, 250, 'cityBlack');
		this.game.add.existing(this.cityBlack);
		this.cityBlack.autoScroll(-120,0);

		this.cityWhite = new BackgroundCity(this.game, 0, 500, 750, 250, 'cityWhite');
		this.game.add.existing(this.cityWhite);
		this.cityWhite.autoScroll(-120,0);

		this.cityWhite.scale.y *= -1; /* flip onderste stuk */


		// Player
		this.playerBlack = new Player(this.game, 50, this.game.height/2 - 23, 'player_black');
		this.game.add.existing(this.playerBlack);
		this.playerBlack.anchor.setTo(.5, .5);

		this.playerWhite = new Player(this.game, -1000, this.game.height/2 + 23, 'player_white');
		this.game.add.existing(this.playerWhite);
		this.playerWhite.anchor.setTo(.5, .5);

		this.playerWhite.scale.y *= -1; /* flip onderste stuk */


		// Set keys
		this.keyArray[0] = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
		this.keyArray[1] = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);

	}
	update(){

		if(this.keyArray[0].isDown){ // up

			this.playerBlack.x = 50;
			this.playerWhite.x = -1000;
		}

		if(this.keyArray[1].isDown){ // down

			this.playerWhite.x = 50;
			this.playerBlack.x = -1000;
		}

	}
	shutdown(){
		console.log('end play');
	}
}