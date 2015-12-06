export default class Enemy extends Phaser.Sprite {
	constructor(game, x, y, color){
		super(game, x, y, color);

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

		// standaard 1, tenzij anders meegegeven in Play state
		this.lives = 1;

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