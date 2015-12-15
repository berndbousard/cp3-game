export default class Bullet extends Phaser.Sprite {
	constructor(game, x, y){
		// new Group(game, parent, name, addToStage, enableBody, physicsBodyType)
		super(game, x, y, 'bullet');

		this.anchor.setTo(.5, .5);

		this.game.physics.arcade.enableBody(this);
		this.body.allowGravity = false;
		this.body.immovable = true;

		this.exists = true;
	}
	update(){
		if(this.position.x > this.game.width){
			this.exists = false;
		}
		this.body.velocity.x = 200;
	}
}