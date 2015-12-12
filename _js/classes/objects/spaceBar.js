export default class spaceBar extends Phaser.Sprite {
	constructor(game, x, y){
		super(game, x, y, 'spaceBar');

		// animation
		this.animations.add('press');
		this.animations.play('press', 8, true);
	}
}