export default class Player extends Phaser.Sprite {
	constructor(game, x, y, key){
		super(game, x, y, key);

		// collide
		this.game.physics.arcade.enableBody(this);

		// animation
		this.animations.add('run');
		this.animations.play('run', 20, true);


	}
}