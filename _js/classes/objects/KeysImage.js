export default class KeysImage extends Phaser.Sprite {
	constructor(game, x, y){
		super(game, x, y, 'keysImg');

		// animation
		this.animations.add('run');
		this.animations.play('run', 5, true);
	}
}