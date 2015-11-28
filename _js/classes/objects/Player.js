export default class Player extends Phaser.Sprite {
	constructor(game, x, y){
		super(game, x, y, 'player_white');
		this.animations.add('run');
		this.animations.play('run', 20, true);
	}
}