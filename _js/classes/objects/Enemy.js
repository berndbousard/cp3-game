export default class Enemy extends Phaser.Sprite {
	constructor(game, x, y, key){
		super(game, x, y, key);

		this.anchor.setTo(.5, .5);

		// collide
		this.game.physics.arcade.enable(this);
		this.immovable = true;
		this.allowGravity = false;

		// animation
		this.animations.add('walk');
		this.animations.play('walk', 8, true);
	}
	update(){
		this.game.debug.body(this);
		if(this.position.x < -this.width){
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