export default class MenuBackground extends Phaser.Sprite {
	constructor(game, x, y){
		super(game, x, y, 'menuBackground');
		this.anchor.setTo(.5, .5);
	}
}