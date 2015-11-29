export default class Text extends Phaser.BitmapText {
	constructor(game, x, y, font, text, size){
		super(game, x, y, font, text, size);
		this.anchor.setTo(.5, .5);
	}
}