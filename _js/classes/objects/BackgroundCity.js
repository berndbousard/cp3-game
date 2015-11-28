export default class BackgroundCity {

	// geen extends Phaser.Sprite ofzo want we willen meerdere images in een object.
	// kan dit wel?

	constructor(){
		// Images
		this.backgroundBlack = this.game.add.tileSprite(0, 0, 750, 250, 'cityBlack');
		this.backgroundBlack.autoScroll(-50, 0);

		this.backgroundWhite = this.game.add.tileSprite(0, 500, 750, 250, 'cityWhite');
		this.backgroundWhite.autoScroll(-50, 0);
		this.backgroundWhite.scale.y *= -1; /* flip onderste stuk */

		this.menuBackground = this.game.add.sprite(this.game.width/2, this.game.height/2, 'menuBackground');
		this.menuBackground.anchor.setTo(.5, .5);
	}
}