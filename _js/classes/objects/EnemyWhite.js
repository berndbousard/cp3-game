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
	update(){
		this.body.velocity.x = -200;
		if(this.position.x < -this.width){
			this.exists = false;
		}
	}
}