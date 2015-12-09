import Enemy from '../objects/Enemy';

export default class EnemyBlack extends Enemy {
	constructor(game, x, y){
		super(game, x, y, 'enemy_black');

		// pooling
		this.exists = true;

		this.game.physics.arcade.enable(this);

		this.lives = 1;
	}
}