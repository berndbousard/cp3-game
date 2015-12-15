import * as Utils from '../objects/Utils';

export default class Explosion extends Phaser.Sprite {
	constructor(game, x, y){
		super(game, x, y, 'explosion');

		this.animations.add('explode');
		this.animations.play('explode', 40, false, true);

		Utils.center(this);

		this.exists = true;
	}
	update(){
		if(this.animations.currentFrame.index === 6){
			// this.destroy();
			this.exists = false;
		}
	}

	resetAnimation(){
		this.animations.currentFrame.index = 0;
	}
}