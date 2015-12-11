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
	}
	flipDown(){
		this.body.y = this.game.height/2 +2;
		this.scale.y = -1;
	}
	flipUp(){
		this.body.y = (this.game.height/2) - 62;
		this.scale.y = 1;
	}
}