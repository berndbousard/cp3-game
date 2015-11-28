import Player from '../objects/Player';

export default class Play extends Phaser.State {
	preload(){
		console.log('start play');
	}
	create(){
		// Images
		this.backgroundBlack = this.game.add.tileSprite(0, 0, 750, 250, 'cityBlack');
		this.backgroundBlack.autoScroll(-50, 0);

		this.backgroundWhite = this.game.add.tileSprite(0, 500, 750, 250, 'cityWhite');
		this.backgroundWhite.autoScroll(-50, 0);
		this.backgroundWhite.scale.y *= -1; /* flip onderste stuk */

		// player
		this.player = new Player(this.game, 50, 450);
		this.game.add.existing(this.player);
	}
	update(){
		
	}
	shutdown(){
		console.log('end play');
		// kan ook destroyen enzo voor geheugenoptimalisatie
	}
}