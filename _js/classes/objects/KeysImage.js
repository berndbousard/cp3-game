export default class KeysImage extends Phaser.Sprite {
	constructor(game, x, y, key){
		super(game, x, y, key);

		// animation
		this.animations.add('press');
		this.animations.play('press', 5, true);
	}
}