import Bullet from '../objects/Bullet';

export default class BulletGroup extends Phaser.Group {
	constructor(game, parent, x, y){
		super(game, parent);

		this.bullet = new Bullet(this.game, 0, 0);
		this.bullet.anchor.setTo(.5, .5);
		this.add(this.bullet);

		this.setAll('body.velocity.x', 200);

		this.exists = true;
	}
	update(){
		this.game.debug.body(this);
	}

	reset(x, y){
		this.bullet.position.x = x;
		this.bullet.position.y = y;

		this.x = x;
		this.y = y;
		this.exists = true;
	}
}