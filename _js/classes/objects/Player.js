import Bullet from '../objects/Bullet';

export default class Player extends Phaser.Sprite {
	constructor(game, x, y, flipSound){
		super(game, x, y, 'player_black');

		// collide
		this.game.physics.arcade.enableBody(this);
		this.body.immovable = true;
		this.body.allowGravity = false;

		// sound
		this.flipSound = flipSound;

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
		if(this.body.position.y === (this.game.height/2) - 43){
			this.loadTexture('player_white', null, false);
			this.body.y = this.game.height/2;
			this.flipSound.play();
		}
	}
	flipUp(){
		// console.log('player staat nu boven');
		if(this.body.position.y === this.game.height/2){
			this.loadTexture('player_black', null, false);
			this.body.y = (this.game.height/2) - 43;
			this.flipSound.play();
		}
		
	}
	shoot(game, bullets){
		if(this.enoughBullets(bullets)){
			let bullet = new Bullet(game, this.body.x, this.body.y);
			game.add.existing(bullet);
		}
	}
	enoughBullets(bullets){
		return bullets > 0;
	}
}