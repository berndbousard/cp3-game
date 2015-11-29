export default class TestPlayer extends Phaser.Sprite {
	constructor(game, x, y){
		super(game, x, y, 'player_black');

		// collide
		this.game.physics.arcade.enableBody(this);
		this.body.immovable = true;
		this.body.allowGravity = false;

		// animation
		this.animations.add('run');
		this.animations.play('run', 20, true);
	}
	update(){
		// om de hitbox te zien
		this.game.debug.body(this);
	}

	flipDown(){
		// console.log('player staat nu beneden');
		// http://phaser.io/examples/v2/animation/change-texture-on-click
		// Phaser.Sprite.loadTexture(key, frame, stopAnimation) : void;
		this.loadTexture('player_white', null, false);
		if(this.body.position.y < this.game.height/2){
			this.body.y += 45;
		}
	}
	flipUp(){
		// console.log('player staat nu boven');
		this.loadTexture('player_black', null, false);
		if(this.body.position.y > this.game.height/2){
			this.body.y -= 45;
		}
	}
}