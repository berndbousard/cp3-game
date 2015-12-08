import EnemyTest from '../objects/EnemyTest';

export default class EnemyWhite extends EnemyTest {
	constructor(game, x, y){
		super(game, x, y, 'enemy_white');
	
		// pooling
		this.exists = true;

		this.game.physics.arcade.enable(this);

		this.position.y = 275;
		this.scale.y = -1;
		this.lives = 1;
	}
}