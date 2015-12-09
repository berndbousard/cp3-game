import Enemy from '../objects/Enemy';

export default class EnemyRed extends Enemy {
	constructor(game, x, y){
		super(game, x, y, 'enemy_red');
	
		// pooling
		this.exists = true;

		this.game.physics.arcade.enable(this);

		this.lives = 2;
	}
}