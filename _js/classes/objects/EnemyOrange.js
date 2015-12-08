import EnemyTest from '../objects/EnemyTest';

export default class EnemyOrange extends EnemyTest {
	constructor(game, x, y){
		super(game, x, y, 'enemy_orange');
	
		// pooling
		this.exists = true;

		this.game.physics.arcade.enable(this);

		this.lives = 1;
	}
}