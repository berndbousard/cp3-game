import Enemy from '../objects/Enemy';

export default class EnemyWhite extends Enemy {
	constructor(game, x, y){
		super(game, x, y, 'enemy_white');
	
		// pooling
		this.exists = true;

		this.game.physics.arcade.enable(this);

		this.scale.y = -1;
		this.lives = 1;
	}
}