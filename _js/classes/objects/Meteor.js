export default class Meteor extends Phaser.Sprite {
	constructor(game, x, y){
		super(game, x, y, 'meteor');

		this.game.physics.arcade.enableBody(this);
		this.body.immovable = true;
		this.body.allowGravity = false;

		this.animations.add('fall');
		this.animations.play('fall', 10, true);

		this.exists = true;
	}
	update(){
		if(this.position.y > this.game.height + this.height){
			this.exists = false;
		}
		this.body.velocity.y = 100;
	}
}