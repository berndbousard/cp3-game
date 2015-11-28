export default class Player extends Phaser.Sprite {
	constructor(game, x, y, key){
		super(game, x, y, key);
		this.animations.add('run');
		this.animations.play('run', 20, true);
	}
}