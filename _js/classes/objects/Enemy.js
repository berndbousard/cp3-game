export default class Enemy extends Phaser.Sprite {
	constructor(game, x, y, color, size){
		let key;
		if(color == 'black'){
			key = 'enemy_black';
		}else if(color == 'white'){
			key = 'enemy_white';
		}
		super(game, x, y, key);
		this.anchor.setTo(.5, .5);

		// collide
		this.game.physics.arcade.enable(this);
		this.immovable = true;
		this.allowGravity = false;
		console.log(this.body);
	
		// pooling
		this.exists = true;

		// animation
		this.animations.add('walk');
		this.animations.play('walk', 8, true);

		// movement
		this.body.velocity.x = -250;

		this.lives = 1;

		this.immovable = true;
	}
	update(){
		this.game.debug.body(this);
		if(this.body.position.x < 0 - this.width){
			this.exists = false;
		}
	}
}