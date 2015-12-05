export default class Boss extends Phaser.Sprite {
	constructor(game, x, y, color, size){
		let key = "enemy_red";
		super(game, x, y, key);
		this.anchor.setTo(.5, .5);

		// collide
		this.game.physics.arcade.enable(this);
		this.immovable = true;
		this.allowGravity = false;
	
		// pooling
		this.exists = true;

		// animation
		this.animations.add('walk');
		this.animations.play('walk', 8, true);

		// movement
		this.body.velocity.x = -250;

		this.body.y = this.game.height/2 - 10;

		this.lives = 4;

		this.immovable = true;
	}
	update(){
		this.game.debug.body(this);
		if(this.body.position.x < 0 - this.width){
			this.exists = false;
		}
	}
	flipDown(){
		this.body.y = this.game.height/2;
		this.scale.y = -1;
	}
	flipUp(){
		this.body.y = (this.game.height/2) - 60;
		this.scale.y = 1;
	}
}