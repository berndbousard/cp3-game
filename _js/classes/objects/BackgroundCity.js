export default class BackgroundCity extends Phaser.TileSprite {
	constructor(game, x, y, width, height, key){
		super(game, x, y, width, height, key);
		this.autoScroll(-100, 0);
	}
}