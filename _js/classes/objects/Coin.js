export default class Coin extends Phaser.Sprite {
	constructor(game, x, y){
		super(game, x, y, 'coin');
		this.game.physics.arcade.enableBody(this);
		this.anchor.setTo(.5, .5);

		let amplitude = 200;

		this.position.y = this.game.height/2 - amplitude;
		this.body.velocity.x = -150;

		// Phaser.Tween.to(properties(moet object zijn), duration, ease, autoStart, delay, repeat, yoyo) : Phaser.Tween;
		this.game.add.tween(this).to({y: this.game.height/2 + amplitude}, 5000, Phaser.Easing.Linear.In, true, 0, 1000, true);

		this.exists = true;
	}
	update(){
		this.game.debug.body(this);
		if(this.body.position.x < 0 - this.width){
			this.exists = false;
		}
	}
}