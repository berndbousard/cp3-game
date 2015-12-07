import EnemyTest from '../objects/EnemyTest';

export default class EnemyBlack extends EnemyTest {
	constructor(game, x, y){
		super(game, x, y, 'enemy_black');
	
		// pooling
		this.exists = true;

		this.game.physics.arcade.enable(this);

		this.lives = 1;
		this.body.velocity.x = -250;
	}
}