export default class Enemy extends Phaser.Sprite {
	constructor(game, x, y, color){
		let key;
		if(color == 'black'){
			key = 'enemy_black';
		}else if(color == 'white'){
			key = 'enemy_white';
		}
		super(game, x, y, key);
		this.anchor.setTo(.5, .5);

		// collide
		this.game.physics.arcade.enableBody(this);
	
		// pooling
		this.exists = true;

		// animation
		this.animations.add('walk');
		this.animations.play('walk', 5, true);

		// movement
		this.body.velocity.x = -250;
	}
	update(){
		this.game.debug.body(this);
	}
}