export default class Text extends Phaser.BitmapText {
	constructor(game, x, y, font, text, size, align){
		super(game, x, y, font, text, size, align);
		this.anchor.setTo(.5, .5);
		this.tint = 0xFFFFFF;
	}
}