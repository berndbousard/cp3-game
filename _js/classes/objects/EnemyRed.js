import EnemyTest from '../objects/EnemyTest';

export default class EnemyRed extends EnemyTest {
	constructor(game, x, y){
		super(game, x, y, 'enemy_red');
	
		// pooling
		this.exists = true;

		this.game.physics.arcade.enable(this);

		this.lives = 2;
	}
}