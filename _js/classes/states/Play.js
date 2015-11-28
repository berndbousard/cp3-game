// import Class from '../Class';
import Player from '../objects/Player';

export default class Play extends Phaser.State {
	preload(){
		console.log('start play');
	}
	create(){
		// Images
		this.backgroundWhite = this.game.add.tileSprite(0, 0, 750, 500, 'cityWhite');
		this.backgroundBlack = this.game.add.tileSprite(0, 500, 750, 500, 'cityBlack');
		this.backgroundWhite.autoScroll(-50, 0);
		this.backgroundBlack.autoScroll(-50, 0);

		// Flip de background
		this.backgroundBlack.scale.y *= -1;

		// player
		this.player = new Player(this.game, 50, 450);
		this.game.add.existing(this.player);
	}
	update(){
		
	}
	shutdown(){
		console.log('end play');	
	}
}